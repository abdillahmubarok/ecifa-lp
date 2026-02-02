import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="container mx-auto px-4 py-20">
      <div className="space-y-6 text-center mb-16">
        <Skeleton className="h-12 w-3/4 mx-auto md:w-1/2" />
        <Skeleton className="h-6 w-full mx-auto md:w-2/3" />
      </div>

      <div className="grid md:grid-cols-2 gap-16">
        <div className="space-y-6">
          <Skeleton className="h-10 w-1/2" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-96 w-full rounded-2xl" />
        </div>
        <div className="space-y-6">
           <Skeleton className="h-96 w-full rounded-2xl" />
        </div>
      </div>
    </div>
  );
}
