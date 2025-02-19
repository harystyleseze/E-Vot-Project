import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { CandidateAvatar } from "./ui/candidate-avatar";
import { cn } from "@/lib/utils";

/*
 * @type {ElectionPillProps}
 * */
// const ElectionPill = ({electionType}: {electionType: string}) => {
const ElectionPill = ({ electionType }) => {
  const candidates = new Array(7).fill({
    img: "/assets/candidate1.avif",
    candidate: "Emeka Peters",
  });
  return (
    <div className="grid grid-cols-2 grid-rows-[auto_50px_1fr] md:grid-cols-9 md:grid-rows-1 w-full items-center rounded-xl p-4 bg-white dark:bg-slate-700">
      <div className="flex flex-col gap-2 md:col-span-2">
        <h3 className="text-xs md:text-base">Lagos Government</h3>
        <h2 className="text-sm lg:text-2xl uppercase font-medium  leading-tight">
          Senate Election
        </h2>
        <h4 className="flex items-center text-xs gap-1 uppercase">
          <div className="size-1 bg-red-500 rounded-full" />
          restricted
        </h4>
      </div>
      <div className="col-start-2 row-span-1 md:col-start-3 md:col-span-6 w-full relative">
        <div className="">
          <div className="hidden md:inline-flex space-x-3 w-full overflow-x-scroll scrollbar-hide">
            {candidates.map((candidate, i) => (
              <CandidateAvatar
                key={i}
                image={candidate.img}
                name={candidate.candidate}
              />
            ))}
          </div>
          <div
            className={`md:hidden relative min-h-24 size-full max-w-fit alig`}
          >
            {candidates.map((candidate, i) => (
              <div
                key={i}
                className={`absolute inset-0 ${i === candidates.length - 1 ? "transform translate-x-10" : ""} ${i === candidates.length - 2 ? "transform translate-x-5" : ""} `}
              >
                <CandidateAvatar
                  name={candidate.candidate}
                  image={candidate.img}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="row-start-2 col-span-2 md:col-auto md:row-span-1 w-full pt-3 md:pt-0 text-center md:pl-4">
        <Link
          href={`/${electionType}/one`}
          className={cn(buttonVariants(), "w-full")}
        >
          Open
        </Link>
      </div>
    </div>
  );
};

export default ElectionPill;

/*
 *  @typedef {Object} ElectionPillProps
 *  @property {string}  title
 *  @property {string}  topic
 *  @property {number}  access
 *  @property {Object} delegates
 *
 * */
