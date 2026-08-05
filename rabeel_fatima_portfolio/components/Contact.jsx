'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './BrandIcons';
import TypedOnView from './TypedOnView';

const contactLinks = [
  { label: 'GitHub', value: 'github.com/rabeelfatma', href: 'https://github.com/rabeelfatma', Icon: GithubIcon },
  { label: 'LinkedIn', value: 'linkedin.com/in/rabeel-fatima', href: 'https://www.linkedin.com/in/rabeel-fatima-0bb5b7415', Icon: LinkedinIcon },
  { label: 'Email', value: 'rabeel1937a@gmail.com', href: 'mailto:rabeel1937a@gmail.com', Icon: Mail },
];

export default function Contact() {
  const [status, setStatus] = useState('idle');

  // Automatically reset status back to idle after 5 seconds to make the message disappear
  useEffect(() => {
    if (status === 'success' || status === 'error') {
      const timer = setTimeout(() => {
        setStatus('idle');
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    const formData = new FormData(e.target);
    formData.append('access_key', 'c273ce7f-9a91-48dc-858a-9e08b766f768');
    
    try {
      const res = await fetch('https://api.web3forms.com/submit', { method: 'POST', body: formData });
      const result = await res.json();
      if (result.success) { 
        setStatus('success'); 
        e.target.reset(); 
      } else { 
        setStatus('error'); 
      }
    } catch { 
      setStatus('error'); 
    }
  };

  return (
    <section id="contact" className="py-24 px-6 max-w-4xl mx-auto">
      <TypedOnView text="Get In Touch" as="h2" className="text-3xl font-bold mb-6 gradient-text text-center block" />
      <p className="text-center text-[var(--text-dim)] mb-12">Feel free to reach out for collaborations or internship opportunities.</p>

      <div className="grid md:grid-cols-2 gap-10 items-start">
        {/* Vertical contact links, icon on the left */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, type: 'spring' }}
          className="flex flex-col gap-4"
        >
          {contactLinks.map(({ label, value, href, Icon }, i) => (
            <motion.a
              key={label}
              href={href}
              target={label === 'Email' ? undefined : '_blank'}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ x: 6, borderColor: 'var(--accent)' }}
              className="flex items-center gap-4 card rounded-xl px-5 py-4 transition"
            >
              <span className="w-10 h-10 shrink-0 rounded-full bg-gradient-to-br from-[var(--accent)] to-[var(--accent-3)] flex items-center justify-center text-white">
                <Icon size={18} />
              </span>
              <span className="flex flex-col text-left">
                <span className="text-xs text-[var(--text-dim)]">{label}</span>
                <span className="text-sm text-[var(--text)] break-all">{value}</span>
              </span>
            </motion.a>
          ))}
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, type: 'spring' }}
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 text-left"
        >
          <input type="text" name="name" required placeholder="Your Name" className="bg-[var(--card-bg)] border border-[var(--hairline)] text-[var(--text)] rounded-lg px-4 py-3 focus:outline-none focus:border-[var(--accent)]" />
          <input type="email" name="email" required placeholder="Your Email" className="bg-[var(--card-bg)] border border-[var(--hairline)] text-[var(--text)] rounded-lg px-4 py-3 focus:outline-none focus:border-[var(--accent)]" />
          <textarea name="message" required placeholder="Your Message" rows={5} className="bg-[var(--card-bg)] border border-[var(--hairline)] text-[var(--text)] rounded-lg px-4 py-3 focus:outline-none focus:border-[var(--accent)]" />
          <motion.button
            type="submit"
            disabled={status === 'sending'}
            whileHover={{ scale: 1.04, boxShadow: '0 0 25px rgba(251,122,31,0.4)' }}
            whileTap={{ scale: 0.96 }}
            className="bg-gradient-to-r from-[var(--accent)] to-[var(--accent-3)] text-white px-6 py-3 rounded-full font-medium transition disabled:opacity-50"
          >
            {status === 'sending' ? 'Sending...' : 'Send Message'}
          </motion.button>
          
          {/* Status text with orange theme color & auto-disappear */}
          {status === 'success' && (
            <motion.p 
              initial={{ opacity: 0, y: -5 }} 
              animate={{ opacity: 1, y: 0 }} 
              className="text-[var(--accent)] font-medium text-sm text-center"
            >
              Message sent successfully!
            </motion.p>
          )}
          {status === 'error' && (
            <motion.p 
              initial={{ opacity: 0, y: -5 }} 
              animate={{ opacity: 1, y: 0 }} 
              className="text-red-400 font-medium text-sm text-center"
            >
              Something went wrong. Try again.
            </motion.p>
          )}
        </motion.form>
      </div>
    </section>
  );
}