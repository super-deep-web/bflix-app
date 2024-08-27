import MovieCard from "../components/MovieCard";
import Image from "next/image";

interface Movie {
  title: string;
  description: string;
  coverImage: string;
  videoLink: string;
}

const movies: Movie[] = [
  {
    title: "12 Capas",
    description:
      "Porque hay tanto que tengo que decirte y tan poco tiempo para poder decirlo todo, porque todo el amor que siento por ti no se puede termina ni de expresar, necesitaría una eternidad para poder decirte cuanto te amo, cuanto deseo estar contigo, cuan afortunado soy de ternerte, la felicidad que causas cada día, y que dicha que podré estar contido por la eternidad para decirte lo maravillosa que eres.",
    coverImage: "/images/1.jpg",
    videoLink:
      "https://drive.google.com/file/d/1j7Zzr2dxGRFTY3jEIFKg78cTkO1Y6Cfk/view?usp=drive_link",
  },
  {
    title: "Heartbeat",
    description:
      "Mi corazón está lleno con todo lo tuyo, está lleno con tu personalidad, está lleno de toda tu belleza, mi corazón está lleno gracias a ti porque tu completas y llenas mi corazón con todo lo que tienes para mi, cada día más provocas tantos latidos que mi corazón solo parece vivir gracias a ti, late tan fuerte y rápido que estoy muy seguro del inmenso amor que tengo por ti. Mi corazón es todo tuyo y siempre será asi.",
    coverImage: "/images/2.jpg",
    videoLink:
      "https://drive.google.com/file/d/1jFWt3MerjaCjZbd68Bl9v2qDZl3TJy_B/view?usp=drive_link",
  },
  {
    title: "Loquito por ti",
    description:
      "Porque mes difíficil poder imaginar ahora un mundo o una vida en la que tú no estás, porque me es imposible dejarte de pensar todo eldía, me encanta poder tenerte siempre en mi mente, y poder imaginar tantas cosas que me encantaría hacer contigo, porque es un sentimiento nuevo, algo que no habría podido sentir antes, es algo tan especial y único, y solo tengo que decirte muchas gracias.",
    coverImage: "/images/3.jpg",
    videoLink:
      "https://drive.google.com/file/d/1jMdt01ei1H83AUSwh2xVYgb-wiZKkqIF/view?usp=drive_link",
  },
  {
    title: "Manu Moments",
    description:
      "Porque un perrete nunca está de más, siempre nos hace buena compañia y está ahi para hacernos reir siempre, por eso que quede inmortalizado aquí y siempre en un video de todas sus hazañas, de todas sus mejores fotitos que compartiste conmigo mi amor. Muchas gracias Manuel por hacer tan feliz a mi hermosa princesita y para ti mi amor, te amoooooooo te amo muchísimo.",
    coverImage: "/images/4.jpg",
    videoLink:
      "https://drive.google.com/file/d/1jN0ZnsLmOGbB4GWRCRerEMyux0wRHbpY/view?usp=drive_link",
  },
  {
    title: "Promises",
    description:
      "Porque son las promesas las que mantienen tan fuerte este vínculo, este amor que nos une aún en la distancia, que contra cualquier circunstancia que se nos aparezca en nuestro camino serán las promesas que te hago hoy y te hecho las que seguirán siempre en pie, porque quiero hacerte muy feliz y prometo mantener siempre esa sonrisa, quiero cuidarte por siempre y apoyarte como nunca antes alguien lo ha hecho por ti.",
    coverImage: "/images/5.jpg",
    videoLink:
      "https://drive.google.com/file/d/1jTSsDlHauytwTeoR9UROGm9McvF6xBrE/view?usp=drive_link",
  },
  {
    title: "Sonrisas",
    description:
      "Algo de lo que pienso que es muy importante ahora en nuestra relación es mantener esas sonrisas, todas aquellas que nos han regalado más de un momento en el que empezamos con una tontería o simplemente nos hemos dedicado un verso de amor o besitos que nos alegran hasta el alma. Quiero ser siempre el afortunado de tener, provocar y poder ver todas tus sonrisas.",
    coverImage: "/images/6.jpg",
    videoLink:
      "https://drive.google.com/file/d/1jxKTinsOL8W4yDuV4sxgUQzy9dxja-Bb/view?usp=drive_link",
  },
  {
    title: "Stitch Moments",
    description:
      "Porque nuestro pequeño Stitch tampoco puede faltar jejeje, siempre está ahi y en todo lugar, Stitch es el hijo favorito, aunque dices que no tienes un favorito y no le dices a Dumbo jajaja, bueno no, pero ya sabes que estará con nosotros en todo momento, incluso podrán haber más jejeje. Te amo muchísimo mi amor y recuerda que como Stitch yo también quiero estar contigo desde el amanecer hasta el anochecer.",
    coverImage: "/images/7.jpg",
    videoLink:
      "https://drive.google.com/file/d/1kjTKUPX6iMoK8SBYd75YPc3JVwPpiq2b/view?usp=drive_link",
  },
  {
    title: "Miles de llamadas",
    description:
      "Porque no ha sido solo una o dos, han sido muchísimas llamadas las que hemos tenido en este añito que cumplimos, que estoy tan feliz siempre de poder recibir, para escuchar tu dulce voz, para mirar esa linda carita que tienes, porque con cada llamada tu llenas mi corazón de felicidad.",
    coverImage: "/images/8.jpg",
    videoLink:
      "https://drive.google.com/file/d/1m4VluQu4bgqHrE1Zoy2KLzqNSNfQInbV/view?usp=drive_link",
  },
  {
    title: "Love Story",
    description: "Esta es la descripción de la Película 1...",
    coverImage: "/images/9.jpg",
    videoLink: "https://drive.google.com/file/d/video1",
  },
  {
    title: "La primera",
    description:
      "Porque fue de las primeras veces que pude escuchar ese dulce sonido que sale de tu boca, porque la primera vez que pude verte me emocioné tanto que no podía creer que estuviese pasando, porque es de esas primeras veces que se recuerdan por siempre, con alegría, con emoción, porque estuve seguro y estoy seguro que quiero volver a ver siempre esa perfecta sonrisa.",
    coverImage: "/images/10.jpg",
    videoLink: "https://drive.google.com/file/d/video1",
  },
];

const HomePage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="relative w-full h-40 sm:h-60 md:h-80 lg:h-96 mb-8">
        <Image
          src="/images/hero.webp"
          alt="Banner"
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
        <div className="absolute bottom-0 left-0 p-4 sm:p-6 md:p-8 w-full bg-gradient-to-t from-black to-transparent">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white drop-shadow-lg">
            Disfruta de nuestro pequeño Cine, videos con recuerdos llenos de
            amor.
          </h1>
        </div>
      </div>
      <h1 className="text-3xl font-bold text-white mb-8">
        Películas Populares
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {movies.map((movie, index) => (
          <MovieCard key={index} {...movie} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
