import Card from "./card";

interface Movie {
  id: number;
  title: string;
  image: string;
  url: string;
}

const MovieList = ({ movies }: { movies: Movie[] }) => {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {movies.map((movie) => (
        <Card key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;
