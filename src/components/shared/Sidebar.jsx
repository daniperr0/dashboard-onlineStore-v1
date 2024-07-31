import React from "react";
import {
  RiHome2Line,
  RiLogoutBoxLine,
  RiMailLine,
  RiNotification3Line,
  RiPercentLine,
  RiPieChartLine,
  RiSettings2Line,
} from "react-icons/ri";
import { IoStorefront } from "react-icons/io5";

const Sidebar = (props) => {

    const { showMenu } = props;  

  return (
    <div className={`bg-[#1f1d2b] fixed lg:left-0 top-0 w-24 h-full flex flex-col justify-between py-6 rounded-tr-lg rounded-br-lg z-50 transition-all ${showMenu ? "left-0" : "-left-full" }`}
    >
      <div>
        <ul className="pl-2">
          <li className=" p-3 rounded-tl-lg rounded-bl-xl">
            <h1
              className="bg-sky-900 p-4 flex justify-center rounded-xl text-sky-400 shadow-2xl shadow-sky-950 "
            >
              <IoStorefront className="text-3xl" />
            </h1>
          </li>
          <li className="bg-[#262837] p-3 rounded-tl-lg rounded-bl-xl">
            <a
              href="#"
              className="bg-sky-400 p-4 flex justify-center rounded-xl text-white "
            >
              <RiHome2Line className="text-2xl" />
            </a>
          </li>
          <li className="hover:bg-[#262837] p-3 rounded-tl-lg rounded-bl-xl group transition-colors">
            <a
              href="#"
              className="group-hover:bg-sky-400 p-4 flex justify-center rounded-xl text-sky-400 group-hover:text-white transition-colors"
            >
              <RiPercentLine className="text-2xl" />
            </a>
          </li>
          <li className="hover:bg-[#262837] p-3 rounded-tl-lg rounded-bl-xl group transition-colors">
            <a
              href="#"
              className="group-hover:bg-sky-400 p-4 flex justify-center rounded-xl text-sky-400 group-hover:text-white transition-colors"
            >
              <RiPieChartLine className="text-2xl" />
            </a>
          </li>
          <li className="hover:bg-[#262837] p-3 rounded-tl-lg rounded-bl-xl group transition-colors">
            <a
              href="#"
              className="group-hover:bg-sky-400 p-4 flex justify-center rounded-xl text-sky-400 group-hover:text-white transition-colors"
            >
              <RiMailLine className="text-2xl" />
            </a>
          </li>
          <li className="hover:bg-[#262837] p-3 rounded-tl-lg rounded-bl-xl group transition-colors">
            <a
              href="#"
              className="group-hover:bg-sky-400 p-4 flex justify-center rounded-xl text-sky-400 group-hover:text-white transition-colors"
            >
              <RiNotification3Line className="text-2xl" />
            </a>
          </li>
          <li className="hover:bg-[#262837] p-3 rounded-tl-lg rounded-bl-xl group transition-colors">
            <a
              href="#"
              className="group-hover:bg-sky-400 p-4 flex justify-center rounded-xl text-sky-400 group-hover:text-white transition-colors"
            >
              <RiSettings2Line className="text-2xl" />
            </a>
          </li>
        </ul>
      </div>
      <div>
        <ul className="pl-2">
        <li className="hover:bg-[#262837] p-3 rounded-tl-lg rounded-bl-xl group transition-colors">
            <a
              href="#"
              className="group-hover:bg-sky-400 p-4 flex justify-center rounded-xl text-sky-400 group-hover:text-white transition-colors"
            >
              <RiLogoutBoxLine className="text-2xl" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
