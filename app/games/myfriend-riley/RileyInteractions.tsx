'use client';

import Image from 'next/image';
import { useEffect, useRef, useState, type CSSProperties } from 'react';
import styles from './riley.module.css';

const asset = (name: string) => `/images/myfriend-riley/${name}.webp`;
const idleFrames = ['mascot-idle-01', 'mascot-idle-03', 'mascot-idle-04', 'mascot-idle-03'];
const greetings = [
  'Hi friend! Want to hum with me?',
  'You make the garden brighter just by being here.',
  'Our lotus is thirsty. Shall we give it a splash?',
  'Every feeling is welcome in the garden.',
  'The fireflies are waiting for your magic hum!',
];
const sparkleColors = ['var(--mfr-sun)', 'var(--mfr-pink)', 'var(--mfr-lilac)', 'var(--mfr-leaf)'];
const ringLength = 2 * Math.PI * 182;

function useReducedMotion() {
  const [reduced, setReduced] = useState(true);
  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)');
    const sync = () => setReduced(query.matches);
    sync();
    query.addEventListener('change', sync);
    return () => query.removeEventListener('change', sync);
  }, []);
  return reduced;
}

export function RileyStage() {
  const reduced = useReducedMotion();
  const [paused, setPaused] = useState(false);
  const [pose, setPose] = useState(idleFrames[0]);
  const [message, setMessage] = useState('Hi friend! Tap me, or hold the button and hum with me.');
  const [holding, setHolding] = useState(false);
  const [open, setOpen] = useState(false);
  const [gates, setGates] = useState(0);
  const [readout, setReadout] = useState('dial ready');
  const [burst, setBurst] = useState(0);
  const [sparkles, setSparkles] = useState(0);
  const wrapRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const ringRef = useRef<SVGCircleElement>(null);
  const gateCount = useRef(0);
  const actions = useRef({ start() {}, stop() {}, hello() {} });
  const animate = !reduced && !paused;
  const animateRef = useRef(false);

  useEffect(() => { animateRef.current = animate; }, [animate]);

  useEffect(() => {
    for (const name of [...idleFrames, 'mascot-idle-02', 'mascot-happy']) {
      const preload = new window.Image();
      preload.src = asset(name);
    }
  }, []);

  useEffect(() => {
    let humming = false;
    let progress = 0;
    let last = 0;
    let frame = 0;
    let gateTimer: ReturnType<typeof setTimeout> | undefined;
    let poseTimer: ReturnType<typeof setTimeout> | undefined;
    let sparkTimer: ReturnType<typeof setTimeout> | undefined;
    let poseUntil = 0;
    let idleIndex = 0;
    let helloIndex = 0;

    const draw = () => {
      if (ringRef.current) ringRef.current.style.strokeDashoffset = String(ringLength * (1 - progress));
    };
    const celebrate = (count: number) => {
      if (!animateRef.current) return;
      setBurst(value => value + 1);
      setSparkles(count);
      clearTimeout(sparkTimer);
      sparkTimer = setTimeout(() => setSparkles(0), 950);
    };
    const showPose = (name: string, duration: number) => {
      clearTimeout(poseTimer);
      setPose(name);
      poseUntil = Date.now() + duration;
      poseTimer = setTimeout(() => setPose(idleFrames[0]), duration);
    };
    const complete = () => {
      humming = false;
      frame = 0;
      last = 0;
      setHolding(false);
      setOpen(true);
      gateCount.current += 1;
      setGates(gateCount.current);
      setReadout('gate open!');
      setMessage(gateCount.current === 1 ? 'You did it! The gate is sliding open!' : `Gate ${gateCount.current} open! Let’s keep exploring.`);
      showPose('mascot-happy', 1800);
      celebrate(18);
      gateTimer = setTimeout(() => {
        setOpen(false);
        progress = 0;
        draw();
        setReadout('dial ready');
        setMessage('The gate closed behind us. Hold to hum and open another one!');
      }, 4000);
    };
    const tick = (time: number) => {
      const elapsed = Math.min(64, time - (last || time));
      last = time;
      progress = Math.max(0, Math.min(1, progress + (humming ? elapsed / 2400 : -elapsed / 900)));
      draw();
      if (humming && progress >= 1) { complete(); return; }
      if (humming || progress > 0) frame = requestAnimationFrame(tick);
      else { frame = 0; last = 0; setReadout('dial ready'); }
    };
    const stop = () => {
      if (!humming) return;
      humming = false;
      setHolding(false);
      setReadout('dial draining…');
      setMessage('Take your time. Hold a little longer to open the gate.');
    };
    actions.current = {
      start() {
        if (humming) return;
        clearTimeout(gateTimer);
        if (progress >= 1) progress = 0;
        humming = true;
        setHolding(true);
        setOpen(false);
        setReadout('filling the dial…');
        setMessage('Mmmmmm… keep holding, you’re filling the dial!');
        if (!frame) { last = 0; frame = requestAnimationFrame(tick); }
      },
      stop,
      hello() {
        if (humming) return;
        showPose('mascot-idle-02', 1200);
        setMessage(greetings[helloIndex % greetings.length]);
        helloIndex += 1;
        celebrate(8);
      },
    };
    const idleTimer = setInterval(() => {
      if (!animateRef.current || humming || document.hidden || Date.now() < poseUntil) return;
      idleIndex = (idleIndex + 1) % idleFrames.length;
      setPose(idleFrames[idleIndex]);
    }, 700);
    const onVisibility = () => { if (document.hidden) stop(); };
    window.addEventListener('blur', stop);
    window.addEventListener('pointerup', stop);
    document.addEventListener('visibilitychange', onVisibility);
    setHolding(false);
    setOpen(false);
    setReadout('dial ready');
    setPose(idleFrames[0]);
    draw();
    return () => {
      cancelAnimationFrame(frame);
      clearInterval(idleTimer);
      clearTimeout(gateTimer);
      clearTimeout(poseTimer);
      clearTimeout(sparkTimer);
      window.removeEventListener('blur', stop);
      window.removeEventListener('pointerup', stop);
      document.removeEventListener('visibilitychange', onVisibility);
      actions.current = { start() {}, stop() {}, hello() {} };
    };
  }, []);

  useEffect(() => {
    const wrapper = wrapRef.current;
    const image = imageRef.current;
    if (!wrapper || !image) return;
    if (!animate) {
      image.style.removeProperty('--tilt');
      image.style.removeProperty('--tx');
      image.style.removeProperty('--ty');
      return;
    }
    let frame = 0;
    let x = 0;
    let y = 0;
    const move = (event: PointerEvent) => {
      if (event.pointerType === 'touch') return;
      const rect = wrapper.getBoundingClientRect();
      x = Math.max(-1, Math.min(1, (event.clientX - rect.left - rect.width / 2) / rect.width));
      y = Math.max(-1, Math.min(1, (event.clientY - rect.top - rect.height / 2) / rect.height));
      if (frame) return;
      frame = requestAnimationFrame(() => {
        image.style.setProperty('--tilt', `${x * 7}deg`);
        image.style.setProperty('--tx', `${x * 10}px`);
        image.style.setProperty('--ty', `${y * 6}px`);
        frame = 0;
      });
    };
    wrapper.addEventListener('pointermove', move, { passive: true });
    return () => {
      wrapper.removeEventListener('pointermove', move);
      cancelAnimationFrame(frame);
    };
  }, [animate]);

  return (
    <div className={styles.stage} aria-label="Interactive Riley" data-motion={animate ? 'playing' : 'paused'}>
      <div className={styles['riley-wrap']} ref={wrapRef}>
        <div className={`${styles.gate} ${open ? styles.open : ''}`} aria-hidden="true">
          <Image className={styles['gate-beyond']} src={asset('gate-beyond')} alt="" width={900} height={550} sizes="(max-width: 520px) 380px, 520px" unoptimized />
          <Image className={styles['gate-light']} src={asset('gate-light')} alt="" width={900} height={550} sizes="(max-width: 520px) 380px, 520px" unoptimized />
          <div className={styles.doors}>
            <Image className={`${styles.door} ${styles['door-l']}`} src={asset('gate-door-l')} alt="" width={900} height={550} unoptimized />
            <Image className={`${styles.door} ${styles['door-r']}`} src={asset('gate-door-r')} alt="" width={900} height={550} unoptimized />
          </div>
          <Image className={styles.frame} src={asset('gate-frame')} alt="" width={900} height={550} unoptimized />
        </div>
        <div className={styles['riley-glow']} aria-hidden="true" />
        <svg className={styles.ring} viewBox="0 0 400 400" aria-hidden="true">
          <circle className={styles.track} cx="200" cy="200" r="182" />
          <circle className={styles.fill} ref={ringRef} cx="200" cy="200" r="182" style={{ '--len': ringLength, strokeDashoffset: ringLength } as CSSProperties} />
        </svg>
        <button className={`${styles['riley-btn']} ${animate && sparkles > 0 ? styles.pop : ''}`} type="button" aria-label="Say hi to Riley" onClick={() => actions.current.hello()}>
          <span className={styles['riley-float']} style={{ display: 'block', animationPlayState: animate ? 'running' : 'paused' }}>
            <Image ref={imageRef} className={styles.riley} src={asset(pose)} alt="Riley, a glowing purple jelly friend" width={560} height={560} priority unoptimized />
          </span>
        </button>
        <div className={styles.bubble} role="status" aria-live="polite">{message}</div>
        {animate && Array.from({ length: sparkles }, (_, index) => (
          <span key={`${burst}-${index}`} aria-hidden="true" className={styles.spark} style={{
            '--dx': `${Math.cos(index / sparkles * Math.PI * 2) * 150}px`,
            '--dy': `${Math.sin(index / sparkles * Math.PI * 2) * 150}px`,
            '--c': sparkleColors[index % sparkleColors.length],
          } as CSSProperties} />
        ))}
      </div>
      <div className={styles['hum-console']}>
        <button className={styles['hum-btn']} type="button" aria-pressed={holding} aria-describedby="mfr-demo-note"
          onPointerDown={event => { if (event.button !== 0) return; event.preventDefault(); event.currentTarget.setPointerCapture(event.pointerId); actions.current.start(); }}
          onPointerUp={() => actions.current.stop()} onPointerCancel={() => actions.current.stop()} onLostPointerCapture={() => actions.current.stop()} onBlur={() => actions.current.stop()}
          onKeyDown={event => { if (event.key === ' ' || event.key === 'Enter') { event.preventDefault(); if (!event.repeat) actions.current.start(); } }}
          onKeyUp={event => { if (event.key === ' ' || event.key === 'Enter') { event.preventDefault(); actions.current.stop(); } }}
          onContextMenu={event => event.preventDefault()}>
          {holding ? 'Humming…' : 'Hold to hum'}
        </button>
        <span className={styles.readout}>{readout}</span>
        <span className={styles.gates}>gates opened <b>{gates}</b></span>
      </div>
      <p id="mfr-demo-note" className={styles['demo-note']}>A button-controlled demo. No microphone needed.<br />Hold with a touch, click, Space, or Enter.</p>
      <button type="button" className={styles['motion-toggle']} aria-pressed={paused} onClick={() => setPaused(value => !value)} disabled={reduced}>
        {reduced ? 'Reduced motion enabled' : paused ? 'Resume Riley’s animation' : 'Pause Riley’s animation'}
      </button>
    </div>
  );
}

