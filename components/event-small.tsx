import Image from "next/image";
import { Card, CardContent } from "./ui/card";
import Link from "next/link";
import { Button } from "./ui/button";

export default function EventSmall({
  event,
}: {
  event: {
    id: string;
    title: string;
    images: string[];
    titleimage: string;
  };
}) {
  return (
    <Card key={event.id}>
      <CardContent className="p-4">
        <Link href={`/events/${event.id}`}>
          <div className="relative aspect-square">
            <Image
              src={event.titleimage || "/placeholder.svg"}
              alt={event.title}
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </Link>
      </CardContent>
    </Card>
  );
}
