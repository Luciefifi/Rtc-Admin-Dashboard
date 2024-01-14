import React from "react";
import { BsCartDash } from "react-icons/bs";
export default function Orders() {
 
  return (
    <div className="w-full">
      <div className="flex items-center justify-between  mt-8   px-3 gap-4 rounded-md ">
        <div className="bg-[#2ED47A] w-[25%] h-[150px] rounded-md pl-3  pt-5 ">
          <BsCartDash/>
          <p className="font-bold">123</p>
          <p> Completed orders</p>
          </div>
        <div className="bg-orange-300 w-[25%] h-[150px] rounded-md pl-3  pt-5">
        <BsCartDash/>
          <p className="font-bold">29</p>
          <p>Active orders</p>
          </div>
        <div className="bg-red-300 w-[25%] h-[150px] rounded-md pl-3  pt-5">
        <BsCartDash/>
        <p className="font-bold">130</p>
          <p>Ended</p>
          </div>
        <div className="bg-[#007EF2] w-[25%] h-[150px] rounded-md pl-3 pt-5">
        <BsCartDash/>
        <p className="font-bold">282</p>
          <p>  Total Orders</p>
        
          </div>
      </div>
    </div>
  );
}
