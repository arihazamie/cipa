"use client";

import { motion } from "framer-motion";
import { AuroraBackground } from "@/components/ui/aurora-background";
import Image from "next/image";
import Link from "next/link";
import Umur from "@/components/ui/count";
import { satu, dua, tiga, empat, lima, enam } from "@/Image/foto";
import Spotify from "@/components/ui/spotify";

export default function AuroraBackgroundDemo() {
  return (
    <div>
      <div>
        <AuroraBackground>
          <motion.div
            initial={{ opacity: 0.0, y: 40 }}
            whileInView={{ opacity: 1, y: -30 }}
            transition={{
              delay: 0.3,
              duration: 1,
              ease: "easeInOut",
            }}
            className="relative flex flex-col gap-4 items-center justify-center px-4">
            <div className="font-sans font-bold text-4xl grid text-center">
              <div>Happy Birthday</div>
              <div className="text-main font-bold">Cipaa!</div>
              <div className="flex justify-center">
                <Image
                  src="https://cdn.discordapp.com/emojis/887881507983732757.gif?size=60&quality=lossless"
                  alt="heart"
                  width={60}
                  height={60}
                  unoptimized={true}
                />
                <Image
                  src="https://cdn.discordapp.com/emojis/887881507983732757.gif?size=60&quality=lossless"
                  alt="heart"
                  width={60}
                  height={60}
                  unoptimized={true}
                />
              </div>
              <Link
                href={"#umur"}
                className="bg-main text-white py-1 rounded-xl mx-10 text-lg hover:text-main hover:bg-white hover:shadow-md">
                Scroll Down
              </Link>
            </div>
          </motion.div>
        </AuroraBackground>
      </div>
      <div
        id="umur"
        className="grid text-center">
        <AuroraBackground>
          <motion.div
            initial={{ opacity: 0.0, y: 40 }}
            whileInView={{ opacity: 1, y: -30 }}
            transition={{
              delay: 0.3,
              duration: 1,
              ease: "easeInOut",
            }}
            className="relative flex flex-col gap-4 items-center justify-center px-4">
            <div className="text-3xl font-sans">
              <div className="font-bold my-2">Umur Cipa Saat Ini</div>
              <div className="bg-main text-white font-bold p-5 rounded-3xl hover:bg-black shadow-md">
                <Umur />
              </div>
            </div>
            <div>Tekan Salah Satu Lovenya</div>
            <div className="flex">
              <Link href={"#lagu"}>
                <Image
                  src="https://cdn.discordapp.com/emojis/887881507983732757.gif?size=60&quality=lossless"
                  alt="heart"
                  width={60}
                  height={60}
                  unoptimized={true}
                  className="hover:scale-150 transition-all"
                />
              </Link>
              <Link href={"#lagu"}>
                <Image
                  src="https://cdn.discordapp.com/emojis/887881507983732757.gif?size=60&quality=lossless"
                  alt="heart"
                  width={60}
                  height={60}
                  unoptimized={true}
                  className="hover:scale-150 transition-all"
                />
              </Link>
              <Link href={"#lagu"}>
                <Image
                  src="https://cdn.discordapp.com/emojis/887881507983732757.gif?size=60&quality=lossless"
                  alt="heart"
                  width={60}
                  height={60}
                  unoptimized={true}
                  className="hover:scale-150 transition-all"
                />
              </Link>
            </div>
          </motion.div>
        </AuroraBackground>
      </div>
      <div id="lagu">
        <Spotify />
      </div>
      <div id="foto">
        <div className="bg-black  bg-grid-white/[0.2] relative flex items-center justify-center text-white font-bold">
          <div className="grid grid-cols-2 gap-5 my-10">
            {cards.map((card) => (
              <Image
                key={card.id}
                src={card.image}
                alt={`foto ${card.id}`}
                width={150}
                height={200}
                className="hover:scale-150 transition-all hover:rounded-xl rounded-xl"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const cards = [
  {
    id: 1,
    image: satu,
  },
  {
    id: 2,
    image: dua,
  },
  {
    id: 3,
    image: tiga,
  },
  {
    id: 4,
    image: empat,
  },
  {
    id: 5,
    image: lima,
  },
  {
    id: 6,
    image: enam,
  },
];
