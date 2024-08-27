interface VideoInfoProps {
  title: string;
  description: string;
  className?: string;
}

const VideoInfo: React.FC<VideoInfoProps> = ({
  title,
  description,
  className = "",
}) => {
  return (
    <div className={className}>
      <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">{title}</h2>
      <p className="text-gray-300 text-lg lg:text-xl">{description}</p>
    </div>
  );
};

export default VideoInfo;
