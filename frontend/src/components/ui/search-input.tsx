import { cn } from "@/lib/utils";
import { Search } from "lucide-react";
import * as React from "react";

const SearchInput = React.forwardRef<
  HTMLInputElement,
  React.ComponentProps<"input">
>(({ className, placeholder, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "flex flex-col items-start justify-center relative h-12 rounded-3xl bg-slate-100 dark:bg-slate-800 w-full",
        className,
      )}
    >
      <Search className="h-12 absolute inset-y-0 left-4 translate-x-2" />
      <input
        placeholder={placeholder ?? "Filter address..."}
        className="bg-transparent absolute inset-y-1 left-14 right-4 focus:outline-none active:outline-none"
        {...props}
      />
    </div>
  );
});

export default SearchInput;
