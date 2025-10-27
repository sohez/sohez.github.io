"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import SectionHeader from "../ui/SectionHeader";
import { BiSend, BiLoaderAlt } from "react-icons/bi";
type StatusType = "Loading" | "Success" | "Error";
const Contact = () => {
  const [form, setForm] = useState({ email: "", message: "" });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [status, setStatus] = useState<{
    message: string;
    status: StatusType;
  } | null>(null);
  const [isSending, setIsSending] = useState(false);

  const emailUrl =
    "https://script.google.com/macros/s/AKfycbwkjI7POBip0D3idUWfZwmdN4bV9TPfkfUWLwWZbu_rxDWSM5_F5VI1jVAXCKlRt0ykAg/exec";

  /** Email validation */
  const checkEmailIsValid = (email: string) => {
    const emailReg = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return emailReg.test(email);
  };

  /** Handle input changes */
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" })); // clear error when typing
  };

  /** Validate fields before submit */
  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    if (!form.email.trim()) newErrors.email = "Email is required.";
    else if (!checkEmailIsValid(form.email))
      newErrors.email = "Enter a valid email address.";
    if (!form.message.trim()) newErrors.message = "Message is required.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  /** Handle submit */
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSending(true);
    setStatus({ message: "Sending...", status: "Loading" });

    const formData = new FormData();
    formData.set("Name", "@PORTFOLIO-v2");
    formData.set("Email", form.email);
    formData.set("Request", form.message);

    try {
      const response = await fetch(emailUrl, {
        method: "POST",
        body: formData,
      });

      const result = await response.json();
      console.log("Email response:", result);
      setStatus({
        message: "Thanks for reaching out! I'll get back to you soon.",
        status: "Success",
      });
      setForm({ email: "", message: "" });
    } catch (error) {
      setStatus({
        message: "Something went wrong. Please try again.",
        status: "Error",
      });
    } finally {
      setIsSending(false);
      setTimeout(() => setStatus(null), 3000);
    }
  };

  const color = status?.status === "Success" ? "text-green-500" : status?.status === "Error" ? "text-red-500" : "text-gray-400";

  return (
    <section className="w-full mt-25 px-6">
      <div className="max-w-7xl mx-auto flex flex-col gap-8 justify-center items-center">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <SectionHeader
            title="Contact Me"
            subtitle="Get in Touch"
            description="I'd love to hear from you! Whether you have a question, a project idea, or just want to say hello, feel free to reach out."
          />
        </motion.div>

        {/* Contact Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
          className={`w-full max-w-3xl border border-gray-700 bg-[#161B22]/70 backdrop-blur-3xl p-8 rounded-2xl flex flex-col gap-6 text-gray-200 ${
            isSending ? "opacity-70 pointer-events-none" : ""
          }`}
        >
          {/* Email */}
          <div className="flex flex-col">
            <label htmlFor="email" className="text-sm text-gray-400 mb-2">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="your@email.com"
              className={`px-4 py-3 rounded-md bg-transparent border ${
                errors.email ? "border-red-500" : "border-gray-700"
              } focus:outline-none focus:ring-2 ${
                errors.email ? "focus:ring-red-500" : "focus:ring-gray-500"
              } placeholder-gray-500 transition-all duration-200`}
              disabled={isSending}
            />
            {errors.email && (
              <span className="text-red-500 text-sm mt-1">{errors.email}</span>
            )}
          </div>

          {/* Message */}
          <div className="flex flex-col">
            <label htmlFor="message" className="text-sm text-gray-400 mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={form.message}
              onChange={handleChange}
              placeholder="Write your message here..."
              className={`px-4 py-3 rounded-md bg-transparent border ${
                errors.message ? "border-red-500" : "border-gray-700"
              } focus:outline-none focus:ring-2 ${
                errors.message ? "focus:ring-red-500" : "focus:ring-gray-500"
              } placeholder-gray-500 resize-none transition-all duration-200`}
              disabled={isSending}
            />
            {errors.message && (
              <span className="text-red-500 text-sm mt-1">
                {errors.message}
              </span>
            )}
          </div>

          
          {/* Status Message */}
          {status && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className={`text-sm mt-2 ${color}`}
            >
              {status.message}
            </motion.p>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSending}
            className={`cursor-pointer mt-3 max-w-fit py-2 px-5 flex gap-2 justify-center items-center rounded-lg border border-gray-700 text-gray-200 transition-all ${
              isSending
                ? "bg-gray-800 cursor-not-allowed"
                : "hover:border-blue-500 hover:text-blue-500"
            }`}
          >
            {isSending ? (
              <>
                <BiLoaderAlt className="animate-spin" /> Sending...
              </>
            ) : (
              <>
                Send Message <BiSend />
              </>
            )}
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
