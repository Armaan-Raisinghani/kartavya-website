import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import events from "@/public/events.json";
// This would typically come from your database

export default function EventGallery({
  params,
}: {
  params: { eventId: string };
}) {
  const event = events.filter((x) => x.id === params.eventId)[0];

  return (
    <div className="min-h-screen bg-[#FFF1E6] py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-4">{event.title} Gallery</h1>
        <p className="text-muted-foreground mb-8">{event.description}</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {event.images.map((image, index) => (
            <div
              key={index}
              className="relative aspect-square rounded-lg overflow-hidden"
            >
              <Image
                src={image || "/placeholder.svg"}
                alt={`${event.title} image ${index + 1}`}
                fill
                className="object-cover hover:scale-105 transition-transform"
              />
            </div>
          ))}
        </div>

        <div className="space-y-8">
          <h2 className="text-2xl font-semibold">More Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {Object.entries(events)
              .filter(([id]) => id !== params.eventId)
              .map(([id, event]) => (
                <Card key={id}>
                  <CardContent className="p-4">
                    <div className="relative aspect-square mb-4">
                      <Image
                        src={event.images[0] || "/placeholder.svg"}
                        alt={event.title}
                        fill
                        className="object-cover rounded-lg"
                      />
                    </div>
                    <h3 className="font-semibold mb-2">{event.title}</h3>
                    <Link href={`/gallery/${id}`}>
                      <Button variant="outline" className="w-full">
                        View Gallery
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
