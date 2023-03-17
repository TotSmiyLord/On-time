import ArrowUp from "@/assets/icon/ArrowUp";
import Play from "@/assets/icon/Play";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Section from "@/components/Section";

export default function Homes() {
  return (
    <div className="scroll-smooth">
      <div className="back text-white">
        <Navbar />
        <div className="container mx-auto">
          <div className="flex justify-center items-center h-[100%] mt-60">
            <div>
              <span className="text-2xl uppercase">Team Of</span>

              <div className="uppercase text-5xl sm:text-[100px] font-normal sm:leading-[84px]">
                <h1 className="flex gap-5">
                  <i className="text-left">best</i>{" "}
                  <div className="flex justify-center items-center border-2 rounded-full border-white w-7 h-7 text-xl font-medium">
                    c
                  </div>
                  <br />
                </h1>
                <h1 className="text-right">
                  logistics
                  <br />
                </h1>
                <h1>specialists</h1>
              </div>
              <div className="flex justify-between mt-10">
                <button className="flex justify-between items-center bg-none border border-white sm:py-4 sm:px-6 py-2 px-3 rounded-[36px] w-32 sm:w-[180px] sm:text-lg text-xs hover:bg-[#D63E0E] hover:border-0">
                  Get in touch <ArrowUp />
                </button>
                <button className="flex justify-between items-center bg-none border border-white sm:py-4 sm:px-6 py-2 px-3 rounded-[36px] w-40 sm:w-[250px] sm:text-lg text-xs hover:bg-[#D63E0E] hover:border-0">
                  <Play /> Watch the Showreel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Section />
      <Footer />
    </div>
  );
}
