import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Check, Copy, Linkedin, Mail, Phone } from "lucide-react";
import { sitecore } from "../data/sitecore";
export function ContactDetails() {
  const [copied, setCopied] = useState("");
  const [message, setMessage] = useState("");
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  useEffect(
    () => () => {
      if (timer.current) clearTimeout(timer.current);
    },
    [],
  );
  async function copy(value: string, label: string) {
    if (timer.current) clearTimeout(timer.current);
    try {
      await navigator.clipboard.writeText(value);
      setCopied(label);
      setMessage(`${label} copied`);
      timer.current = setTimeout(() => {
        setCopied("");
        setMessage("");
      }, 2400);
    } catch {
      setCopied("");
      setMessage(
        "Copy is unavailable. Select and copy the contact detail directly.",
      );
    }
  }
  const profile = sitecore.profile;
  const contacts = [
    {
      label: "Email",
      value: profile.email,
      href: `mailto:${profile.email}`,
      icon: Mail,
    },
    {
      label: "Phone",
      value: profile.phone,
      href: `tel:${profile.phone.replace(/[^+\d]/g, "")}`,
      icon: Phone,
    },
    {
      label: "LinkedIn",
      value: profile.linkedin,
      href: profile.linkedin,
      icon: Linkedin,
    },
  ];
  return (
    <div className="contact-details">
      {contacts.map((item) => (
        <div className="contact-entry" key={item.label}>
          <span className="contact-entry-icon">
            <item.icon size={21} aria-hidden="true" />
          </span>
          <span className="contact-entry-label">{item.label}</span>
          <a
            className="contact-entry-value"
            href={item.href}
            target={item.label === "LinkedIn" ? "_blank" : undefined}
            rel={item.label === "LinkedIn" ? "noopener noreferrer" : undefined}
          >
            {item.value}
            <ArrowUpRight size={16} aria-hidden="true" />
          </a>
          <button
            className="contact-entry-copy"
            onClick={() => copy(item.value, item.label)}
            aria-label={`Copy ${item.label.toLowerCase()}`}
          >
            {copied === item.label ? <Check size={16} /> : <Copy size={16} />}
            <span>{copied === item.label ? "Copied" : "Copy"}</span>
          </button>
        </div>
      ))}
      <p className="contact-inline-status" role="status" aria-live="polite">
        {message}
      </p>
    </div>
  );
}
