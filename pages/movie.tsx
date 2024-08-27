import VideoPlayer from "../components/VideoPlayer";
import VideoInfo from "../components/VideoInfo";
import { useRouter } from "next/router";

const MoviePage: React.FC = () => {
  const router = useRouter();
  const { videoLink, title, description } = router.query;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-2/3">
          {videoLink ? (
            <VideoPlayer className="w-full" />
          ) : (
            <div className="bg-gray-800 rounded p-4 text-white">
              No se proporcionó enlace de video
            </div>
          )}
        </div>
        <div className="lg:w-1/3">
          <VideoInfo
            title={typeof title === "string" ? title : "Título no disponible"}
            description={
              typeof description === "string"
                ? description
                : "Descripción no disponible"
            }
            className="bg-gray-800 rounded p-4"
          />
        </div>
      </div>
    </div>
  );
};

export default MoviePage;
