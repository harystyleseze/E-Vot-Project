import ElectionPill from "../election-pill";

const GovtElections = () => {
  const activeElections = new Array(7).fill(true);

  return (
    <div className="flex flex-col gap-4">
      {activeElections.map((el, i) => (
        <ElectionPill key={i} electionType={"government"} />
      ))}
    </div>
  );
};

export default GovtElections;
