import React, { useEffect, useState } from "react";
import { FaRegTrashCan } from "react-icons/fa6";
import {
  MdAdd,
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
  MdOutlineClear,
} from "react-icons/md";
import { IoSearchOutline } from "react-icons/io5";
import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { dummyCoffeeData } from "../../data";
import { useDispatch, useSelector } from "react-redux";
import { activeLinksActions } from "../redux/slices/activeLinksActive";

export const Inventory = () => {
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(1);
  const [manufacturers, setManufacturers] = useState([]);
  const [categories, setCategories] = useState([]);
  const [data, setData] = useState([]);
  const [searchParams, setSearchParams] = useState("");
  const [searchMode, setSetSearchMode] = useState(false);

  const [pageLimit, setPageLimit] = useState(10);

  const activeLink = useSelector((state) => state.activeLinks.active);
  const dispatch = useDispatch();

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    if (currentPage > 0) setCurrentPage(currentPage - 1);
  };

  const handleJumplast = () => {
    setCurrentPage(totalPages);
  };

  const handleJumpFirst = () => {
    setCurrentPage(1);
  };

  const handleInput = (e) => {
    setSearchParams(e.target.value);
  };
  const handleSearch = (e) => {
    e.preventDefault();

    let query = searchParams;
    let results = [];
    results = data.filter((item) => {
      return (
        item.productName.toLowerCase().includes(query) ||
        item.category.toLowerCase().includes(query) ||
        item.itemNumber.includes(query) ||
        item.manufacturer.toLowerCase().includes(query)
      );
    });

    setData(results);
    setSetSearchMode(true);
  };

  const handleClearSearch = () => {
    setSearchParams("");
    setData(dummyCoffeeData.slice(startIndex, endIndex));
    setSetSearchMode(false);
  };

  useEffect(() => {
    let pages = Math.ceil(dummyCoffeeData.length / pageLimit);
    setTotalPages(pages);

    let newStartIndex = (currentPage - 1) * pageLimit;
    setStartIndex(newStartIndex);
    setEndIndex(newStartIndex + pageLimit);
  }, [currentPage, totalPages]);

  useEffect(() => {
    setData([]);
    setData(dummyCoffeeData.slice(startIndex, endIndex));
  }, [startIndex, endIndex]);

  useEffect(() => {
    dispatch(activeLinksActions.setActiveLink("inventory"));
    for (const item of dummyCoffeeData) {
      setManufacturers((prevState) => [...prevState, item.manufacturer]);
      setCategories((prevState) => [...prevState, item.category]);
    }
  }, []);

  return (
    <div className=" flex flex-col gap-2 divide-y-2 divide-light-blue-400 w-full h-full p-2 overflow-x-hidden overflow-y-auto">
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
          {/* search */}
          <div className="relative flex gap-1 flex-col">
            <input
              type="text"
              name="search"
              placeholder="Search"
              onChange={handleInput}
              value={searchParams}
              className="py-2 pl-10 pr-4 w-60 h-9 text-textGrey border border-gray-300 focus:outline-none focus:border-brown placeholder:text-sm"
            />
            <div className="absolute inset-y-0 top-1 left-0 pl-3 flex items-center pointer-events-none">
              <IoSearchOutline className=" text-gray-300" />
            </div>
            <div
              onClick={handleClearSearch}
              className="absolute inset-y-0 top-1 right-0 pr-3 flex items-center cursor-pointer"
            >
              <MdOutlineClear className=" text-gray-300" />
            </div>
          </div>

          <div className="flex h-full items-end">
            <button
              onClick={handleSearch}
              className="flex justify-center items-center w-32 h-8 bg-brown text-white text-sm"
            >
              Search
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
            {data.map((item) => (
              <tr key={item.itemNumber} className=" border-b-[1.8px]">
                <td className="py-2 px-3 text-left">
                  <input type="checkbox" />
                </td>
                <td className="text-row py-2 px-3 text-left">
                  {item.productName}
                </td>
                <td className="text-row py-2 px-3 text-left">
                  {item.manufacturer}
                </td>
                <td className="text-row py-2 px-3 text-left">
                  {item.itemNumber}
                </td>
                <td className="text-row py-2 px-3 text-left">
                  {item.category}
                </td>
                <td className="text-row py-2 px-3 text-left">
                  {item.problemCondition}
                </td>
                <td className="text-row py-2 px-3 text-left">
                  {item.quantity}
                </td>
                <td className="text-row py-2 px-3 text-left">
                  ${item.pricePerUnit}
                </td>
                <td className="text-row py-2 px-3 text-left">
                  {item.expiryDate}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* pagination */}
      {!searchMode && (
        <div className="flex flex-row gap-1 items-center w-full justify-center my-4">
          <FaAngleDoubleLeft
            onClick={handleJumpFirst}
            size={20}
            className="hover:cursor-pointer"
          />
          <MdOutlineKeyboardArrowLeft
            size={20}
            onClick={handlePrevPage}
            className="hover:cursor-pointer"
          />
          <label>
            {currentPage} of {totalPages}
          </label>
          <MdOutlineKeyboardArrowRight
            onClick={handleNextPage}
            className="hover:cursor-pointer"
            size={20}
          />
          <FaAngleDoubleRight
            onClick={handleJumplast}
            size={20}
            className="hover:cursor-pointer"
          />
        </div>
      )}
    </div>
  );
};
