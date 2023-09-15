import { createContext, useContext, useState } from "react"
import { SnackBar } from "../components/SnackBar";

const ToastContext = createContext({})
export const SnackBarProvider = ({children})=>{ 
    const [open,setOpen]=useState(false) ; 
    const [message,setMessage]=useState("") ; 
    function showAndHideToast (message){
        console.log("hello world");
        setOpen(true);
        setMessage(message) ; 
        console.log(open)
        setTimeout(() => {
            setOpen(false) ; 

        }, 10000);
        console.log('etst')
    }
    return (
    <ToastContext.Provider value={{showAndHideToast}} >
        <SnackBar message={message} openFromParent={open}/>
{children}
    </ToastContext.Provider>
   )
}
export const useSnackBar = ()=>{
    return useContext(ToastContext) ; 
}