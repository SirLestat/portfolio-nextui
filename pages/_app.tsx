import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { NextUIProvider } from "@nextui-org/react";
import { BackgroundBeams } from "@/components/hero/BackgroundBeams";
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  // useEffect(() => {
  //   const handleContextMenu = (event: MouseEvent) => {
  //     event.preventDefault();
  //   };

  //   const handleKeyDown = (event: KeyboardEvent) => {
  //     if (
  //       (event.ctrlKey && event.shiftKey && event.key === "I") || // Ctrl+Shift+I
  //       (event.ctrlKey && event.shiftKey && event.key === "J") || // Ctrl+Shift+J
  //       (event.ctrlKey && event.key === "U") || // Ctrl+U
  //       (event.key === "F12") // F12
  //     ) {
  //       event.preventDefault();
  //     }
  //   };

  //   const handleSelectStart = (event: Event) => {
  //     event.preventDefault();
  //   };

  //   document.addEventListener("contextmenu", handleContextMenu);
  //   document.addEventListener("keydown", handleKeyDown);
  //   document.addEventListener("selectstart", handleSelectStart);

  //   return () => {
  //     document.removeEventListener("contextmenu", handleContextMenu);
  //     document.removeEventListener("keydown", handleKeyDown);
  //     document.removeEventListener("selectstart", handleSelectStart);
  //   };
  // }, []);

  return (
    <NextUIProvider className="bg-background min-h-screen select-none">
      {/* Escalado del fondo con clases responsivas */}
       <BackgroundBeams className="fixed inset-0 z-1 scale-150 xl:scale-100" /> 
      <div className="relative min-h-screen max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <Component {...pageProps} />
      </div>
    </NextUIProvider>
  );
}
