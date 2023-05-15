import { createContext,useState,useEffect} from "react";

const UsersContext= createContext();

const UsersProvider = ({children}) => {
    const [loggedIn,setLoggedIn]=useState(false);
    const [users,setUsers]=useState([]);
    const [currentUser,setCurrentUser]=useState(null);

    useEffect(()=>{
        fetch(`http://localhost:7777/users`)
            .then(res=>res.json())
            .then(data=>setUsers(data))
    },[]);
    return ( 
        <UsersContext.Provider
        value={{
            users,
            setUsers,
            loggedIn,
            setLoggedIn,
            currentUser,
            setCurrentUser
        }}>
            {children}
        </UsersContext.Provider>
     );
}
export {UsersProvider};
export default UsersContext;