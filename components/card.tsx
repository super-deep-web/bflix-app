// components/Card.js
import Image from "next/image";
import Link from "next/link";

interface Movie {
  id: number;
  title: string;
  image: string;
  url: string;
}

interface CardProps {
  movie: Movie;
}

const Card = ({ movie }: CardProps) => {
  return (
    <Link key={movie.id} href={`/video0${movie.id}`}>
      <div className="max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800">
        <Image
          src={movie.image}
          alt={movie.title}
          width={300}
          height={400}
          className="rounded-t-lg"
        />
        <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {movie.title}
          </h5>
        </div>
      </div>
    </Link>
  );
};

export default Card;
