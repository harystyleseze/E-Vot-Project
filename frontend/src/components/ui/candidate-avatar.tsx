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
    }
}) => {
  return (
    <div className="relative size-full aspect-square rounded-sm min-w-24 overflow-hidden">
      <Image
        src={image}
        alt={`Election candidate: ${name}`}
        fill
        className="object-cover object-center"
      />
      <div className="absolute bottom-0.5 inset-x-0.5 p-0.5 rounded bg-slate-50/30 text-[8px] backdrop-blur-sm opacity-100">
        <div className="flex items-center justify-between" >
          <p>Name: </p>
          <p>{name}</p>
        </div> 
        <hr className="h-px border-slate-400 opacity-50" />
       { electionResult && <div className="flex items-center justify-between " >
          <p>Votes: </p>
          <p>{electionResult.votes}</p>
        </div> }
      </div>
      <div className="bg-green-500 size-5 rounded absolute top-1 right-1" />
    </div>
  );
};
