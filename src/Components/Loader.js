import React from 'react'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Load from "react-loader-spinner"
import { useEffect } from 'react'

const Loader = () => {
     let bol = false;
     useEffect(()=> {
         setTimeout(() => {
         bol = true;
            console.log('DOM fully loaded and parsed');
     }, 1500);
})
    
    return (
        <>
        {
            bol ? <div className="black_background not-active"></div>
            : 
            <Load
               type="Puff"
               color="#39b54a"
               height={100}
               width={100}
               timeout={2000} 
               className="black_background"//3 secs
            /> 
        }
       </>
    )
}

export default Loader
