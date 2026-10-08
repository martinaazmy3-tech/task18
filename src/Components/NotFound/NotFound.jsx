import React from 'react' 
import errorImage from '../../assets/404.png' 
 
export default function NotFound() { 
    return ( 
        <div className='container text-center mx-auto'> 
            <img 
                src={errorImage} 
                alt="Not Found Image" 
                style={{ width: "300px", height: "auto" }} 
            /> 
        </div> 
    ) 
} 