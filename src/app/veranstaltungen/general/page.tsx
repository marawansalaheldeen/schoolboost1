"use client"

import { useSearchParams } from 'next/navigation';
import { Divider } from "@heroui/divider";
import { Button } from "~/components/ui/button";
import QRCode from 'qrcode';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import QrCode from 'qrcode';
import { useState } from 'react';
import Image from "next/image";
import { QrCode as QrCodeIcon } from 'lucide-react';
import { Printer,Image as ImageIcon , Earth, Calendar, Plus, CalendarFold} from 'lucide-react';
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
  const searchParams = useSearchParams();
  const logo = searchParams.get('logo');
  const title = searchParams.get('title');
  const date = searchParams.get('date');
  const content = searchParams.get('content');
  const place = searchParams.get('place');

  const handleExport = async () => {
    try {
      const qrCodeUrl = await QRCode.toDataURL(`Title: ${title}, Date: ${date}, Content: ${content}, Created_At:${new Date().toLocaleDateString()}, place:${place}` );
      

      // Create a new PDF document
      const doc = new jsPDF();

      // Add table data to the PDF
      doc.text('Event Details', 10, 10);
      autoTable(doc, {
        startY: 20,
        head: [['Event Name', 'Event Date', 'Created_At', 'Description' , 'Place']],
        body: [
          [title, date, new Date().toLocaleDateString(), content, place],
        ],
      });


      // Add QR code to the PDF
      doc.addImage(qrCodeUrl, 'PNG', 10, 60, 50, 50);

      // Save the PDF
      doc.save('event-details.pdf');
    } catch (error) {
      console.error('Error generating QR code or PDF:', error);
    }
  };
    const [qrCodeUrl, setQrCodeUrl] = useState<string>('');
    const generate = () => {
        QrCode.toDataURL(`http://localhost:3000/veranstaltungen/general?title=Test2&date=19.10.2025&content=content+3`, (err, url) => {
          if (err) {
            console.error(err);
            return;
          }
          setQrCodeUrl(url);
        });
      };

  return (
    <>
      <div className="flex flex-row justify-start gap-2">
        <h1 className="font-bold tracking-tight text-3xl sm:text-4xl">
          Erstellen
        </h1>
      </div>
      <Divider />
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


					</DialogContent>
				</Dialog>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">Event Name</th>
              <th className="py-2 px-4 border-b">Event Date</th>
              <th className="py-2 px-4 border-b">Meeting Link</th>
              <th className="py-2 px-4 border-b">Event Location</th>
              <th className="py-2 px-4 border-b">Created At</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2 px-4 border-b">{title}</td>
              <td className="py-2 px-4 border-b">{date}</td>
              <td className="py-2 px-4 border-b">{content}</td>
              <td className="py-2 px-4 border-b">{place}</td>
              <td className="py-2 px-4 border-b">{new Date().toLocaleDateString()}</td>
              
            </tr>
          </tbody>
        </table>
      </div>
      <Button onClick={handleExport} className="mt-4 bg-blue-500 text-white p-2 rounded-md">
        Export with QR Code
      </Button>
    </>
  );
}

// Removed the conflicting local declaration of useState
