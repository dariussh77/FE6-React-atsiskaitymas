import { createContext,useReducer, useEffect,useState } from "react";

const StarsContext=createContext();
const StarsAction={
    get:'get_stars',
    add:'add_star'
};

const reducer=(state,action)=>{
    switch (action.type){
        case StarsAction.get: return action.stars;
        case StarsAction.add: 
            fetch(`http://localhost:7777/stars`, {
                method: "POST", 
                headers:{
                    "Content-Type":"application/json"
                },
                body: JSON.stringify(action.data)
                });
                return [...state, action.data];
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
            }));
    },[]);
    return ( 
        <StarsContext.Provider
        value={{
            stars,
            StarsAction,
            setStars
        }}>
            {children}
        </StarsContext.Provider>
     );
}
export {StarsProvider};
export default StarsContext;