import team from ".././assets/Mask group (5).png";
import Image from "next/image";

export default function TeamCard() {
  return (
    <div>
      <div className="w-[280px] lg:w-96">
        <Image src={team} alt={""} />
        <h1 className="text-3xl md:text-4xl leading-[42px] font-medium mt-6">
          Name Surname
        </h1>
        <p className="text-xl font-light">Position</p>
      </div>
    </div>
  );
}
