const candidates = new Array(10).fill({
  name: "Chukwuemeka Daniel",
  image: "/assets/candidate1.avif",
});

const voter = {
  id: "10024435",
  address: "0x23...90",
  elected: candidates[0],
  party: "APC",
  votedAt: "01-21-25:12.35",
};

export type VoterT = typeof voter;

const voters: VoterT[] = new Array(40).fill(voter);

export const resultData = {
  title: "Senate Election",
  category: "Lagos Government",
  duration: {
    start: "10-11-24",
    end: "12-05-25",
  },
  candidates,
  voters,
};
