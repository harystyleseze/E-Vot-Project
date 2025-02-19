import { BackButton } from "@/components/ui/back-button";
import ResultTable from "@/components/result-table";
import { resultData } from "@/lib/fake-data";
import { Card } from "@/components/ui/card";

const ElectionResultPage = () => {
  const data = resultData;
  return (
    <div className="min-w-full">
      <div className="flex items-center">
        <div>
          <BackButton />
          <div className="sm:hidden flex justify-between">
            {/* search for mobile*/}
          </div>
        </div>
        <div className="flex flex-1 items-center justify-between">
          <div className="">
            <h2>{data.title}</h2>
          </div>
          <div className=""></div>
        </div>
      </div>
      <div className="w-full flex flex-col-reverse md:flex-row gap-8">
        <div className="flex-[3]">
          {/* desktop search + voters table*/}
          <ResultTable voters={data.voters} />
        </div>
        <Card className="flex-1 rounded-lg overflow-hidden dark:bg-slate-800">
          {/* candidates*/}
        </Card>
      </div>
    </div>
  );
};

export default ElectionResultPage;
