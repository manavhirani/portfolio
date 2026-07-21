async function fetchPostContent(postName: string): Promise<string> {
  const repoOwner = "manavhirani";
  const repoName = "blog";
  const branch = "main";
  const path = `articles/${postName}`;

  try {
    const response = await fetch(
      `https://raw.githubusercontent.com/${repoOwner}/${repoName}/refs/heads/${branch}/${path}`,
      { next: { revalidate: 300 } }
    );
    if (!response.ok) {
      throw new Error(
        `Failed to fetch content for ${postName}. Status: ${response.status}`
      );
    }
    return await response.text();
  } catch (error) {
    console.error(`Error fetching content for ${postName}:`, error);
    return "";
  }
}

function fetchPostByName(
  name: string
): Promise<{ title: string; content: string } | null> {
  const decoded = decodeURIComponent(name);
  const content = fetchPostContent(`${decoded}.md`);
  return content.then((content) => {
    if (!content) {
      return null;
    }
    return {
      title: decoded,
      content,
    };
  });
}

export { fetchPostByName };
