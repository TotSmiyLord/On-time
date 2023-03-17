import ArrowUp from "@/assets/icon/ArrowUp";

export default function Subscribe() {
  return (
    <div>
      <div className="container mx-auto">
        <h1 className="font-extrabold text-3xl text-center">
          Subscribe to our Newsletter
        </h1>
        <p className="font-normal text-sm lg:text-xl text-center mt-5">
          Subscribe to our Newsletter to stay updated and get <br /> latest news
          and cases
        </p>
        <div className="flex justify-center">
          <div className="lg:flex mx-auto justify-center mt-10 gap-5">
            <input
              type="text"
              className="py-4 px-6 outline-none border border-black rounded-[36px] w-96"
              placeholder="exemple@mail.com"
            />
            <button
              type="submit"
              className="flex mx-auto mt-3 lg:mt-0 justify-between gap-3 items-center bg-none border bg-[#D63E0E] active:bg-[#B2330B] sm:py-4 sm:px-6 py-[10px] px-4 rounded-[36px] sm:text-lg text-sm text-white"
            >
              Subscribe <ArrowUp />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
