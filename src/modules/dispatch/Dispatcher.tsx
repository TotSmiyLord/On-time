import Footer from "@/components/Footer";
import Form from "@/components/Form";
import Navbar from "@/components/NavbarWhite";
import React from "react";

export default function Dispatcher() {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto pt-28 px-5 lg:px-72 lg:pt-60">
        <h1 className="font-extrabold lg:text-[40px] text-3xl mt-8">
          A Latest News Title Comes Here
        </h1>
        <p className="font-normal text-base lg:text-xl mt-5">
          Ontario, US / Full-time
        </p>
        <span className="font-normal text-base text-[#707070] mt-5">
          Posted on 12 Feb, 2022
        </span>
        <h1 className="font-extrabold lg:text-[40px] text-3xl mt-10">
          Summary
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
          vel netus molestie pretium eget tristique. Ut risus eget lacus aliquet
          netus. Aenean nibh auctor leo in consectetur vel eget.
        </p>
        <h1 className="font-extrabold lg:text-[40px] text-3xl mt-10">
          Key Qualifications
        </h1>
        <ul className="list-inside list-disc mt-10">
          <li className="mt-4 font-normal text-base lg:text-lg">
            5+ years social media and communications experience (owned and/or
            earned channels)
          </li>
          <li className="mt-4 font-normal text-base lg:text-lg">
            Quick learner and self-starter with excellent communication,
            collaboration, and planning skills, demonstrating meticulous
            attention to detail
          </li>
          <li className="mt-4 font-normal text-base lg:text-lg">
            Data-informed decision-maker and risk-assessor, with experience
            employing social listening, trends analysis, and audience insights,
            as well as cross-functional guidance and input.
          </li>
          <li className="mt-4 font-normal text-base lg:text-lg">
            Comfortable handling sensitive topics and issues on behalf of a
            massive brand
          </li>
          <li className="mt-4 font-normal text-base lg:text-lg">
            Able to move quickly and nimbly in a fast-paced environment with a
            high level of cross-functional alignment and collaboration{" "}
          </li>
          <li className="mt-4 font-normal text-base lg:text-lg">
            Flexible to work weekends as needed
          </li>
        </ul>
        <h1 className="font-extrabold lg:text-[40px] text-3xl mt-20">
          Description
        </h1>
        <p className="font-normal text-base lg:text-lg mt-8">
          Document, maintain and communicate social marketing security
          protocols, i.e. requirements, processes, timelines, tools, etc.
        </p>
        <p className="font-normal text-base lg:text-lg mt-8">
          Manage end-to-end process around identifying crises, assessing
          severity, escalating to stakeholders, and determining the best plan of
          action on social across lines of business
        </p>
        <p className="font-normal text-base lg:text-lg mt-8">
          Liaise with cross-functional partners in legal, business affairs,
          corporate comms, PR, and marketing ops as needed to ensure brand
          safety, security, privacy and compliancy on social
        </p>
        <p className="font-normal text-base lg:text-lg mt-8">
          Facilitate contracts with social creators and partners
        </p>
        <p className="font-normal text-base lg:text-lg mt-8">
          Develop and communicate disclosure requirements and compliance policy
          guidelines with talent, creators and partners in close partnership
          with legal and business affairs
        </p>
      </div>
      <Form />
      <Footer />
    </div>
  );
}
