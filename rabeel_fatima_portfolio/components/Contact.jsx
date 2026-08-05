'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Rocket } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './BrandIcons';
import TypedOnView from './TypedOnView';

// Simple inline icons for X (Twitter) and WhatsApp since they aren't in BrandIcons
function XIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function WhatsAppIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.87 9.87 0 004.74 1.21h.01c5.46 0 9.91-4.45 9.91-9.91C21.96 6.45 17.5 2 12.04 2zm5.8 14.02c-.24.68-1.39 1.3-1.92 1.38-.49.08-1.11.11-1.79-.11-.41-.13-.94-.31-1.62-.6-2.86-1.24-4.73-4.13-4.87-4.32-.14-.19-1.17-1.55-1.17-2.96 0-1.4.74-2.09 1-2.38.26-.29.57-.36.76-.36.19 0 .38 0 .55.01.18.01.41-.07.64.49.24.58.81 2 .88 2.14.07.14.12.31.02.5-.09.19-.14.31-.28.48-.14.17-.29.37-.42.5-.14.14-.28.29-.12.57.16.28.71 1.17 1.53 1.9 1.05.94 1.94 1.23 2.22 1.37.28.14.44.12.6-.07.16-.19.68-.79.86-1.06.18-.28.36-.23.6-.14.24.09 1.53.72 1.79.85.26.14.44.2.5.31.06.12.06.68-.18 1.36z" />
    </svg>
  );
}

const contactLinks = [
  { label: 'GitHub', value: 'github.com/rabeelfatma', href: 'https://github.com/rabeelfatma', Icon: GithubIcon },
  { label: 'LinkedIn', value: 'linkedin.com/in/rabeel-fatima', href: 'https://www.linkedin.com/in/rabeel-fatima-0bb5b7415', Icon: LinkedinIcon },
  { label: 'X (Twitter)', value: 'x.com/rabeelfati39638', href: 'https://x.com/rabeelfati39638', Icon: XIcon },
  { label: 'Email', value: 'rabeel1937a@gmail.com', href: 'mailto:rabeel1937a@gmail.com', Icon: Mail },
  { label: 'Location', value: 'Burewala, Punjab, Pakistan', href: undefined, Icon: MapPin },
  { label: 'WhatsApp', value: '+92 315 0164322', href: 'https://wa.me/923150164322', Icon: WhatsAppIcon },
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

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const inputClass =
    'bg-[var(--card-bg)] border-2 border-[var(--hairline)] text-[var(--text)] rounded-lg px-4 py-3 focus:outline-none focus:border-[var(--accent)] transition-colors';

  return (
    <section id="contact" className="py-24 px-6 max-w-4xl mx-auto relative">
      <TypedOnView text="Get In Touch" as="h2" className="text-3xl font-bold mb-6 gradient-text text-center block" />
      <p className="text-center text-[var(--text-dim)] mb-12">Feel free to reach out for collaborations or internship opportunities.</p>

      <div className="grid md:grid-cols-2 gap-10 items-stretch">
        {/* Vertical contact links, icon on the left */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, type: 'spring' }}
          className="flex flex-col gap-4 h-full"
        >
          {contactLinks.map(({ label, value, href, Icon }, i) => {
            const content = (
              <>
                <span className="w-10 h-10 shrink-0 rounded-full bg-gradient-to-br from-[var(--accent)] to-[var(--accent-3)] flex items-center justify-center text-white">
                  <Icon size={16} className="w-4 h-4" />
                </span>
                <span className="flex flex-col text-left">
                  <span className="text-xs text-[var(--text-dim)]">{label}</span>
                  <span className="text-sm text-[var(--text)] break-all">{value}</span>
                </span>
              </>
            );

            return href ? (
              <motion.a
                key={label}
                href={href}
                target={label === 'Email' ? undefined : '_blank'}
                rel={label === 'Email' ? undefined : 'noopener noreferrer'}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ x: 6, borderColor: 'var(--accent)' }}
                className="flex items-center gap-4 card rounded-xl px-5 py-4 transition flex-1"
              >
                {content}
              </motion.a>
            ) : (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex items-center gap-4 card rounded-xl px-5 py-4 flex-1"
              >
                {content}
              </motion.div>
            );
          })}
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, type: 'spring' }}
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 text-left h-full"
        >
          <input type="text" name="name" required placeholder="Your Name" className={inputClass} />
          <input type="email" name="email" required placeholder="Your Email" className={inputClass} />
          <input type="text" name="subject" required placeholder="Subject" className={inputClass} />
          <textarea name="message" required placeholder="Your Message" className={`${inputClass} flex-1 resize-none`} />
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

      {/* Scroll to top button */}
      <motion.button
        onClick={scrollToTop}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        whileHover={{ scale: 1.1, boxShadow: '0 0 25px rgba(251,122,31,0.4)' }}
        whileTap={{ scale: 0.92 }}
        aria-label="Scroll to top"
        className="mt-16 mx-auto flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-[var(--accent)] to-[var(--accent-3)] text-white"
      >
        <Rocket size={22} />
      </motion.button>
    </section>
  );
}