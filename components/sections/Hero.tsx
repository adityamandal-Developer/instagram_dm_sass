import React from "react";
import { Button } from "../ui/button";
import { Ripple } from "../ui/ripple";
import Link from "next/link";

const Hero = () => {
  return (
    <main className="overflow-hidden max-h-[100vh] max-w-[100vw]">
      <section className="max-h-screen max-w-screen h-screen flex flex-col justify-center items-center overflow-hidden">
        <div className="text-center w-4/6">
          <h1 className="text-2xl sm:text-6xl text-primary font-bold italic">
            DMPilot {"–"} Automate Your Instagram DMs Effortlessly!🚀
          </h1>
        </div>
        <div className="flex gap-2 p-2">
          <Button className="bg-background border text-primary hover:text-foreground">
            Get started
          </Button>
          <Link href={"/pricing"}>
            <Button className="" variant={"outline"}>
              Learn more
            </Button>
          </Link>
        </div>
        <Ripple mainCircleSize={10} numCircles={20} />
      </section>
    </main>
  );
};

export default Hero;
