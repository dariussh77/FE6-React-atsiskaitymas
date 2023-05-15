import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import StarsContext from "../../contexts/StarsContext";
import { v4 as uuidv4 } from 'uuid';
const AddStar = () => {
    const navigate=useNavigate();
    const {StarsAction,setStars,stars}=useContext(StarsContext);
    const fHandler=(e)=>{
        e.preventDefault();
        const newStar={
            id:uuidv4(),
            name: e.target.elements.title.value,
            photo:{
                src:e.target.elements.src.value,
                alt:e.target.elements.alt.value
            },
            shortDesc:e.target.elements.shortDesc.value
        };
        //console.log('newStar: ', newStar);
        //console.log('e: ', e);
        setStars({
            type: StarsAction.add,
            data:newStar
        });
        navigate('/home');

        //console.log('stars: ', stars);

    }
    return ( 
        <main>
            <h1>Pridėkite žvaigždę:</h1>
            <form onSubmit={(e)=>fHandler(e)}>
                <div>
                    <label htmlFor="title">Žvaigždės pavadinimas:</label>
                    <input 
                        type="text" 
                        name="title" id="title"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="src">Nuotraukos URL:</label>
                    <input 
                        type="url" 
                        name="src" id="src"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="alt">Nuotraukos aprašymas:</label>
                    <input 
                        type="text" 
                        name="alt" id="alt"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="shortDesc">Žvaidės aprašymas:</label>
                    <textarea name="shortDesc" id="" cols="30" rows="10" required></textarea>
                </div>
                <input type="submit" value='Pridėti' />
            </form>
        </main>
     );
}
 
export default AddStar;