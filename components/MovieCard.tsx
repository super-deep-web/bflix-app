import Image from "next/image";
import Link from "next/link";

interface MovieCardProps {
  title: string;
  description: string;
  coverImage: string;
  videoLink: string;
}

const MovieCard: React.FC<MovieCardProps> = ({
  title,
  description,
  coverImage,
  videoLink,
}) => {
  return (
    <Link
      href={`/movie?videoLink=${encodeURIComponent(
        videoLink
      )}&title=${encodeURIComponent(title)}&description=${encodeURIComponent(
        description
      )}`}
      className="block"
    >
      <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
        <Image
          src={coverImage}
          alt={title}
          width={300}
          height={450}
          className="w-full h-auto object-cover"
        />
        <div className="p-4">
          <h3 className="text-xl font-semibold text-white truncate">{title}</h3>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
