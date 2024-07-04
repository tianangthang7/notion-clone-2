"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Heading = () => {
  return (
    <div>
      <h1
        className="max-w-3xl space-y-4 sm:text-5xl
       font-bold md:text-6xl"
      >
        Your Ideas, Documents, & Plan. Unified. Welcome to{" "}
        <span className="underline"> Notion </span>
      </h1>
      <h3 className="text-base sm:text-xl md:text-2xl font-medium ">
        Notion is the connected workspace where <br />
        better, faster work happens.
      </h3>
      <Button>
        Enter Notion <ArrowRight className="h-4 w-4 ml-2" />{" "}
      </Button>
    </div>
  );
};

export default Heading;
