import MovieList from "@/components/movie";
import Link from "next/link";

export default function Home() {
  const videos = [
    { id: 1, title: "Video 1", image: "/images/1.jpg", url: "" },
    { id: 2, title: "Video 2", image: "/images/2.jpg", url: "" },
    { id: 3, title: "Video 3", image: "/images/3.jpg", url: "" },
    { id: 4, title: "Video 4", image: "/images/4.jpg", url: "" },
    { id: 5, title: "Video 5", image: "/images/5.jpg", url: "" },
    { id: 6, title: "Video 6", image: "/images/6.jpg", url: "" },
    { id: 7, title: "Video 7", image: "/images/7.jpg", url: "" },
    { id: 8, title: "Video 8", image: "/images/8.jpg", url: "" },
    { id: 9, title: "Video 9", image: "/images/9.jpg", url: "" },
    { id: 10, title: "Video 10", image: "/images/10.jpg", url: "" },
  ];

  return (
    <div>
      <h1>Bienvenido</h1>
      {/* <div className="grid grid-cols-2 gap-4">
        {videos.map((video) => (
          <Link key={video.id} href={`/videos/${video.id}`}>
            <MovieList movies={videos}/>
            <div className="bg-gray-200 p-4 rounded-lg">
              <img src={video.image} alt={video.title} />
              <h2 className="text-xl">{video.title}</h2>
            </div>
          </Link>
        ))}
      </div> */}
      <div className="container mx-auto px-4">
        <MovieList movies={videos} />
      </div>
    </div>
  );
}
