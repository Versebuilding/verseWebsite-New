'use client';

import { useState } from 'react';
import { toast } from 'react-toastify';

type Json = Record<string, unknown>;

const isRecord = (v: unknown): v is Json => typeof v === 'object' && v !== null;
type WithMessage = { message?: unknown };
const hasMessage = (v: unknown): v is WithMessage => isRecord(v) && 'message' in v;

const errMsg = (v: unknown): string => {
  if (!v) return 'Something went wrong. Try again.';
  if (typeof v === 'string') return v;
  if (Array.isArray(v) && v.length) {
    const first = v[0] as unknown;
    if (typeof first === 'string') return first;
    if (hasMessage(first) && typeof first.message === 'string') return first.message;
  }
  if (isRecord(v) && 'error' in v) return errMsg((v as Json).error);
  if (hasMessage(v) && typeof v.message === 'string') return v.message;
  return 'Something went wrong. Try again.';
};

export default function NewsletterForm() {
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (loading) return;
    setLoading(true);

    const form = e.currentTarget;
    const fd = new FormData(form);
    const email = String(fd.get('email') ?? '').trim();

    if (!email) {
      toast.error('Please enter your email');
      setLoading(false);
      return;
    }

    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, source: 'footer' }),
      });
      const data: unknown = await res.json().catch(() => ({}));

      if (!res.ok) {
        toast.error(errMsg(data));
        return;
      }

      const already =
        isRecord(data) && 'already' in data && Boolean((data as Json).already);
      toast.success(
        already ? 'You’re already subscribed. ✅'
                : 'Almost done! Check your email to confirm. 📫'
      );
      form.reset();
    } catch (err: unknown) {
      toast.error(errMsg(err));
    } finally {
      setLoading(false);
    }
  }

  return (
    <form id="newsletter" onSubmit={onSubmit} noValidate aria-live="polite">
      <div className="mt-6 sm:mt-10 w-full flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-5">
        <input
          type="email"
          name="email"
          autoComplete="email"
          required
          placeholder="you@example.com"
          className="block w-full sm:w-80 border-b border-gray-400 text-white text-sm bg-transparent placeholder-gray-400 focus:outline-none focus:ring-0 pb-1 min-w-0"
          aria-label="Email address"
        />
        <button
          type="submit"
          disabled={loading}
          className="bg-white text-black font-semibold w-full sm:w-auto rounded-lg px-4 py-2 disabled:opacity-60"
        >
          {loading ? 'Subscribing…' : 'Subscribe'}
        </button>
      </div>
    </form>
  );
}
