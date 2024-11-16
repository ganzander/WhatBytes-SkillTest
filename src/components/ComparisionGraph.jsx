import React from "react";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import PercentileChart from "@/components/sub-components/PercentileChart";

export default function ComparisionGraph({ percentile }) {
  return (
    <div className="md:col-span-2 ">
      <Card>
        <CardHeader className="p-6 relative flex flex-row items-center gap-4">
          <div className="w-full">
            <div className=" absolute top-5 right-5 bg-gray-100 w-10 h-10 md:w-16 md:h-16 rounded-full p-3 flex flex-col items-center justify-center">
              <img
                src="/up-arrow.png"
                className="w-full h-full md:w-8 md:h-8"
              />
            </div>
            <CardTitle className="mb-7">Comparison Graph</CardTitle>
            <p className="text-sm sm:text-md text-slate-600 mb-4">
              <span className="font-bold">
                You scored {percentile}% percentile
              </span>{" "}
              <span className="font-medium">
                which is lower than the <br className="hidden md:block" />
                average percentile 72% of all the engineers who took this
                assessment
              </span>
            </p>
            <div className="h-60 w-full rounded-md">
              <PercentileChart percentile={percentile} />
            </div>
          </div>
        </CardHeader>
      </Card>
    </div>
  );
}
