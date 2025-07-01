import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
    return (
        <section className="py-20 md:py-32 bg-background">
            <div className="container mx-auto px-4">
                <article className="max-w-4xl mx-auto bg-card p-8 md:p-12 rounded-2xl shadow-xl">
                    <div className="mb-8 space-y-4 text-center">
                        <Skeleton className="h-10 md:h-12 w-full mx-auto" />
                        <Skeleton className="h-10 md:h-12 w-5/6 mx-auto" />
                        <Skeleton className="h-6 w-1/2 mx-auto" />
                    </div>
                    
                    <Skeleton className="h-96 lg:h-[500px] w-full rounded-2xl mb-12" />
                    
                    <div className="space-y-4 mt-8">
                        <Skeleton className="h-6 w-full" />
                        <Skeleton className="h-6 w-full" />
                        <Skeleton className="h-6 w-5/6" />
                        <Skeleton className="h-4 w-full" />
                        <Skeleton className="h-4 w-3/4" />
                    </div>
                </article>
            </div>
        </section>
    );
}
