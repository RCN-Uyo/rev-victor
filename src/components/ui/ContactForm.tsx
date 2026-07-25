"use client";

import { useState, useRef, useEffect } from "react";
import { Send, ChevronDown } from "lucide-react";

export function ContactForm() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);

  const topics = [
    { value: "partnership", label: "Partnership Inquiry" },
    { value: "mentorship", label: "Mentorship Application" },
    { value: "prayer", label: "Prayer Request" },
    { value: "general", label: "General Question" },
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <form className="flex flex-col gap-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* First Name */}
        <div className="flex flex-col gap-3">
          <label htmlFor="firstName" className="text-white/70 text-sm font-medium tracking-wide uppercase">First Name</label>
          <input 
            type="text" 
            id="firstName" 
            placeholder="John"
            className="w-full bg-transparent border-b border-white/20 px-0 py-4 text-white text-lg placeholder:text-white/20 focus:outline-none focus:border-gold transition-colors duration-300"
          />
        </div>
        {/* Last Name */}
        <div className="flex flex-col gap-3">
          <label htmlFor="lastName" className="text-white/70 text-sm font-medium tracking-wide uppercase">Last Name</label>
          <input 
            type="text" 
            id="lastName" 
            placeholder="Doe"
            className="w-full bg-transparent border-b border-white/20 px-0 py-4 text-white text-lg placeholder:text-white/20 focus:outline-none focus:border-gold transition-colors duration-300"
          />
        </div>
      </div>

      {/* Email */}
      <div className="flex flex-col gap-3">
        <label htmlFor="email" className="text-white/70 text-sm font-medium tracking-wide uppercase">Email Address</label>
        <input 
          type="email" 
          id="email" 
          placeholder="john@example.com"
          className="w-full bg-transparent border-b border-white/20 px-0 py-4 text-white text-lg placeholder:text-white/20 focus:outline-none focus:border-gold transition-colors duration-300"
        />
      </div>

      {/* Custom Subject Dropdown */}
      <div className="flex flex-col gap-3 relative" ref={dropdownRef}>
        <label className="text-white/70 text-sm font-medium tracking-wide uppercase">Subject</label>
        
        {/* Dropdown Trigger */}
        <div 
          onClick={() => setIsOpen(!isOpen)}
          className={`w-full bg-transparent border-b px-0 py-4 flex items-center justify-between cursor-pointer transition-colors duration-300 ${isOpen ? 'border-gold' : 'border-white/20'}`}
        >
          <span className={`text-lg ${selectedTopic ? 'text-white' : 'text-white/50'}`}>
            {selectedTopic ? topics.find(t => t.value === selectedTopic)?.label : "Select a topic..."}
          </span>
          <ChevronDown className={`w-5 h-5 text-white/50 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
        </div>

        {/* Dropdown Menu */}
        {isOpen && (
          <div 
            className="absolute top-full left-0 w-full bg-[#0a0a0a] border border-white/10 rounded-2xl shadow-2xl overflow-hidden z-50 transform origin-top animate-in fade-in slide-in-from-top-2 duration-200"
            style={{ marginTop: '8px', zIndex: 50, border: '1px solid rgba(255,255,255,0.1)' }}
          >
            <ul className="flex flex-col" style={{ padding: '8px 0' }}>
              {topics.map((topic) => (
                <li 
                  key={topic.value}
                  onClick={() => {
                    setSelectedTopic(topic.value);
                    setIsOpen(false);
                  }}
                  className={`text-lg cursor-pointer transition-colors duration-200 ${
                    selectedTopic === topic.value 
                      ? 'bg-gold/10 text-gold' 
                      : 'text-white/80 hover:bg-white/5 hover:text-white'
                  }`}
                  style={{ padding: '16px 24px' }}
                >
                  {topic.label}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Message */}
      <div className="flex flex-col gap-3">
        <label htmlFor="message" className="text-white/70 text-sm font-medium tracking-wide uppercase">Your Message</label>
        <textarea 
          id="message" 
          rows={5}
          placeholder="How can we help you today?"
          className="w-full bg-transparent border-b border-white/20 px-0 py-4 text-white text-lg placeholder:text-white/20 focus:outline-none focus:border-gold transition-colors duration-300 resize-none"
        />
      </div>

      {/* Physical Spacer */}
      <div className="h-4" aria-hidden="true" />

      {/* Submit Button */}
      <button 
        type="button" 
        className="group relative inline-flex items-center justify-center bg-gold text-black font-medium text-lg rounded-full hover:bg-gold-light hover:scale-[1.02] transition-all duration-300 overflow-hidden w-full md:w-auto self-start"
        style={{ padding: '20px 40px', gap: '16px' }}
      >
        <span className="relative z-10">Send Message</span>
        <Send className="w-5 h-5 relative z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
      </button>
    </form>
  );
}
