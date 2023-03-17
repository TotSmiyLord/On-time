import Image from "next/image";
import cont from ".././assets/Mask group (10).png";

export default function ContainerCard() {
  return (
    <div>
      <div className="lg:w-[640px] w-[350px]">
        <Image src={cont} alt={""} />
        <div className="w-[395px]">
          <h1 className="font-extrabold lg:text-[40px] text-3xl mt-8">
            A Latest News Title Comes Here
          </h1>
          <p className="font-normal text-base lg:text-xl mt-3">
            A latest news secondary title comes here
          </p>
        </div>
      </div>
    </div>
  );
}
