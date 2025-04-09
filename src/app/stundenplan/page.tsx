import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "~/components/ui/card";
import Image from "next/image";
import {Divider} from "@heroui/divider";
import { Button } from "~/components/ui/button";
import Link from "next/link";
export default function Page() {
  const cardItems = [
    {
      title: '/elternsprechtag.webp',
      desc: 'Description 1',
      content: 'Elternsprechtag'
    },
    {
      title: '/reservation.webp',
      desc: 'Description 2',
      content: 'Veranstaltungen'
    },
    {
      title: '/klassenbuch.webp',
      desc: 'Description 3',
      content: 'Klassenbuch'
    },
    {
      title: '/resource.webp',
      desc: 'Description 3',
      content: 'Materialien'
    },
    {
      title: '/bookings.webp',
      desc: 'Description 3',
      content: 'Materialienbuchung'
    },

  ];

  return (

    <>
      <h1 className="font-bold tracking-tight text-3xl sm:text-4xl">Hallo, Demo Grundschule!</h1>
      <p className="font-base text-base lg:text-md text-foreground">Hier finden Sie alle wichtigen Informationen der Schule.</p>
      <Divider />
      <div className="flex flex-row justify-end gap-4 p-2 w-full">
      </div>
      <div className="flex flex-row justify-start gap-4 p-2 w-full">
        {cardItems.map((item, index) => (
          <Card className="group w-30  hover:shadow-lg" key={index}>
            <Link href={'/veranstaltungen'}>
            
            
            <CardHeader className="flex flex-col justify-center border-b-8 h-48 border-[#e00078]">
              <Image
                alt="Card background"
                className="group-hover:scale-110 justify-center w-full object-cover"
                src={item.title}
                width={100} 
                height={50}
              />
            </CardHeader>
            <CardContent className="p-4 flex flex-row justify-center">
              <CardTitle > {item.content} </CardTitle>
            </CardContent>
            </Link>
          </Card>
        ))}
      </div>
    </>
  );
}
