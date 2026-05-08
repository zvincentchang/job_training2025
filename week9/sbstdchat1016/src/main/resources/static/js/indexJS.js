
       let stompClient = null;
       let username = null;
       let isConnected = false;

       // DOM 元素
       const usernameForm = document.getElementById('usernameForm');
       const chatContainer = document.getElementById('chatContainer');
       const statusDiv = document.getElementById('status');
       const nameInput = document.getElementById('name');
       const connectBtn = document.getElementById('connect');
       const connectedUser = document.getElementById('connectedUser');
       const chatArea = document.getElementById('chatArea');
       const messageForm = document.getElementById('messageForm');
       const messageInput = document.getElementById('messageInput');
       const sendBtn = document.getElementById('sendBtn');

       // 連接WebSocket
       function connect() {
           username = nameInput.value.trim();
           
           if (!username) {
               alert('請輸入用戶名！');
               return;
           }

           updateStatus('connecting', '正在連接中...');
           
           // 建立WebSocket連接
           const socket = new SockJS('/ws');
           stompClient = Stomp.over(socket);
           
           // 設定調試模式（生產環境中應該關閉）
           stompClient.debug = function(str) {
               console.log('STOMP: ' + str);
           };

           stompClient.connect({}, onConnected, onError);
       }

       // 連接成功回調
       function onConnected() {
           isConnected = true;
           updateStatus('connected', '已連接');
           
           // 訂閱公共聊天頻道
           stompClient.subscribe('/topic/public', onMessageReceived);

           // 通知伺服器用戶加入
           stompClient.send("/app/chat.addUser", {}, JSON.stringify({
               sender: username,
               type: 'JOIN'
           }));

           // 切換界面
           usernameForm.style.display = 'none';
           chatContainer.style.display = 'block';
           connectedUser.textContent = username;
           messageInput.focus();
       }

       // 連接錯誤回調
       function onError(error) {
           console.error('WebSocket連接錯誤:', error);
           updateStatus('disconnected', '連接失敗，請重試');
           isConnected = false;
       }

       // 接收訊息回調
       function onMessageReceived(payload) {
           const message = JSON.parse(payload.body);
           displayMessage(message);
       }

       // 發送訊息
       function sendMessage() {
           const messageContent = messageInput.value.trim();
           
           if (!messageContent || !stompClient || !isConnected) {
               return;
           }

           const chatMessage = {
               sender: username,
               content: messageContent,
               type: 'CHAT'
           };

           stompClient.send("/app/chat.sendMessage", {}, JSON.stringify(chatMessage));
           messageInput.value = '';
       }

       // 顯示訊息
       function displayMessage(message) {
           const messageElement = document.createElement('div');
           messageElement.classList.add('message');

           const now = new Date();
           const timeString = now.toLocaleTimeString('zh-TW', { 
               hour: '2-digit', 
               minute: '2-digit' 
           });

           if (message.type === 'JOIN') {
               messageElement.classList.add('join');
               messageElement.innerHTML = `
                   <div>🎉 ${message.sender} 加入了聊天室 
                       <span class="message-time">${timeString}</span>
                   </div>
               `;
           } else if (message.type === 'LEAVE') {
               messageElement.classList.add('leave');
               messageElement.innerHTML = `
                   <div>👋 ${message.sender} 離開了聊天室 
                       <span class="message-time">${timeString}</span>
                   </div>
               `;
           } else {
               if (message.sender === username) {
                   messageElement.classList.add('own');
               } else {
                   messageElement.classList.add('other');
               }
               
               messageElement.innerHTML = `
                   <div class="message-header">
                       ${message.sender}
                       <span class="message-time">${timeString}</span>
                   </div>
                   <div>${escapeHtml(message.content)}</div>
               `;
           }

           chatArea.appendChild(messageElement);
           chatArea.scrollTop = chatArea.scrollHeight;
       }
	// HTML轉義
	function escapeHtml(text) {
	           const div = document.createElement('div');
	           div.textContent = text;
	           return div.innerHTML;
	}

       // 更新連接狀態
       function updateStatus(status, message) {
           statusDiv.className = `status ${status}`;
           statusDiv.textContent = message;
       }

      

       // 斷開連接
       function disconnect() {
           if (stompClient && isConnected) {
               stompClient.disconnect(() => {
                   console.log('已斷開連接');
               });
           }
           isConnected = false;
           updateStatus('disconnected', '已斷開連接');
       }

       // 事件監聽器
       connectBtn.addEventListener('click', connect);
       
       messageForm.addEventListener('submit', function(e) {
           e.preventDefault();
           sendMessage();
       });

       nameInput.addEventListener('keypress', function(e) {
           if (e.key === 'Enter') {
               connect();
           }
       });

       messageInput.addEventListener('keypress', function(e) {
           if (e.key === 'Enter' && !e.shiftKey) {
               e.preventDefault();
               sendMessage();
           }
       });

       // 頁面卸載時斷開連接
       window.addEventListener('beforeunload', disconnect);

       // 初始化
       document.addEventListener('DOMContentLoaded', function() {
           nameInput.focus();
           updateStatus('disconnected', '請輸入用戶名並連接');
       });
