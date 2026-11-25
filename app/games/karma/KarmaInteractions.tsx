'use client';

import Image from 'next/image';
import { useCallback, useEffect, useRef, useState } from 'react';
import styles from './karma.module.css';

const art = '/images/karma';

/* ───────────────────────── Realm explorer ───────────────────────── */

type Realm = {
  id: string;
  name: string;
  hue: string;
  mood: string;
  feels: string;
  today: string;
  wayThrough: string;
  skill: string;
  status: string;
};

const realms: Realm[] = [
  {
    id: 'god',
    name: 'God realm',
    hue: '#8f7bff',
    mood: 'Bliss that forgot everyone else',
    feels: 'Everything is beautiful, easy and endless. Nothing hurts, so nothing matters much, and nobody looks down.',
    today: 'The comfortable bubble. A perfect feed, a perfect weekend, and no idea how the neighbours are doing.',
    wayThrough: 'Gratitude, and sharing good fortune while you still have it.',
    skill: 'Gratitude',
    status: 'In design',
  },
  {
    id: 'demigod',
    name: 'Demi-God realm',
    hue: '#35c58b',
    mood: 'Winning, and still not enough',
    feels: 'Strong, clever, and furious that somebody else has more. Every gift is measured against a rival’s.',
    today: 'Comparison culture. Leaderboards, follower counts, the sting when a friend gets the thing you wanted.',
    wayThrough: 'Being glad for someone else’s win, and building something together instead.',
    skill: 'Cooperation',
    status: 'In design',
  },
  {
    id: 'human',
    name: 'Human realm',
    hue: '#f0a84b',
    mood: 'Wanting, doubting, choosing',
    feels: 'Enough comfort to think and enough trouble to care. The one realm where you can see the pattern and change it.',
    today: 'An ordinary Tuesday. The moment you notice you are about to snap at someone, and don’t.',
    wayThrough: 'Curiosity and attention: pausing long enough to choose.',
    skill: 'Awareness',
    status: 'In design',
  },
  {
    id: 'animal',
    name: 'Animal realm',
    hue: '#e2645a',
    mood: 'Head down, just surviving',
    feels: 'Fear, habit and instinct. Eat, hide, repeat. There is no room to wonder whether today could go differently.',
    today: 'Autopilot. Burnout. Doing what you did yesterday because looking up feels too dangerous.',
    wayThrough: 'Safety and trust: one calm, patient presence that makes it possible to look up.',
    skill: 'Trust',
    status: 'In design',
  },
  {
    id: 'ghost',
    name: 'Hungry Ghost realm',
    hue: '#e24bd0',
    mood: 'Never, ever full',
    feels: 'A huge appetite and a throat too small to swallow. More arrives constantly and none of it lands.',
    today: 'One more episode, one more scroll, one more order. Getting the thing and feeling the hole anyway.',
    wayThrough: 'Generosity. The cup fills when you pour it out for someone else.',
    skill: 'Generosity',
    status: 'Chapter 1 · in development',
  },
  {
    id: 'hell',
    name: 'Hell realm',
    hue: '#4aa3e8',
    mood: 'Burning, or frozen solid',
    feels: 'Rage that scorches everything nearby, or despair so cold nothing moves. Either way, pain feels permanent.',
    today: 'The argument replayed at 3am. The day everything feels like an attack, including help.',
    wayThrough: 'Patience and compassion, beginning with compassion for yourself.',
    skill: 'Compassion',
    status: 'In design',
  },
];

