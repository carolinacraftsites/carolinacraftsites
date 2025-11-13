import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import {
  insertContactInquirySchema,
  insertNewsletterSubscriptionSchema,
} from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactInquirySchema.parse(req.body);
      const inquiry = await storage.createContactInquiry(validatedData);
      
      console.log("New contact inquiry received:", {
        name: inquiry.name,
        email: inquiry.email,
        phone: inquiry.phone,
      });
      
      res.json({
        success: true,
        message: "Thank you for your inquiry! We'll get back to you within 24 hours.",
      });
    } catch (error) {
      console.error("Error creating contact inquiry:", error);
      res.status(400).json({
        success: false,
        message: "Invalid data provided. Please check your form and try again.",
      });
    }
  });

  app.post("/api/newsletter", async (req, res) => {
    try {
      const validatedData = insertNewsletterSubscriptionSchema.parse(req.body);
      
      const existing = await storage.getNewsletterSubscriptionByEmail(validatedData.email);
      if (existing) {
        return res.json({
          success: true,
          message: "You're already subscribed to our newsletter!",
        });
      }
      
      await storage.createNewsletterSubscription(validatedData);
      
      console.log("New newsletter subscription:", validatedData.email);
      
      res.json({
        success: true,
        message: "Successfully subscribed! You'll receive our latest updates and tips.",
      });
    } catch (error) {
      console.error("Error creating newsletter subscription:", error);
      res.status(400).json({
        success: false,
        message: "Invalid email address. Please try again.",
      });
    }
  });

  app.get("/api/inquiries", async (_req, res) => {
    try {
      const inquiries = await storage.getAllContactInquiries();
      res.json(inquiries);
    } catch (error) {
      console.error("Error fetching inquiries:", error);
      res.status(500).json({ error: "Failed to fetch inquiries" });
    }
  });

  app.get("/api/subscribers", async (_req, res) => {
    try {
      const subscribers = await storage.getAllNewsletterSubscriptions();
      res.json(subscribers);
    } catch (error) {
      console.error("Error fetching subscribers:", error);
      res.status(500).json({ error: "Failed to fetch subscribers" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
