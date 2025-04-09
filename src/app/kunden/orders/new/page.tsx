"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";

export default function NewOrderPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    orderNumber: "",
    customer: "",
    status: "new",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("New Order Created:", formData);
    router.push("/kunden/orders");
  };

  return (
    <>
      <h1 className="font-bold tracking-tight text-3xl sm:text-4xl">Add New Order</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-4">
        <div>
          <Label htmlFor="orderNumber">Order Number</Label>
          <Input
            type="text"
            id="orderNumber"
            name="orderNumber"
            value={formData.orderNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <Label htmlFor="customer">Customer</Label>
          <Input
            type="text"
            id="customer"
            name="customer"
            value={formData.customer}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <Label htmlFor="status">Status</Label>
          <select
            id="status"
            name="status"
            className="border p-2 rounded"
            value={formData.status}
            onChange={handleChange}
          >
            <option value="new">New</option>
            <option value="contacted">Contacted</option>
            <option value="in negotiation">In Negotiation</option>
            <option value="completed">Completed</option>
            <option value="rejected">Rejected</option>
          </select>
        </div>
        <Button type="submit" className="bg-blue-500 text-white">
          Save Order
        </Button>
      </form>
    </>
  );
}