import {useState, useEffect} from 'react'
   
function UserAPI(token) {
    
    const [isLogged, setIsLogged] = useState(false)
    useEffect(() =>{
        if(token){
            const isLogin = ()=>{
                setIsLogged(true)
            };

            isLogin()
        }else{
            setIsLogged(false)
        }
    }, [token])

            
    return {
        isLogged: [isLogged, setIsLogged],
    }
}
    

export default UserAPI
