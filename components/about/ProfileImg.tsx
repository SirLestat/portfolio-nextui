import Image from "next/image";

const ProfileImg = () => {
  return (
    <div className="flex justify-center items-center flex-col">
      <Image
        className="rounded-full w-[180px] lg:w-[250px]"
        src="/profileImage.jpg"
        alt="profile image"
        width={250}
        height={250}
      />
      <p className="text-[40px] sm:text-[40px] md:text-[45px] lg:text-[50px] xl:text-[50px] font-montserratAlt text-center font-semibold text-[#CC005F] pt-8">
        ABOUT
      </p>
    </div>
  );
};

export default ProfileImg;
