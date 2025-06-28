import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactMessageSchema } from "@shared/schema";
import { z } from "zod";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactMessageSchema.parse(req.body);
      const message = await storage.createContactMessage(validatedData);

      // ✅ Configure the transporter
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: parseInt(process.env.SMTP_PORT || "465", 10),
        secure: true,
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      });

      // ✅ Prepare and send the email
      await transporter.sendMail({
        from: `"Dina's Daycare" <info.daycare@dinasgroup.co.za>`,
        to: "info.daycare@dinasgroup.co.za",
        subject: "New Contact Form Submission",
        html: `
        <h3>New Contact Message</h3>
        <p><strong>Name:</strong> ${validatedData.firstName} ${validatedData.lastName}</p>
        <p><strong>Email:</strong> ${validatedData.email}</p>
        <p><strong>Phone:</strong> ${validatedData.phone}</p>
        <p><strong>Child's Age:</strong> ${validatedData.childAge}</p>
        <p><strong>Message:</strong></p>
        <p>${validatedData.message}</p>
      `,
      });

      res.json({
        message: "Contact message sent successfully and emailed.",
        id: message.id,
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({
          message: "Validation error",
          errors: error.errors,
        });
      } else {
        console.error("Error handling contact message:", error);
        res.status(500).json({
          message: "Internal server error",
        });
      }
    }
  });

  // Get all contact messages (for admin purposes)
  app.get("/api/contact-messages", async (req, res) => {
    try {
      const messages = await storage.getContactMessages();
      res.json(messages);
    } catch (error) {
      console.error("Error fetching contact messages:", error);
      res.status(500).json({
        message: "Internal server error",
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
