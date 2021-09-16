import React, {createContext, useState, useEffect} from 'react'
import { ProductAPI } from './API/productAPI'

import UserAPI from './API/userAPI'


export const GlobalState = createContext()

export const DataProvider = ({children}) =>{
    const [token, setToken] = useState(false)
    const [callback, setCallback] = useState(false)

    useEffect(() =>{
        const firstLogin = localStorage.getItem('token')
        if(firstLogin){
            setToken(firstLogin)
        }
                
    },[])

    const state ={
        token: [token, setToken],
        callback: [callback, setCallback],
        userAPI: UserAPI(token),
        productAPI: ProductAPI(),
    }


    return(
        <GlobalState.Provider value={state}>
            {children}
        </GlobalState.Provider>
    )
}