"use client";

import { useState } from "react";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import Link from "next/link";

export default function OrdersPage() {
  const [orders, setOrders] = useState([
    {
      orderNumber: "001",
      customer: "School 1",
      status: "new",
    },
    {
      orderNumber: "002",
      customer: "School 2",
      status: "contacted",
    },
    {
      orderNumber: "003",
      customer: "School 3",
      status: "completed",
    },
  ]);

  const [filterStatus, setFilterStatus] = useState("");

  const filteredOrders = filterStatus
    ? orders.filter((order) => order.status === filterStatus)
    : orders;

  return (
    <>
      <h1 className="font-bold tracking-tight text-3xl sm:text-4xl">Orders</h1>
      <div className="flex justify-between items-center my-4">
        <div className="flex items-center gap-2">
          <label htmlFor="statusFilter">Filter by Status:</label>
          <select
            id="statusFilter"
            className="border p-2 rounded"
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
          >
            <option value="">All</option>
            <option value="new">New</option>
            <option value="contacted">Contacted</option>
            <option value="in negotiation">In Negotiation</option>
            <option value="completed">Completed</option>
            <option value="rejected">Rejected</option>
          </select>
        </div>
        <Link href="/kunden/orders/new">
          <Button className="bg-blue-500 text-white">Add Order</Button>
        </Link>
      </div>
      <table className="min-w-full bg-white border">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Order Number</th>
            <th className="py-2 px-4 border-b">Customer</th>
            <th className="py-2 px-4 border-b">Status</th>
            <th className="py-2 px-4 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredOrders.map((order) => (
            <tr key={order.orderNumber}>
              <td className="py-2 px-4 border-b">{order.orderNumber}</td>
              <td className="py-2 px-4 border-b">{order.customer}</td>
              <td className="py-2 px-4 border-b">{order.status}</td>
              <td className="py-2 px-4 border-b">
                <Link href={`/kunden/orders/${order.orderNumber}`}>
                  <Button className="bg-gray-500 text-white">View</Button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}