import { useNavigate } from "react-router-dom";
import { useState,useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';
import { useContext } from "react";
import UsersContext from "../../contexts/UsersContext";
import styled from 'styled-components';
const MainRegCSS=styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    >form{
        padding-right: 150px;
        display: flex;
        flex-direction: column;
        align-items: end;
        width: 500px;
    }
`;

const Register = () => {
    const{setLoggedIn,setCurrentUser,setUsers}=useContext(UsersContext);
    const [failedReg,setFailedReg]=useState(false);
    const navigate=useNavigate();
    const fSubmit=(e)=>{
        e.preventDefault();
//        console.log('e: ', e);        
        if(e.target.elements.password.value===e.target.elements.repassword.value){
            fetch(`http://localhost:7777/users`, {
                            method: "POST", 
                            headers:{
                                "Content-Type":"application/json"
                            },
                            body: JSON.stringify({
                                    id:uuidv4(),
                                    userName:e.target.elements.user.value,
                                    password:e.target.elements.password.value
                                })
                            });
            navigate('/home');
            fetch(`http://localhost:7777/users`)
                .then(res=>res.json())
                .then(data=>setUsers(data));
            setCurrentUser({
                id:uuidv4(),
                userName:e.target.elements.user.value,
                password:e.target.elements.password.value
            });
            setLoggedIn(true);
        }else{
            setFailedReg(true)
        }
    }
    return ( 
        <MainRegCSS>
            <h2>Prisiregistruokite:</h2>
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
                <div>
                    <label htmlFor="repassword">Pakartoti slaptažodį:</label>
                    <input 
                        type="password" 
                        name="repassword" id="repassword"
                    />
                </div>
                <input type="submit" value='Registruotis' />
            </form>
            {
                failedReg&&<h1>Nesutampa slaptažodžiai</h1>
            }
        </MainRegCSS>
     );
}
 
export default Register;