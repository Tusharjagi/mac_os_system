import Image from "next/image";

import LoadingProgress from "./loading-progress";

const LoadingScreen = () => {
  return (
    <div className="grid place-items-center gap-10">
      <Image src="/icons/apple-512.png" width={200} height={200} alt="apple_logo" />
      <LoadingProgress />
    </div>
  );
};

export default LoadingScreen;
