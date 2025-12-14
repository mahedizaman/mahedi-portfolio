import Image from "next/image";

const NameAndImage = () => {
  return (
    <div>
      <div className="flex items-center justify-between mb-10">
        <h3 className="font-bold text-xl mb-3">{`<Md Mahedi Zaman />`}</h3>
        <div className="relative w-56 h-56 flex items-center justify-center">
          <div className="absolute inset-0 rounded-full bg-linear-to-r from-purple-500 via-pink-500 to-blue-500 animate-spin-slow"></div>

          <div className="absolute inset-2 rounded-full bg-white"></div>

          <div className="relative w-48 h-48 rounded-full overflow-hidden">
            <Image
              src="/myImages.jpg"
              alt="myImage"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NameAndImage;