/* Realm icons, drawn on a 24-unit grid. */
function RealmIcon({ id }: { id: string }) {
  const common = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.7, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const };
  switch (id) {
    case 'god': // lotus
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <path d="M12 4c2.2 3 2.2 7 0 10.5c-2.2-3.5-2.2-7.5 0-10.5z" />
          <path d="M12 14.5c-3.4 0-6.4-2.3-7.4-6.5c3.4 0.2 6.4 2.4 7.4 6.5z" />
          <path d="M12 14.5c3.4 0 6.4-2.3 7.4-6.5c-3.4 0.2-6.4 2.4-7.4 6.5z" />
          <path d="M4 17.5h16M7.5 20.5h9" />
        </svg>
      );
    case 'demigod': // crossed swords
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <path d="M4 4l11.5 11.5M13 17.5l4.5-4.5M16.5 16.5L20 20" />
          <path d="M20 4L8.5 15.5M11 17.5L6.5 13M7.5 16.5L4 20" />
        </svg>
      );
    case 'human': // open eye: awareness
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <path d="M2.5 12S6 6 12 6s9.5 6 9.5 6S18 18 12 18S2.5 12 2.5 12z" />
          <circle cx="12" cy="12" r="3" />
          <circle cx="12" cy="12" r="0.6" fill="currentColor" />
        </svg>
      );
    case 'animal': // paw
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" stroke="none">
          <ellipse cx="12" cy="16" rx="4.3" ry="3.6" />
          <circle cx="6.4" cy="10.6" r="1.9" />
          <circle cx="9.8" cy="6.6" r="1.9" />
          <circle cx="14.2" cy="6.6" r="1.9" />
          <circle cx="17.6" cy="10.6" r="1.9" />
        </svg>
      );
    case 'ghost': // empty bowl, wisps rising
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <path d="M3 11.5h18a9 7.5 0 0 1-18 0z" />
          <path d="M9 21h6" />
          <path d="M9.5 8c-1-1.3 1-2.2 0-4M14.5 8c-1-1.3 1-2.2 0-4" />
        </svg>
      );
    default: // hell: flame
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <path d="M12 3c1.2 3.6 5.5 5.6 5.5 10.5a5.5 5.5 0 0 1-11 0c0-2.8 1.6-4.4 2.7-5.5c0 2.2 1 3.3 2.2 3.3c0-3.2-1.1-5.7.6-8.3z" />
          <path d="M12 20.5a2.2 2.2 0 0 1-2.2-2.2c0-1.6 2.2-3.3 2.2-3.3s2.2 1.7 2.2 3.3a2.2 2.2 0 0 1-2.2 2.2z" />
        </svg>
      );
  }
}

/* The wheel: one continuous ring carrying all six realms. Choosing a realm turns the
   whole wheel until that orb rests at the bottom, in the deity's hands
   (the same idea as RotateImagev2 in the game). Positions in % of the square stage. */
const RING = { x: 50, y: 50, r: 38 };
const STEP = 360 / realms.length;

