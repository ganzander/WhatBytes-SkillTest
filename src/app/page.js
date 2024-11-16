"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { TfiMedallAlt } from "react-icons/tfi";
import { IoDocumentOutline } from "react-icons/io5";

import QuestionAnalysis from "@/components/QuestionAnalysis";
import QuickStatistics from "@/components/QuickStatistics";
import TestDetails from "@/components/TestDetails";
import ComparisionGraph from "@/components/ComparisionGraph";
import SyllabusWiseAnalysis from "@/components/SyllabusWiseAnalysis";

export default function Component() {
  const [rank, setRank] = useState(1);
  const [percentile, setPercentile] = useState(30);
  const [correctAnswers, setCorrectAnswers] = useState(10);

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 1024);
      if (window.innerWidth >= 1024) {
        setSidebarOpen(true);
      } else {
        setSidebarOpen(false);
      }
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Navbar */}
      <nav className="bg-white border-b">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center lg:hidden">
              <Button variant="ghost" size="icon" onClick={toggleSidebar}>
                <Menu className="h-6 w-6 text-2xl" />
                <span className="sr-only">Toggle sidebar</span>
              </Button>
            </div>
            <div className="flex justify-center gap-2 items-center">
              <img src="/logo.png" alt="" className="w-10 h-10" />
              <h1 className="text-2xl font-bold tracking-tight">WhatBytes</h1>
            </div>
            <div className="hidden lg:flex items-center">
              <div className="ml-4 flex items-center space-x-4">
                <div className="px-5 flex items-center gap-2 border-[2px] border-gray-200 rounded-md">
                  <Image
                    src="/avatar.png"
                    alt="Profile"
                    width={36}
                    height={36}
                    className="rounded-full"
                  />
                  <span className="text-base font-semibold capitalize">
                    Rahil Siddiqui
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Sidebar */}
      <aside
        className={`${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } border absolute mt-16 z-50 left-0 w-64 h-full pt-10 bg-white shadow-md transition-transform duration-300 ease-in-out lg:translate-x-0`}
      >
        <nav className="p-4">
          <ul className="space-y-2">
            <li>
              <a
                href="#"
                className="flex font-semibold items-center space-x-3 text-gray-700 p-5 rounded-2xl hover:bg-gray-200"
              >
                <img src="/dashboard.png" className="h-5 w-5" />
                <span className="">Dashboard</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex font-semibold  items-center space-x-3 text-blue-600 p-5 rounded-2xl bg-blue-100"
              >
                <TfiMedallAlt className="h-5 w-5" />
                <span>Skill Test</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex font-semibold  items-center space-x-3 text-gray-700 p-5 rounded-2xl hover:bg-gray-200"
              >
                <IoDocumentOutline className="h-5 w-5" />
                <span>Internship</span>
              </a>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 lg:ml-60">
        <div className="py-6 mx-4 md:mx-10">
          <div className="mb-6 flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <h1 className="text-xl">Skill Test</h1>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Left Section */}
            <div className="flex flex-col gap-6 md:col-span-2">
              {/* Test Details */}
              <TestDetails
                rank={rank}
                percentile={percentile}
                score={correctAnswers}
                setRank={setRank}
                setPercentile={setPercentile}
                setScore={setCorrectAnswers}
              />

              {/* Quick Statistics */}
              <QuickStatistics
                rank={rank}
                percentile={percentile}
                correctAnswers={correctAnswers}
              />

              {/* Comparision Graph */}
              <ComparisionGraph percentile={percentile} />
            </div>

            {/* Right Section */}
            <div className="flex flex-col gap-6">
              {/* Syllabus Wise Analysis */}
              <SyllabusWiseAnalysis />

              {/* Question Analysis */}
              <QuestionAnalysis score={correctAnswers} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
