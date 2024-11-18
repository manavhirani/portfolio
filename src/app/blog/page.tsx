import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

// Type definition for a blog post
interface BlogPost {
	id: string;
	title: string;
	content: string;
	author: string;
}

// Function to fetch the list of blog posts from GitHub API
async function fetchBlogPosts(): Promise<BlogPost[]> {
	try {
		const response = await fetch('https://api.github.com/repos/manavhirani/blog/contents/articles', { cache: 'no-store' });
		if (!response.ok) {
			throw new Error(`API error: ${response.status}`);
		}
		const posts = await response.json();
	
		return await Promise.all(posts.map(async (post: { sha: string; name: string }) => {
			return {
				id: post.sha,
				title: post.name.replace(/\.md$/, ''),
				author: "Manav Hirani",
			};
		}));
	} catch (error) {
		console.error('Failed to fetch blog posts:', error);
		return [];
	}
}

// Main Blog component
export default async function Blog() {
	const posts = await fetchBlogPosts();

	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
			{posts.map((post) => (
				<div key={post.id} className="w-full">
					<Link href={`/blog/${post.id}`}>
						<Card className="">
							<CardHeader>
								<CardTitle className="">{post.title}</CardTitle>
							</CardHeader>
							<CardDescription>
								<CardContent>
									<p>{post.author}</p>
								</CardContent>
							</CardDescription>
						</Card>
					</Link>
				</div>
			))}
		</div>
	);
}