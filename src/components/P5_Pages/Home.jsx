import { useContext } from "react";
import StarsContext from "../../contexts/StarsContext";
import StarCard from "../P2_Molecules/StarCard";
import UsersContext from "../../contexts/UsersContext";
import styled from 'styled-components';
const MainHomeCSS=styled.main`
    .allStars{
        display: flex;
        flex-wrap: wrap;
        gap: 20px
    }
`;
const Home = () => {
    const {stars}=useContext(StarsContext);
    const {users}=useContext(UsersContext);
    //console.log('stars: ', stars);

    return ( 
        <MainHomeCSS>
            {
                users[0]&&stars[0]?
                    <>
                    <h1>Žvaigždės:</h1>
                    <div className="allStars">
                        {
                            stars.map(star=><StarCard
                                key={star.id}
                                star={star}
                            />)
                        }
                    </div>
                    </>:!stars[0]&&users[0]? <h1>...nėra įrašų</h1>: <h1>...loading</h1>
            }
        </MainHomeCSS>
     );
}
 
export default Home;