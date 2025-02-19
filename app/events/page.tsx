import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import events from "@/public/events.json";

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-[#FFF1E6] py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">Our Events</h1>
        <div className="grid gap-6 md:grid-cols-2">
          {events.map((event) => (
            <Card key={event.id} className="overflow-hidden">
              <div className="relative h-48">
                <Image
                  src={event.images[0] || "/placeholder.svg"}
                  alt={event.title}
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>{event.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  {event.description}
                </p>
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
  );
}
