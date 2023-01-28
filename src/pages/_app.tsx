import { BoardContextProvider } from "@/contexts/BoardContext";
import { ReactQueryProvider } from "@/contexts/ReactQueryProvider";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({
  Component,
  pageProps,
}: AppProps) {
  return (
    <ReactQueryProvider>
      <BoardContextProvider>
        <Component {...pageProps} />
      </BoardContextProvider>
    </ReactQueryProvider>
  );
}
