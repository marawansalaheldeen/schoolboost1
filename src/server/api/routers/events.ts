// ~/server/api/routers/event.ts
import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

// Input validation schemas
const EventSchema = z.object({
  eventName: z.string(),
  eventPlace: z.string(),
  meetingLink: z.string(),
  description: z.string()
});

export const eventRouter = createTRPCRouter({
  createEvent: publicProcedure
    .input(EventSchema)
    .mutation(async ({ ctx, input }) => {
      return ctx.db.event.create({
        data: input,
      });
    }),
});