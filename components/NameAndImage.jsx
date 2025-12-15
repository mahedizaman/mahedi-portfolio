import ImageCircle from "./ProfileCircle"

export default function NameAndImage() {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-between mb-10 mx-auto gap-6 sm:gap-0">
      <h3 className="font-bold text-xl sm:text-2xl text-center sm:text-left text-gray-400 cursor-pointer">
        {`<Md Mahedi Zaman />`}
      </h3>

     <ImageCircle/>
    </div>
  );
}


