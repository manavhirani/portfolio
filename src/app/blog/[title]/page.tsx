import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import rehypeHighlight from 'rehype-highlight';
import { fetchPostByName } from '@/components/posts';

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
