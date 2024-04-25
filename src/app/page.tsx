"use client";

import { motion } from "framer-motion";
import { AuroraBackground } from "@/components/ui/aurora-background";
import Image from "next/image";
import Link from "next/link";
import Umur from "@/components/ui/count";
import React, { useState, useRef, useEffect } from "react";
import { LayoutGrid } from "@/components/ui/layout-grid";
import satu from "@/Image/1.jpg";

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
              <Link href={"#foto"}>
                <Image
                  src="https://cdn.discordapp.com/emojis/887881507983732757.gif?size=60&quality=lossless"
                  alt="heart"
                  width={60}
                  height={60}
                  unoptimized={true}
                  className="hover:scale-150 transition-all"
                />
              </Link>
              <Link href={"#foto"}>
                <Image
                  src="https://cdn.discordapp.com/emojis/887881507983732757.gif?size=60&quality=lossless"
                  alt="heart"
                  width={60}
                  height={60}
                  unoptimized={true}
                  className="hover:scale-150 transition-all"
                />
              </Link>
              <Link href={"#foto"}>
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
      <div id="foto">
        <div className="h-[40rem] w-full bg-black  bg-grid-white/[0.2] relative flex items-center justify-center text-white font-bold">
          <LayoutGrid cards={cards} />
        </div>
      </div>
    </div>
  );
}

const SkeletonOne = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Syifa Malika Anzanie</p>
    </div>
  );
};

const SkeletonTwo = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Syifa Malika Anzanie</p>
    </div>
  );
};
const SkeletonThree = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Syifa Malika Anzanie</p>
    </div>
  );
};
const SkeletonFour = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Syifa Malika Anzanie</p>
    </div>
  );
};

const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "md:col-span-2",
    thumbnail:
      "https://images.unsplash.com/photo-1476231682828-37e571bc172f?q=80&w=3474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-1",
    thumbnail:
      "https://images.unsplash.com/photo-1464457312035-3d7d0e0c058e?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "col-span-1",
    thumbnail:
      "https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "md:col-span-2",
    thumbnail:
      "https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];
