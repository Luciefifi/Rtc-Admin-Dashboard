import React from "react";
import { BsCartDash } from "react-icons/bs";
import { IoLockClosed } from "react-icons/io5";
import { RiPassPendingLine } from "react-icons/ri";
import { FcAcceptDatabase } from "react-icons/fc";
import { OrderCard } from "./OrderCard";
import OrderChart from "./OrderChart";
export default function Orders() {

  const colors = {
    deniedOrders: "text-red-700",
    completeOrders: "text-green-500",
    pendingOrders: "text-yellow-500"
  };
  return (
    <div className="w-full overflow-hidden ">
      <div className="flex items-center justify-between  mt-8   px-3 gap-4 rounded-md ">
      <OrderCard  icon={<IoLockClosed/>} number={124} text="Denied Orders" textColor={colors.deniedOrders}/>
      <OrderCard  icon={<RiPassPendingLine/>} number={124} text="Pending Oders" textColor={colors.pendingOrders}/>
      <OrderCard icon={<FcAcceptDatabase/>} number={124} text="Completed Orders" textColor={colors.completeOrders}/>
      <OrderCard icon={<BsCartDash/>} number={124} text="Total Orders"/>
      </div> 
      <OrderChart/>
    </div>
  );
}
