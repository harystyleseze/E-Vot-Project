import { Menu, User2 } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import Link from "next/link";
import Image from "next/image";

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <div className="border-1 border-primary p-1 rounded-lg overflow-hidden">
          <Menu className="size-6" />
        </div>
      </SheetTrigger>
      <SheetContent side={"left"}>
        <SheetHeader>
          <SheetTitle className="flex flex-row gap-2 items-center">
          <Image
              width={60}
              height={60}
              src="/assets/Logo.png"
              alt="logo" />
            <Link href="/">E-VOT</Link>
          </SheetTitle>
        </SheetHeader>
        <div className="space-y-2 flex flex-col mt-4">
          <div className="w-full ">
            <Link
              href="/"
              className="flex gap-2 items-center py-2.5 px-4 rounded-lg"
            >
              <User2 />
              Dashboard
            </Link>
          </div>

          <div className="w-full ">
            <Link
              href="/elections"
              className="flex gap-2 items-center py-2.5 px-4 rounded-lg"
            >
              <User2 />
              Vote
            </Link>
          </div>

          <div className="w-full ">
            <Link
              href="/addElection"
              className="flex gap-2 items-center py-2.5 px-4 rounded-lg"
            >
              <User2 />
              Create an Election
            </Link>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
