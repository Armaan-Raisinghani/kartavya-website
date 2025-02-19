import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const events = [
  {
    id: "blanket-chai-drive",
    title: "Blanket & Chai Drive",
    description: "Join us in spreading warmth this winter season through our annual Blanket & Chai Drive.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-l8uE3H8vNO5fLtHGQEVrtzTHl6m3Zw.png",
  },
  {
    id: "cleanliness-drive",
    title: "Cleanliness Drive",
    description: "Help us make our community cleaner and greener through our monthly cleanliness initiative.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-l8uE3H8vNO5fLtHGQEVrtzTHl6m3Zw.png",
  },
  {
    id: "langar-seva",
    title: "Langar Seva",
    description: "Participate in our community kitchen service to provide meals to those in need.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-l8uE3H8vNO5fLtHGQEVrtzTHl6m3Zw.png",
  },
  {
    id: "blood-donation",
    title: "Blood Donation Drive",
    description: "Save lives by participating in our regular blood donation camps.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-l8uE3H8vNO5fLtHGQEVrtzTHl6m3Zw.png",
  },
]

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-[#FFF1E6] py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">Our Events</h1>
        <div className="grid gap-6 md:grid-cols-2">
          {events.map((event) => (
            <Card key={event.id} className="overflow-hidden">
              <div className="relative h-48">
                <Image src={event.image || "/placeholder.svg"} alt={event.title} fill className="object-cover" />
              </div>
              <CardHeader>
                <CardTitle>{event.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{event.description}</p>
                <div className="flex gap-4">
                  <Link href={`/gallery/${event.id}`}>
                    <Button variant="outline">View Gallery</Button>
                  </Link>
                  <Button>Learn More</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

