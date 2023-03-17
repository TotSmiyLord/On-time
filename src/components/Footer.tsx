import Facebook from "@/assets/icon/Facebook";
import Gmail from "@/assets/icon/Gmail";
import Instagram from "@/assets/icon/Instagram";
import Location from "@/assets/icon/Location";
import Phone from "@/assets/icon/Phone";
import YouTube from "@/assets/icon/YouTube";
import React from "react";

export default function Footer() {
  return (
    <div className="bg-[#1E1E1E] text-white">
      <div id="pg5" className="container mx-auto px-10 py-28 lg:py-60">
        <div>
          <div className="flex justify-center">
            <div>
              <h2 className="text-2xl text-[#C4C4C4]">05.</h2>
              <h1 className="uppercase text-5xl sm:text-[100px] font-normal sm:leading-[84px] text-[#D63E0E] mt-3">
                <i>our </i> <br /> Contacts
              </h1>
            </div>
          </div>
          <div className="lg:flex justify-between mt-[60px] md:mt-[120px]">
            <div>
              <div className="flex gap-6">
                <Phone /> 657-232-4400
              </div>
              <div className="flex gap-6 mt-7">
                <Gmail /> info@otexpress.com
              </div>
              <div className="flex gap-6 mt-7">
                <Location /> 1930 South Rochester Ave Suite 117 <br /> Ontario,
                CA 91761
              </div>
              <div className="hidden lg:flex gap-6 mt-36 cursor-pointer">
                <Instagram />
                <Facebook />
                <YouTube />
              </div>
            </div>
            <div className="mt-32 lg:mt-0 lg:w-2/5">
              <p className="font-medium text-base">
                Want to know more about us?
              </p>
              <h1 className="font-extrabold text-[32px] mt-3">
                Send a Quick Message
              </h1>
              <div className="mt-12">
                <label className="font-medium text-base">
                  Your email
                  <input
                    type="text"
                    className="w-full bg-[#1E1E1E] text-lg outline-none border-b-2 px-1 py-1"
                  />
                </label>
              </div>
              <div className="mt-12">
                <label className="font-medium text-base">
                  Subject
                  <input
                    type="text"
                    className="w-full bg-[#1E1E1E] text-lg outline-none border-b-2 px-1 py-1"
                  />
                </label>
              </div>
              <div className="mt-12">
                <label className="font-medium text-base">
                  Message
                  <input
                    type="text"
                    className="w-full bg-[#1E1E1E] text-lg outline-none border-b-2 px-1 py-1"
                  />
                </label>
              </div>
              <button className="font-medium text-lg sm:py-4 sm:px-6 py-2 px-3 border border-white rounded-[36px] mt-10 hover:bg-[#D63E0E] hover:border-0">
                Send message
              </button>
            </div>
          </div>
          <div className="flex justify-center lg:hidden gap-6 mt-36 cursor-pointer">
            <Instagram />
            <Facebook />
            <YouTube />
          </div>
        </div>
      </div>
      <p className="font-normal text-center text-sm text-[#767676] pb-3 lg:pb-20">
        © 2022 OnTime Express. All rights reserved.
      </p>
    </div>
  );
}
