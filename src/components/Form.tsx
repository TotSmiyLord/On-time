import Plus from "@/assets/icon/Plus";
import { FileInput } from "@mantine/core";
import React from "react";

export default function Form() {
  return (
    <div className="container mx-auto py-28 px-5 lg:px-72 lg:py-60">
      <h1 className="font-extrabold lg:text-[40px] text-xl mt-8 text-center">
        Apply for this role
      </h1>
      <p className="font-normal text-base lg:text-xl mt-5 text-center">
        Please submit your resume. It will help us understand which teams <br />{" "}
        most closely match your skills and interests.
      </p>
      <div className="lg:flex gap-12 mt-16">
        <input
          type="text"
          className="py-4 px-6 outline-none border border-black rounded-[36px] w-full"
          placeholder="First name"
        />
        <input
          type="text"
          className="py-4 px-6 outline-none border border-black rounded-[36px] w-full mt-10 lg:mt-0"
          placeholder="Last name"
        />
      </div>
      <input
        type="text"
        className="py-4 px-6 outline-none border border-black rounded-[36px] w-full mt-10"
        placeholder="Email"
      />

      <textarea
        className="py-4 px-6 outline-none border border-black rounded-[36px] w-full mt-10"
        placeholder="Cover letter"
        rows={10}
      ></textarea>
      <div className="py-10 border-dashed border-gray-400 border-2 rounded-[28px] mt-10">
        <h1 className="font-extrabold lg:text-[40px] text-xl mt-8 text-center">
          Attach Resume
        </h1>
        <p className="font-normal text-base lg:text-lg mt-2 text-center">
          Attach a file from your device or Drag and drop here
        </p>
        <FileInput
          placeholder=" Attech a file"
          variant="filled"
          size="xl"
          py={3}
          px={6}
          bg={"#F5F5F5E5"}
          icon={<Plus />}
          className="font-normal text-lg text-[#D63E0E] flex mx-auto mt-6 gap-3 items-center w-56 rounded-[36px]"
        />
      </div>
    </div>
  );
}
