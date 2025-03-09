import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "~/components/ui/card";

export default function Page() {
  const cardItems = [
    {
      title: 'My Card 1',
      desc: 'Description 1',
      content: 'content 1',
      footer: '11111111111'
    },
    {
      title: 'My Card 2',
      desc: 'Description 2',
      content: 'content 2',
      footer: '22222222222'
    },
    {
      title: 'My Card 3',
      desc: 'Description 3',
      content: 'content 3',
      footer: '33333333333'
    },
    {
      title: 'My Card 2',
      desc: 'Description 2',
      content: 'content 2',
      footer: '22222222222'
    },
    {
      title: 'My Card 3',
      desc: 'Description 3',
      content: 'content 3',
      footer: '33333333333'
    }
  ];

  return (

    <>
      <h1 className="font-bold tracking-tight text-3xl sm:text-4xl">Hallo, Demo Grundschule!</h1>
      <p className="font-base text-base lg:text-md text-foreground">Hier finden Sie alle wichtigen Informationen der Schule.</p>

      <div className="flex flex-row justify-center gap-4 p-4 w-full">
        {cardItems.map((item, index) => (
          <Card className="w-full" key={index}>
            <CardHeader>
              <CardTitle>{item.title}</CardTitle>
              <CardDescription>{item.desc}</CardDescription>
            </CardHeader>
            <CardContent>
              <p>{item.content}</p>
            </CardContent>
            <CardFooter>
              <p>{item.footer}</p>
            </CardFooter>
          </Card>
        ))}
      </div>
    </>
  );
}
