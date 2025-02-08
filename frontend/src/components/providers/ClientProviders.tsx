"use client";

import { PropsWithChildren } from "react";
import WagmiProvider from "./WagmiProvider";
import { ThemeProvider } from "./ThemeProvider";

export default function ClientProvider({ children }: PropsWithChildren) {
  return (
    <>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <WagmiProvider>{children}</WagmiProvider>
      </ThemeProvider>
     
    </>
  );
}
