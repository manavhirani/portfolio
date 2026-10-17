export default function BlogLoading() {
  return (
    <main className="container narrow page">
      <h1 className="page-title">
        The <em>Blog</em>
      </h1>
      <div className="post-list">
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className="skeleton" />
        ))}
      </div>
    </main>
  );
}
