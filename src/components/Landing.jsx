import React from "react";
import landing from "../assests/landing.svg";
import { Link } from "react-router-dom";
import "./landing.css";
import {
  BsFillLockFill,
  BsArrowCounterclockwise,
  BsBoxArrowInUp,
  BsBook,
} from "react-icons/bs";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import Event from "./Events.jsx";

const Landing = () => {
  return (
    <>
      <div className="">
        <div>
          <div className="landing-img ">
            <img src={landing} alt="" />
          </div>
        </div>

        <div className="txt">
          <section className=" ">
            Imagine if <br /> <span className="snap">Snapchat </span> <br /> had
            events.
          </section>
          <section className="para ml-16">
            Easyly Host and share events with your friends across any social
            media
          </section>
        </div>

        <button className="btn ">
          <Link to="/Events">Create my event</Link>
        </button>

        <div className=" btm  visible md:invisible">
          <section className="btm-button ">
            <div class="grid grid-cols-3 gap-4 ml-3">
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
                <BsArrowCounterclockwise className="ml-16 mt-2" />
              </div>
            </div>
            <div className="items-center pt-7">
              <div class="grid grid-rows-1 grid-flow-col gap-2 text-blue-400 text-2xl">
                <div>
                  <MdKeyboardArrowLeft />
                </div>
                <div>
                  <MdKeyboardArrowRight className="text-gray-400" />
                </div>
                <div>
                  <BsBoxArrowInUp />
                </div>
                <div>
                  <BsBook />
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Landing;
