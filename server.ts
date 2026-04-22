import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Route for booking calls
  app.post("/api/book-call", async (req, res) => {
    const { email, date, time, name } = req.body;

    if (!email || !date || !time) {
      return res.status(400).json({ error: "Missing booking details" });
    }

    try {
      // Configure transporter
      // Note: In production, the user must provide these variables in their environment
      const transporter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST || "smtp.gmail.com",
        port: parseInt(process.env.EMAIL_PORT || "587"),
        secure: process.env.EMAIL_SECURE === "true",
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });

      const mailOptions = {
        from: `"Logicentra AI" <${process.env.EMAIL_USER || "noreply@logicentra.ai"}>`,
        to: email,
        subject: "Strategy Call Selection Confirmed - Logicentra AI",
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; background: #f9f9f9; padding: 40px; border-radius: 12px;">
            <h2 style="color: #3B82F6;">Booking Confirmed!</h2>
            <p>Hello${name ? ' ' + name : ''},</p>
            <p>Thank you for booking your strategy call with Logicentra AI. We're excited to help you automate and scale your business.</p>
            <div style="background: white; padding: 20px; border-radius: 8px; border: 1px solid #eee; margin: 24px 0;">
              <p style="margin: 0; color: #666; font-size: 14px; text-transform: uppercase; font-weight: bold;">Details:</p>
              <h3 style="margin: 8px 0 0 0;">Thursday, March ${date}, 2026</h3>
              <p style="margin: 4px 0 0 0; color: #3B82F6; font-weight: bold;">at ${time}</p>
            </div>
            <p>We've added this to our calendar and a calendar invite will follow shortly.</p>
            <hr style="border: 0; border-top: 1px solid #eee; margin: 32px 0;" />
            <p style="font-size: 12px; color: #999;">If you need to reschedule, please reply to this email.</p>
          </div>
        `,
      };

      // In a real scenario, this would send. If credentials aren't set, we log it.
      if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
        await transporter.sendMail(mailOptions);
        console.log(`Email sent to ${email}`);
        res.json({ success: true, message: "Email sent" });
      } else {
        console.warn("EMAIL_USER or EMAIL_PASS not set. Logging email to console instead:");
        console.log("-------------------");
        console.log(`To: ${email}`);
        console.log(`Subject: ${mailOptions.subject}`);
        console.log("Body:", mailOptions.html);
        console.log("-------------------");
        res.json({ 
          success: true, 
          message: "Booking simulated (Configure EMAIL_USER/PASS for real emails)",
          simulated: true 
        });
      }
    } catch (error) {
      console.error("Failed to send email:", error);
      res.status(500).json({ error: "Failed to process booking email" });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
