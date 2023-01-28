import { BoardContextProvider } from "@/contexts/BoardContext";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({
  Component,
  pageProps,
}: AppProps) {
  return (
    <>
      <BoardContextProvider>
        <Component {...pageProps} />
      </BoardContextProvider>
    </>
  );
}
