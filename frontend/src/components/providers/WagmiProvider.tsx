import "@rainbow-me/rainbowkit/styles.css";
import {
  getDefaultConfig,
  RainbowKitProvider,
  darkTheme,
  lightTheme,
} from "@rainbow-me/rainbowkit";
import { WagmiProvider as WagmiClient } from "wagmi";
import { mainnet, polygon, optimism, arbitrum, base } from "wagmi/chains";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { PropsWithChildren } from "react";

const config = getDefaultConfig({
  appName: process.env.PROJECT_NAME || "PROJECT_NAME",
  projectId: process.env.PROJECT_ID || "YOUR_PROJECT_ID",
  chains: [mainnet, polygon, optimism, arbitrum, base],
  ssr: true, // If dApp uses server side rendering (SSR)
});

const queryClient = new QueryClient();

const WagmiProvider = ({ children }: PropsWithChildren) => {
  return (
    <WagmiClient config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider
          theme={{
            lightMode: lightTheme(),
            darkMode: darkTheme({
              accentColor: "#1F2C64",
              accentColorForeground: "white",
              borderRadius: "large",
              fontStack: "system",
              overlayBlur: "none",
            }),
          }}
        >
          {children}
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiClient>
  );
};

export default WagmiProvider;
