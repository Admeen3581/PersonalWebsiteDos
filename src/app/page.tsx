/**
 * @author Adam Long
 * @default - Landing page
 * @copyright 2024 - All rights reserved Adam Long.
 */

'use client'

import Image from "next/image";
import Particles from "@/components/ui/particles";

function Home() {
  return (
      <div className="relative min-h-screen">

          <Image
              src="/conny-schneider-abstract.jpg"
              alt="background image"
              className=""
              fill
          />

          <div className="absolute inset-0 bg-black opacity-65 z-10"></div>

          <div className='relative z-20'>
              <Particles
                  quantity={500}
                  color={'#FFFFFF'}
                  size={0.8}
                  vx={0.1}
                  vy={0.1}
                  className='opacity-70'
              />
          </div>

      </div>

  );
}

export default Home;

//Photo by <a href="https://unsplash.com/@choys_?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Conny Schneider</a> on <a href="https://unsplash.com/photos/a-blue-background-with-lines-and-dots-xuTJZ7uD7PI?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>