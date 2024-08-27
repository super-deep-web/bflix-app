import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { ChevronLeft } from "lucide-react";

const Navbar: React.FC = () => {
  const router = useRouter();

  return (
    <nav className="fixed top-0 left-0 right-0 bg-red-700 py-4 px-6 flex items-center z-50">
      <button
        onClick={() => router.back()}
        className="mr-4 w-8 h-8 bg-slate-50 rounded-full flex items-center justify-center hover:bg-slate-200 transition-colors duration-300"
        aria-label="Go back"
      >
        <ChevronLeft className="text-red-700" size={20} />
      </button>
      <div className="text-white text-2xl font-bold">bflix-app</div>
      <div className="flex-grow"></div>
      <Link href="/surprise" passHref>
        <div className="w-10 h-10 relative cursor-pointer transform transition-transform duration-300 hover:scale-110">
          <Image
            src="/images/stitch-avo.png"
            alt="User Avatar"
            layout="fill"
            objectFit="cover"
            className="rounded-full"
          />
        </div>
      </Link>
    </nav>
  );
};

export default Navbar;
