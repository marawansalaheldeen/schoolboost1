"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";

export default function OrderDetailsPage({ params }: { params: { orderNumber: string } }) {
  const router = useRouter();
  const [comments, setComments] = useState<string[]>([]);
  const [newComment, setNewComment] = useState("");

  const handleAddComment = () => {
    if (newComment.trim()) {
      setComments((prev) => [...prev, newComment]);
      setNewComment("");
    }
  };

  return (
    <>
      <h1 className="font-bold tracking-tight text-3xl sm:text-4xl">Order Details</h1>
      <p className="mt-2">Order Number: {params.orderNumber}</p>
      <div className="mt-4">
        <h2 className="font-bold text-xl">Comments</h2>
        <ul className="list-disc pl-5">
          {comments.map((comment, index) => (
            <li key={index}>{comment}</li>
          ))}
        </ul>
        <div className="mt-2 flex gap-2">
          <Input
            type="text"
            placeholder="Add a comment"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
          />
          <Button onClick={handleAddComment} className="bg-blue-500 text-white">
            Add Comment
          </Button>
        </div>
      </div>
      <Button onClick={() => router.push("/kunden/orders")} className="mt-4 bg-gray-500 text-white">
        Back to Orders
      </Button>
    </>
  );
}