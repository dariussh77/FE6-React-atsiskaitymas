import { createContext,useReducer, useEffect } from "react";

const StarsContext=createContext();
const StarsAction={
    get:'get_stars',
    add:'add_star'
};

const reducer=(state,action)=>{
    switch (action.type){
        case StarsAction.get: return action.stars;
        default: return state;
    }
}
const StarsProvider = ({children}) => {
    const [stars,setStars]=useReducer(reducer,[]);
    useEffect(()=>{
        fetch(`http://localhost:7777/stars`)
            .then(res=>res.json())
            .then(data=>setStars({
                type:StarsAction.get,
                stars:data
            }))
    },[]);
    return ( 
        <StarsContext.Provider
        value={{
            stars
        }}>
            {children}
        </StarsContext.Provider>
     );
}
export {StarsProvider};
export default StarsContext;