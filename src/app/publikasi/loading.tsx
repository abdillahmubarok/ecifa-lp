import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <>
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <Skeleton className="h-12 w-1/2 mx-auto bg-primary-foreground/20" />
          <Skeleton className="h-6 w-3/4 mx-auto mt-4 bg-primary-foreground/20" />
        </div>
      </section>

      <section id="publications" className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row justify-between items-center mb-12 gap-4">
            <Skeleton className="h-10 w-64 bg-gray-200" />
            <Skeleton className="h-10 w-48 bg-gray-200" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="flex flex-col gap-4 p-4 border rounded-2xl">
                <Skeleton className="h-56 w-full rounded-lg bg-gray-200" />
                <Skeleton className="h-6 w-3/4 bg-gray-200" />
                <Skeleton className="h-12 w-full bg-gray-200" />
                <div className="flex justify-between">
                    <Skeleton className="h-6 w-1/3 bg-gray-200" />
                    <Skeleton className="h-6 w-1/3 bg-gray-200" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
