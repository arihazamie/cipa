import Image from "next/image";
import { FC } from "react";

const Spotify: FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <section className={`w-full py-10 ${className} border-y border-green-200`}>
      <div className="px-4 md:px-6 bg-transparent flex flex-col items-center justify-center">
        <iframe
          style={{}}
          src="https://open.spotify.com/embed/playlist/616j8m9IIy62uUhwPsIzRG?si=0yn3MaYISzOmpj7w-T8Xyg&pi=a-iucrWXFfQ-WM&nd=1&dlsi=89282afc59f54748"
          width="315"
          height="380"
          allowFullScreen
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          className="shdaow"
        />
      </div>
    </section>
  );
};

export default Spotify;
