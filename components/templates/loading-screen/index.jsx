"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import Progress from "@/components/atoms/progress";
import cn from "@/utils/common/classnames.mjs";

const LoadingScreen = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let isCancelled = false;

    const updateProgress = (value) => {
      if (value >= 100) {
        setIsFadingOut(true);
        setTimeout(() => {
          if (!isCancelled) setIsVisible(false);
        }, 300);
        return;
      }

      setTimeout(() => {
        if (!isCancelled) {
          setProgress((prev) => prev + 10);
          updateProgress(value + 10);
        }
      }, 200);
    };

    updateProgress(0);

    return () => {
      isCancelled = true;
    };
  }, []);

  return (
    <>
      {isVisible ? (
        <div
          className={cn("w-lvh grid h-lvh place-content-center bg-black transition-opacity duration-500", {
            "opacity-0": isFadingOut,
            "opacity-100": !isFadingOut,
          })}
        >
          <div className="grid place-items-center gap-10">
            <Image src="/icons/apple-512.png" width={200} height={200} alt="apple_logo" />
            <Progress progress={progress} className="w-[400px] bg-black" barColor="white" />
          </div>
        </div>
      ) : null}
    </>
  );
};

export default LoadingScreen;
