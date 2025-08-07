import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export const SkeletonScreen = () => {
  return (
    <div className="grid lg:grid-cols-12 h-dvh w-full -mt-1">
      <div className="lg:col-span-3 w-full">
        <Skeleton
          baseColor="#27272a"
          highlightColor="#323238"
          className="h-full"
          borderRadius={0}
        />
      </div>
      <div className="lg:col-span-9 w-full hidden lg:block">
        <Skeleton
          baseColor="#27272a"
          highlightColor="#323238"
          className="h-full"
          borderRadius={0}
        />
      </div>
    </div>
  );
};
