"use client"

import { Divider } from "@heroui/divider"
import { Button } from "~/components/ui/button"
import { Input } from "~/components/ui/input"
import { Textarea } from "~/components/ui/textarea"
import { Label } from "~/components/ui/label"
import type React from "react"
import { useState } from "react"
import { api } from "~/trpc/react"
import { useRouter } from "next/navigation"
import { toast } from "sonner"

export default function CreateEventPage() {
    const router = useRouter()
  
    const [formData, setFormData] = useState({
      eventName: "",
      eventPlace: "",
      meetingLink: "",
      description: "",
    })
  
    const [isSubmitting, setIsSubmitting] = useState(false)
  
    const { mutate: createEvent } = api.event.createEvent.useMutation({
      onSuccess: () => {
        toast.success("Event created", {
          description: "Your event has been successfully created.",
        })
        router.push("/events") 
      },
      onError: (error) => {
        setIsSubmitting(false)
        toast.error("Error", {
          description: error.message || "Failed to create event. Please try again.",
        })
      },
    })
  
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target
      setFormData({
        ...formData,
        [name]: value,
      })
    }
  
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault()
      setIsSubmitting(true)
  
      createEvent({
        eventName: formData.eventName,
        eventPlace: formData.eventPlace,
        meetingLink: formData.meetingLink,
        description: formData.description
      })
    }
  
    return (
      <>
        <h1 className="font-bold tracking-tight text-3xl sm:text-4xl">Veranstaltung erstellen</h1>
        <p className="font-base text-base lg:text-md text-foreground">
          Fügen Sie Details wie Ort, Datum und Zeitplan hinzu.
        </p>
        <Divider />
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-2 w-full">
          <div className="flex flex-col space-y-2">
            <Label htmlFor="eventName">Name of the event</Label>
            <Input
              type="text"
              id="eventName"
              name="eventName"
              value={formData.eventName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex flex-col space-y-2">
            <Label htmlFor="eventPlace">Event place</Label>
            <Input
              type="text"
              id="eventPlace"
              name="eventPlace"
              value={formData.eventPlace}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex flex-col space-y-2">
            <Label htmlFor="meetingLink">Meeting link</Label>
            <Input
              type="url"
              id="meetingLink"
              name="meetingLink"
              value={formData.meetingLink}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex flex-col space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows={4}
              required
            />
          </div>
          <div className="flex justify-end">
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Submit"}
            </Button>
          </div>
        </form>
      </>
    )
  }
  
  