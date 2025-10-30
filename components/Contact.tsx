"use client";

import { useForm } from "react-hook-form";
import CTAButton from "./CTAButton";

type ContactForm = {
  firstName: string;
  lastName: string;
  companyName?: string;
  email: string;
  phone?: string;
  message?: string;
};

 
export default function Contact() {
  const { register, handleSubmit, reset } = useForm<ContactForm>({ mode: "onBlur" });
  async function onSubmit(data: ContactForm) {
    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      alert("Message sent — we'll follow up shortly.");
      reset();
    } catch (e) {
      console.error(e);
      alert("There was an error sending your message. Please try again.");
    }
  }

  return (
    <section
      id="contact"
      className="py-20 bg-(--background) text-(--foreground) transition-colors duration-300"
    >
      <div className="max-w-3xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-(--foreground)">Contact Us</h2>
          <p className="mt-2 text-(--text-muted)">
            Send a short message and we&apos;ll get back to you. All messages route to our company inbox.
          </p>
        </div>

        {/* Form */}
        <form
          className="mt-6 grid grid-cols-1 gap-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              {...register("firstName", { required: true })}
              className="p-3 rounded-md border border-(--border) bg-(--card-bg) text-(--foreground) placeholder-(--text-muted) focus:outline-none focus:ring-2 focus:ring-(--accent) transition"
              placeholder="First name"
            />
            <input
              {...register("lastName", { required: true })}
              className="p-3 rounded-md border border-(--border) bg-(--card-bg) text-(--foreground) placeholder-(--text-muted) focus:outline-none focus:ring-2 focus:ring-(--accent) transition"
              placeholder="Last name"
            />
          </div>

          <input
            {...register("companyName")}
            className="p-3 rounded-md border border-(--border) bg-(--card-bg) text-(--foreground) placeholder-(--text-muted) focus:outline-none focus:ring-2 focus:ring-(--accent) transition"
            placeholder="Company name"
          />
          <input
            {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
            className="p-3 rounded-md border border-(--border) bg-(--card-bg) text-(--foreground) placeholder-(--text-muted) focus:outline-none focus:ring-2 focus:ring-(--accent) transition"
            placeholder="Email address"
          />
          <input
            {...register("phone")}
            className="p-3 rounded-md border border-(--border) bg-(--card-bg) text-(--foreground) placeholder-(--text-muted) focus:outline-none focus:ring-2 focus:ring-(--accent) transition"
            placeholder="Phone number"
          />
          <textarea
            {...register("message", { maxLength: 500 })}
            className="p-3 rounded-md border border-(--border) bg-(--card-bg) text-(--foreground) placeholder-(--text-muted) h-32 focus:outline-none focus:ring-2 focus:ring-(--accent) transition"
            placeholder="Short message (max 500 chars)"
          >
          </textarea>
          <div className="mt-4">
            <CTAButton type="submit" className="w-full justify-center">
              Send Message
            </CTAButton>
          </div>
        </form>
      </div>
    </section>
  );
}