export function RealmExplorer() {
  const [active, setActive] = useState('ghost');
  const index = realms.findIndex((r) => r.id === active);
  const realm = realms[index] ?? realms[0];
  const tabs = useRef<Record<string, HTMLButtonElement | null>>({});
  const [rot, setRot] = useState(-index * STEP);
  const rotRef = useRef(rot);
  const anim = useRef<number | null>(null);

  // Turn the wheel the short way round until the chosen realm reaches the bottom.
  useEffect(() => {
    const from = rotRef.current;
    let delta = (-index * STEP - from) % 360;
    if (delta > 180) delta -= 360;
    if (delta < -180) delta += 360;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (anim.current !== null) cancelAnimationFrame(anim.current);
    if (reduce || delta === 0) { rotRef.current = from + delta; setRot(rotRef.current); return; }
    const start = performance.now();
    const duration = 600 + Math.abs(delta) * 4;
    const step = (now: number) => {
      const k = Math.min(1, (now - start) / duration);
      const eased = k < 0.5 ? 4 * k * k * k : 1 - Math.pow(-2 * k + 2, 3) / 2;
      rotRef.current = from + delta * eased;
      setRot(rotRef.current);
      anim.current = k < 1 ? requestAnimationFrame(step) : null;
    };
    anim.current = requestAnimationFrame(step);
    return () => { if (anim.current !== null) cancelAnimationFrame(anim.current); };
  }, [index]);

  const onKey = (event: React.KeyboardEvent) => {
    let next = index;
    if (event.key === 'ArrowRight' || event.key === 'ArrowDown') next = (index + 1) % realms.length;
    else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') next = (index - 1 + realms.length) % realms.length;
    else if (event.key === 'Home') next = 0;
    else if (event.key === 'End') next = realms.length - 1;
    else return;
    event.preventDefault();
    setActive(realms[next].id);
    tabs.current[realms[next].id]?.focus();
  };

  return (
    <div className={styles.explorer} style={{ '--realm': realm.hue } as React.CSSProperties}>
      <div className={styles.orbitCol}>
        <div className={styles.orbit}>
          <Image src={`${art}/realm-deity.webp`} alt="" width={722} height={686} sizes="(min-width: 960px) 460px, 76vw" className={styles.deity} />
          <div className={styles.wheel} style={{ transform: `translate(-50%, -50%) rotate(${rot}deg)` }} aria-hidden="true" />
          <div className={styles.orbitTabs} role="tablist" aria-label="The six realms" onKeyDown={onKey}>
            {realms.map((r, i) => {
              const selected = r.id === active;
              const angle = ((90 + i * STEP + rot) * Math.PI) / 180;
              return (
                <button
                  key={r.id}
                  ref={(el) => { tabs.current[r.id] = el; }}
                  type="button"
                  role="tab"
                  id={`karma-tab-${r.id}`}
                  aria-selected={selected}
                  aria-controls="karma-realm-panel"
                  aria-label={r.name}
                  tabIndex={selected ? 0 : -1}
                  className={styles.orbitOrb}
                  style={{ left: `${RING.x + Math.cos(angle) * RING.r}%`, top: `${RING.y + Math.sin(angle) * RING.r}%`, '--realm': r.hue } as React.CSSProperties}
                  onClick={() => setActive(r.id)}
                >
                  <span className={styles.medallion}><RealmIcon id={r.id} /></span>
                  <span className={styles.orbitName} aria-hidden="true">{r.name.replace(' realm', '')}</span>
                </button>
              );
            })}
          </div>
        </div>
        <p className={styles.orbitHint}>Tap an orb to turn the wheel and read about that realm.</p>
      </div>

      <div
        key={realm.id}
        id="karma-realm-panel"
        role="tabpanel"
        aria-labelledby={`karma-tab-${realm.id}`}
        className={styles.realmPanel}
      >
        <div className={styles.realmHead}>
          <span className={styles.realmStatus}>{realm.status}</span>
          <h3>{realm.name}</h3>
          <p className={styles.realmMood}>{realm.mood}</p>
        </div>
        <dl className={styles.realmFacts}>
          <div>
            <dt>How it feels</dt>
            <dd>{realm.feels}</dd>
          </div>
          <div>
            <dt>Where you have met it</dt>
            <dd>{realm.today}</dd>
          </div>
          <div className={styles.realmWay}>
            <dt>The way through · {realm.skill}</dt>
            <dd>{realm.wayThrough}</dd>
          </div>
        </dl>
      </div>
    </div>
  );
}

/* ───────────────────────── Kindness moment ───────────────────────── */

const choices = [
  {
    id: 'share',
    label: 'Hold out the bread',
    petals: 3,
    reply:
      'She takes it, and for a second her eyes actually land on you. Giving without being asked is the shortest road through this realm.',
  },
  {
    id: 'sit',
    label: 'Sit down beside her',
    petals: 2,
    reply:
      'You say nothing. Neither does she. But she stops reaching for the next thing. Sometimes company is the offering.',
  },
  {
    id: 'keep',
    label: 'Keep it for later',
    petals: 1,
    reply:
      'That is allowed. Nobody scolds you, and the story does not stop. Ananda only asks, later on, what the bread felt like in your bag.',
  },
];

