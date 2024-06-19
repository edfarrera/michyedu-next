import { DressCode } from "@/components/dressCode";
import { Introduction } from "@/components/introduction";
import { Location } from "@/components/location";
import { Program } from "@/components/program";

export default function Home() {
  return (
    <main>
      <Introduction />
      <Location />
      <Program />
      <DressCode />
    </main>
  );
}
