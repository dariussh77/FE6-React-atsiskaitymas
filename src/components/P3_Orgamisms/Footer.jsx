import styled from 'styled-components';
const FooterCSS=styled.footer`
    text-align: center;
    margin-top: 20px;
    color: wheat;
    background-color: blue;
    position: fixed;
    bottom: 0px;
    width: 100%;
`;
const Footer = () => {
    return ( 
        <FooterCSS>
            All right reserved @
        </FooterCSS>
     );
}
 
export default Footer;