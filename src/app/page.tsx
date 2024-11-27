/**
 * @author Adam Long
 * @default - Landing page
 * @copyright 2024 - All rights reserved Adam Long.
 */

'use client'

import Image from "next/image";
import Particles from "@/components/ui/particles";
import GradualSpacing from "@/components/ui/gradual-spacing";
import {NeonGradientCard} from "@/components/ui/neon-gradient-card";
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card"
import {Link} from "lucide-react";


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
              {/*Nav Bar Layer*/}
              <div className="pt-20 animate-slideName delay-[2.0s]">
                  <NeonGradientCard
                      className="max-w-sm flex items-center justify-center text-center"
                      borderRadius={500}
                      neonColors={{
                          firstColor: "#073873",
                          secondColor: "#FFFFFF"
                      }}
                  >
                      <span className="pointer-events-none z-10 h-full whitespace-pre-wrap bg-gradient-to-br from-[#03346E] from-50% to-[#6EACDA] bg-clip-text text-8xl font-bold leading-none tracking-tighter text-transparent">
                          AL
                      </span>
                  </NeonGradientCard>



              </div>
              <GradualSpacing
                  text="Test Text Helloo"
                  className="font-display text-7xl text-white pt-40 font-ethnocentric"
                  duration={1.75}
                  delayMultiple={0.06}
              />

              {/* Badge Icon */}
              <div className='fixed bottom-5 right-5 text-white text-sm font-bold'>
                  <HoverCard>
                      <HoverCardTrigger className='bg-blue-700 text-white text-sm font-bold py-2 px-3 rounded-full shadow-lg hover:bg-blue-900'>Photo Credit</HoverCardTrigger>
                      <HoverCardContent className='w-180 h-12 mr-2'>
                          <div className="flex justify-between space-x-4">
                              <div className="space-y-1">
                                  <p className="text-sm">
                                      Photo by -&ensp;
                                      <a href='href="https://unsplash.com/@choys_?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash' className='italic'>
                                          @Conny Schneider
                                      </a>
                                      &ensp;on&ensp;
                                      <a href="https://unsplash.com/photos/a-blue-background-with-lines-and-dots-xuTJZ7uD7PI?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" className='inline-flex'>
                                          Unsplash<Link className="w-3 h-3" />
                                      </a>
                                  </p>
                                  <div className="flex items-center pt-2">

                                  </div>
                              </div>
                          </div>
                      </HoverCardContent>
                  </HoverCard>
              </div>
          </div>
      </div>


  );
}

export default Home;

//Photo by <a href="https://unsplash.com/@choys_?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Conny Schneider</a> on <a href="https://unsplash.com/photos/a-blue-background-with-lines-and-dots-xuTJZ7uD7PI?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>