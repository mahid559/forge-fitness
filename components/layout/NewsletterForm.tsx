'use client';

import { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';

export function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [done, setDone] = useState(false);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (email.trim().length > 3) setDone(true);
      }}
      className="w-full"
    >
      {done ? (
        <p className="flex items-center gap-2 text-sm font-medium text-emerald-400">
          <Check className="h-4 w-4" aria-hidden /> You’re on the list. Talk soon!
        </p>
      ) : (
        <div className="flex items-center gap-2 rounded-full border border-steel-700 bg-steel-900/70 p-1.5 pl-4 focus-within:border-ember-500/70 transition-colors">
          <label htmlFor="newsletter-email" className="sr-only">
            Email address
          </label>
          <input
            id="newsletter-email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            className="w-full bg-transparent text-sm text-steel-100 placeholder:text-steel-500 focus:outline-none"
          />
          <button
            type="submit"
            aria-label="Subscribe"
            className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-ember-gradient text-ink-950 transition-transform hover:scale-105"
          >
            <ArrowRight className="h-4 w-4" aria-hidden />
          </button>
        </div>
      )}
    </form>
  );
}