import { useContext } from "react";
import StarsContext from "../../contexts/StarsContext";
import StarCard from "../P2_Molecules/StarCard";
const Home = () => {
    const {stars}=useContext(StarsContext);
    //console.log('stars: ', stars);

    return ( 
        <main>
            <h2>Žvaigždės:</h2>
            <div>
                {
                    stars.map(star=><StarCard
                        key={star.id}
                        star={star}
                    />)
                }
            </div>
        </main>
     );
}
 
export default Home;