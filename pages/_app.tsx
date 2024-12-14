import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { NextUIProvider } from "@nextui-org/react";
import { BackgroundBeams } from "@/components/hero/BackgroundBeams";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider className="bg-background min-h-screen">
      <BackgroundBeams className="fixed inset-0 z-1" />
      <div className="relative min-h-screen">
        <Component {...pageProps} />
      </div>
    </NextUIProvider>
  );
}
