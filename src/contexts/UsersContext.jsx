import { createContext,useState,useEffect} from "react";

const UsersContext= createContext();

const UsersProvider = ({children}) => {
    const [loginStatus,setLoginStatus]=useState([]);
    const [users,setUsers]=useState([]);
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
            loginStatus,
            setLoginStatus
        }}>
            {children}
        </UsersContext.Provider>
     );
}
export {UsersProvider};
export default UsersContext;