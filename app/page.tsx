import { Ripple } from "@/components/ripple";
import { Button } from "@/components/ui/button";

export default function Home() {
  // const plans = [];

  return (
    <main className="overflow-hidden">
      <section className="h-screen w-screen flex flex-col justify-center items-center">
        <div className="text-center w-4/6">
          <h1 className="text-2xl sm:text-6xl text-primary font-bold italic">
            DMPilot {"–"} Automate Your Instagram DMs Effortlessly!🚀
          </h1>
        </div>
        <div className="flex gap-2 p-2">
          <Button className="bg-background border text-primary hover:text-foreground">
            Get started
          </Button>
          <Button className="" variant={"outline"}>
            Learn more
          </Button>
        </div>
        <Ripple mainCircleSize={200} numCircles={20} />
      </section>
    </main>
  );
}
