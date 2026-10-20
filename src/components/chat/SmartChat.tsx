"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { academy } from "@/config/academy";

type Role = "visitor" | "parent" | "student" | "teacher" | "graduate";

interface Message {
  id: number;
  from: "bot" | "user";
  text: string;
  links?: { label: string; href: string }[];
}

const quickByRole: Record<Role, string[]> = {
  visitor: [
    "What programmes do you offer?",
    "Where are you located?",
    "How do I contact the academy?",
    "How do I apply?",
  ],
  parent: [
    "How does admission work?",
    "What will my child learn?",
    "How do I reach the academy?",
    "Is there online learning?",
  ],
  student: [
    "How do I open the student portal?",
    "What is Qur'an Studies?",
    "Who do I contact for help?",
  ],
  teacher: [
    "How do I open the teacher portal?",
    "Who do I contact for staff support?",
  ],
  graduate: [
    "Is there a graduate portal?",
    "How do I stay in touch?",
  ],
};

function answer(question: string): Message {
  const q = question.toLowerCase();

  if (q.includes("programme") || q.includes("offer") || q.includes("course") || q.includes("learn")) {
    return {
      id: Date.now(),
      from: "bot",
      text: "We focus on four areas: Qur'an Studies (recitation, hifz, understanding), Huruf & Arabic, Islamic Studies, and selected academic subjects. Qur'an is at the centre of everything.",
      links: [
        { label: "Qur'an Studies", href: "/quran-studies" },
        { label: "Huruf & Arabic", href: "/huruf-arabic" },
        { label: "All Programmes", href: "/#programmes" },
      ],
    };
  }

  if (q.includes("admit") || q.includes("enrol") || q.includes("enroll") || q.includes("apply") || q.includes("join") || q.includes("admission")) {
    return {
      id: Date.now(),
      from: "bot",
      text: "Admissions are open. The usual path is: enquire → placement assessment → application → confirmation. Fees and document lists are confirmed directly by the academy.",
      links: [
        { label: "Admissions page", href: "/admissions" },
        { label: "Contact us", href: "/contact" },
      ],
    };
  }

  if (q.includes("location") || q.includes("where") || q.includes("address") || q.includes("abuja")) {
    return {
      id: Date.now(),
      from: "bot",
      text: `We are based in ${academy.location}. The full street address will be published once confirmed. You can reach us by phone or email in the meantime.`,
      links: [{ label: "Contact", href: "/contact" }],
    };
  }

  if (q.includes("contact") || q.includes("phone") || q.includes("email") || q.includes("call") || q.includes("reach")) {
    return {
      id: Date.now(),
      from: "bot",
      text: `Email: ${academy.emails[0]} or ${academy.emails[1]}. Phone: ${academy.phone.formatted}. Location: ${academy.location}.`,
      links: [{ label: "Contact page", href: "/contact" }],
    };
  }

  if (q.includes("portal") || q.includes("login") || q.includes("sign in") || q.includes("dashboard")) {
    return {
      id: Date.now(),
      from: "bot",
      text: "Portals for students, teachers, staff, and graduates are listed on the Portals page. Secure sign-in will go live when the academy activates accounts. There is no fake login.",
      links: [
        { label: "All Portals", href: "/portal" },
        { label: "Student Portal", href: "/portal/student" },
      ],
    };
  }

  if (q.includes("online") || q.includes("remote") || q.includes("virtual") || q.includes("distance")) {
    return {
      id: Date.now(),
      from: "bot",
      text: "Online learning options are being developed so students can join when they cannot attend in person. Details will be published as they are confirmed.",
      links: [{ label: "Online Learning", href: "/online-learning" }],
    };
  }

  if (q.includes("qur") || q.includes("hifz") || q.includes("tajweed") || q.includes("memor")) {
    return {
      id: Date.now(),
      from: "bot",
      text: "Qur'an Studies covers tajweed, memorization (hifz), understanding, and regular revision. Students are placed by level after a simple assessment.",
      links: [{ label: "Qur'an Studies", href: "/quran-studies" }],
    };
  }

  if (q.includes("arabic") || q.includes("huruf") || q.includes("letter")) {
    return {
      id: Date.now(),
      from: "bot",
      text: "Huruf & Arabic starts from the letters and builds toward reading, writing, and simple conversation. Beginners are welcome.",
      links: [{ label: "Huruf & Arabic", href: "/huruf-arabic" }],
    };
  }

  if (q.includes("teacher") || q.includes("staff") || q.includes("who teach")) {
    return {
      id: Date.now(),
      from: "bot",
      text: "We look for teachers who know their subject and can teach it with patience. Individual profiles will be published when the academy approves them.",
      links: [
        { label: "Teachers & Approach", href: "/teachers" },
        { label: "Teacher Portal", href: "/portal/teacher" },
      ],
    };
  }

  if (q.includes("fee") || q.includes("cost") || q.includes("price") || q.includes("pay")) {
    return {
      id: Date.now(),
      from: "bot",
      text: "Fee details are provided directly by the academy during admissions. I cannot quote figures that have not been confirmed. Please contact the office.",
      links: [
        { label: "Contact", href: "/contact" },
        { label: "Admissions", href: "/admissions" },
      ],
    };
  }

  if (q.includes("hello") || q.includes("hi") || q.includes("salam") || q.includes("hey")) {
    return {
      id: Date.now(),
      from: "bot",
      text: "Wa alaykum as-salam. Welcome to AS SAFWATUL-MALA ACADEMY. How can I help you today?",
    };
  }

  return {
    id: Date.now(),
    from: "bot",
    text: `I can help with programmes, admissions, contact details, and portals. For anything else, please email ${academy.emails[0]} or call ${academy.phone.formatted}.`,
    links: [
      { label: "Contact", href: "/contact" },
      { label: "Admissions", href: "/admissions" },
      { label: "Portals", href: "/portal" },
    ],
  };
}

