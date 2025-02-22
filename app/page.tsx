import Image from "next/image";
import { Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faYoutube,
  faTwitter,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
export default function Home() {
  return (
    <main className="min-h-screen bg-[#FFF1E6]">
      {/* Hero Section */}
      <section className="relative overflow-hidden px-4 py-16">
        <div className="container mx-auto grid gap-8 lg:grid-cols-2 lg:items-center">
          <div className="relative">
            <div className="absolute -right-4 top-0 h-full w-[2px] bg-[#20B2AA]" />
            <Image
              src="/hands.png"
              alt="Hands joining together"
              width={400}
              height={400}
              className="rounded-lg"
            />
          </div>
          <div className="space-y-6">
            <h1 className="text-4xl font-bold text-gray-800 lg:text-5xl">
              KARTAVYA CLUB
            </h1>
            <p className="text-lg text-gray-600">
              Welcome to Kartavya Club, where compassion meets action. Our
              mission is to uplift communities and foster social change through
              dedicated service and engagement.
            </p>
            <div className="flex gap-4">
              <a
                href={`#instagram`}
                className="rounded-full px-3 bg-[#20B2AA] p-2 text-white hover:bg-[#20B2AA]/90"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a
                href={`#linkedin`}
                className="rounded-full px-3 bg-[#20B2AA] p-2 text-white hover:bg-[#20B2AA]/90"
              >
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
              <a
                href={`#twitter`}
                className="rounded-full px-3 bg-[#20B2AA] p-2 text-white hover:bg-[#20B2AA]/90"
              >
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a
                href={`#youtube`}
                className="rounded-full px-3 bg-[#20B2AA] p-2 text-white hover:bg-[#20B2AA]/90"
              >
                <FontAwesomeIcon icon={faYoutube} />
              </a>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-[#20B2AA]" />
                <span>kartavya@email.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-[#20B2AA]" />
                <span>222222222</span>
              </div>
            </div>
            <Button className="bg-[#20B2AA] text-white hover:bg-[#20B2AA]/90">
              Join Us
            </Button>
          </div>
        </div>
      </section>

      {/* Initiatives Section */}
      <section className="bg-[#8B7355] px-4 py-16 min-h-screen flex flex-col items-center justify-start">
        <div className="container mx-auto">
          <div className="mb-12 flex items-center justify-between">
            <h2 className="text-4xl font-bold text-white">
              Our Initiatives and Events
            </h2>
          </div>
          <div className="relative">
            <div className="grid gap-8 md:grid-cols-3">
              {[
                {
                  title: "Community Outreach Programs",
                  image: "/placeholder.svg",
                  description:
                    "Join us in our community outreach initiatives addressing pressing social issues. We organize various educational workshops, providing aid to underprivileged communities.",
                },
                {
                  title: "Volunteer Opportunities",
                  image: "/placeholder.svg",
                  description:
                    "Become a part of the Kartavya Club family by volunteering with us. We offer a platform for you to connect with your interests and skills.",
                },
                {
                  title: "Upcoming Events",
                  image: "/placeholder.svg",
                  description:
                    "Stay tuned for our upcoming events, from community service to insightful activities that connect with diverse communities.",
                },
              ].map((initiative, index) => (
                <div
                  key={index}
                  className="overflow-hidden rounded-xl bg-white p-4 shadow-lg"
                >
                  <Image
                    src={initiative.image || "/placeholder.svg"}
                    alt={initiative.title}
                    width={300}
                    height={200}
                    className="mb-4 rounded-lg"
                  />
                  <h3 className="mb-2 text-xl font-bold text-gray-800">
                    {initiative.title}
                  </h3>
                  <p className="text-gray-600">{initiative.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-gradient-to-br from-[#8B7355] to-[#A8927D] px-4 py-16  min-h-screen flex flex-col items-center justify-start">
        <div className="container mx-auto">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="space-y-6 text-white flex flex-col gap-8">
              <div>
                <h2 className="text-3xl font-bold">About Kartavya Club</h2>
                <p className="text-lg">
                  At Kartavya Club, we believe in the power of collective
                  effort. Our passionate team works tirelessly to create
                  meaningful impact in our community, focusing on various social
                  issues. From organizing outreach programs to nurturing a
                  culture of giving back, join us as we strive to make a
                  difference, one initiative at a time.
                </p>
              </div>
              <div className="grid grid-rows-3 gap-12 ">
                <div className="text-center flex gap-3 items-center">
                  <div className="text-6xl font-bold">50+</div>
                  <div className="text-xl">years of community service</div>
                </div>
                <div className="text-center flex gap-3 items-center">
                  <div className="text-6xl font-bold">10+</div>
                  <div className="text-xl">dedicated volunteers</div>
                </div>
                <div className="text-center flex gap-3 items-center">
                  <div className="text-6xl font-bold">10+</div>
                  <div className="text-xl">projects initiated</div>
                </div>
              </div>
              <Button className="w-1/3 self-center bg-[#20B2AA] hover:bg-[#20B2AA]/90">
                Meet the team
              </Button>
            </div>
            <div className="relative">
              <Image
                src="/hands.png"
                alt="Community service"
                width={600}
                height={600}
                className="rounded-lg"
              />
              <div className="absolute -left-4 -top-4 h-32 w-[2px] bg-white" />
              <div className="absolute -left-4 -top-4 h-[2px] w-32 bg-white" />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-[#FDF6EC] px-4 py-16">
        <div className="container mx-auto">
          <div className="mb-12 flex items-center justify-center gap-4">
            <span className="text-2xl">*</span>
            <h2 className="text-3xl font-bold text-gray-800">Contact Us</h2>
            <span className="text-2xl">*</span>
          </div>
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-gray-600" />
                <span>kartavya@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-gray-600" />
                <span>222222222</span>
              </div>
              <div className="flex items-center gap-2">
                <span>Sponsor Us!</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
