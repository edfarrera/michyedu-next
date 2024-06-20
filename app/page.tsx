import { DressCode } from "@/components/dressCode";
import { Introduction } from "@/components/introduction";
import { Location } from "@/components/location";
import { Presents } from "@/components/presents";
import { Program } from "@/components/program";
import { Tips } from "@/components/tips";

export default function Home() {
  return (
    <main>
      <Introduction />
      <Location />
      <Program />
      <DressCode />

      <Presents />

      <Tips />
    </main>
  );
}
