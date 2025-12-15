import Image from "next/image";

const NameAndImage = () => {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-between mb-10 mx-auto gap-6 sm:gap-0">
      <h3 className="font-bold text-xl sm:text-2xl text-center sm:text-left text-gray-700">
        {`<Md Mahedi Zaman />`}
      </h3>

      <div className="relative w-40 h-40 sm:w-56 sm:h-56 flex items-center justify-center">
        <div className="absolute inset-0 rounded-full bg-linear-to-r from-purple-500 via-pink-500 to-blue-500 animate-spin-slow"></div>

        <div className="absolute inset-2 rounded-full bg-white"></div>

        <div className="relative w-32 h-32 sm:w-48 sm:h-48 rounded-full overflow-hidden">
          <Image
            src="/myImages.jpg"
            alt="myImage"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default NameAndImage;
