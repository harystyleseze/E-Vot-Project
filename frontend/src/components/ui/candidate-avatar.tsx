import Image from "next/image";

export const CandidateAvatar = ({
  name,
  image,
  electionResult,
}: {
  name: string;
  image: string;
  electionResult?: {
    position: string;
    votes: string;
  };
}) => {
  return (
    <div className="relative size-full  aspect-square rounded-sm min-w-[120px] overflow-hidden">
      <Image
        src={image}
        alt={`Election candidate: ${name}`}
        fill
        className="object-cover object-center"
      />
      <div className="absolute bottom-0.5 inset-x-1 p-1 rounded bg-slate-50/30 text-[10px] backdrop-blur-sm opacity-100">
        <div className="flex items-center gap-1 justify-between">
          <p>Name: </p>
          <p className="text-right truncate">{name}</p>
        </div>
        <hr className="h-px border-slate-400 opacity-50" />
        {electionResult && (
          <div className="flex items-center justify-between ">
            <p>Votes: </p>
            <p className="text-right">{electionResult.votes}</p>
          </div>
        )}
      </div>
      <div className="bg-green-500 size-5 rounded absolute top-1 right-1" />
    </div>
  );
};
