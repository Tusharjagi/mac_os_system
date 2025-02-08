import { forwardRef, useEffect, useState } from "react";

import cn from "@/utils/common/classnames.mjs";

const Progress = forwardRef(({ progress, className, barColor = "black", ...restProps }, ref) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (progress >= 0 && progress <= 100) {
      setWidth(progress);
    }
  }, [progress]);

  const colorMap = {
    red: "bg-red-500",
    black: "bg-black",
    white: "bg-white",
  };

  return (
    <div
      ref={ref}
      className={cn("container relative mx-auto h-2 overflow-hidden rounded-full bg-gray-100", className)}
      {...restProps}
    >
      <div
        className={cn(
          "absolute left-0 top-0 h-full rounded-full transition-all duration-1000 ease-out will-change-transform",
          colorMap[barColor],
        )}
        style={{ width: `${width}%` }}
      />
    </div>
  );
});

Progress.displayName = "Progress";

export default Progress;
