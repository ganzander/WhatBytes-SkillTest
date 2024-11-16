import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function QuickStatistics({ rank, percentile, correctAnswers }) {
  return (
    <div className="md:col-span-2">
      <Card>
        <CardHeader className="flex flex-row items-center gap-4 p-2 sm:p-4">
          <div className="flex flex-col justify-between gap-6 w-full">
            <CardTitle>Quick Statistics</CardTitle>
            <div className="grid grid-cols-3">
              {/* Trophy */}
              <div className="flex lg:flex-row flex-col justify-around p-1 sm:p-2 items-center gap-2 tracking-tight border-r-[1.5px] border-gray-200">
                <div className="bg-gray-100 rounded-full p-3 flex flex-col items-center justify-center">
                  <img src="/trophy.png" className="w-8 h-8" />
                </div>
                <div className="flex flex-col">
                  <div className="sm:text-md md:text-lg lg:text-2xl font-bold lg:text-left text-center">
                    {rank}
                  </div>
                  <div className="text-sm text-center lg:text-left text-muted-foreground">
                    YOUR RANK
                  </div>
                </div>
              </div>

              {/* Percentile */}
              <div className="flex lg:flex-row flex-col justify-around p-2 items-center gap-2 tracking-tight border-r-[1.5px] border-gray-200">
                <div className="bg-gray-100 rounded-full p-3 flex flex-col items-center justify-center">
                  <img src="/clipboard.png" className="w-8 h-8" />
                </div>
                <div className="flex flex-col">
                  <div className="sm:text-md md:text-lg lg:text-2xl font-bold lg:text-left text-center">
                    {percentile}%
                  </div>
                  <div className="text-sm text-center lg:text-left text-muted-foreground">
                    PERCENTILE
                  </div>
                </div>
              </div>

              {/* Correct Answer */}
              <div className="flex lg:flex-row flex-col justify-around p-2 items-center gap-2 tracking-tight">
                <div className="bg-gray-100 rounded-full p-3 flex flex-col items-center justify-center">
                  <img src="/check-mark.png" className="w-8 h-8" />
                </div>
                <div className="flex flex-col">
                  <div className="sm:text-md md:text-lg lg:text-2xl font-bold lg:text-left text-center">
                    {correctAnswers} / 15
                  </div>
                  <div className="text-sm text-center lg:text-left text-muted-foreground">
                    CORRECT ANSWERS
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardHeader>
      </Card>
    </div>
  );
}
