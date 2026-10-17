export default function BlogPostLoading() {
  return (
    <main className="container narrow page">
      <div className="skeleton" style={{ height: 120, maxWidth: 520 }} />
      <div className="post-list">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="skeleton" style={{ height: 24 }} />
        ))}
      </div>
    </main>
  );
}
