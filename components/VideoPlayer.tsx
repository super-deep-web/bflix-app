import { useRouter } from "next/router";
import { useState, useEffect } from "react";

interface VideoPlayerProps {
  className?: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ className = "" }) => {
  const router = useRouter();
  const { videoLink } = router.query;
  const [embedUrl, setEmbedUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (typeof videoLink === "string") {
      try {
        const url = getGoogleDriveEmbedUrl(videoLink);
        if (url) {
          setEmbedUrl(url);
          setError(null);
        } else {
          setError("No se pudo generar la URL de incrustación");
        }
      } catch (err) {
        setError(
          `Error al procesar la URL: ${
            err instanceof Error ? err.message : String(err)
          }`
        );
      }
    } else if (videoLink !== undefined) {
      setError("La URL del video no es válida");
    }
  }, [videoLink]);

  const getGoogleDriveEmbedUrl = (url: string): string | null => {
    const match = url.match(/[-\w]{25,}/);
    return match ? `https://drive.google.com/file/d/${match[0]}/preview` : null;
  };

  if (!videoLink) {
    return <div className={className}>Cargando...</div>;
  }

  if (error) {
    return <div className={className}>Error: {error}</div>;
  }

  if (!embedUrl) {
    return <div className={className}>Generando URL de incrustación...</div>;
  }

  return (
    <div
      className={`relative w-full ${className}`}
      style={{ paddingTop: "56.25%" }}
    >
      <iframe
        src={embedUrl}
        allow="autoplay"
        allowFullScreen
        className="absolute top-0 left-0 w-full h-full"
      />
    </div>
  );
};

export default VideoPlayer;
