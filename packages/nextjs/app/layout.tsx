// // import "@aptos-labs/wallet-adapter-ant-design/dist/index.css";
// import { PropsWithChildren } from "react";
// import { Inter as FontSans } from "next/font/google";
// import { WagmiProvider } from "wagmi";
// import "./globals.css";
// import { ReactQueryClientProvider } from "@/components/ReactQueryClientProvider";
// import { ThemeProvider } from "@/components/ThemeProvider";
// // import { WalletProvider } from "@/components/WalletProvider";
// import { Toaster } from "@/components/ui/toaster";
// import { cn } from "@/lib/utils";
// import type { Metadata } from "next";
// import { wagmiConfig } from "@/services/web3/wagmiConfig";
// const fontSans = FontSans({
//   subsets: ["latin"],
//   variable: "--font-sans",
// });
// export const metadata: Metadata = {
//   title: "TaiShang AI SaaS System",
//   description: "Make AI Agents as the Labors for your business!",
// };
// export default function RootLayout({ children }: PropsWithChildren) {
//   return (
//     <html lang="en" suppressHydrationWarning>
//       <body
//         className={cn(
//           "flex justify-center min-h-screen bg-background font-sans antialiased bg-white dark:bg-gray-800",
//           fontSans.variable,
//         )}
//       >
//         <WagmiProvider config={wagmiConfig}>
//           <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
//             <ReactQueryClientProvider>
//               {/* <WalletProvider> */}
//               {children}
//               <Toaster />
//               {/* </WalletProvider> */}
//             </ReactQueryClientProvider>
//           </ThemeProvider>
//         </WagmiProvider>
//       </body>
//     </html>
//   );
// }
import "@rainbow-me/rainbowkit/styles.css";
import { ScaffoldEthAppWithProviders } from "@/components/ScaffoldEthAppWithProviders";
import { ThemeProvider } from "@/components/ThemeProvider";
import "@/styles/globals.css";
import type { Metadata } from "next";
import { getMetadata } from "@/utils/scaffold-eth/getMetadata";
import { Inter as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "TaiShang AI SaaS System",
  description: "Make AI Agents as the Labors for your business!",
};

const ScaffoldEthApp = ({ children }: { children: React.ReactNode }) => {
  return (
    <html suppressHydrationWarning>
      <body
        className={cn(
          "flex justify-center min-h-screen bg-background font-sans antialiased bg-white dark:bg-gray-800",
          fontSans.variable,
        )}
      >
        <ThemeProvider enableSystem>
          <ScaffoldEthAppWithProviders>{children}</ScaffoldEthAppWithProviders>
        </ThemeProvider>
      </body>
    </html>
  );
};

export default ScaffoldEthApp;
