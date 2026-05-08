window.onload = function () {
	let username = null;
    //獲取DOM元件
    var loginBtn = document.getElementById("loginBtn");
	var status = document.getElementById("status");
	var sendBtn = document.getElementById("sendBtn");
    var userNameInput = document.getElementById("userNameInput");
    var infoWindow = document.getElementById("infoWindow");
    var userinput = document.getElementById("userinput");
    //var chatRoomForm = document.getElementById("chatRoomForm1");
    var messageDisplay = document.getElementById("messageDisplay");
	var chatContainer = document.getElementById("chatContainer");
    var webSocket;
    var isConnectSuccess = false;
	
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

 
    //設置登入鈕的動作，沒有登出，登入才可發言
    loginBtn.addEventListener("click", function () {
        //檢查有無輸入名稱
        if (userNameInput.value && userNameInput.value !== "") {
			username = userNameInput.value;
			chatContainer.style.display = 'block';
            setWebSocket();  //設置WebSocket連接
        } else {
            infoWindow.innerHTML = "請輸入名稱";
        }
 
    });
    //Submit Form時送出訊息
    sendBtn.addEventListener("click", function (e) {
		e.preventDefault();
		chatContainer.style.display= 'block';
        sendMessage();
        return false;
    });
    //使用webSocket擁有的function, send(), 送出訊息
    function sendMessage() {
        //檢查WebSocket連接狀態		
        if (webSocket && isConnectSuccess) {
            var messageInfo = {
                userName: userNameInput.value,
                message: userinput.value
            }
			chatMessage = {
			    sender: userNameInput.value,
			    content: userinput.value,
			    type: 'CHAT'
			};
			console.log(chatMessage)	;		
            webSocket.send(JSON.stringify(messageInfo));
        } else {
            infoWindow.innerHTML = "未登入";
        }
    }
 
    //設置WebSocket
    function setWebSocket() {
        //開始WebSocket連線
        webSocket = new WebSocket('ws://10.10.2.232:8080/ws/chat');
        //以下開始偵測WebSocket的各種事件
         
        //onerror , 連線錯誤時觸發  
        webSocket.onerror = function (event) {
            loginBtn.disabled = false;
            userNameInput.disabled = false;
            infoWindow.innerHTML = "登入失敗";
        };
 
        //onopen , 連線成功時觸發
        webSocket.onopen = function (event) {
            isConnectSuccess = true;
            loginBtn.disabled = true;
            userNameInput.disabled = true;
            status.innerHTML = "登入成功";
                   
            //送一個登入聊天室的訊息
            var firstLoginInfo = {
                userName : "系統",
                message : userNameInput.value + " 登入了聊天室"
            };
            webSocket.send(JSON.stringify(firstLoginInfo));
        };
 
        //onmessage , 接收到來自Server的訊息時觸發
        webSocket.onmessage = function (event) {
            var messageObject = JSON.parse(event.data);
			console.log("onmessage:"+JSON.stringify(messageObject));
            //messageDisplay.innerHTML += "" + messageObject.userName + " 說 : " + messageObject.message+"<br/>";
			receivedMessage = {
			    sender: messageObject.userName,
			    content: messageObject.message,
			    type: 'CHAT'
			};
			displayMessage(receivedMessage);
        };
    }
};




