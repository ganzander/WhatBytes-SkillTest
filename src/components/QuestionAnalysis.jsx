import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import ScoreChart from "@/components/sub-components/ScoreChart";

export default function QuestionAnalysis({ score }) {
  return (
    <Card>
      <CardHeader className="p-6">
        <div className="flex justify-between items-center">
          <CardTitle>Question Analysis</CardTitle>
          <CardTitle className="text-blue-800">{`${score}/15`}</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="mt-1">
        <div>
          <p className="text-sm sm:text-md text-slate-600 mb-4">
            <span className="text-gray-600 font-semibold">
              You scored {score} question correct out of 15.
            </span>{" "}
            However it still needs some improvements.
          </p>
        </div>
        <div className="w-full">
          <ScoreChart score={score} total={15} />
        </div>
      </CardContent>
    </Card>
  );
}
