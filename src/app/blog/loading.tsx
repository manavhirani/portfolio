import { SkeletonCard } from "@/components/ui/skeleton-card"

export default function BlogLoading() {
	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-">
			{ Array.from({ length: 9 }).map((_, i) =>  (
				<div key={ i }>
						<SkeletonCard />
					</div>
				))
			}
		</div>
	)	
}