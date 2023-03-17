import ArrowUp from "@/assets/icon/ArrowUp";
import { Pagination } from "@mantine/core";
import Image from "next/image";
import Link from "next/link";
import cont from ".././assets/Mask group (10).png";
import ContainerCard from "./ContainerCard";

export default function NewsSection() {
  return (
    <div className="container mx-auto px-5 py-24 lg:py-60 w-full">
      <div className="flex justify-center">
        <div>
          <h1 className="uppercase text-5xl sm:text-[100px] font-normal sm:leading-[84px] text-[#D63E0E] mt-3">
            <i>our </i> <br /> News
          </h1>
        </div>
      </div>
      <div className="hidden lg:flex mt-36">
        <div className="lg:flex justify-between w-full">
          <div>
            <Image src={cont} alt={""} />
          </div>
          <div className="lg:w-1/3">
            <h1 className="font-extrabold lg:text-[40px] text-3xl mt-8">
              A Latest News Title Comes Here
            </h1>
            <p className="font-normal text-base lg:text-xl mt-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisi
              ipsum nisl et feugiat cursus sed lorem. Non velit lectus ut ornare
              ligula hendrerit. Amet nulla volutpat gravida lectus dignissim.
              Amet in phasellus nullam nulla aliquam.
            </p>
            <Link href={"/news/here"}>
              <button className="flex justify-between items-center w-44 bg-none border border-black sm:py-4 sm:px-6 py-2 px-3 rounded-[36px] sm:text-lg text-xs mt-20 hover:bg-[#D63E0E] hover:text-white hover:border-0">
                Get in touch <ArrowUp />
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap justify-between gap-16 mt-44">
        <ContainerCard />
        <ContainerCard />
        <ContainerCard />
        <ContainerCard />
        <ContainerCard />
        <ContainerCard />
        <ContainerCard />
        <ContainerCard />
      </div>
      <Pagination total={10} size="xl" radius="xl" color="orange" mt={100} />
    </div>
  );
}
