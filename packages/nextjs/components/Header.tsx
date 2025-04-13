// "use client";

// import React, { useCallback, useRef, useState } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { hardhat } from "viem/chains";
// import { Bars3Icon, BugAntIcon } from "@heroicons/react/24/outline";
// import { FaucetButton, RainbowKitCustomConnectButton } from "@/components/scaffold-eth";
// import { useOutsideClick, useTargetNetwork } from "@/hooks/scaffold-eth";

// type HeaderMenuLink = {
//   label: string;
//   href: string;
//   icon?: React.ReactNode;
// };

// export const menuLinks: HeaderMenuLink[] = [
//   {
//     label: "Home",
//     href: "/",
//   },
//   {
//     label: "Debug Contracts",
//     href: "/debug",
//     icon: <BugAntIcon className="h-4 w-4" />,
//   },
// ];

// /**
//  * Site header
//  */
// export const Header = () => {
//   const { targetNetwork } = useTargetNetwork();
//   const isLocalNetwork = targetNetwork.id === hardhat.id;

//   const [isDrawerOpen, setIsDrawerOpen] = useState(false);
//   const burgerMenuRef = useRef<HTMLDivElement>(null);
//   useOutsideClick(
//     burgerMenuRef,
//     useCallback(() => setIsDrawerOpen(false), []),
//   );

//   return (
//     <div className="sticky lg:static top-0 navbar bg-base-100 min-h-0 flex-shrink-0 justify-between z-20 shadow-md shadow-secondary px-0 sm:px-2">
//       <div className="navbar-end flex-grow mr-4">
//         <RainbowKitCustomConnectButton />
//         {isLocalNetwork && <FaucetButton />}
//       </div>
//     </div>
//   );
// };
