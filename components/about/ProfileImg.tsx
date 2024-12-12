import Image from "next/image";


const ProfileImg = () => {
  return (
    <div >
      <Image
        className="rounded-[50%]"
        src="https://img.freepik.com/foto-gratis/renderizacion-personaje-anime-abeja_23-2150963632.jpg?semt=ais_hybrid"
        alt="profile image"
        width={250}
        height={250}
      />
      <p className="text-[60px] justify-center flex">ABOUT</p>
    </div>
  );
};

export default ProfileImg;
