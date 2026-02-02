import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="container mx-auto px-4 py-20">
      <div className="space-y-6 text-center mb-16">
        <Skeleton className="h-12 w-3/4 mx-auto md:w-1/2" />
        <Skeleton className="h-6 w-full mx-auto md:w-2/3" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {[1, 2, 3, 4].map((i) => (
          <Skeleton key={i} className="h-48 w-full rounded-xl" />
        ))}
      </div>
    </div>
  );
}
