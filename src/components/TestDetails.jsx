"use client";

import React, { useEffect, useState } from "react";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

export default function TestDetails({ setRank, setPercentile, setScore }) {
  const [cred, setCred] = useState({
    rank: "",
    percentile: "",
    score: "",
  });

  const [errors, setErrors] = useState({
    rank: "",
    percentile: "",
    score: "",
  });

  const validateFields = () => {
    const newErrors = {
      rank: cred.rank === "" ? "Required | Should be a number" : "",
      percentile:
        cred.percentile === ""
          ? "Required | 0 - 100"
          : cred.percentile < 0 || cred.percentile > 100
          ? "Value must be between 0 and 100"
          : "",
      score:
        cred.score === ""
          ? "Required | 0 - 15"
          : cred.score < 0 || cred.score > 15
          ? "Value must be between 0 and 15"
          : "",
    };

    setErrors(newErrors);
    return !Object.values(newErrors).some((error) => error !== "");
  };

  useEffect(() => {
    validateFields();
  }, [cred]);

  const handleSubmit = () => {
    if (validateFields()) {
      setCred({ rank: "", percentile: "", score: "" });
      setErrors({ rank: "", percentile: "", score: "" });
    }
  };

  const hasErrors = Object.values(errors).some((error) => error !== "");

  return (
    <div className="md:col-span-2">
      <Card>
        <CardHeader className="p-5 flex flex-row items-center gap-4">
          <img
            src="/HTML5.png"
            className="rounded bg-white w-8 h-8 md:w-16 md:h-16"
          />

          <div className="flex justify-between gap-2 items-center w-full">
            <div>
              <CardTitle className="text-sm md:text-base">
                Hyper Text Markup Language
              </CardTitle>
              <p className="hidden md:block md:text-xs lg:text-sm text-muted-foreground">
                Questions: 08 | Duration: 15 mins | Submitted on 5 June 2021
              </p>
            </div>

            {/* ALERT DIALOG */}
            <AlertDialog>
              <AlertDialogTrigger
                className={`rounded-lg py-1 px-2 md:py-2 md:px-3 bg-[#0F1B60] cursor-pointer text-white`}
              >
                Update
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogTitle className="hidden">
                  Are you absolutely sure?
                </AlertDialogTitle>
                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-bold">Update Scores</h2>
                  <img
                    src="/HTML5.png"
                    className="rounded bg-white w-8 h-8 md:w-16 md:h-16"
                    alt="HTML5"
                  />
                </div>
                <div className="space-y-4">
                  {/* RANK */}
                  <div>
                    <div className="flex flex-row justify-between items-start">
                      <div className="flex flex-row justify-center items-center gap-2">
                        <div className="text-sm rounded-full bg-[#0F1B60] flex items-center justify-center w-5 h-5 text-white">
                          1
                        </div>
                        <div className="text-md font-base">
                          Update your <span className="font-bold">Rank</span>
                        </div>
                      </div>
                      <div className="flex flex-col gap-2 w-[30%] sm:w-[35%]">
                        <input
                          type="number"
                          value={cred.rank}
                          onChange={(e) => {
                            setRank(e.target.value);
                            setCred({ ...cred, rank: e.target.value });
                            setErrors({ ...errors, rank: "" });
                          }}
                          className="border-[1px] w-full border-blue-600 rounded p-1 sm:p-2 no-spinner"
                          placeholder="Rank"
                        />

                        {errors.rank && (
                          <p className="text-red-600 tracking-tight text-xs mt-1">
                            {errors.rank}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* PERCENTILE */}
                  <div>
                    <div className="flex flex-row justify-between items-start">
                      <div className="flex flex-row justify-center items-center gap-2">
                        <div className="text-sm rounded-full bg-[#0F1B60] flex items-center justify-center w-5 h-5 text-white">
                          2
                        </div>
                        <div className="text-md font-base">
                          Update your{" "}
                          <span className="font-bold">Percentile</span>
                        </div>
                      </div>
                      <div className="flex flex-col gap-2 w-[30%] sm:w-[35%]">
                        <input
                          type="number"
                          value={cred.percentile}
                          onChange={(e) => {
                            const value = Math.max(
                              0,
                              Math.min(100, e.target.value)
                            );
                            setPercentile(value);
                            setCred({ ...cred, percentile: value });
                            setErrors({ ...errors, percentile: "" });
                          }}
                          className="border-[1px] w-full border-blue-600 rounded p-1 sm:p-2 no-spinner"
                          placeholder="Percentile"
                          min="0"
                          max="100"
                        />

                        {errors.percentile && (
                          <p className="text-red-600 text-xs tracking-tight mt-1">
                            {errors.percentile}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* SCORE */}
                  <div>
                    <div className="flex flex-row justify-between items-start">
                      <div className="flex flex-row justify-center items-center gap-2">
                        <div className="text-sm rounded-full bg-[#0F1B60] flex items-center justify-center w-5 h-5 text-white">
                          3
                        </div>
                        <div className="text-sm font-base">
                          Update your{" "}
                          <span className="font-bold">
                            Current Score{" "}
                            <span className="sm:block hidden">(out of 15)</span>
                          </span>
                        </div>
                      </div>
                      <div className="flex flex-col gap-2 w-[30%] sm:w-[35%]">
                        <input
                          type="number"
                          value={cred.score}
                          onChange={(e) => {
                            const value = Math.max(
                              0,
                              Math.min(15, e.target.value)
                            );
                            setScore(value);
                            setCred({ ...cred, score: value });
                            setErrors({ ...errors, score: "" });
                          }}
                          className="border-[1px] w-full border-blue-600 rounded p-1 sm:p-2 no-spinner"
                          placeholder="Score"
                          min="0"
                          max="15"
                        />

                        {errors.score && (
                          <p className="text-red-600 text-xs tracking-tight mt-1">
                            {errors.score}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                <AlertDialogFooter>
                  <AlertDialogCancel className="rounded-lg px-3 border-[1px] border-blue-900 text-blue-900">
                    Cancel
                  </AlertDialogCancel>
                  <AlertDialogAction
                    className={`rounded-lg px-3 text-white  ${
                      hasErrors
                        ? "bg-black cursor-not-allowed"
                        : "bg-blue-900 cursor-pointer"
                    }`}
                    type="button"
                    disabled={hasErrors}
                    onClick={handleSubmit}
                  >
                    Save &#8594;
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        </CardHeader>
      </Card>
    </div>
  );
}
