import { CheckIsConnectedButton } from "@/components/ui/buttons";
import { Target } from "lucide-react";
import Link from "next/link";

// import { Web3 } from "web3";
// import { useWeb3ModalAccount } from "web3modal-web3js/react";

const features = [
  {
    title: "Easy Registration",
    description: "We offer seamless registration process to quickly get you onboard",
  },
  {
    title: "Secure Voting System",
    description: "Secure voting process with no hitches",
  },
  {
    title: "Real-time Result",
    description: "Verifiable and transparent results",
  },
  {
    title: "Stay Anonymous",
    description: "Vote without fear of being chastised for your choice",
  },
  {
    title: "Vote Candidates",
    description: "Vote your preferred candidate without fear or pressure",
  },
  {
    title: "View Election Results",
    description: "Watch your favorite candidate win",
  },
];

export default function HOME() {
  return (
    <div className="">
      <div className="home-bg text-left uppercase py-10 px-20 flex justify-between items-center pt-20">
        <div>
          <div className="relative md:flex md:flex-col items-center justify-center">
            <p className="text-[69px] font-extrabold text-[#5C28D4] form-item">
              Secure,
            </p>
            <p className="text-[69px] font-extrabold text-[#5C28D4] form-item">
              <span className="bg-[#5c28d4] text-white line-through">
                Transpar
              </span>
              <span>ent</span>
            </p>
            <p className="text-[40px] font-[700] text-[#5C28D4] form-item">
              & Tamper-Proof Voting
            </p>
            <p className="text-[20px] text-[#9f9f9f] form-item">
              Vote with confidence, knowing your voice truly counts
            </p>
            <img
              src="./assets/rocket.png"
              alt=""
              className="absolute top-[-20vh] left-[-5vw] form-item"
            />
          </div>

          <button className="space-x-4 uppercase bg-[#5C28D4] text-white rounded-lg w-[9rem] h-[3rem] mt-16 form-item transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 form-item">
            Learn More
          </button>
        </div>
        <div className="z-20 form-item">
          <img src="./assets/astro.png" alt="" className="h-[90%]" />
        </div>
      </div>
      <div className="flex items-center justify-center form-item">
        <img src="./assets/e-vot.png" alt="" />
      </div>
      <div className="pt-10 px-8 md:px-20 mt-10">
        <div className="py-8">
          <p className="text-4xl font-bold tracking-tighter leading-tight form-item">Welcome To E-vot</p>
          <p className="form-item flex items-center gap-2"> <hr className="w-10 border-primary" /> Vote to make your voice heard</p>
        </div>
        <div className="grid grid-cols-2 grid-rows-3 md:grid-cols-3 md:grid-rows-2 gap-4 md:gap-8 form-item">
          {features.map((feature, index) => (
            <div key={index} className="shadow-md border rounded-lg px-6 py-10 flex flex-col gap-2 justify-center items-start form-item">
              <div className="flex flex-col items-start gap-2">
                <Target />
                {/* icon */}
                <p className="text-2xl leading-tight tracking-tighter font-medium">{feature.title}</p>
              </div>
              <p className="text-sm font-normal text-[#8F96A1]">{feature.description}</p>
            </div>
          ))}
        </div>
        <div className="flex justify-center items-center w-full">
          <CheckIsConnectedButton />
        </div>
      </div>
    </div>
  );
}
