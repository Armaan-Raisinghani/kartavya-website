import Image from "next/image";
import { Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faYoutube,
  faTwitter,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden px-4 py-16">
        <div className="container mx-auto grid gap-8 lg:grid-cols-2 lg:items-center">
          <div className="relative">
            <Image
              src="/hands.png"
              alt="Hands joining together"
              width={400}
              height={400}
              className="rounded-lg mx-auto"
            />
          </div>
          <div className="space-y-6">
            <h1
              style={{
                color: "#564E4C",
                fontFamily: "Philosopher",
                fontSize: "50px",
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "normal",
              }}
              className="font-bold lg:text-5xl text-center"
            >
              KARTAVYA CLUB
            </h1>
            <p
              style={{
                color: "#564E4C",
                fontFamily: "Philosopher",
                fontSize: "22px",
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "normal",
              }}
            >
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
      <section className="px-4 py-16 min-h-screen flex flex-col items-center justify-start bg-[#564E4C]">
        <div className="container mx-auto">
          <div className="mb-12 flex items-center justify-between">
            <h2 className="text-4xl font-bold text-white text-center md:text-left">
              <span
                style={{
                  color: "#FDFCDC",
                  fontFamily: "Philosopher",
                  fontSize: "70px",
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "normal",
                }}
              >
                Our Initiatives and Events
              </span>
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
                  className={
                    "overflow-hidden rounded-xl bg-[#77645A] p-4 shadow-lg text-center md:text-left md:flex gap-4 justify-between " +
                    (index == 1 ? "md:flex-col-reverse" : "md:flex-col")
                  }
                >
                  <Image
                    src={initiative.image || "/placeholder.svg"}
                    alt={initiative.title}
                    width={450}
                    height={300}
                    className="mb-4 rounded-xl text-center"
                  />
                  <div>
                    <h3 className="text-center mb-2 text-xl text-[#FDFCDC]">
                      {initiative.title}
                    </h3>
                    <p className="text-[#FDFCDC] text-center">
                      {initiative.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-[#564E4C] px-4 py-16  min-h-screen flex flex-col items-center justify-start text-center md:text-left">
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
              <Link href="/about">
                <Button className="w-1/3 self-center bg-[#20B2AA] hover:bg-[#20B2AA]/90">
                  Meet the team
                </Button>
              </Link>
            </div>
            <div className="relative">
              <Image
                src="/hands.png"
                alt="Community service"
                width={600}
                height={600}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="px-4 py-16">
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
