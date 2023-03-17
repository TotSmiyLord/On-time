import Footer from "@/components/Footer";
import Navbar from "@/components/NavbarWhite";
import Subscribe from "@/components/Subscribe";
import Image from "next/image";
import cont from "../.././assets/Mask group (10).png";

export default function Here() {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto px-5 lg:px-72">
        <div>
          <h1 className="font-extrabold lg:text-[40px] text-3xl mt-8">
            A Latest News Title Comes Here
          </h1>
          <span className="font-normal text-base text-[#707070] mt-5">
            Posted on 12 Feb, 2022
          </span>
          <p className="font-normal text-base lg:text-lg mt-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisi ipsum
            nisl et feugiat cursus sed lorem. Non velit lectus ut ornare ligula
            hendrerit. Amet nulla volutpat gravida lectus dignissim. Amet in
            phasellus nullam nulla aliquam.
          </p>
          <div className="w-full mt-6">
            <Image src={cont} alt={""} className="w-full" />
          </div>
          <p className="font-normal text-base lg:text-lg mt-14">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus non
            montes, in quis faucibus leo vulputate velit tincidunt. Nibh mauris
            quis sit et erat cursus. Habitasse lectus nec cursus phasellus elit
            curabitur felis cras. In lacus, nisi natoque ullamcorper viverra
            fermentum non. Nibh velit lacinia quisque massa lorem facilisis.
            Facilisis id quam sed in ut morbi orci aliquet. Aliquet mattis
            porttitor arcu non erat consectetur fringilla mattis habitasse.
            Dignissim arcu cras elit magna volutpat arcu tincidunt orci. <br />
            <br /> Amet, aliquet adipiscing et eget nunc enim adipiscing ac.
            Viverra velit mi tortor gravida massa fringilla nibh quis. Consequat
            vel netus molestie pretium eget tristique. Ut risus eget lacus
            aliquet netus. Aenean nibh auctor leo in consectetur vel eget.
          </p>
          <h1 className="font-extrabold lg:text-[40px] text-3xl mt-8">
            Secondary Title Comes Here
          </h1>
          <p className="font-normal text-base lg:text-lg mt-14">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus non
            montes, in quis faucibus leo vulputate velit tincidunt. Nibh mauris
            quis sit et erat cursus. Habitasse lectus nec cursus phasellus elit
            curabitur felis cras. In lacus, nisi natoque ullamcorper viverra
            fermentum non. Nibh velit lacinia quisque massa lorem facilisis.
            Facilisis id quam sed in ut morbi orci aliquet. Aliquet mattis
            porttitor arcu non erat consectetur fringilla mattis habitasse.
            Dignissim arcu cras elit magna volutpat arcu tincidunt orci. <br />
            <br /> Amet, aliquet adipiscing et eget nunc enim adipiscing ac.
            Viverra velit mi tortor gravida massa fringilla nibh quis. Consequat
            vel netus molestie pretium eget tristique. Ut risus eget lacus
            aliquet netus. Aenean nibh auctor leo in consectetur vel eget.
          </p>
        </div>
      </div>
      <div className="py-56">
        <Subscribe />
      </div>
      <Footer />
    </div>
  );
}
