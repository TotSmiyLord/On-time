import ArrowRight from "@/assets/icon/ArrowRight";
import ArrowUp from "@/assets/icon/ArrowUp";
import { Accordion, Tabs } from "@mantine/core";
import Image from "next/image";
import Link from "next/link";
import cont from ".././assets/Mask group (10).png";
import img1 from ".././assets/Mask group (4).png";
import sl1 from ".././assets/Mask group (6).png";
import sl2 from ".././assets/Mask group (7).png";
import sl3 from ".././assets/Mask group (8).png";
import sl4 from ".././assets/Mask group (9).png";
import qual from ".././assets/“.png";
import ContainerCard from "./ContainerCard";
import TeamCard from "./TeamCard";

export default function Section() {
  return (
    <>
      <div
        id="pg1"
        className="container px-10 mx-auto justify-center py-28 lg:py-60"
      >
        <div className="mt-5 w-full">
          <div className="flex justify-center">
            <div>
              <h2 className="text-2xl text-[#C4C4C4]">01.</h2>
              <h1 className="uppercase text-5xl sm:text-[100px] font-normal sm:leading-[84px] text-[#D63E0E] mt-3">
                <i>our </i> <br /> story
              </h1>
            </div>
          </div>
          <div className="grid grid-rows-2 grid-cols-1 md:grid-cols-3 md:grid-rows-1 justify-between mt-16 gap-6 md:gap-16 px-5 md:px-0">
            <div className="hidden md:flex">
              <Image src={qual} alt="qual" width={150} height={130} />
            </div>
            <div className="">
              <p className="text-base md:text-base md:text-xl font-normal">
                On Time Express was founded in 2013 by an immigrant who began
                his logistics career as an over-the-road company truck driver.
                Over the years with the help of our experienced staff we have
                gown into one of the nations most competitive and dependable
                logistics companies, servicing 48 states in US.
              </p>
            </div>
            <div className="">
              <p className="text-base md:text-xl font-normal">
                What began as a small family carrier company has now expanded
                into a multi-servicing brokerage firm equipped with 50 dedicated
                company trucks in addition to a wide range of dependable and
                experienced partner carriers. Our expertise and performance
                standards insure punctual, quick, and cost-effective
                transportation of cargo, damage free.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="px-5 sm:px-10">
        <Image src={img1} alt={""} className="w-full" />
      </div>
      <div className="container mx-auto mt-56 px-5">
        <div>
          <div className="flex justify-around md:mx-12 w-full ">
            <div>
              <h1 className="uppercase text-5xl sm:text-[100px] font-normal sm:leading-[84px] text-[#D63E0E] mt-3">
                <i>meet </i> <br /> the <br /> team
              </h1>
            </div>
            <div>
              <p className="text-xl font-normal mt-3">
                Meet our core <br /> team memebers
              </p>
            </div>
            <div className="w-1/3 hidden md:block"></div>
          </div>
          <div className="flex flex-wrap justify-around mt-20 gap-3 md:gap-10">
            <TeamCard />
            <TeamCard />
            <TeamCard />
            <TeamCard />
            <TeamCard />
            <TeamCard />
          </div>
        </div>
      </div>
      <div id="pg2" className="container mx-auto py-28 lg:py-60 px-5">
        <div>
          <div className="flex justify-center">
            <div>
              <h2 className="text-2xl text-[#C4C4C4]">02.</h2>
              <h1 className="uppercase text-5xl sm:text-[100px] font-normal sm:leading-[84px] text-[#D63E0E] mt-3">
                <i>our </i> <br />
                Services
              </h1>
            </div>
          </div>
          <div className="grid grid-rows-2 grid-cols-1 md:grid-cols-3 md:grid-rows-1 justify-between mt-16 gap-6 md:gap-16 px-5 md:px-0">
            <div>
              <p className="text-base md:text-xl font-normal">
                On Time Express provides exceptional customer service by
                creating value beyond the traditional ways of freight forwarding
                and management. We create a flexible and unique approach for
                each customers needs and service all areas of the supply chain
                from drayage and warehouse storage, to loading services and
                direct deliveries, nationwide.
              </p>
            </div>
            <div>
              <p className="text-base md:text-xl font-normal">
                Our expansive logistic services, combined with our focus on
                organization using our integrated IT platform equips us with the
                capability to maximize communication and direct tracking
                accessibility with our customers while giving us the base to
                lower the cost of the entire supply chain without losing the
                integrity of our performance.
              </p>
            </div>
            <div className="hidden sm:block"></div>
          </div>
        </div>
      </div>
      <div className="container mx-auto hidden lg:flex items-center py-28 lg:py-60 px-5">
        <div>
          <div className="hidden 2xl:block">
            <Tabs defaultValue={"full"}>
              <Tabs.List>
                <Tabs.Tab value="full">
                  <div>
                    <h2 className="text-2xl text-[#C4C4C4]">01.</h2>
                    <h1 className="text-3xl font-medium">
                      Full Trackload & Less Than Truckload
                    </h1>
                  </div>
                </Tabs.Tab>
                <Tabs.Tab value="dray">
                  <div>
                    <h2 className="text-2xl text-[#C4C4C4]">02.</h2>
                    <h1 className="text-3xl font-medium">Drayage</h1>
                  </div>
                </Tabs.Tab>
                <Tabs.Tab value="truck">
                  <div>
                    <h2 className="text-2xl text-[#C4C4C4]">03.</h2>
                    <h1 className="text-3xl font-medium">
                      Straight Truck With Left Gate
                    </h1>
                  </div>
                </Tabs.Tab>
                <Tabs.Tab value="ware">
                  <div>
                    <h2 className="text-2xl text-[#C4C4C4]">04.</h2>
                    <h1 className="text-3xl font-medium">Warehousing</h1>
                  </div>
                </Tabs.Tab>
              </Tabs.List>
              <Tabs.Panel value="full" pb="xs">
                <div className="flex justify-between mt-24">
                  <div className="w-1/3">
                    <h1 className="text-5xl font-extrabold">
                      Full Trackload & Less Than Truckload
                    </h1>
                    <p className="text-xl font-normal mt-14">
                      In today’s environment when time is limited and schedules
                      are hectic, On Time Express can eliminate the stresses
                      that come with trying to acquire trustworthy
                      transportation. Our company prides itself on having the
                      ability to provide our customers with what they need when
                      they need it, worry free. With the support of our
                      experienced personnel and our vast network, On Time
                      Express has been successfully moving freight nationwide
                      for almost a decade.
                    </p>
                    <p className="text-xl font-normal mt-10">
                      As geographical borders widen, these types of services
                      call for the type accuracy and precise planning On Time
                      Express has to fulfill any type of logistical need. With
                      our versatile services, we get freight where it needs to
                      go, on-time seamlessly from port to receiver.
                    </p>
                  </div>
                  <div>
                    <Image src={sl1} alt={""} />
                  </div>
                </div>
              </Tabs.Panel>
              <Tabs.Panel value="dray" pb="xs">
                <div className="flex justify-between mt-24">
                  <div className="w-1/3">
                    <h1 className="text-5xl font-extrabold">Drayage</h1>
                    <p className="text-xl font-normal mt-14">
                      With On Time Express, you get close to a decade of
                      experience breaking down the chaos that comes with
                      shipping through ports. We understand drayage is one of
                      the most vital steps in the transportation chain and offer
                      customizable solutions for every type of drayage movement.
                      These solutions emphasize quality and timing to insure
                      that those short distance movements don’t ever affect the
                      long term goals of the cargo or the operations following.
                    </p>
                  </div>
                  <div>
                    <Image src={sl2} alt={""} />
                  </div>
                </div>
              </Tabs.Panel>
              <Tabs.Panel value="truck" pb="xs">
                <div className="flex justify-between mt-24">
                  <div className="w-1/3">
                    <h1 className="text-5xl font-extrabold">
                      Straight Truck With Left Gate
                    </h1>
                    <p className="text-xl font-normal mt-14">
                      IOn Time Express understands that no one customer has the
                      same logistical needs when it comes to their cargo. Given
                      the amount complexity required for some customers to
                      successfully receive their freight, we go the extra mile
                      to try to cover as many methods of transportation
                      possible, including straight truck services. On Time
                      Express has a fleet of straight trucks all equipped with
                      the features of lift gate, pallet jack, 26’ ft in length,
                      and dock height.
                    </p>
                    <p className="text-xl font-normal mt-10">
                      The straight truck solutions our company provides bring
                      value to our customers by allowing them to service a wider
                      range of clientele, no matter what loading situations come
                      at hand. Our fleet along with our experienced driving
                      staff are extremely useful for shippers or receivers that
                      do not have traditional loading docks or forklifts needed
                      to get their freight where it needs to go.
                    </p>
                  </div>
                  <div>
                    <Image src={sl3} alt={""} />
                  </div>
                </div>
              </Tabs.Panel>
              <Tabs.Panel value="ware" pb="xs">
                <div className="flex justify-between mt-24">
                  <div className="w-1/3">
                    <h1 className="text-5xl font-extrabold">Warehousing</h1>
                    <p className="text-xl font-normal mt-14">
                      With our background in logistics and previous experience
                      as a carrier company, On Time Express understands that
                      warehousing is a key component to the supply chain. Our
                      warehouse management solutions are tailored to meet any
                      customers particular requirements in providing flexible
                      warehouse solutions that are organized and reliable.
                    </p>
                    <p className="text-xl font-normal mt-10">
                      Our On Time Express Warehouse is conveniently located in
                      Ontario California, just 25 miles outside of Los Angeles,
                      making accessibility anywhere from the la county to the
                      inland empire effortless. Our warehouse services are open
                      24/7, have non-stop recorded surveillance, and are staffed
                      with a forklift certified crew making any job possible.
                      From keeping inventory and load transfers to restacking
                      and re-wrapping pallets, our hard working and experienced
                      faculty are willing to go the extra mile to ensure
                      customer satisfaction.
                    </p>
                    <p className="text-xl font-normal mt-10">
                      For a seamless transition in the movements of your cargo,
                      On Time’s warehousing, inventory management, and real time
                      tracking of cargo is the way to go!
                    </p>
                  </div>
                  <div>
                    <Image src={sl4} alt={""} />
                  </div>
                </div>
              </Tabs.Panel>
            </Tabs>
          </div>
          <div className="w-[500px] mt-10">
            <h1 className="text-[40px] font-extrabold">
              On Time Express FTL & LTL Solutions Include
            </h1>
          </div>
          <div className="flex flex-wrap gap-6 px-5 md:px-0 mt-10 mb-32">
            <div className="bg-gray-300 md:py-5 md:px-7 py-[10px] px-[14px] rounded-[36px]">
              <h1 className="text-base md:text-xl font-normal">
                <span className="text-[#D63E0E]">01 • </span>
                Expedited/Time critical freight pick-ups & deliveries
              </h1>
            </div>
            <div className="bg-gray-300 md:py-5 md:px-7 py-[10px] px-[14px] rounded-[36px]">
              <h1 className="text-base md:text-xl font-normal">
                <span className="text-[#D63E0E]">02 • </span>
                Drop trailers at shippers
              </h1>
            </div>
            <div className="bg-gray-300 md:py-5 md:px-7 py-[10px] px-[14px] rounded-[36px]">
              <h1 className="text-base md:text-xl font-normal">
                <span className="text-[#D63E0E]">03 • </span>
                Drop trailers at receivers
              </h1>
            </div>
            <div className="bg-gray-300 md:py-5 md:px-7 py-[10px] px-[14px] rounded-[36px]">
              <h1 className="text-base md:text-xl font-normal">
                <span className="text-[#D63E0E]">04 • </span>Live pick-ups at
                shippers
              </h1>
            </div>
            <div className="bg-gray-300 md:py-5 md:px-7 py-[10px] px-[14px] rounded-[36px]">
              <h1 className="text-base md:text-xl font-normal">
                <span className="text-[#D63E0E]">05 • </span>Live deliveries at
                receivers
              </h1>
            </div>
            <div className="bg-gray-300 md:py-5 md:px-7 py-[10px] px-[14px] rounded-[36px]">
              <h1 className="text-base md:text-xl font-normal">
                <span className="text-[#D63E0E]">06 • </span>Driver loading
                assistance at shippers
              </h1>
            </div>
            <div className="bg-gray-300 md:py-5 md:px-7 py-[10px] px-[14px] rounded-[36px]">
              <h1 className="text-base md:text-xl font-normal">
                <span className="text-[#D63E0E]">07 • </span>Driver offloading
                assistance at deliveries
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div id="pg3" className="container mx-auto px-5">
        <div>
          <div className="flex justify-between w-full">
            <div>
              <h2 className="text-2xl text-[#C4C4C4]">03.</h2>
              <h1 className="uppercase text-5xl sm:text-[100px] font-normal sm:leading-[84px] text-[#D63E0E] mt-3">
                <i>our </i> <br /> News
              </h1>
            </div>
            <div className="flex items-end">
              <Link href={"/news"}>
                <h1 className="text-2xl font-medium uppercase flex items-center gap-2 underline cursor-pointer">
                  see all <ArrowRight />
                </h1>
              </Link>
            </div>
          </div>
          <div className="flex flex-wrap justify-center 2xl:justify-between mt-10 md:mt-28 gap-10 md:gap-14">
            <ContainerCard />
            <ContainerCard />
          </div>
        </div>
      </div>
      <div id="pg4" className="container mx-auto py-28 lg:py-60 px-5 mt-56">
        <div>
          <div className="flex justify-center">
            <div>
              <h2 className="text-2xl text-[#C4C4C4]">04.</h2>
              <h1 className="uppercase text-5xl sm:text-[100px] font-normal sm:leading-[84px] text-[#D63E0E] mt-3">
                <i>Open </i> <br /> Roles
              </h1>
            </div>
          </div>
          <div className="grid grid-rows-2 md:grid-rows-1 md:grid-cols-3 gap-8 mt-10">
            <div>
              <p className="font-normal text-base">
                On Time Express is a perfect company to join if you are looking
                for flexible growth opportunities, an energetic and creative
                working environment, and lots of interesting and challenging
                tasks. We are looking for industrious and reliable logistics
                professionals and owner-operators.
              </p>
            </div>
            <div>
              <p className="font-normal text-base">
                Your hard work and efforts are always properly compensated. We
                value and proud of our team as a whole and as individuals. We
                set the goal to create the most convenient conditions for each
                of our workers
              </p>
            </div>
          </div>
          <Accordion>
            <Accordion.Item value="disp" className="mt-20">
              <Accordion.Control>
                <div>
                  <h1 className="font-extrabold text-[28px]">Dispatcher</h1>
                  <h2 className="font-normal text-base mt-4">
                    Ontario, US / Full-time
                  </h2>
                  <p className="font-normal text-sm text-[#949494] mt-2">
                    Posted - 18 May, 2022
                  </p>
                </div>
              </Accordion.Control>
              <Accordion.Panel>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Tellus non montes, in quis faucibus leo vulputate velit
                  tincidunt. Nibh mauris quis sit et erat cursus. Habitasse
                  lectus nec cursus phasellus elit curabitur felis cras. In
                  lacus, nisi natoque ullamcorper viverra fermentum non. Nibh
                  velit lacinia quisque massa lorem facilisis. Facilisis id quam
                  sed in ut morbi orci aliquet. Aliquet mattis porttitor arcu
                  non erat consectetur fringilla mattis habitasse. Dignissim
                  arcu cras elit magna volutpat arcu tincidunt orci.
                </p>
                <Link href={"/dispatch"}>
                  <div className="flex gap-5 mt-10">
                    <button className="flex justify-between items-center bg-none border border-[#D63E0E] hover:bg-[#D63E0E] active:bg-[#B2330B] hover:text-white sm:py-4 sm:px-6 py-2 px-3 rounded-[36px] w-60 sm:text-lg text-xs text-[#D63E0E]">
                      See full discription <ArrowUp />
                    </button>
                    <button className="flex justify-between items-center bg-none border bg-[#D63E0E] active:bg-[#B2330B] sm:py-4 sm:px-6 py-2 px-3 rounded-[36px] w-60 sm:text-lg text-xs text-white">
                      Apply for this role <ArrowUp />
                    </button>
                  </div>
                </Link>
              </Accordion.Panel>
            </Accordion.Item>
            <Accordion.Item value="driv" className="mt-12 md:mt-14">
              <Accordion.Control>
                <div>
                  <h1 className="font-extrabold text-[28px]">Driver</h1>
                  <h2 className="font-normal text-base mt-4">
                    Ontario, US / Full-time
                  </h2>
                  <p className="font-normal text-sm text-[#949494] mt-2">
                    Posted - 18 May, 2022
                  </p>
                </div>
              </Accordion.Control>
              <Accordion.Panel>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Tellus non montes, in quis faucibus leo vulputate velit
                  tincidunt. Nibh mauris quis sit et erat cursus. Habitasse
                  lectus nec cursus phasellus elit curabitur felis cras. In
                  lacus, nisi natoque ullamcorper viverra fermentum non. Nibh
                  velit lacinia quisque massa lorem facilisis. Facilisis id quam
                  sed in ut morbi orci aliquet. Aliquet mattis porttitor arcu
                  non erat consectetur fringilla mattis habitasse. Dignissim
                  arcu cras elit magna volutpat arcu tincidunt orci.
                </p>
                <Link href={"/dispatch"}>
                  <div className="flex gap-5 mt-10">
                    <button className="flex justify-between items-center bg-none border border-[#D63E0E] hover:bg-[#D63E0E] active:bg-[#B2330B] hover:text-white sm:py-4 sm:px-6 py-2 px-3 rounded-[36px] w-60 sm:text-lg text-xs text-[#D63E0E]">
                      See full discription <ArrowUp />
                    </button>
                    <button className="flex justify-between items-center bg-none border bg-[#D63E0E] active:bg-[#B2330B] sm:py-4 sm:px-6 py-2 px-3 rounded-[36px] w-60 sm:text-lg text-xs text-white">
                      Apply for this role <ArrowUp />
                    </button>
                  </div>
                </Link>
              </Accordion.Panel>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>
    </>
  );
}
