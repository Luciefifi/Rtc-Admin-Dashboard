import React from "react";
import { FaRegTrashCan } from "react-icons/fa6";
import { MdAdd } from "react-icons/md";
import { Link } from "react-router-dom";

export const Inventory = () => {
  return (
    <div className=" flex flex-col w-full h-full p-2">
      <div className="flex flex-row justify-between w-full">
        <label className=" font-semibold text-xl text-brown">
          Inventory List
        </label>
        <div className="flex flex-row gap-1">
          <Link>
            <div className="flex justify-center items-center p-1 border-2 rounded-md border-brown">
              <FaRegTrashCan className="text-brown text-xl" />
            </div>
          </Link>
          <Link>
            <div className="flex justify-center items-center p-1 border-2 rounded-md border-brown">
              <MdAdd className="text-brown text-xl" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
