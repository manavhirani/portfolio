import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import rehypeHighlight from 'rehype-highlight';
import "@/styles/github-dark.css";


interface BlogPostParams {
    params: {
        id: string;
    };
}

interface GitHubContent {
    name: string;
    path: string;
    sha: string;
    size: number;
    url: string;
    html_url: string;
    git_url: string;
    download_url: string;
    type: string;
}

interface BlogPost {
    id: string;
    title: string;
    content: string;
}

async function fetchPostContent(postName: string): Promise<string> {
    const repoOwner = 'manavhirani';
    const repoName = 'blog';
    const branch = 'main';
    const path = `articles/${encodeURIComponent(postName)}`;

    try {
        const response = await fetch(`https://raw.githubusercontent.com/${repoOwner}/${repoName}/${branch}/${path}`, { cache: 'no-store' });
        if (!response.ok) {
            throw new Error(`Failed to fetch content for ${postName}. Status: ${response.status}`);
        }
        return await response.text();
    } catch (error) {
        console.error(`Error fetching content for ${postName}:`, error);
        return ''; // Return an empty string or handle this case as per your application's needs
    }
}

async function fetchBlogPosts(): Promise<BlogPost[]> {
    const repoOwner = 'manavhirani';
    const repoName = 'blog';
    const branch = 'main';
    const directoryPath = 'articles';

    try {
        const response = await fetch(`https://api.github.com/repos/${repoOwner}/${repoName}/contents/${directoryPath}?ref=${branch}`, { cache: 'no-store' });

        if (!response.ok) {
            throw new Error(`Failed to fetch blog posts. Status: ${response.status}`);
        }

        const posts: GitHubContent[] = await response.json();

        // Map GitHub content items to BlogPost objects
        const blogPosts: BlogPost[] = await Promise.all(posts.map(async (post) => {
            const content = await fetchPostContent(post.name);
            return {
                id: post.sha,
                title: post.name.replace(/\.md$/, ''), // Assuming the title is the filename without .md
                content: content
            };
        }));

        return blogPosts;
    } catch (error) {
        console.error('Error fetching blog posts:', error);
        return []; // Return an empty array in case of an error
    }
}

// Function to fetch post details by ID
async function fetchPostById(id: string): Promise<{ title: string; content: string } | null> {
    try {
        // This function would typically need to make an API call to find the post by ID
        // Here, we're going to simulate this with a mock data fetch.
        const posts = await fetchBlogPosts(); // Assuming you have this function defined or imported
        const foundPost = posts.find(post => post.id === id);

        if (!foundPost) {
            return null;
        }

        // Since we stored the SHA as ID, we can fetch the content directly
        const content = await fetchPostContent(`${foundPost.title}.md`);

        return {
            title: foundPost.title,
            content: content
        };
    } catch (error) {
        console.error('Error fetching post by ID:', error);
        return null;
    }
}



export default async function BlogPost({ params }: BlogPostParams) {
    const { id } = await params;
    const post = await fetchPostById(id);
    const options = {
        mdxOptions: {
            remarkPlugins: [],
            rehypePlugins: [rehypeHighlight],
        }
    };

    if (!post) {
        notFound(); // This will handle the 404 case
    }

    return (
        <div className='w-full flex items-center justify-center'>
            <article>
                <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
                <div className='prose dark:prose-invert'>
                    <MDXRemote source={post.content} options={options}/>
                </div>
            </article>
        </div>
    );
}