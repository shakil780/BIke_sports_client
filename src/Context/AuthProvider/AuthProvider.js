import { createContext } from "react"
import Usefirebase from "../../Hook/Usefirebase"

 
 export const AuthContext= createContext(null)
  
 const AuthProvider=({children})=>{
    const allcontext= Usefirebase()
     return(
        <AuthContext.Provider value={allcontext}>
          {children}

      </AuthContext.Provider>

      );


 }

 export default AuthProvider