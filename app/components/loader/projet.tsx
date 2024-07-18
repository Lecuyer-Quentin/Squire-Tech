import { Skeleton } from "@/components/ui/skeleton"
 
export default function SkeletonProjet() {
  return (
    <Skeleton className="w-[300px] h-[400px]
            md:w-[250px] md:h-[400px]
            lg:w-[350px] lg:h-[400px]
             bg-slate-400 rounded-xl">
      <Skeleton className="h-[125px] w-[250px] rounded-xl" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </Skeleton>
  )
}