import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export const SkeletonScreen = () => {
  return (
    <div className="grid grid-cols-12 h-dvh w-full -mt-1">
      <div className="col-span-3 w-full">
        <Skeleton
          baseColor="#2C2F38"
          highlightColor="#3A3D47"
          className="h-full"
          borderRadius={0}
          containerClassName="w-full h-full"
        />
      </div>
      <div className="col-span-9 w-full">
        <Skeleton
          baseColor="#2C2F38"
          highlightColor="#3A3D47"
          className="h-full"
          borderRadius={0}
          containerClassName="w-full h-full"
        />
      </div>
    </div>
  );
};
