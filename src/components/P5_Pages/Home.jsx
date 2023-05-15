import { useContext } from "react";
import StarsContext from "../../contexts/StarsContext";
import StarCard from "../P2_Molecules/StarCard";
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
    //console.log('stars: ', stars);

    return ( 
        <MainHomeCSS>
            {
                stars[0]?
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
                    </>: <h1>...nėra įrašų</h1>
            }
        </MainHomeCSS>
     );
}
 
export default Home;