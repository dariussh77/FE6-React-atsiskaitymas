import { NavLink } from "react-router-dom";
import styled from 'styled-components';
import { useContext } from "react";
import UsersContext from "../../contexts/UsersContext";
const HeaderCSS=styled.header`
    display: flex;
    justify-content: space-between;
    background-color: antiquewhite;
    >img{
        height: 50px;
        width: 50px;
        border-radius: 25px;
    };
    >ul{
        list-style: none;
        display: flex;
        gap:20px;
        a{
            text-decoration: none; 
            color: black;
        }
    }
`;
const Header = () => {
    const {currentUser,loggedIn, setCurrentUser,setLoggedIn}=useContext(UsersContext);
    const fLogout=()=>{
        setCurrentUser(null);
        setLoggedIn(false);
    };
    return ( 
        <HeaderCSS>
            <img src="https://pbs.twimg.com/profile_images/435931025458593792/OXByHB12_400x400.jpeg" alt="Čia Aš" />
            {currentUser&&<h4>vartotojas:{currentUser.userName}</h4>}
            {
                !loggedIn
                    ?<ul>
                        <li><NavLink to='/'>Login</NavLink></li>
                        <li><NavLink to='/register'>Register</NavLink></li>
                    </ul>
                    :<ul>
                        <li><NavLink to='/home'>Home</NavLink></li>
                        <li><NavLink to='/add'>Add</NavLink></li>
                        <li><NavLink onClick={()=>fLogout()} to='/'>Logout</NavLink></li>
                    </ul>
            }
        </HeaderCSS>
     );
}
 
export default Header;