import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { activeLinksActions } from "../redux/slices/activeLinksActive";

export const Orders = () => {
  const activeLink = useSelector((state) => state.activeLinks.active);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(activeLinksActions.setActiveLink("orders"));
    console.log(activeLink);
  }, []);
  return <div>Orders</div>;
};
