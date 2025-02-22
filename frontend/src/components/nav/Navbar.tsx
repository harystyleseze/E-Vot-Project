"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import SearchInput from "../ui/search-input";

export default function Navbar() {
  const pathname = usePathname();
  const showSearchbar =
    pathname === "/government" || pathname === "/institution";
  console.log(pathname);

  return (
    <nav
      className={`grid grid-cols-2 ${showSearchbar ? "grid-rows-3" : "grid-cols-2"}  md:grid-rows-1 gap-y-3 md:grid-cols-4 h-fit md:h-16 md:gap-y-5 pt-4 items-center justify-between`}
    >
      <div className="text-lg font-bold tracking-tighter leading-tight">
        E-VOté
      </div>
      <div className="flex flex-col items-center justify-center row-start-2 row-span-2 col-span-full md:row-start-1 md:col-start-2 md:col-span-2 w-full">
        {showSearchbar && (
          <div className="flex md:hidden py-3 w-full ">
            <SearchInput placeholder="Search ..." className="" />
          </div>
        )}
        <div className="flex items-center justify-center uppercase font-medium gap-5 text-muted ">
          <Link
            href="/government"
            className={`${pathname.includes("government") ? "border-b-2 text-primary dark:text-slate-100 dark:border-slate-100 border-primary" : ""} p-1 `}
          >
            Government
          </Link>
          <Link
            href="/institution"
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
      </div>
      <div className="col-start-2 row-span-1 md:col-start-4 flex justify-end text-right">
        <ConnectButton chainStatus="icon" />
      </div>
    </nav>
  );
}
