/**
 * @author Adam Long
 * @default - Landing page
 * @copyright 2024 - All rights reserved Adam Long.
 */

'use client'

//Imports
import Image from "next/image";
import Particles from "@/components/ui/particles";
import GradualSpacing from "@/components/ui/gradualSpacing";
import {NeonGradientCard} from "@/components/ui/neonGradientCard";
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hoverCard"
import {Link} from "lucide-react";
import RightHomePageNavbar from "@/components/rightHomePageNavbar";
import LeftHomePageNavbar from "@/components/leftHomePageNavbar";

//Function
function Home() {
  return (
      <div className="relative min-h-screen min-w-screen overflow-hidden">
          {/* Background Layer */}
          <div className="absolute inset-0">
              <Image
                  src="/pictures/conny-schneider-abstract.jpg"
                  alt="background image"
                  className=""
                  fill
              />
              <div className="absolute inset-0 bg-black opacity-70 z-10"></div>
              <Particles
                  quantity={800}
                  color="#FFFFFF"
                  staticity={95}
                  size={0.8}
                  vx={0.1}
                  vy={-0.1}
                  className="absolute inset-0 opacity-80 z-20"
              />
          </div>

          {/* Foreground Layer */}
          <div className="relative z-30 flex flex-col items-center justify-center h-full">
              {/*Nav Bar Layer*/}
              <div className="relative z-40 pt-20 animate-slideName delay-[1.7s] inline-flex items-center">

                  <LeftHomePageNavbar/>

                  <NeonGradientCard
                      className="max-w-sm flex items-center justify-center text-center rounded-full pointer-events-none"
                      borderRadius={100}
                      borderSize={13.5}
                      neonColors={{
                          firstColor: "#073873",
                          secondColor: "#FFFFFF"
                      }}
                  >
                      <Image
                          src="/pictures/al18.jpg"
                          className='rounded-full'
                          width={128}
                          height={128}
                          alt="Picture of the author"
                      />
                  </NeonGradientCard>

                  <RightHomePageNavbar/>
              </div>

              {/*Title Text*/}
              <GradualSpacing
                  text="adam long"
                  className="text-7xl text-white md:pt-64 font-avalors shadow-inner"
                  duration={2.0}
                  delayMultiple={0.09}
              />
              <GradualSpacing
              text="Leader - Visionary - Speaker"
              className="font-display text-lg text-white pt-8 font-avalors shadow-inner"
              duration={2.0}
              delayMultiple={0.03}
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
                                      <a href='href="https://unsplash.com/@choys_' className='italic'>
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