export function KindnessMoment() {
  const [picked, setPicked] = useState<string | null>(null);
  const choice = choices.find((c) => c.id === picked);

  return (
    <div className={styles.moment}>
      <div className={styles.momentScene}>
        <span className={styles.momentLabel}>Try a moment from Chapter 1</span>
        <p>
          Serna is sitting alone beside a bench full of cakes she cannot taste. You have one loaf of blessed bread in
          your backpack. What do you do?
        </p>
        <div className={styles.momentChoices}>
          {choices.map((c) => (
            <button
              key={c.id}
              type="button"
              className={styles.choice}
              aria-pressed={picked === c.id}
              onClick={() => setPicked(c.id)}
            >
              {c.label}
            </button>
          ))}
        </div>
      </div>
      <div className={styles.momentResult} aria-live="polite">
        <div className={styles.petals} role="img" aria-label={`Karma: ${choice ? choice.petals : 0} of 3 lotus petals`}>
          {[0, 1, 2].map((i) => (
            <span key={i} className={styles.petal} data-on={choice ? i < choice.petals : false} />
          ))}
        </div>
        <p>
          {choice
            ? choice.reply
            : 'There is no wrong answer here. Every choice gets a written response, including the ones where you hold back.'}
        </p>
        {choice && (
          <p className={styles.momentNote}>
            Karma is fail-soft on purpose: a game about not grasping should not punish you for stumbling.
          </p>
        )}
      </div>
    </div>
  );
}

/* ───────────────────────── Hum statue demo ─────────────────────────
   Two ways to play: a real hum through the microphone (pitch tracked in the
   browser, the same idea as the in-game statue), or a held button.          */

const HOLD_MS = 1500; // steady time needed per orb
const notes = ['Low note', 'Middle note', 'High note'];
const TARGETS = [0.15, 0.5, 0.85]; // where each note sits inside the player's range
const TOLERANCE = 0.17; // forgiving first-session window, as in the game
const DEFAULT_RANGE: [number, number] = [155, 335];

type Mic = {
  ctx: AudioContext; stream: MediaStream; an: AnalyserNode;
  buf: Float32Array<ArrayBuffer>; half: Float32Array; diff: Float32Array;
  floor: number; voiced: boolean; quiet: number; hz: number;
};

/** Loudness and pitch of the newest window (YIN normalised difference at half rate). */
function listen(m: Mic) {
  const buf = m.buf, h = m.half, d = m.diff;
  let sum = 0;
  for (let i = 0; i < buf.length; i++) sum += buf[i] * buf[i];
  const rms = Math.sqrt(sum / buf.length);
  const n = buf.length >> 1, r = m.ctx.sampleRate / 2;
  for (let i = 0; i < n; i++) h[i] = 0.5 * (buf[2 * i] + buf[2 * i + 1]);
  const minLag = Math.max(2, Math.floor(r / 800)), maxLag = Math.min(Math.ceil(r / 60), n >> 1), span = n - maxLag;
  let running = 0;
  for (let lag = 1; lag <= maxLag; lag++) {
    let acc = 0;
    for (let i = 0; i < span; i++) { const x = h[i] - h[i + lag]; acc += x * x; }
    running += acc;
    d[lag] = running > 0 ? (acc * lag) / running : 1;
  }
  let at = -1;
  for (let lag = minLag; lag <= maxLag; lag++) {
    if (d[lag] < 0.15) { while (lag < maxLag && d[lag + 1] < d[lag]) lag++; at = lag; break; }
  }
  if (at < 0) { let low = 1; for (let lag = minLag; lag <= maxLag; lag++) if (d[lag] < low) { low = d[lag]; at = lag; } }
  if (at < 0) return { rms, hz: 0, clear: 0 };
  let nudge = 0;
  if (at > 1 && at < maxLag) {
    const a = d[at - 1], b = d[at], c = d[at + 1], den = a - 2 * b + c;
    if (den > 1e-9) nudge = (0.5 * (a - c)) / den;
  }
  return { rms, hz: r / (at + nudge), clear: 1 - d[at] };
}

