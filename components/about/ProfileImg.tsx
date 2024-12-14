import Image from "next/image";

const ProfileImg = () => {
  return (
    <div className="flex justify-center items-center flex-col">
      <Image
        className="rounded-full"
        src="https://img.freepik.com/foto-gratis/renderizacion-personaje-anime-abeja_23-2150963632.jpg?semt=ais_hybrid"
        alt="profile image"
        width={250}
        height={250}
      />
      <p className="text-[50px] font-montserratAlt text-center font-semibold text-[#CC005F] pt-8">
        ABOUT
      </p>
    </div>
  );
};

export default ProfileImg;
