import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { NextUIProvider } from "@nextui-org/react";
import { BackgroundBeams } from "@/components/hero/BackgroundBeams";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider className="bg-background min-h-screen">
      {/* Escalado del fondo con clases responsivas */}
       <BackgroundBeams className="fixed inset-0 z-1 scale-150 xl:scale-100" /> 
      <div className="relative min-h-screen max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <Component {...pageProps} />
      </div>
    </NextUIProvider>
  );
}
