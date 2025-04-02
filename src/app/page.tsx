import CustomPhoneCase from "@/components/CustomPhoneCase";
import ValueProposetion from "@/components/ValueProposetion";

export default function Home() {
   return (
      <div className="bg-slate-50 grainy-light">
         <CustomPhoneCase />
         <ValueProposetion />
         <div>
            <h2>new part</h2>
         </div>
      </div>
   );
}
