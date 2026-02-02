import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="container mx-auto px-4 py-20">
      <div className="space-y-8">
        <Skeleton className="h-12 w-3/4 mx-auto md:w-1/2" />
        <Skeleton className="h-6 w-full mx-auto md:w-2/3" />

        <div className="grid lg:grid-cols-2 gap-12 mt-16">
          <Skeleton className="h-96 w-full rounded-2xl" />
          <div className="space-y-6">
            <Skeleton className="h-8 w-full" />
            <Skeleton className="h-32 w-full" />
            <div className="grid grid-cols-2 gap-4">
              <Skeleton className="h-20 w-full" />
              <Skeleton className="h-20 w-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
