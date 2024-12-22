import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import rehypeHighlight from 'rehype-highlight';

import "@/styles/github-dark.css";

const options = {
    mdxOptions: {
        remarkPlugins: [],
        rehypePlugins: [rehypeHighlight],
    }
};

interface BlogPost {
    id: string;
    title: string;
    content: string;
}

async function fetchPostContent(postName: string): Promise<string> {
    const repoOwner = 'manavhirani';
    const repoName = 'blog';
    const branch = 'main';
    const path = `articles/${postName}`;

    try {
        // https://raw.githubusercontent.com/manavhirani/blog/refs/heads/main/articles/Two%20Thousand%20and%20Twenty%20Four.md
        const response = await fetch(`https://raw.githubusercontent.com/${repoOwner}/${repoName}/refs/heads/${branch}/${path}`, { cache: 'no-store' });
        if (!response.ok) {
            throw new Error(`Failed to fetch content for ${postName}. Status: ${response.status}`);
        }
        return await response.text();
    } catch (error) {
        console.error(`Error fetching content for ${postName}:`, error);
        return ''; // Return an empty string or handle this case as per your application's needs
    }
}

function fetchPostByName(name: string): Promise<{ title: string; content: string } | null> {

    const content = fetchPostContent(`${name}.md`);
    return content.then((content) => {
        if (!content) {
            return null;
        }
        return {
            title: decodeURIComponent(name),
            content: content
        };
    });
}


// The updated function to work with App Router
export default async function BlogPost(props: { params: Promise<{ title: string }> }) {
    const params = await props.params;

    const { title } = params;
    const post = await fetchPostByName(title);

    if (!post) {
        notFound(); // This will handle the 404 case
    }

    return (
        <div className='flex items-center justify-center w-full'>
            <article className='flex flex-col items-start justify-center max-w-4xl w-full'>
                <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
                <div className='max-w-full prose dark:prose-invert dark:prose-purple'>
                    <MDXRemote source={post.content} options={options} />
                </div>
            </article>
        </div>
    );
}
