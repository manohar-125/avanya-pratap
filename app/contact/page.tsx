"use client";

import { useRef, useState } from "react";
import { Phone, Mail, MapPin, Loader2, CheckCircle, XCircle } from "lucide-react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [notRobot, setNotRobot] = useState(false);
  const [robotError, setRobotError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [phoneError, setPhoneError] = useState("");

  const validatePhone = (value: string) => {
    if (!value) return ""; // phone is optional
    const clean = value.replace(/\s+/g, "");
    const valid = /^(\+91|91|0)?[6-9]\d{9}$/.test(clean);
    return valid ? "" : "Enter a valid 10-digit Indian mobile number.";
  };

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!notRobot) {
      setRobotError(true);
      return;
    }

    const formEl = form.current!;
    const phone = (formEl.elements.namedItem("phone") as HTMLInputElement).value;
    const phoneValidationError = validatePhone(phone);
    if (phoneValidationError) {
      setPhoneError(phoneValidationError);
      return;
    }

    setLoading(true);
    setSuccess(false);
    setError(false);

    const templateParams = {
      name: (formEl.elements.namedItem("name") as HTMLInputElement).value,
      email: (formEl.elements.namedItem("email") as HTMLInputElement).value,
      phone: phone || "Not provided",
      message: (formEl.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const result = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );
      console.log("EmailJS success:", result.status, result.text);
      setSuccess(true);
      form.current?.reset();
      setNotRobot(false);
      setRobotError(false);
      setPhoneError("");
    } catch (err) {
      console.error("EmailJS error:", err);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="pt-28 pb-10 px-8">
        <div className="max-w-6xl mx-auto">
          {/* Title */}
          <div className="text-center">
            <div className="inline-block backdrop-blur-lg bg-white/40 border border-white/50 rounded-full px-5 py-2 mb-6 shadow-md">
              <span className="text-primary font-semibold text-sm tracking-wide">Get In Touch</span>
            </div>
            <h1 className="text-4xl font-bold text-secondary tracking-tight">Contact Us</h1>
            <p className="mt-4 text-gray-500 text-sm max-w-md mx-auto leading-relaxed">
              Reach out to discuss your project requirements or tender
              opportunities.
            </p>
          </div>

          <div className="mt-16 grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-6">
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl blur-2xl transition-all duration-300 group-hover:blur-3xl"></div>
                <div className="relative backdrop-blur-lg bg-white/30 border border-white/50 rounded-2xl p-6 shadow-2xl hover:bg-white/40 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-9 h-9 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                      <Phone className="text-primary" size={16} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-secondary text-sm tracking-wide mb-1">Phone</h3>
                      <p className="text-gray-500 text-sm">(+91) 70715 83939,  73555 34189</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl blur-2xl transition-all duration-300 group-hover:blur-3xl"></div>
                <div className="relative backdrop-blur-lg bg-white/30 border border-white/50 rounded-2xl p-6 shadow-2xl hover:bg-white/40 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-9 h-9 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                      <Mail className="text-primary" size={16} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-secondary text-sm tracking-wide mb-1">Email</h3>
                      <p className="text-gray-500 text-sm">info@avanyapratap.com, avanya.pratap@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl blur-2xl transition-all duration-300 group-hover:blur-3xl"></div>
                <div className="relative backdrop-blur-lg bg-white/30 border border-white/50 rounded-2xl p-6 shadow-2xl hover:bg-white/40 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-9 h-9 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                      <MapPin className="text-primary" size={16} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-secondary text-sm tracking-wide mb-1">Office Address</h3>
                      <p className="text-gray-500 text-sm">
                        Khajuriya, Ghazipur, Uttar Pradesh, India
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="backdrop-blur-lg bg-white/40 border border-white/50 rounded-2xl p-10 shadow-2xl">
              <form ref={form} onSubmit={sendEmail} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-xs font-semibold text-secondary/70 uppercase tracking-wider mb-2">
                    Full Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    required
                    className="w-full backdrop-blur-sm bg-white/60 border border-white/50 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-primary/30 focus:border-primary/50 focus:outline-none transition-all duration-300 shadow-sm"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-semibold text-secondary/70 uppercase tracking-wider mb-2">
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    required
                    suppressHydrationWarning
                    className="w-full backdrop-blur-sm bg-white/60 border border-white/50 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-primary/30 focus:border-primary/50 focus:outline-none transition-all duration-300 shadow-sm"
                    placeholder="you@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-xs font-semibold text-secondary/70 uppercase tracking-wider mb-2">
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    name="phone"
                    onChange={(e) => setPhoneError(validatePhone(e.target.value))}
                    className={`w-full backdrop-blur-sm bg-white/60 border rounded-xl px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:outline-none transition-all duration-300 shadow-sm ${
                      phoneError
                        ? "border-red-400/60 focus:ring-red-300/40 focus:border-red-400/60"
                        : "border-white/50 focus:ring-primary/30 focus:border-primary/50"
                    }`}
                    placeholder="+91 XXXXX XXXXX"
                  />
                  {phoneError && (
                    <p className="mt-1.5 text-xs text-red-500 font-medium pl-1">{phoneError}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-semibold text-secondary/70 uppercase tracking-wider mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="w-full backdrop-blur-sm bg-white/60 border border-white/50 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-primary/30 focus:border-primary/50 focus:outline-none transition-all duration-300 shadow-sm resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                {/* I'm not a robot */}
                <div>
                  <label
                    className={`flex items-center gap-3 w-full backdrop-blur-sm bg-white/60 border rounded-xl px-4 py-3 cursor-pointer transition-all duration-300 select-none ${
                      robotError
                        ? "border-red-400/60 ring-2 ring-red-300/40"
                        : "border-white/50 hover:border-primary/40"
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={notRobot}
                      onChange={(e) => {
                        setNotRobot(e.target.checked);
                        if (e.target.checked) setRobotError(false);
                      }}
                      className="w-4 h-4 rounded accent-[#F58220] cursor-pointer shrink-0"
                    />
                    <span className="text-sm text-secondary/80 font-medium">
                      I&apos;m not a robot
                    </span>
                  </label>
                  {robotError && (
                    <p className="mt-1.5 text-xs text-red-500 font-medium pl-1">
                      Please confirm you are not a robot.
                    </p>
                  )}
                </div>

                {/* Feedback Messages */}
                {success && (
                  <div className="flex items-center gap-2 text-green-600 bg-green-50 border border-green-200 rounded-xl px-4 py-3 text-sm font-medium">
                    <CheckCircle size={16} className="shrink-0" />
                    Message sent successfully! We&apos;ll get back to you soon.
                  </div>
                )}
                {error && (
                  <div className="flex items-center gap-2 text-red-600 bg-red-50 border border-red-200 rounded-xl px-4 py-3 text-sm font-medium">
                    <XCircle size={16} className="shrink-0" />
                    Failed to send message. Please try again or email us directly.
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading || !notRobot}
                  className="w-full py-3 rounded-xl font-semibold text-sm text-white tracking-wide flex items-center justify-center gap-2 transition-all duration-300 bg-primary shadow-lg disabled:opacity-40 disabled:cursor-not-allowed enabled:hover:bg-primary/90 enabled:hover:scale-[1.02] enabled:active:scale-[0.98] enabled:hover:shadow-primary/30"
                >
                  {loading ? (
                    <>
                      <Loader2 className="animate-spin" size={18} />
                      Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Google Map Embed */}
          <div className="mt-16 backdrop-blur-lg bg-white/30 border border-white/50 rounded-2xl overflow-hidden shadow-2xl">
            <iframe
              title="Avanya Group Office Location — Ghazipur, Uttar Pradesh"
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3598.968011291897!2d83.561543!3d25.572730999999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjXCsDM0JzIxLjgiTiA4M8KwMzMnNDEuNiJF!5e0!3m2!1sen!2sin!4v1772731399509!5m2!1sen!2sin"
              width="100%"
              height="400"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
    </main>
  );
}
