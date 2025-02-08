"use client";

import { useEffect, useState } from "react";

import Progress from "@/components/atoms/progress";

const LoadingProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 10;
      });
    }, 250);

    return () => clearInterval(interval);
  }, []);

  return <Progress progress={progress} className="w-[400px] bg-black" barColor="white" />;
};

export default LoadingProgress;
