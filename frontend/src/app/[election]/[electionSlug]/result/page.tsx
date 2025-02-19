import { BackButton } from "@/components/ui/back-button";
import ResultTable from "@/components/result-table";
import { resultData } from "@/lib/fake-data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CandidateAvatar } from "@/components/ui/candidate-avatar";

const ElectionResultPage = () => {
  const data = resultData;
  return (
    <div className="w-full">
      <div className="flex flex-col lg:flex-row lg:items-center items-start gap-4 justify-between min-w-full">
        <div className="flex items-center ">
          <BackButton />
          <h3 className="lg:hidden pl-4">RESULT</h3>
          <div className="sm:hidden justify-between">
            {/* search for mobile*/}
          </div>
        </div>
        <div className="bg-primary p-6 w-full lg:bg-transparent lg:pr-4 rounded-t-lg flex flex-1 items-stretch lg:items-center justify-between">
          <div className="flex flex-col lg:flex-row items-start lg:items-end gap-2 font-medium uppercase">
            <h2 className="text-xl">{data.title}</h2>
            <p>{data.category}</p>
          </div>
          <div className="text-xs md:text-sm lg:text-base flex flex-col gap-4 justify-between items-end">
            Duration: {data.duration.start} - {data.duration.end}
            <div className="flex items-center lg:hidden text-xs gap-1 uppercase">
              <div className="size-1 bg-red-500 rounded-full" />
              restricted
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col-reverse lg:flex-row lg:items-start lg:h-[530px] gap-4 lg:gap-8">
        <div className="flex-[3]">
          {/* desktop search + voters table*/}
          <ResultTable voters={data.voters} />
        </div>
        <Card className="flex-1 rounded-lg overflow-hidden border-0 lg:border  lg:bg-slate-100  lg:dark:bg-slate-800">
          {/* candidates*/}
          <CardHeader className="px-0 lg:px-6">
            <CardTitle className="flex items-end justify-between">
              <h4>Candidates</h4>
              <p>{data.candidates.length}</p>
            </CardTitle>
          </CardHeader>
          <CardContent className="flex space-x-4 w-full px-0 lg:px-6 h-fit overflow-x-scroll pb-6 lg:space-x-0 lg:gap-2 xl:gap-4 lg:grid lg:grid-cols-2 lg:max-h-fit lg:h-full lg:overflow-y-scroll">
            {data.candidates.map((candidate, id) => (
              <CandidateAvatar
                key={id}
                name={candidate.name}
                image={candidate.image}
              />
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ElectionResultPage;
