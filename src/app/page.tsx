import CustomPhoneCase from "@/components/CustomPhoneCase";
import ImageUpload from "@/components/ImageUpload";
import ValueProposetion from "@/components/ValueProposition";

export default function Home() {
   return (
      <div className="bg-slate-50 grainy-light">
         <CustomPhoneCase />
         <ValueProposetion />
         <ImageUpload />
      </div>
   );
}
