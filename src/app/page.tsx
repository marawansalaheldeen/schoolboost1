"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "~/components/ui/card";
import Image from "next/image";
import { Divider } from "@heroui/divider";
import { Button } from "~/components/ui/button";
import Link from "next/link";

export default function Page() {
  const [customers, setCustomers] = useState([
    {
      name: "School 1",
      phone: "123456789",
      email: "school1@example.com",
    },
    {
      name: "School 2",
      phone: "987654321",
      email: "school2@example.com",
    },
  ]);

  interface Customer {
    name: string;
    phone: string;
    email: string;
  }

  const addCustomer = (customer: Customer): void => {
    setCustomers((prevCustomers) => [...prevCustomers, customer]);
  };

  return (
    <>
      <h1 className="font-bold tracking-tight text-3xl sm:text-4xl">Kunden</h1>
      <p className="font-base text-base lg:text-md text-foreground">Hier finden Sie alle wichtigen Informationen rund ums Thema Kunden.</p>
      <Divider />
      <div className="flex flex-row justify-end gap-4 p-2 w-full">
        <Link href={{ pathname: "/kunden/erstellen", query: { addCustomer: JSON.stringify(addCustomer) } }}>
          <Button className="bg-blue-500 text-white p-2 rounded-md">
            Kunde erstellen
          </Button>
        </Link>
      </div>
      <div className="flex flex-row justify-start gap-4 p-2 w-full">
        {customers.map((customer, index) => (
          <Link
            key={index}
            href={{
              pathname: "/kunden/orders",
              query: {
                name: customer.name,
                phone: customer.phone,
                email: customer.email,
              },
            }}
          >
            <Card className="group w-52 hover:shadow-lg">
              <CardHeader className="flex flex-col justify-center border-b-8 border-[#e00078]">
                <Image
                  alt="Customer Avatar"
                  className="group-hover:scale-110 object-cover"
                  src="/elternsprechtag.webp" // Placeholder image
                  width={150}
                  height={50}
                />
              </CardHeader>
              <CardContent className="p-4 flex flex-col justify-start gap-2">
                <CardTitle>{customer.name}</CardTitle>
                <CardDescription>{customer.phone}</CardDescription>
                <p>{customer.email}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </>
  );
}
