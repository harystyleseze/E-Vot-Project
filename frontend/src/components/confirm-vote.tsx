import * as React from "react";

import { cn } from "@/lib/utils";
import { useMediaQuery } from "@/hooks/use-media-query";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

export function VoteDrawerDialog() {
  const [open, setOpen] = React.useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button className="w-full uppercase py-5">Vote</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Confirm your selection</DialogTitle>
            <DialogDescription>
              You can not change this selction.
            </DialogDescription>
          </DialogHeader>
          <ConfimSelection setOpen={setOpen} />
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button className="w-full uppercase py-5">Vote</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="text-left">
          <DrawerTitle>Confirm your selection</DrawerTitle>
          <DrawerDescription>
            You can not change this selction.
          </DrawerDescription>
        </DrawerHeader>
        <ConfimSelection setOpen={setOpen} className="px-4" />
        <DrawerFooter className="pt-2">
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}

function ConfimSelection({
  className,
  setOpen,
}: React.ComponentProps<"div"> & { setOpen: React.SetStateAction }) {
  function handleOnClickNo() {
    setOpen(false);
  }

  function handleOnClickYes() {
    setOpen(false);
  }

  return (
    <div className={cn("flex flex-col md:flex-row gap-4 w-full", className)}>
      <Button onClick={handleOnClickYes} className="flex-1">
        Yes
      </Button>
      <Button className="flex-1" variant="outline" onClick={handleOnClickNo}>
        No
      </Button>
    </div>
  );
}
