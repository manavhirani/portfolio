

export default function ProjectsPage() {
  return (
    <div className="card-grid grid gap-5 p-2 place-items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
      {Array.from({ length: 25 }).map((_, i) => (
        <div key={i}>
          <div className="card card-compact bg-base-100 shadow-xl w-72 sm:w-full">
            <figure><img src={`https://picsum.photos/id/${i + 25}/400/200`} alt={`${i}`} /></figure>
            <div className="card-body">
              <h2 className="card-title">Project Name</h2>
              <p>Project desciption: Nostrud ut sunt dolor Lorem excepteur aute Lorem adipisicing mollit anim dolore mollit officia proident.</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}