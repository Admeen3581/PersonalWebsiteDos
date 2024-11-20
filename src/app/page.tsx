/**
 * @author Adam Long
 * @default - Landing page
 * @copyright 2024 - All rights reserved Adam Long.
 */

'use client'

import Image from "next/image";
import Particles from "@/components/ui/particles";
import GradualSpacing from "@/components/ui/gradual-spacing";

function Home() {
  return (
      <div className="relative min-h-screen min-w-screen overflow-hidden">
          {/* Background Layer */}
          <div className="absolute inset-0">
              <Image
                  src="/conny-schneider-abstract.jpg"
                  alt="background image"
                  className=""
                  fill
              />
              <div className="absolute inset-0 bg-black opacity-65 z-10"></div>
              <Particles
                  quantity={800}
                  color="#FFFFFF"
                  staticity={95}
                  size={0.8}
                  vx={0.1}
                  vy={-0.1}
                  className="absolute inset-0 opacity-70 z-20"
              />
          </div>

          {/* Foreground Layer */}
          <div className="relative z-30 flex flex-col items-center justify-center h-full">
              <GradualSpacing
                  text="Test Text Helloo"
                  className="font-display text-7xl text-white pt-20 font-ethnocentric"
                  duration={1.5}
                  delayMultiple={0.06}
              />
          </div>
      </div>


  );
}

export default Home;

//Photo by <a href="https://unsplash.com/@choys_?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Conny Schneider</a> on <a href="https://unsplash.com/photos/a-blue-background-with-lines-and-dots-xuTJZ7uD7PI?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>