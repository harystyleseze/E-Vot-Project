import KycForm from "@/components/kyc-form";
import { CardContent, Card } from "@/components/ui/card";

const user = {
  email: "jujuo1@cosmos.com",
  nin: "20244039423",
  pvc: "3295439043",
}
export default function KycPage() {
  return (
    <div className="py-6">
      <Card>
        <CardContent className="flex pt-6 w-full flex-col md:flex-row gap-8 md:gap-6 lg:gap-8">
          <div className="md:flex-1 flex flex-col "> 
          <div className="flex p-6 flex-col space-y-4 h-fit rounded-lg border dark:border-slate-800 shadow-md text-sm capitalize">
            <div className="flex flex-col gap-4" >
              <h4 className="font-bold text-xs" >Email</h4>
              <p>{user.email}</p>
            </div>
            <div className="flex flex-col gap-4" >
              <h4 className="font-bold text-xs" >NIN</h4>
              <p>{user.nin}</p>
            </div>
            <div className="flex flex-col gap-4" >
              <h4 className="font-bold text-xs" >PVC</h4>
              <p>{user.pvc}</p>
            </div>
          </div>
 </div>
          <div className="flex md:flex-1 lg:flex-[2] w-full flex-col items-start gap-6" >
            <h3>Edit Information</h3>
            <KycForm />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