/** Reads one frame from the mic. Returns the smoothed pitch in Hz, or 0 when no hum is heard. */
function micFrame(m: Mic, dt: number) {
  m.an.getFloatTimeDomainData(m.buf);
  const f = listen(m);
  if (f.rms < m.floor) m.floor = Math.max(0.0005, f.rms);
  else if (!m.voiced && f.clear < 0.5) m.floor = Math.min(0.02, m.floor + (f.rms - m.floor) * Math.min(1, dt * 0.5));
  const tone = f.hz >= 60 && f.hz <= 800;
  const on = tone && f.clear > 0.75 && f.rms > Math.max(0.006, m.floor * 3.5);
  const still = tone && f.clear > 0.5 && f.rms > Math.max(0.004, m.floor * 2.2);
  if (!m.voiced) { if (on) { m.voiced = true; m.quiet = 0; m.hz = f.hz; } }
  else if (still) { m.quiet = 0; m.hz += (f.hz - m.hz) * (1 - Math.exp(-25 * dt)); }
  else if ((m.quiet += dt) >= 0.12) m.voiced = false;
  return m.voiced ? m.hz : 0;
}

async function openMic(): Promise<Mic | null> {
  const devices = navigator.mediaDevices;
  const Ctx = window.AudioContext || (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
  if (!devices?.getUserMedia || !Ctx) return null;
  const ctx = new Ctx(); // created inside the click, so it is allowed to run
  let stream: MediaStream;
  try {
    // Call clean-up filters treat a steady hum as noise and remove it, so they are off.
    stream = await devices.getUserMedia({ audio: { echoCancellation: false, noiseSuppression: false, autoGainControl: false } });
  } catch {
    ctx.close().catch(() => {});
    return null;
  }
  if (ctx.state === 'suspended') { try { await ctx.resume(); } catch { /* stays suspended */ } }
  const an = ctx.createAnalyser();
  an.fftSize = ctx.sampleRate > 60000 ? 4096 : 2048;
  an.smoothingTimeConstant = 0;
  ctx.createMediaStreamSource(stream).connect(an); // analysed only: never played, stored or sent
  return {
    ctx, stream, an,
    buf: new Float32Array(an.fftSize), half: new Float32Array(an.fftSize >> 1), diff: new Float32Array((an.fftSize >> 2) + 2),
    floor: 0.003, voiced: false, quiet: 0, hz: 0,
  };
}

function closeMic(m: Mic | null) {
  if (!m) return;
  m.stream.getTracks().forEach((t) => t.stop());
  m.ctx.close().catch(() => {});
}

type Mode = 'choose' | 'fit' | 'mic' | 'hold';

// Vertical centre of each key slot on the statue (low, middle, high), in % of the drawn image.
const SLOT_TOP = [69, 57.2, 45.2];

export function HumStatueDemo() {
  const [mode, setMode] = useState<Mode>('choose');
  const [lit, setLit] = useState(0); // orbs locked in
  const [progress, setProgress] = useState(0); // 0..1 on the current orb
  const [active, setActive] = useState(false); // on the note right now
  const [marker, setMarker] = useState(0); // 0..1 up the pitch rail
  const [hz, setHz] = useState(0);
  const [fit, setFit] = useState(0); // 0..1 progress of the voice warm-up
  const [notice, setNotice] = useState('');

  const frame = useRef<number | null>(null);
  const last = useRef(0);
  const mic = useRef<Mic | null>(null);
  const s = useRef({
    mode: 'choose' as Mode, lit: 0, progress: 0, holding: false, onTarget: false, pos: 0,
    range: DEFAULT_RANGE, samples: [] as number[], voicedFor: 0, fitFor: 0,
  });

  const pitch01 = (value: number) => {
    const [lo, hi] = s.current.range;
    return Math.max(0, Math.min(1, (Math.log2(value) - Math.log2(lo)) / (Math.log2(hi) - Math.log2(lo))));
  };

  const tick = useCallback((now: number) => {
    const st = s.current;
    const dtMs = Math.min(now - last.current, 250); // tolerate slow or throttled frames
    const dt = dtMs / 1000;
    last.current = now;
    let goal = 0; // where the marker wants to be; 0 = resting at the bottom
    let sounding = false;

    if (mic.current && (st.mode === 'fit' || st.mode === 'mic')) {
      const heard = micFrame(mic.current, dt);
      setHz(heard ? Math.round(heard) : 0);
      sounding = heard > 0;

      if (st.mode === 'fit') {
        // Voice warm-up: slide from low to high so the three notes fit this voice.
        st.fitFor += dt;
        if (heard) { st.samples.push(heard); st.voicedFor += dt; }
        const sorted = [...st.samples].sort((x, y) => x - y);
        const lo = sorted[Math.floor(sorted.length * 0.08)] ?? 0;
        const hi = sorted[Math.floor(sorted.length * 0.92)] ?? 0;
        const wide = lo > 0 && hi / lo >= 1.25;
        setFit(Math.min(1, st.voicedFor / 2.5));
        if (heard) goal = Math.max(0, Math.min(1, (Math.log2(heard) - Math.log2(90)) / (Math.log2(600) - Math.log2(90))));
        if ((st.voicedFor >= 2.5 && wide) || st.fitFor >= 14) {
          if (wide) st.range = [lo, hi];
          else if (sorted.length > 20) { const mid = sorted[sorted.length >> 1]; st.range = [mid / 1.3, mid * 1.3]; }
          else st.range = DEFAULT_RANGE;
          st.mode = 'mic';
          setMode('mic');
        }
      } else if (heard) {
        goal = pitch01(heard);
        // Wider window to stay on a note than to land on it, so the marker does not flicker off.
        const window01 = st.onTarget ? TOLERANCE * 1.3 : TOLERANCE;
        st.onTarget = st.lit < 3 && Math.abs(goal - TARGETS[st.lit]) <= window01;
      } else {
        st.onTarget = false;
      }
    } else if (st.mode === 'hold') {
      // Holding the button is a steady hum that climbs to the next note.
      sounding = st.holding;
      if (st.holding && st.lit < 3) goal = TARGETS[st.lit];
      st.onTarget = st.holding && st.lit < 3 && Math.abs(st.pos - TARGETS[st.lit]) <= TOLERANCE * 0.5;
    }

    // Marker motion: follows the voice quickly, slides down slowly when silent,
    // and snaps into the slot's height once the note is matched.
    if (st.onTarget) goal = TARGETS[st.lit];
    const rate = st.onTarget ? 18 : sounding ? (st.mode === 'hold' ? 2.6 : 14) : 2.2;
    st.pos += (goal - st.pos) * (1 - Math.exp(-rate * dt));
    if (st.pos < 0.001) st.pos = 0;
    setMarker(st.pos);

    const on = st.onTarget;
    if (st.lit < 3 && (st.mode === 'mic' || st.mode === 'hold')) {
      // Fill while the note is held; drain gently when it slips, like the in-game hold ring.
      st.progress += (on ? dtMs : -dtMs * 0.8) / HOLD_MS;
      if (st.progress >= 1) { st.lit += 1; st.progress = 0; st.onTarget = false; setLit(st.lit); }
      if (st.progress < 0) st.progress = 0;
      setProgress(st.progress);
    }
    setActive(on && st.lit < 3);

    const micRunning = mic.current !== null && st.lit < 3;
    const holdRunning = st.mode === 'hold' && st.lit < 3 && (st.holding || st.progress > 0 || st.pos > 0);
    frame.current = micRunning || holdRunning ? requestAnimationFrame(tick) : null;
    if (st.lit >= 3 && mic.current) { closeMic(mic.current); mic.current = null; }
  }, []);

  const run = useCallback(() => {
    if (frame.current === null) {
      last.current = performance.now();
      frame.current = requestAnimationFrame(tick);
    }
  }, [tick]);

  const clear = (next: Mode) => {
    s.current = { ...s.current, mode: next, lit: 0, progress: 0, holding: false, onTarget: false, pos: 0, samples: [], voicedFor: 0, fitFor: 0 };
    setMode(next); setLit(0); setProgress(0); setActive(false); setMarker(0); setHz(0); setFit(0);
  };

  const chooseMic = async () => {
    setNotice('');
    const opened = await openMic();
    if (!opened) {
      setNotice('No microphone available, so here is the hold-button version instead.');
      clear('hold');
      return;
    }
    mic.current = opened;
    clear('fit');
    run();
  };

  const startOver = () => {
    closeMic(mic.current);
    mic.current = null;
    if (frame.current !== null) { cancelAnimationFrame(frame.current); frame.current = null; }
    setNotice('');
    clear('choose');
  };

  const press = () => { if (s.current.lit < 3) { s.current.holding = true; run(); } };
  const release = () => { s.current.holding = false; };

  useEffect(() => () => {
    if (frame.current !== null) cancelAnimationFrame(frame.current);
    closeMic(mic.current);
    mic.current = null;
  }, []);

  const done = lit >= 3;
  const note = notes[Math.min(lit, 2)].toLowerCase();
  let status = 'Choose how you want to play.';
  if (done) status = 'All three keys are locked in. That is session 1 of 3 for today, and one heart glows on the statue.';
  else if (mode === 'fit') status = hz ? 'Lovely. Keep sliding from your lowest hum up to your highest.' : 'Hum gently, sliding from low to high, so the statue can learn your voice.';
  else if (mode === 'mic') {
    if (active) status = 'Great work. Hold that hum a second more…';
    else if (!hz) status = `Take a breath, then hum the ${note}.`;
    else status = marker < TARGETS[lit] ? 'Raise your hum a little…' : 'Lower your hum a little…';
  } else if (mode === 'hold') {
    status = active ? 'Great work. Keep holding…' : lit === 0 && progress === 0 ? 'Press and hold to raise the key to the first slot.' : `Take a breath, then hold again for the ${note}.`;
  }

  const playing = (mode === 'mic' || mode === 'hold') && !done;
  const showRail = mode === 'fit' || playing;
  const slotState = (orb: number) => (lit > orb ? 'locked' : playing && lit === orb && active ? 'near' : 'empty');

  return (
    <div className={styles.hum}>
      <div className={styles.statueWrap}>
        <div className={styles.statue} data-done={done}>
          <Image src={`${art}/hum-statue.webp`} alt="A carved stone statue of a seated, smiling figure with three key-shaped stone slots down its front" width={640} height={857} sizes="(min-width: 860px) 320px, min(300px, 60vw)" />
          {[2, 1, 0].map((orb, row) => {
            const state = slotState(orb);
            return (
              <span
                key={orb}
                className={styles.slot}
                data-row={row}
                data-state={state}
                data-now={playing && lit === orb}
                style={{ '--fill': lit === orb ? progress : lit > orb ? 1 : 0 } as React.CSSProperties}
                aria-hidden="true"
              >
                <span className={styles.orbGlow} />
                <Image
                  src={`${art}/hum-slot-${state}.webp`}
                  alt=""
                  width={256}
                  height={256}
                  sizes="64px"
                  className={styles.slotArt}
                />
                {state === 'locked' && (
                  <Image key={`burst-${orb}`} src={`${art}/hum-burst-ring.webp`} alt="" width={256} height={256} sizes="96px" className={styles.burst} />
                )}
              </span>
            );
          })}
          <span className={styles.heart} data-on={done} aria-hidden="true">♥</span>
          {playing && (
            // The key rides beside the statue at the marker's height, then spins and flies
            // into the slot when the note is matched (the game's KeyLockFlourish, simplified).
            <span
              className={styles.key}
              data-on={active}
              style={{ top: `${active ? SLOT_TOP[lit] : 74.1 - marker * 34}%` }}
              aria-hidden="true"
            >
              <Image src={`${art}/hum-key${active ? '-lit' : ''}.webp`} alt="" width={256} height={256} sizes="64px" />
            </span>
          )}
          {showRail && (
            <div className={styles.rail} data-fit={mode === 'fit'} aria-hidden="true">
              {mode !== 'fit' && TARGETS.map((t, i) => (
                <span key={t} className={styles.railTarget} data-state={lit > i ? 'done' : lit === i ? 'now' : 'next'} style={{ bottom: `${t * 100}%` }} />
              ))}
              <span className={styles.marker} data-on={active} style={{ bottom: `${marker * 100}%` }} />
            </div>
          )}
        </div>
      </div>

      <div className={styles.humPanel}>
        <ol className={styles.humSteps}>
          {notes.map((label, i) => (
            <li key={label} data-state={lit > i ? 'done' : lit === i && (mode === 'mic' || mode === 'hold') ? 'now' : 'next'}>{label}</li>
          ))}
        </ol>
        <p className={styles.humStatus} aria-live="polite">{status}</p>
        {notice && <p className={styles.humNote}>{notice}</p>}

        {mode === 'choose' && (
          <div className={styles.ctas}>
            <button type="button" className={`${styles.btn} ${styles.btnPrimary}`} onClick={chooseMic}>Hum with my microphone</button>
            <button type="button" className={`${styles.btn} ${styles.btnGhost}`} onClick={() => clear('hold')}>No mic? Hold a button</button>
          </div>
        )}

        {mode === 'fit' && (
          <div className={styles.fitBar} role="progressbar" aria-label="Learning your voice" aria-valuemin={0} aria-valuemax={100} aria-valuenow={Math.round(fit * 100)}>
            <span style={{ width: `${fit * 100}%` }} />
          </div>
        )}

        {mode === 'hold' && !done && (
          <button
            type="button"
            className={`${styles.btn} ${styles.btnPrimary} ${styles.humButton}`}
            data-holding={active}
            onPointerDown={(e) => { e.currentTarget.setPointerCapture?.(e.pointerId); press(); }}
            onPointerUp={release}
            onPointerCancel={release}
            onKeyDown={(e) => { if ((e.key === ' ' || e.key === 'Enter') && !e.repeat) { e.preventDefault(); press(); } }}
            onKeyUp={(e) => { if (e.key === ' ' || e.key === 'Enter') release(); }}
            onBlur={release}
            onContextMenu={(e) => e.preventDefault()}
          >
            Hold to hum
          </button>
        )}

        {(mode === 'fit' || mode === 'mic') && !done && (
          <p className={styles.humReadout}>{hz ? `Hearing ${hz} Hz` : 'Listening…'}</p>
        )}

        {mode !== 'choose' && (
          <button type="button" className={styles.linkButton} onClick={startOver}>{done ? 'Hum again' : 'Start over'}</button>
        )}

        <p className={styles.humNote}>
          {mode === 'hold'
            ? 'This version uses a held button, not your microphone. In the game, your real hum moves the pitch marker.'
            : 'Your hum is analysed inside your browser only. Nothing is recorded, stored or sent anywhere, and the microphone switches off when the statue is lit.'}
        </p>
        <ul className={styles.humFacts}>
          <li><strong>Fits your voice.</strong> A quick low-to-high slide sets the three notes inside your own range.</li>
          <li><strong>Forgiving first.</strong> Early sessions accept a wide pitch window, then gently tighten.</li>
          <li><strong>Breath built in.</strong> A pause to breathe sits between notes, because the pause is the practice.</li>
        </ul>
      </div>
    </div>
  );
}
