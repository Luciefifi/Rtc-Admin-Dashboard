import React from "react";
import { FaRegTrashCan } from "react-icons/fa6";
import { MdAdd } from "react-icons/md";
import { IoSearchOutline } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";

export const Inventory = () => {
  return (
    <div className=" flex flex-col gap-2 divide-y-2 divide-light-blue-400 w-full h-full p-2">
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

      {/* filter */}
      <div className="flex py-4">
        <form className=" flex flex-row gap-4">
          {/* product name */}
          <div className="relative flex gap-1 flex-col">
            <label className=" text-textGrey text-sm font-semibold">
              Product name:
            </label>
            <input
              type="text"
              placeholder="Search"
              className="py-2 pl-10 pr-4 w-44 h-9 text-textGrey border border-gray-300 focus:outline-none focus:border-brown placeholder:text-sm"
            />
            <div className="absolute inset-y-0 top-6 left-0 pl-3 flex items-center pointer-events-none">
              <IoSearchOutline className=" text-gray-300" />
            </div>
          </div>

          {/* manufacturer */}
          <div className="flex gap-1 flex-col">
            <label className=" text-textGrey text-sm font-semibold">
              Manufacturer:
            </label>
            <select className="py-1 px-2 pr-4 w-44 h-9 text-textGrey border border-gray-300 focus:outline-none focus:border-brown placeholder:text-sm">
              <option></option>
            </select>
          </div>

          {/* item number */}
          <div className="relative flex gap-1 flex-col">
            <label className=" text-textGrey text-sm font-semibold">
              Item number:
            </label>
            <input
              type="text"
              placeholder="Search"
              className="py-2 pl-10 pr-4 w-44 h-9 text-textGrey border border-gray-300 focus:outline-none focus:border-brown placeholder:text-sm"
            />
            <div className="absolute inset-y-0 top-6 left-0 pl-3 flex items-center pointer-events-none">
              <IoSearchOutline className=" text-gray-300" />
            </div>
          </div>

          {/* category */}
          <div className="flex gap-1 flex-col">
            <label className=" text-textGrey text-sm font-semibold">
              Category:
            </label>
            <select className="py-1 px-2 pr-4 w-44 h-9 text-textGrey border border-gray-300 focus:outline-none focus:border-brown placeholder:text-sm">
              <option></option>
            </select>
          </div>

          {/* problem condition */}
          <div className="flex gap-1 flex-col">
            <label className=" text-textGrey text-sm font-semibold">
              Problem condition:
            </label>
            <select className="py-1 px-2 pr-4 w-44 h-9 text-textGrey border border-gray-300 focus:outline-none focus:border-brown placeholder:text-sm">
              <option></option>
            </select>
          </div>

          <div className="flex h-full items-end">
            <button className="flex justify-center items-center w-44 h-8 bg-brown text-white text-sm">
              Apply filter
            </button>
          </div>
        </form>
      </div>

      {/* table */}
      <div>
        <table className=" min-w-full table-auto bg-white">
          <thead className=" border-b-[1.8px]">
            <tr>
              <th></th>
              <th className="text-header text-sm py-2 px-3 text-left">
                Product name
              </th>
              <th className="text-header text-sm py-2 px-3 text-left">
                Manufacturer
              </th>
              <th className="text-header text-sm py-2 px-3 text-left">
                Item number
              </th>
              <th className="text-header text-sm py-2 px-3 text-left">
                Category
              </th>
              <th className="text-header text-sm py-2 px-3 text-left">
                Problem
              </th>
              <th className="text-header text-sm py-2 px-3 text-left">
                Quantity
              </th>
              <th className="text-header text-sm py-2 px-3 text-left">
                Price/Unit
              </th>
              <th className="text-header text-sm py-2 px-3 text-left">
                Expiry date
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className=" border-b-[1.8px]">
              <td className="py-2 px-3 text-left">
                <input type="checkbox" />
              </td>
              <td className="text-row py-2 px-3 text-left">Black coffee</td>
              <td className="text-row py-2 px-3 text-left">
                Kirehe Coffee ltd
              </td>
              <td className="text-row py-2 px-3 text-left">CFBLK01</td>
              <td className="text-row py-2 px-3 text-left">Black coffee</td>
              <td className="text-row py-2 px-3 text-left">N/A</td>
              <td className="text-row py-2 px-3 text-left">500Kg</td>
              <td className="text-row py-2 px-3 text-left">RWF 200</td>
              <td className="text-row py-2 px-3 text-left">22/08/2028</td>
            </tr>
            <tr className=" border-b-[1.8px]">
              <td className="py-2 px-3 text-left">
                <input type="checkbox" />
              </td>
              <td className="text-row py-2 px-3 text-left">Black coffee</td>
              <td className="text-row py-2 px-3 text-left">
                Kirehe Coffee ltd
              </td>
              <td className="text-row py-2 px-3 text-left">CFBLK01</td>
              <td className="text-row py-2 px-3 text-left">Black coffee</td>
              <td className="text-row py-2 px-3 text-left">N/A</td>
              <td className="text-row py-2 px-3 text-left">500Kg</td>
              <td className="text-row py-2 px-3 text-left">RWF 200</td>
              <td className="text-row py-2 px-3 text-left">22/08/2028</td>
            </tr>
            <tr className=" border-b-[1.8px]">
              <td className="py-2 px-3 text-left">
                <input type="checkbox" />
              </td>
              <td className="text-row py-2 px-3 text-left">Black coffee</td>
              <td className="text-row py-2 px-3 text-left">
                Kirehe Coffee ltd
              </td>
              <td className="text-row py-2 px-3 text-left">CFBLK01</td>
              <td className="text-row py-2 px-3 text-left">Black coffee</td>
              <td className="text-row py-2 px-3 text-left">N/A</td>
              <td className="text-row py-2 px-3 text-left">500Kg</td>
              <td className="text-row py-2 px-3 text-left">RWF 200</td>
              <td className="text-row py-2 px-3 text-left">22/08/2028</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
