import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import UsersContext from "../../contexts/UsersContext";
const Login = () => {
    const navigate=useNavigate();
    const [failedIn,setFailedIn]=useState(false);
    const {loggedIn,setLoggedIn,users,setCurrentUser}=useContext(UsersContext);
//    console.log('users: ', users);
    const fSubmit=(e)=>{
        e.preventDefault();
//        console.log('e: ', e);
        users.map(el=>{
            //console.log('el: ', el);
            if(e.target.elements.user.value===el.userName && e.target.elements.password.value===el.password){
                setCurrentUser(el);
                setLoggedIn(true);
                navigate('/home')
            }else{
                setFailedIn(true);
            };
        });
        

    };
    return ( 
        <main>
            <h1>Prisijunkite:</h1>
            <form onSubmit={(e)=>fSubmit(e)}>
                <div>
                    <label htmlFor="user">Vartotojo vardas:</label>
                    <input 
                        type="email" 
                        name="user" id="user"
                        placeholder="pavyzdys@pavyzdys.com" 
                    />
                </div>
                <div>
                    <label htmlFor="password">Slaptažodis:</label>
                    <input 
                        type="password" 
                        name="password" id="password"
                    />
                </div>
                <input type="submit" value='Prisijungti' />
            </form>
            {
                failedIn&&<h2>Neteisingi kredencialai</h2>
            }
        </main>
     );
}
 
export default Login;