import VideoPlayer from '../components/VideoPlayer';

const MoviePage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-white mb-8">Reproduciendo Película</h1>
      <VideoPlayer />
    </div>
  );
};

export default MoviePage;