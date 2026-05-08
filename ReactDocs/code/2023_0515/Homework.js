  const checkLogin = async () => {
    const longinData = await axios.get('http://localhost:8090/ecommerce/MemberController/checkLogin', { withCredentials: true }, { timeout: 3000 })
      .then(rs => rs.data)
      .catch(error => { console.log(error); });

    setLonginData(longinData);


    return longinData;
  };
  
  
// 對應 React axios 設置 {withCredentials: true} HttpHeader就能帶有Cookie夾帶JESSIONID 
// Server後端必須設置 Access-Control-Allow-Origin(不能為*)、Access-Control-Allow-Credentials(必須為true)
@CrossOrigin(origins = {"http://localhost:3000","http://localhost:8085"}, allowCredentials = "true")
@RestController
@RequestMapping("/ecommerce/MemberController")
public class MemberController {
	
}