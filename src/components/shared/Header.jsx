import React from "react";
import {RiSearch2Line,} from "react-icons/ri";

const Header = () => {
    return(
        <header>
            {/*title and searchBar*/}
            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-4">
              <div>
                <h1 className="text-2xl text-gray-300">Mario Resto</h1>
                <p className="text-gray-500">29 july 2024</p>
              </div>
              <form>
                <div className="w-full relative">
                  <RiSearch2Line className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-300" />
                  <input
                    type="text"
                    className="bg-[#1f1d2b] w-full py-2 pl-10 pr-4 rounded-lg text-gray-300 outline-none"
                    placeholder="Search"
                  />
                </div>
              </form>
            </div>
            {/* Tabs */}
            <nav className="text-gray-300 flex items-center justify-between lg:justify-start md:gap-8 border-b mb-4">
              <a
                href="#"
                className=" relative py-2 pr-4 before:w-1/2 before:h-[2px] before:absolute before:bg-sky-400 before:left-0 before:-bottom-[1px] text-sky-400"
              >
                Hot Dishes
              </a>
              <a href="#" className="py-2 pr-4">
                Cold Dishes
              </a>
              <a href="#" className="py-2 pr-4">
                Soups
              </a>
              <a href="#" className="py-2">
                Grill
              </a>
            </nav>
          </header>
    )
}

export default Header