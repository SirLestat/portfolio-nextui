const inputStyles = {
    base: [
      "nextui-input-underline",
      "group-data-[focus=true]:!border-[#FFF]", // Borde en foco 
    ].join(" "),
  
    inputWrapper: [
      "!border-b-2", 
      "!border-[#808080]", // Color base de la línea inferior (gris medio)
      "hover:!border-[#FFF]", // Color de hover (blanco)
      "group-data-[focus=true]:!border-[#FFF]", // Color de la línea cuando está en foco 
      "!transition-colors", 
  
      "before:!bg-white", // Color de fondo de la barra de progreso (blanco)
      "after:!bg-[#FF1493]", // Color de fondo de la barra de progreso (rosa principal)
  
      "group-data-[focused=true]:before:!bg-white", // Color de la barra en foco (blanco)
      "group-data-[focused=true]:after:!bg-[#FF1493]", // Color de la barra en foco (rosa principal)
    ].join(" "),
  
    input: [
      "!border-none", 
      "!ring-0", 
      "!outline-none", 
      "focus:!ring-0", 
      "focus:!border-none", 
      "focus:!outline-none", 
    ].join(" "),
  
    label: [
      "text-[#4a4a4a]", // Color base del label (gris oscuro)
      "group-data-[focus=true]:!text-[#FFFFFF]", // Color del label en focus (blanco)
      "group-hover:text-[#FFFFFF]", // Color del label en hover (blanco)
      "group-data-[filled=true]:text-[#4a4a4a]", // Color del label cuando el input tiene valor (gris oscuro)
      "group-data-[filled=true]:group-hover:text-[#FFFFFF]", // Color del label en hover cuando el input tiene valor (blanco)
      "transition-colors", 
    ].join(" "),
  
    error: [
      "group-data-[invalid=true]:!border-[#FF4500]", // Color de borde cuando hay un error (rojo-naranja)
    ].join(" "),
  };
  
  export default inputStyles;
  