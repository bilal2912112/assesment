import React from "react";
import cake from "../assests/cake.png";
import "./event.css";
import {
  BsFillLockFill,
  BsArrowCounterclockwise,
  BsBoxArrowInUp,
  BsBook,
} from "react-icons/bs";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
const Events = () => {
  return (
    <div className="grid grid-cols-2 ">
      <section className="main-txt">
        <h1 className="heading ">Birthday Bash</h1>
        <p className="para text-xs">Hosted by Elysia</p>
        <div class=" mt-72 ml-24 grid grid-cols-3 gap-4 ">
          <div className="font-bold mt-1">
            <span className="text-xs">A</span>A
          </div>
          <div className="text-gray-400 mt-2">
            <section className="flex text-sm justify-end  ">
              <BsFillLockFill className="mt-1" />
              <section className="">domain.com</section>
            </section>
          </div>
          <div>
            <MdKeyboardArrowRight className="text-gray-400 text-center" />
          </div>
        </div>
      </section>
      <div className="cake-img ">
        <img src={cake} alt="" />
      </div>
    </div>
  );
};

export default Events;
