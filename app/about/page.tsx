import Image from "next/image";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import members from "@/public/members.json";
import Link from "next/link";
import { Marquee } from "@/components/magicui/marquee";

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-[#FDFCDC]">
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
        <h1 className={`mb-8 text-center text-5xl text-gray-800`}>About Us</h1>
        <p className={`mx-auto text-center text-gray-600 text-2xl`}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
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
          <h2 className={`text-5xl font-bold text-gray-800`}>Meet The Team</h2>
        </div>

        {(Object.keys(members) as (keyof typeof members)[]).map((key) => {
          return (
            <div>
              <h3 className={`mb-8 text-[55px] font-bold text-[#564E4C]`}>
                {key}
              </h3>
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mb-8">
                {members[key].map((member, index) => (
                  <div className="flex flex-col gap-4" key={index}>
                    <Link href={member.link}>
                      <div className="overflow-hidden rounded-3xl bg-[#EFDAB8] shadow-lg transition-transform hover:scale-105 flex flex-col items-center justify-center p-4">
                        <div className="relative aspect-square overflow-hidden rounded-2xl flex justify-center items-center w-full h-full">
                          <Image
                            src={member.image}
                            alt={member.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                      </div>
                    </Link>

                    <div className="flex justify-center items-center">
                      <p
                        className="flex justify-center items-center text-center rounded-2xl shadow-lg w-fit py-2 px-4 text-xl"
                        style={{
                          backgroundColor: "rgba(225, 184, 147, 0.30)",
                        }}
                      >
                        {member.name}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
