import React from "react";

export const OrderCard = ({icon,number,text, textColor})=>{
    return(
        <div className="bg-white  p-4 rounded-lg shadow-md m-4 w-full h-full ">
            <div className="mb-2 text-gray-500 text-lg">{icon}</div>
            <div className="text-2xl font-bold text-gray-800 mb-2" >{number}</div>
            <div className={textColor}>{text}</div>
        </div>
    )
}