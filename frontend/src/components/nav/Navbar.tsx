"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ConnectButton } from "@rainbow-me/rainbowkit";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="grid grid-cols-2 grid-rows-2 md:grid-rows-1 md:grid-cols-4 h-24 md:h-16 gap-y-5 items-center justify-between">
      <div className="text-lg font-bold tracking-tighter leading-tight">
        E-VOté
      </div>
      <div className="row-start-2 col-span-full md:row-start-1 md:col-start-2 md:col-span-2 w-full flex items-center justify-center uppercase font-medium gap-5 text-muted ">
        <Link
          href="/elections"
          className={`${pathname.includes("elections") ? "border-b-2 text-primary dark:text-slate-100 dark:border-slate-100 border-primary" : ""} p-1 `}
        >
          Government
        </Link>
        <Link
          href="/election"
          className={`${pathname.includes("institution") ? "border-b-2 dark:text-slate-100 dark:border-slate-100 text-primary border-primary" : ""} p-1 `}
        >
          Institution
        </Link>
        <Link
          href="/kyc"
          className={`${pathname.includes("kyc") ? "border-b-2 dark:text-slate-100 dark:border-slate-100 text-primary border-primary" : ""} p-1 `}
        >
          KYC
        </Link>
      </div>
      <div className="col-start-2 row-span-1 md:col-start-4 flex justify-end text-right">
        <ConnectButton chainStatus="icon" />
      </div>
    </nav>
  );
}
