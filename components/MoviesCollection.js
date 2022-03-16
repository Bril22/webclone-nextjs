import MovieThumbnail from "./MovieThumbnail";

function MoviesCollection({ results, title }) {
  return (
    <div className="text-black relative flex flex-col space-y-2 px-8 max-w-[1400px] mx-auto">
      <h2 className="font-semibold max-w-fit text-3xl mt-5">{title}</h2>
      <div className="flex space-x-3 overflow-y-hidden overflow-x-scroll scrollbar-thin scroll-pt-10 scrollbar-thumb-black scrollbar-track-transparent p-2 m-2">
        {results.map((result) => (
          <MovieThumbnail key={result.id} result={result} />
        ))}
      </div>
    </div>
  );
}

export default MoviesCollection;
