import ElectionPill from "@/components/election-pill";

const GovtElectionResult = () => {
  const elections = new Array(7).fill(0);

  return (
    <div>
      <ElectionPill />
    </div>
  );
};

export default GovtElectionResult;
