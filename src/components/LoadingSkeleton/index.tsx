import { Skeleton } from "./styled";

function LoadingSkeleton() {
  return (
    <Skeleton>
      <div className="skeleton_container_task skeleton"></div>
      <div className="skeleton_container_task skeleton"></div>
    </Skeleton>
  );
}

export { LoadingSkeleton };
