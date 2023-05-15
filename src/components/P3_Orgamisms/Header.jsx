import { NavLink } from "react-router-dom";
import styled from 'styled-components';
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
    return ( 
        <HeaderCSS>
            <img src="https://pbs.twimg.com/profile_images/435931025458593792/OXByHB12_400x400.jpeg" alt="Čia Aš" />
            <ul>
                <li><NavLink to='/'>Login</NavLink></li>
                <li><NavLink to='/register'>Register</NavLink></li>
            </ul>
        </HeaderCSS>
     );
}
 
export default Header;