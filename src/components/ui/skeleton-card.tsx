import { Skeleton } from "@/components/ui/skeleton"

export function SkeletonCard() {
	return (
		<div className={`p-4 border rounded-xl shadow-sm space-y-4 animate-pulse`}>
			<div className="space-y-2">
				<Skeleton className="h-6 w-full" />
			</div>
			<div className="grid gap-4 h-full">
				<div className="space-y-1.5">
					<Skeleton className="h-20 w-full rounded-md" />
				</div>
			</div>
		</div>
	)
}