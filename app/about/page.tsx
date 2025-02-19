import Image from "next/image";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import members from "@/public/members.json";
import Link from "next/link";
import { Marquee } from "@/components/magicui/marquee";
export default function AboutUs() {
  return (
    <div className="min-h-screen bg-[#FFF1E6]">
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
        <h1 className="mb-8 text-center text-4xl font-bold text-gray-800">
          About Us
        </h1>
        <p className="mx-auto max-w-3xl text-center text-gray-600">
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
        <div className="mb-12 flex items-center justify-center gap-4">
          <Star className="h-6 w-6 text-gray-800" />
          <h2 className="text-3xl font-bold text-gray-800">Meet The Team</h2>
          <Star className="h-6 w-6 text-gray-800" />
        </div>

        {(Object.keys(members) as (keyof typeof members)[]).map((key) => {
          return (
            <div>
              <h3 className="mb-8 text-2xl font-bold text-gray-800">{key}</h3>
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mb-8">
                {members[key].map((member, index) => (
                  <Link href={member.link} key={index}>
                    <div className="overflow-hidden rounded-3xl bg-white p-4 shadow-lg transition-transform hover:scale-105">
                      <div className="relative aspect-square overflow-hidden rounded-2xl">
                        <Image
                          src={member.image}
                          alt={member.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <h4 className="mt-4 text-center text-xl font-semibold text-gray-800">
                        {member.name}
                      </h4>
                      {"role" in member && member.role && (
                        <p className="text-center text-gray-600">
                          {member.role}
                        </p>
                      )}
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