export default function SmartChat() {
  const [open, setOpen] = useState(false);
  const [role, setRole] = useState<Role | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const startAs = (r: Role) => {
    setRole(r);
    setMessages([
      {
        id: 1,
        from: "bot",
        text:
          r === "visitor"
            ? "Welcome. Ask me about programmes, admissions, or how to reach the academy."
            : r === "parent"
            ? "Welcome. I can help with admissions, what your child will learn, and contact details."
            : r === "student"
            ? "Welcome. I can point you to the student portal and programme pages."
            : r === "teacher"
            ? "Welcome. I can point you to the teacher portal and support contacts."
            : "Welcome. I can point you to the graduate portal and how to stay in touch.",
      },
    ]);
  };

  const send = (text: string) => {
    const trimmed = text.trim();
    if (!trimmed) return;
    const userMsg: Message = { id: Date.now(), from: "user", text: trimmed };
    setMessages((m) => [...m, userMsg]);
    setInput("");
    setTimeout(() => {
      setMessages((m) => [...m, answer(trimmed)]);
    }, 400);
  };

  const reset = () => {
    setRole(null);
    setMessages([]);
    setInput("");
  };

  return (
    <>
      {/* Launcher */}
      <motion.button
        onClick={() => setOpen((o) => !o)}
        className="fixed bottom-6 right-6 z-[90] w-14 h-14 rounded-full bg-gold text-brown-deep shadow-lg shadow-gold/30 flex items-center justify-center hover:bg-gold-dark hover:text-white transition-colors"
        aria-label={open ? "Close chat" : "Open chat"}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {open ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </motion.button>

      {/* Panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.96 }}
            transition={{ duration: 0.25 }}
            className="fixed bottom-24 right-6 z-[90] w-[min(100vw-2rem,380px)] h-[min(70vh,520px)] rounded-2xl overflow-hidden shadow-2xl border border-gold-light/30 flex flex-col bg-white"
          >
            {/* Header */}
            <div className="bg-brown-deep px-4 py-3.5 flex items-center gap-3">
              {role && (
                <button onClick={reset} className="text-gold/70 hover:text-gold p-1" aria-label="Back">
                  <ArrowLeft className="w-4 h-4" />
                </button>
              )}
              <div className="flex-1 min-w-0">
                <p className="text-gold font-heading font-bold text-sm truncate">Safwatul Mala Assistant</p>
                <p className="text-white/40 text-[10px] tracking-wide">
                  {role ? `${role.charAt(0).toUpperCase() + role.slice(1)} help` : "Choose who you are"}
                </p>
              </div>
              <button onClick={() => setOpen(false)} className="text-white/40 hover:text-white p-1" aria-label="Close">
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Body */}
            <div className="flex-1 overflow-y-auto p-4 bg-ivory/40">
              {!role ? (
                <div className="space-y-3">
                  <p className="text-sm text-brown-light mb-4">
                    Who are you visiting as? This helps me show the right options.
                  </p>
                  {(
                    [
                      ["visitor", "Visitor / General"],
                      ["parent", "Parent / Guardian"],
                      ["student", "Student"],
                      ["teacher", "Teacher / Staff"],
                      ["graduate", "Graduate / Alumni"],
                    ] as [Role, string][]
                  ).map(([key, label]) => (
                    <button
                      key={key}
                      onClick={() => startAs(key)}
                      className="w-full text-left px-4 py-3 rounded-xl border border-platinum bg-white hover:border-gold/40 hover:bg-gold-pale/30 transition-all text-sm font-medium text-brown-deep"
                    >
                      {label}
                    </button>
                  ))}
                  <p className="text-[11px] text-brown-muted pt-2">
                    This assistant uses verified academy information only. It is not a live AI connection.
                  </p>
                </div>
              ) : (
                <div className="space-y-3">
                  {messages.map((m) => (
                    <div key={m.id} className={`flex ${m.from === "user" ? "justify-end" : "justify-start"}`}>
                      <div
                        className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed ${
                          m.from === "user"
                            ? "bg-gold text-brown-deep rounded-br-md"
                            : "bg-white border border-platinum/60 text-brown rounded-bl-md"
                        }`}
                      >
                        <p>{m.text}</p>
                        {m.links && m.links.length > 0 && (
                          <div className="mt-2 flex flex-wrap gap-1.5">
                            {m.links.map((l) => (
                              <Link
                                key={l.href}
                                href={l.href}
                                onClick={() => setOpen(false)}
                                className="inline-block text-xs font-semibold text-gold-dark bg-gold/10 px-2.5 py-1 rounded-full hover:bg-gold/20 transition-colors"
                              >
                                {l.label} →
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                  <div ref={bottomRef} />
                </div>
              )}
            </div>

            {/* Quick questions + input */}
            {role && (
              <div className="border-t border-platinum/50 bg-white">
                <div className="px-3 pt-2 flex gap-1.5 overflow-x-auto scrollbar-none">
                  {quickByRole[role].map((q) => (
                    <button
                      key={q}
                      onClick={() => send(q)}
                      className="shrink-0 text-[11px] px-2.5 py-1 rounded-full border border-gold/25 text-gold-dark hover:bg-gold/10 transition-colors"
                    >
                      {q}
                    </button>
                  ))}
                </div>
                <form
                  className="flex items-center gap-2 p-3"
                  onSubmit={(e) => {
                    e.preventDefault();
                    send(input);
                  }}
                >
                  <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Type a question..."
                    className="flex-1 px-3.5 py-2.5 rounded-full border border-platinum bg-ivory/50 text-sm focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 text-brown-deep"
                  />
                  <button
                    type="submit"
                    className="w-10 h-10 rounded-full bg-gold text-brown-deep flex items-center justify-center hover:bg-gold-dark hover:text-white transition-colors"
                    aria-label="Send"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
