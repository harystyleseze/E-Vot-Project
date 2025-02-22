import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import GovtElections from "@/components/govt/elections";
import GovtElectionResult from "@/components/govt/results";
import InstituteResult from "@/components/institute/results";
import InstituteElections from "@/components/institute/elections";
import SearchInput from "@/components/ui/search-input";

export function generateStaticParams() {
  return ["government", "institution"].map((el) => ({
    election: el,
  }));
}

export default async function Elections({
  params,
}: {
  params: Promise<{ election: string }>;
}) {
  const { election } = await params;
  const tabs = ["elections", "results"];

  console.log("Slug", election, "\nparams", await params);
  const isGovernment = election === "government";

  return (
    <div>
      <div className="py-5">
        <TabGroup>
          <div className="flex flex-row gap-4 md:gap-6 lg:gap-8 items-center justify-between">
            <TabList className="bg-white dark:bg-slate-100 rounded-[30px] w-full flex-[2] max-w-md mx-auto flex py-1 px-1 justify-center text-primary dark:text-muted items-center">
              {tabs.map((tab) => (
                <Tab
                  key={tab}
                  className="rounded-3xl uppercase w-1/2 py-3  font-semibold text-accent dark:text-slate-900 focus:outline-none data-[selected]:bg-primary data-[selected]:text-white dark:data-[selected]:text-slate-100 dark:data-[selected]:bg-slate-900 data-[hover]:bg-slate-200 data-[focus]:outline-1 data-[focus]:outline-white"
                >
                  {tab}
                </Tab>
              ))}
            </TabList>
            <div className="flex-1 hidden md:flex md:w-1/2 md:ml-8 lg:ml-16">
              {/* search input */}
              <SearchInput placeholder="Search" />
            </div>
          </div>
          <TabPanels className="py-5">
            <TabPanel>
              {isGovernment ? <GovtElections /> : <InstituteElections />}
            </TabPanel>
            <TabPanel>
              {isGovernment ? <GovtElectionResult /> : <InstituteResult />}
            </TabPanel>
          </TabPanels>
        </TabGroup>
      </div>
    </div>
  );
}
