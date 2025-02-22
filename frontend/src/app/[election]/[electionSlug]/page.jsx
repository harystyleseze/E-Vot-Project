"use client";
import { BackButton } from "@/components/ui/back-button";
import { VoteDrawerDialog } from "@/components/confirm-vote";
import { CandidateAvatar } from "@/components/ui/candidate-avatar";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { useState } from "react";

export default function Page() {
  const [elected, setElected] = useState();

  const candidates = new Array(7).fill({
    img: "/assets/candidate1.avif",
    candidate: "Emeka Peters",
  });

  return (
    <div className="w-full">
      <div className="py-4">
        <BackButton />
      </div>

      <Card className="bg-transparent md:bg-white dark:md:bg-transparent border-0 md:pb-6">
        <CardHeader className="bg-primary  md:bg-white dark:md:bg-primary dark:md:text-slate-100 rounded-t-lg flex flex-row text-white md:text-slate-900 items-end justify-between">
          <div className="flex flex-col items-start gap-4">
            <span>Lagos Election</span>
            <CardTitle className="uppercase ">Senate election</CardTitle>
          </div>
          <div className="text-xs uppercase flex items-center gap-1">
            <div className="size-1 bg-red-500 rounded-full" />
            Restricted
          </div>
        </CardHeader>
        <CardContent className="mb-24 md:mb-0 h-full py-6 overflow-y-scroll grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-7">
          {candidates.map((cand, idx) => (
            <div
              key={idx}
              className={cn(
                "h-32 md:h-full transition-all rounded-lg",
                elected === idx && "border border-slate-700 relative",
              )}
              onClick={() => setElected(idx)}
            >
              {elected === idx && (
                <div className="absolute inset-0 bg-slate-900 z-10 opacity-50 transition-all" />
              )}
              <CandidateAvatar image={cand.img} name={cand.candidate} />
            </div>
          ))}
        </CardContent>
        <CardFooter className="fixed bottom-0 inset-x-0 shadow md:shadow-none h-20 z-20 backdrop-blur-md md:bg-transparent dark:md:bg-transparent flex flex-col py-1 gap-2 md:relative md:items-start">
          <p className="text-sm">{candidates.length} Candidates</p>
          <VoteDrawerDialog />
        </CardFooter>
      </Card>
    </div>
  );
}
