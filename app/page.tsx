import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FFF1E6]">
      <div className="container px-4 py-16 mx-auto">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 items-center">
          <div className="relative aspect-square">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-l8uE3H8vNO5fLtHGQEVrtzTHl6m3Zw.png"
              alt="Hands joined together symbolizing unity"
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <div className="space-y-6">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">KARTAVYA CLUB</h1>
            <p className="text-lg text-muted-foreground">
              Welcome to Kartavya Club, where compassion meets action. Our mission is to uplift communities and foster
              social change through dedicated service.
            </p>
            <div className="flex gap-4">
              <Button>Join Us</Button>
              <Button variant="outline">Learn More</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

