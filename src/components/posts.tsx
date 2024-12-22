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

export { fetchPostByName };