const pets = [
  ['happy', 'Happy', 'The happy puppy is so glad you came to the garden!', 152, 220, 219, 220],
  ['sad', 'Sad', 'The rain bird feels a little blue. Sitting together helps.', 145, 220, 198, 220],
  ['fear', 'Fear', 'The gentle duck feels wobbly. Slow breaths, little friend.', 144, 220, 191, 220],
  ['disgust', 'Disgust', 'The wolf pup wrinkles its nose. Some days are like that!', 174, 220, 220, 212],
  ['angry', 'Angry', "The hedgehog huffs and puffs. It’s okay to feel angry sometimes.", 199, 220, 220, 210],
  ['surprised', 'Surprised', 'The squirrel can’t believe it! What a day of surprises.', 164, 220, 201, 220],
  ['bored', 'Bored', 'The chameleon is taking it slow. Slow days are okay too.', 177, 220, 186, 220],
  ['irritated', 'Irritated', 'The otter crosses its arms. Prickly feelings pass.', 153, 220, 211, 220],
  ['tired', 'Tired', 'The bunny is so sleepy. Rest is how gardens grow.', 171, 220, 220, 203],
] as const;

export function FeelingsPicker() {
  const [selected, setSelected] = useState(0);
  const [touched, setTouched] = useState(false);
  const pet = pets[selected];
  return (
    <div className={styles.feelings}>
      <div>
        <h3>How are you feeling today?</h3>
        <p className={styles.lede} style={{ margin: '8px 0 18px', fontSize: '1rem' }}>Tap a friend, just like kids do in the game.</p>
        <div className={styles.pets} role="group" aria-label="Choose a feeling">
          {pets.map(([id, label, , width, height], index) => (
            <button type="button" className={styles.pet} key={id} aria-pressed={selected === index} onClick={() => { setSelected(index); setTouched(true); }}>
              <Image src={asset(`pet-${id}`)} alt="" width={width} height={height} sizes="70px" unoptimized />
              <span>{label}</span>
            </button>
          ))}
        </div>
      </div>
      <div className={styles.reply} aria-live="polite" aria-atomic="true">
        <Image src={asset(`pet-${pet[0]}${touched ? '-react' : ''}`)} alt={`${pet[1]} pet${touched ? ' reacting' : ''}`} width={touched ? pet[5] : pet[3]} height={touched ? pet[6] : pet[4]} sizes="180px" unoptimized />
        <p>{pet[2]}</p>
        <small>every feeling is welcome</small>
      </div>
    </div>
  );
}

