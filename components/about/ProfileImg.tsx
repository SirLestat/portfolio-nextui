import Image from "next/image";
import me from "/public/about/me2.jpg";

const ProfileImg = () => {
  return (
    <div className="flex justify-center items-center flex-col">
      <div className="w-[180px] lg:w-[230px] h-[180px] lg:h-[230px] overflow-hidden rounded-full ">
        <Image
          className="object-cover   "
          src={me}
          alt="profile image"
          width={250}
          height={250}
        />
      </div>
      <p className="text-[40px] sm:text-[40px] md:text-[45px] lg:text-[50px] xl:text-[50px] font-montserratAlt text-center font-semibold text-[#CC005F] pt-8">
        ABOUT
      </p>
    </div>
  );
};

export default ProfileImg;
