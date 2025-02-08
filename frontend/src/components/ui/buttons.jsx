"use client";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { useWeb3ModalAccount } from "web3modal-web3js/react";

export const CheckIsConnectedButton = () => {
  const router = useRouter();

  const { isConnected } = useWeb3ModalAccount();

  // check if Metamask is installed
  // if installed, initialize Web3JS
  // request user to connect to Metamask

  const handleCheckConnect = () => {
    if (isConnected) {
      router.push("/kyc");
    } else {
      toast.error("Please connect your wallet");
    }
  };

  return (
    <button
      onClick={handleCheckConnect}
      className="space-x-4 bg-[#5773fb] text-white rounded-lg w-auto py-4 px-6 my-10 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
    >
      Complete KYC To Get Started
    </button>
  );
};