const blooms = [
  { name: 'lotus-bloom', label: 'water · lotus in full bloom', size: 520 },
  { name: 'cactus-bloom', label: 'sleep · moon cactus glowing', size: 520 },
  { name: 'pup-joy', label: 'feelings · the happiest pup', size: 512 },
];

export function BloomCycle() {
  const reduced = useReducedMotion();
  const [paused, setPaused] = useState(false);
  const [active, setActive] = useState(0);
  const bloomRef = useRef<HTMLDivElement>(null);
  const animate = !paused && !reduced;
  useEffect(() => {
    const element = bloomRef.current;
    if (!animate || !element) return;
    let inView = false;
    let timer: ReturnType<typeof setInterval> | undefined;
    const sync = () => {
      clearInterval(timer);
      if (inView && !document.hidden) timer = setInterval(() => setActive(value => (value + 1) % blooms.length), 3200);
    };
    const observer = new IntersectionObserver(entries => { inView = entries[0].isIntersecting; sync(); }, { threshold: 0.2 });
    observer.observe(element);
    document.addEventListener('visibilitychange', sync);
    return () => { observer.disconnect(); clearInterval(timer); document.removeEventListener('visibilitychange', sync); };
  }, [animate]);
  return (
    <div className={styles['promise-side']}>
      <div ref={bloomRef} className={styles['bloom-cycle']} role="img" aria-label={blooms[active].label} style={{ animationPlayState: animate ? 'running' : 'paused' }}>
        {blooms.map((bloom, index) => <Image key={bloom.name} className={active === index ? styles.on : undefined} src={asset(bloom.name)} alt="" width={bloom.size} height={bloom.size} sizes="260px" unoptimized />)}
      </div>
      <span className={styles['bloom-caption']}>{blooms[active].label}</span>
      <div className={styles['bloom-controls']}>
        <button type="button" className={styles['motion-toggle']} onClick={() => { setPaused(true); setActive(value => (value + 1) % blooms.length); }}>Next garden friend</button>
        {!reduced && <button type="button" className={styles['motion-toggle']} aria-pressed={paused} onClick={() => setPaused(value => !value)}>{paused ? 'Resume rotation' : 'Pause rotation'}</button>}
      </div>
      <ul><li>All feelings are valid</li><li>Rewards for honesty, not perfection</li><li>Calm, kind, and never judgy</li></ul>
    </div>
  );
}
