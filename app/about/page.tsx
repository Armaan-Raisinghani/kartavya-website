import Image from "next/image";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import members from "@/public/members.json";
import Link from "next/link";
import { Marquee } from "@/components/magicui/marquee";
import {Philosopher} from "next/font/google";

const philosopher=Philosopher({subsets:["latin"],weight:["400"]});
const headings=Philosopher({subsets:["latin"],weight:["700"]});

export default function AboutUs() {


  return (
    <div className="min-h-screen bg-[#FDFCDC]">
      {/* Navigation */}

      {/* Hero Section */}

      <div className="relative">
        <Marquee pauseOnHover>
          <Image
            src="/logo.png"
            alt="Team photo"
            width={1200}
            height={400}
            className="h-[300px] w-full object-cover"
          />
          <Image
            src="/placeholder.svg"
            alt="Team photo"
            width={1200}
            height={400}
            className="h-[300px] w-full object-cover"
          />
        </Marquee>
      </div>

      {/* About Us Content */}
      <div className="container mx-auto px-4 py-16">
        <h1 className={`mb-8 text-center text-[70px] ${philosopher.className} text-gray-800`}>
          About Us
        </h1>
        <p className={`mx-auto max-w-3xl text-center text-gray-600 ${philosopher.className} text-[30px]`}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&apos;s standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type specimen book. It has survived not
          only five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </p>
        {/* <div className="mt-8 flex justify-center">
          <Button className="bg-[#20B2AA] text-white hover:bg-[#20B2AA]/90">
            Join Us
          </Button>
        </div> */}
      </div>

      {/* Meet The Team Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="mb-12 flex items-center justify-center gap-x-4 flex-nowrap">
         <div className="flex items-center">
          <Image
          src="/ninja_star.png"
          alt="Ninja Star"
          width={65}
          height={67}
          />
         </div>

         <div className="flex items-center">
          <Image
          src="/line.png"
          alt="Ninja Star"
          width={250}
          height={67}
          />
         </div>

          <h2 className={`text-[70px] font-bold text-gray-800 ${philosopher.className}`}>Meet The Team</h2>
          <div className="flex items-center">
          <Image
          src="/line.png"
          alt="Ninja Star"
          width={250}
          height={67}
          />
         </div>
         <div className="flex items-center">
          <Image
          src="/ninja_star.png"
          alt="Ninja Star"
          width={65}
          height={67}
          />
         </div>
        </div>

        {(Object.keys(members) as (keyof typeof members)[]).map((key) => {
          return (
            <div>
              <h3 className={`mb-8 text-[55px] font-bold ${headings.className} text-[#564E4C]`}>{key}</h3>
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mb-8">
                {members[key].map((member, index) => (
                  <Link href={member.link} key={index}>
                    <div className="w-[376px] h-[420px] rounded-[70px] bg-[#EFDAB8] shadow-lg transition-transform hover:scale-105 flex flex-col items-center justify-center p-4 mb-[18px]">
                      <div className="w-[315px] h-[311px] overflow-hidden rounded-[20px] flex justify-center items-center]">
                        <Image
                          src={member.image}
                          alt={member.name}
                          width={315}
                          height={311}
                          className="object-cover"
                        />
                      </div>
                    </div>

                    <div>
                      <h4
                        className="w-full h-[78px] flex justify-center items-center text-center rounded-[20px] shadow-lg"
                        style={{ backgroundColor: "rgba(225, 184, 147, 0.30)" }}
                      >
                        {member.name}
                      </h4>
                    </div>  

                  </Link>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
