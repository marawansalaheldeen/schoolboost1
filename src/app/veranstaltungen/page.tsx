"use client"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "~/components/ui/card";
import Image from "next/image";
import {Divider} from "@heroui/divider";
import { Button } from "~/components/ui/button";
import React, { useState } from 'react';
import { QrCode as QrCodeIcon } from 'lucide-react';
import { Printer,Image as ImageIcon , Earth, Calendar, Plus, CalendarFold} from 'lucide-react';
import QrCode from 'qrcode';
import Link from "next/link";

import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
  } from "~/components/ui/dialog"

  


export default function Page() {
	const [qrCodeUrl, setQrCodeUrl] = useState<string>('');
	const generate = () => {
		QrCode.toDataURL(`http://localhost:3000/veranstaltungen`, (err, url) => {
		  if (err) {
			console.error(err);
			return;
		  }
		  setQrCodeUrl(url);
		});
	  };


	const cardItems =
	[
		{
		logo:'/reservation.webp',
		title: 'Test1',
		date: '08.03.2025',
		content: 'content 1',
		place:'testtest11111'
		},
		{
		logo:'/reservation.webp',
		title: 'Test2',
		date: '12.07.2025',
		content: 'content 2',
		place:'testtest22222'
		},
		{
		logo:'/reservation.webp',
		title: 'Test2',
		date: '19.10.2025',
		content: 'content 3',
		place:'testtest33333'
		},

	];

	const dialogCards =
	[
		{
		title: '/reservation.webp',
		desc: 'Description 1',
		content: 'Veranstaltung',
		footer: '11111111111'
		},
		{
		title: '/teilnehmerlist.webp',
		desc: 'Description 2',
		content: 'Teilnehmerliste',
		footer: '22222222222'
		},
		{
		title: '/elternsprechtag.webp',
		desc: 'Description 3',
		content: 'Elternsprechtag',
		footer: '33333333333'
		},

	];

  return (
    <>
			<div className="flex flex-row justify-start gap-2">
				<h1 className="font-bold tracking-tight text-3xl sm:text-4xl">
					Veranstaltungen
				</h1>
				<Dialog>
					<DialogTrigger asChild>
						<QrCodeIcon
							className="w-9 h-9 p-2 rounded-md hover:cursor-pointer bg-[#e00078] hover:bg-[#e03392] text-white"
							onClick={generate}
						/>
					</DialogTrigger>
					
					<DialogContent className="font-sans">
						<DialogHeader>
							<DialogTitle className="flex flex-row justify-start gap-2">
								<QrCodeIcon size={19}/> <span>QR-Code scannen</span>
							</DialogTitle>
							<DialogDescription>
								Scanne den QR-Code mit deinem Smartphone, um die Seite auf deinem Handy zu öffnen.
							</DialogDescription>
						</DialogHeader>

						<div key='QrCodeContainer' className="flex flex-row justify-center">
							<Image
								src={qrCodeUrl}
								alt="Card background"
								width={276}
								height={276}
							/>
						</div>

						<div className="flex flex-row justify-center p-2 gap-2">
							<Link href={qrCodeUrl} download={qrCodeUrl}> <Button className="text-white bg-red-500 hover:bg-red-700" > <Printer />Ausdrucken</Button></Link>
							<Button className="text-white bg-green-600 hover:bg-green-700"> <ImageIcon />Herunterladen</Button>
							<Button className="text-white bg-cyan-500 hover:bg-cyan-600"> <Earth />Link Kopieren</Button>
						</div>
					</DialogContent>
				</Dialog>
			</div>
      	
      <p className="font-base text-base lg:text-md text-foreground"> Hier finden Sie alle wichtigen Veranstaltungen der Schule.</p>

      <Divider />
      <div className="flex flex-row justify-end gap-4 p-2 w-full">
				<Dialog>
					<DialogTrigger asChild>
						<Button className="text-black bg-white hover:text-white hover:bg-cyan-400">  
							<p className="text-xl font-light">+</p>Veranstaltung erstellen
						</Button>
					</DialogTrigger>

					<DialogContent className="font-sans">
						<DialogHeader>
							<DialogTitle className="flex flex-row justify-start gap-2">
								<Calendar size={19}/> <span>Veranstaltung erstellen</span>
							</DialogTitle>
							<DialogDescription>
								Wählen Sie eine Veranstaltung aus, um weitere Informationen zu erhalten.
							</DialogDescription>
						</DialogHeader>

						<div className="flex flex-row gap-4">
							{dialogCards.map((dialogCardsitem, index) => 
								<Card key={index} className="group hover:shadow-lg">
									<Link href={'veranstaltungen/general/erstellen'} >
										<CardHeader className="flex flex-col justify-center border-b-8 h-48 border-[#e00078]">
													<Image
														alt="Card background"
														className="group-hover:scale-110 justify-center w-full object-cover"
														src={dialogCardsitem.title}
														width={100} 
														height={50}
													/>
										</CardHeader>
										<CardContent className="p-4 flex flex-row justify-center">
											<CardTitle >{dialogCardsitem.content}</CardTitle>
										</CardContent>
										<CardFooter>
												<Button className="group-hover:bg-[#e00078] h-10 w-24 bg-white text-black  group-hover:text-white">
													<Plus/>Erstellen
												</Button>											
            				</CardFooter>
									</Link>
								</Card>
							)}
						</div>
					</DialogContent>
				</Dialog>
      </div>

      <div className="flex flex-row justify-start gap-4 p-2 w-full">
        {cardItems.map((item, index) => (
		<Link 
		key={index} href={{
		pathname: '/veranstaltungen/general',
			query: {
				title: item.title,
				date: item.date,
				content: item.content,
				place:item.place,
				Created_At:'17.03.2025'
				
			},
		}}
		>
          <Card className="group w-52 hover:shadow-lg" >
            <CardHeader className="flex flex-col justify-center border-b-8 border-[#e00078]">
              <Image
                alt="Card background"
                className="group-hover:scale-110 object-cover"
                src={item.logo}
                width={150} 
                height={50}
              />
            </CardHeader>

            <CardContent className="p-4 flex flex-col justify-start gap-2">
              <CardTitle className="justify-start flex flex-col"> {item.title} </CardTitle>
              <CardDescription className="flex flex-row gap-2">
								<CalendarFold className="w-4 h-5"/>{item.date}
							</CardDescription>
              <p>{item.content}</p>
            </CardContent>

            <CardFooter>

				
				
						<Button className="group-hover:bg-[#e00078] h-10 w-full bg-white text-black  group-hover:text-white">
													Mehr erfahren
						</Button>			
				
            </CardFooter>
          </Card>
		  </Link>
        ))}
      </div>
    </>
  );
}
