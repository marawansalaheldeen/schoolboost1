"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Divider } from "@heroui/divider";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";

export default function CreateCustomerPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Add the new customer to the main page
    // Assuming addCustomer is passed as a prop or imported from a shared module
    const addCustomer = (customerData: { name: string; phone: string; email: string }) => {
      console.log("Customer added:", customerData);
    };

    addCustomer(formData);

    // Redirect back to the main page
    router.push("/");
  };

  return (
    <>
      <h1 className="font-bold tracking-tight text-3xl sm:text-4xl">Kunde erstellen</h1>
      <p className="font-base text-base lg:text-md text-foreground">Fügen Sie einen neuen Kunden hinzu.</p>
      <Divider />
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-4">
        <div className="flex flex-col">
          <Label htmlFor="name">Name</Label>
          <Input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex flex-col">
          <Label htmlFor="phone">Telefonnummer</Label>
          <Input
            type="text"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex flex-col">
          <Label htmlFor="email">E-Mail-Adresse</Label>
          <Input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <Button type="submit" className="bg-blue-500 text-white p-2 rounded-md">
          Speichern
        </Button>
      </form>
    </>
  );
}