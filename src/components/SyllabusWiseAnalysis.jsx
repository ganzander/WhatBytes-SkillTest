import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export default function SyllabusWiseAnalysis() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="py-3 pl-5">Syllabus Wise Analysis</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4 py-2">
          <div className="flex justify-between mb-2">
            <span className="text-sm">HTML Tools, Forms, History</span>
            <span className="text-sm text-blue-500 font-medium">80%</span>
          </div>
          <Progress
            value={80}
            className="bg-blue-100"
            indicatorClassName="bg-blue-500"
          />
        </div>

        <div className="space-y-4 py-2">
          <div className="flex justify-between mb-2">
            <span className="text-sm">Tags & References in HTML</span>
            <span className="text-sm  text-orange-500 font-medium">60%</span>
          </div>
          <Progress
            value={60}
            className="bg-orange-100"
            indicatorClassName="bg-orange-500"
          />
        </div>

        <div className="space-y-4 py-2">
          <div className="flex justify-between mb-2">
            <span className="text-sm">Tables & References in HTML</span>
            <span className="text-sm text-red-500 font-medium">24%</span>
          </div>
          <Progress
            value={24}
            className="bg-red-100"
            indicatorClassName="bg-red-500"
          />
        </div>

        <div className="space-y-4 py-2">
          <div className="flex justify-between mb-2">
            <span className="text-sm">Tables & CSS Basics</span>
            <span className="text-sm text-green-500 font-medium">96%</span>
          </div>
          <Progress
            value={96}
            className="bg-green-100"
            indicatorClassName="bg-green-500"
          />
        </div>
      </CardContent>
    </Card>
  );
}
