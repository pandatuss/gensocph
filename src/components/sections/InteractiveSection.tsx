import { useEffect, useState } from "react";
import { motion, AnimatePresence, useMotionValue, useTransform } from "framer-motion";
import { Section, SectionHeader } from "../Section";
import { FUN_FACTS, QUIZ_SETS } from "@/lib/site-data";
import { Sparkles, RefreshCw, ArrowRight, Check, X as XIcon, Trophy } from "lucide-react";

const GRADIENTS = [
  "linear-gradient(135deg, #f59e0b, #ef4444)",
  "linear-gradient(135deg, #6366f1, #8b5cf6)",
  "linear-gradient(135deg, #ec4899, #f43f5e)",
  "linear-gradient(135deg, #14b8a6, #06b6d4)",
  "linear-gradient(135deg, #0ea5e9, #6366f1)",
  "linear-gradient(135deg, #84cc16, #16a34a)",
  "linear-gradient(135deg, #f97316, #db2777)",
  "linear-gradient(135deg, #8b5cf6, #ec4899)",
  "linear-gradient(135deg, #06b6d4, #3b82f6)",
  "linear-gradient(135deg, #10b981, #14b8a6)",
  "linear-gradient(135deg, #facc15, #f97316)",
  "linear-gradient(135deg, #a855f7, #6366f1)",
  "linear-gradient(135deg, #ef4444, #b91c1c)",
  "linear-gradient(135deg, #22d3ee, #0ea5e9)",
  "linear-gradient(135deg, #fb7185, #f43f5e)",
];

const RAW_CARDS: { tag: string; title: string; body: string }[] = [
  { tag: "Fact", title: "Babaylan", body: "Pre-colonial spiritual leaders — often women or feminine men — held immense political and ceremonial power." },
  { tag: "Law", title: "RA 9710", body: "The Magna Carta of Women is the local enactment of the UN's CEDAW convention." },
  { tag: "History", title: "1937 Suffrage", body: "Over 90% of Filipino women voted YES in the plebiscite that granted them voting rights." },
  { tag: "Now", title: "#1 in SE Asia", body: "Philippines consistently leads the region in WEF Global Gender Gap rankings." },
  { tag: "Law", title: "RA 11313", body: "The Safe Spaces Act criminalizes catcalling, wolf-whistling, and online harassment." },
  { tag: "Family", title: "Bilateral Kinship", body: "Filipino families trace lineage and inheritance through both parents — a pre-colonial legacy." },
  { tag: "Law", title: "RA 9262", body: "The Anti-Violence Against Women and Their Children Act protects survivors of physical, sexual, and psychological abuse." },
  { tag: "Law", title: "RA 7877", body: "The Anti-Sexual Harassment Act covers workplaces, schools, and training environments." },
  { tag: "Law", title: "RA 8353", body: "The Anti-Rape Law of 1997 reclassified rape as a crime against persons, not just chastity." },
  { tag: "Law", title: "RA 11648", body: "Raised the age of sexual consent in the Philippines from 12 to 16 in 2022." },
  { tag: "Law", title: "RA 11210", body: "The 105-Day Expanded Maternity Leave Law gives mothers paid leave plus an option to extend." },
  { tag: "Law", title: "RA 8972", body: "The Solo Parents' Welfare Act provides benefits and protection to solo parents and their kids." },
  { tag: "Law", title: "RA 9208", body: "The Anti-Trafficking in Persons Act criminalizes recruitment, transport, and exploitation of victims." },
  { tag: "Law", title: "RA 9775", body: "The Anti-Child Pornography Act protects children from sexual exploitation online and offline." },
  { tag: "Law", title: "RA 11313 — Online", body: "Safe Spaces Act also penalizes gender-based online sexual harassment and cyberstalking." },
  { tag: "History", title: "Gabriela Silang", body: "Led the longest sustained Filipino revolt against Spain after her husband Diego was assassinated in 1763." },
  { tag: "History", title: "Tandang Sora", body: "Melchora Aquino, the 'Mother of the Katipunan,' sheltered and fed revolutionaries in 1896." },
  { tag: "History", title: "Asia's First Female President", body: "Corazon Aquino was inaugurated in 1986 after the People Power Revolution." },
  { tag: "History", title: "Geronima Pecson", body: "Became the first Filipina senator in 1947, shaping post-war education policy." },
  { tag: "History", title: "Pura Villanueva Kalaw", body: "Pioneer suffragist who helped organize the women's vote movement in the 1900s–1930s." },
  { tag: "Culture", title: "Bakla", body: "A Filipino identity that blends gender expression, sexuality, and community — older than Western LGBT labels." },
  { tag: "Culture", title: "Maria Clara", body: "The colonial ideal of demure femininity — a stereotype modern Filipinas continually push back on." },
  { tag: "Culture", title: "Asawa", body: "Tagalog for spouse — gender-neutral by default, reflecting pre-colonial equality in marriage." },
  { tag: "Culture", title: "Siya", body: "Filipino's third-person pronoun is gender-neutral — no he/she distinction at all." },
  { tag: "Now", title: "Quezon City Pride", body: "QC enacted the first city-level Gender-Fair Ordinance in 2014 protecting SOGIE rights." },
  { tag: "Now", title: "SOGIE Bill", body: "The Anti-Discrimination on the basis of SOGIE Bill has been pending in Congress since 2000." },
  { tag: "Now", title: "Women in STEM", body: "The Philippines ranks among the highest in Asia for female participation in science and engineering degrees." },
  { tag: "Now", title: "Female Workforce", body: "Roughly 4 in 10 Filipino working professionals are women, with steady gains in leadership roles." },
  { tag: "Media", title: "Vice Ganda", body: "One of the country's highest-paid entertainers, a queer icon reshaping mainstream Philippine TV." },
  { tag: "Media", title: "Lola Amour, Ben&Ben", body: "OPM acts increasingly write songs that question machismo and embrace softer masculinities." },
  { tag: "Fact", title: "Pantawid Pamilya", body: "The 4Ps program disburses cash grants to mothers, recognizing their role in household well-being." },
  { tag: "Fact", title: "Magna Carta of Women", body: "Mandates 5% of every government agency's budget be used for gender and development (GAD) work." },
  { tag: "Fact", title: "PCW", body: "The Philippine Commission on Women is the primary policymaking body for women's empowerment." },
  { tag: "Fact", title: "VAWC Desks", body: "Every barangay is required by law to have a Violence Against Women and Children desk." },
  { tag: "Family", title: "Matriarchal Tendencies", body: "Many Filipino households are run financially and emotionally by women — the 'ilaw ng tahanan.'" },
  { tag: "Family", title: "Tita & Tito", body: "Aunts and uncles share co-parenting duties — gender roles in childcare often blur in extended families." },
  { tag: "Labor", title: "OFW Mothers", body: "Around 56% of overseas Filipino workers are women, often supporting whole extended families abroad." },
  { tag: "Labor", title: "Domestic Workers Act", body: "RA 10361 (Batas Kasambahay) sets minimum wage, rest days, and SSS coverage for household workers." },
  { tag: "Labor", title: "Wage Gap", body: "Filipino women earn roughly 78–80 centavos for every peso earned by men in comparable jobs." },
  { tag: "Academe", title: "Higher Ed Majority", body: "More Filipino women enroll in and graduate from college than men — a trend since the 1990s." },
  { tag: "Academe", title: "UP Gender Office", body: "The UP Center for Women's and Gender Studies is one of Asia's pioneering academic gender programs." },
  { tag: "Academe", title: "K–12 Gender Lens", body: "DepEd's Gender-Responsive Basic Education Policy weaves gender sensitivity into the K–12 curriculum." },
  { tag: "Fact", title: "First Female Chief Justice", body: "Maria Lourdes Sereno was appointed Chief Justice of the Supreme Court in 2012." },
  { tag: "Fact", title: "Leni Robredo", body: "Served as Vice President 2016–2022 and built one of the largest women-led grassroots movements." },
  { tag: "Fact", title: "Miriam Defensor Santiago", body: "First Filipino and Asian elected to the International Criminal Court bench in 2011." },
  { tag: "Now", title: "Catriona Gray", body: "Miss Universe 2018 turned her platform into advocacy for women and children's rights." },
  { tag: "Now", title: "Hidilyn Diaz", body: "First Filipino Olympic gold medalist (2020), redefining athletic excellence for Filipinas." },
  { tag: "Culture", title: "Lakapati", body: "Pre-colonial Tagalog deity of fertility and agriculture — often depicted as intersex or transgender." },
  { tag: "Culture", title: "Asog & Bayoguin", body: "Pre-colonial feminine male spiritual leaders, parallel to the babaylan, in Visayan societies." },
  { tag: "History", title: "1937 Plebiscite", body: "447,725 women voted YES vs. 44,307 NO, exceeding the 300,000 threshold for women's suffrage." },
  { tag: "Law", title: "Divorce Bill", body: "The Philippines is one of only two states worldwide without civil divorce — bills are pending." },
];

const SWIPE_CARDS = RAW_CARDS.slice(0, 50).map((c, i) => ({
  ...c,
  gradient: GRADIENTS[i % GRADIENTS.length],
}));

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function SwipeDeck() {

  const [stack, setStack] = useState(SWIPE_CARDS);
  useEffect(() => {
    setStack(shuffle(SWIPE_CARDS));
  }, []);

  const VISIBLE = 5;
  const visible = stack.slice(-VISIBLE);

  return (
    <div className="relative h-[360px] max-w-sm mx-auto z-0 isolate">
      {visible.map((c, i) => {
        const isTop = i === visible.length - 1;
        return (
          <Card
            key={`${c.title}-${stack.length}-${i}`}
            c={c}
            isTop={isTop}
            offset={visible.length - 1 - i}
            onSwipe={() =>
              setStack((s) => {

                const top = s[s.length - 1];
                return [top, ...s.slice(0, -1)];
              })
            }
          />
        );
      })}
    </div>
  );
}

function Card({
  c, isTop, offset, onSwipe,
}: {
  c: typeof SWIPE_CARDS[number]; isTop: boolean; offset: number; onSwipe: () => void;
}) {
  const x = useMotionValue(0);
  const rotate = useTransform(x, [-200, 200], [-18, 18]);
  const opacity = useTransform(x, [-200, -120, 0, 120, 200], [0, 1, 1, 1, 0]);

  return (
    <motion.div
      style={{
        x: isTop ? x : 0,
        rotate: isTop ? rotate : 0,
        opacity: isTop ? opacity : 1,
        scale: 1 - offset * 0.04,
        top: offset * 8,
        zIndex: 100 - offset,
        background: c.gradient,
        boxShadow: "0 20px 50px -15px rgba(0,0,0,0.35)",
      }}
      drag={isTop ? "x" : false}
      dragConstraints={{ left: 0, right: 0 }}
      onDragEnd={(_, info) => {
        if (Math.abs(info.offset.x) > 120) onSwipe();
      }}
      className="absolute inset-x-0 mx-auto h-full rounded-3xl p-7 cursor-grab active:cursor-grabbing select-none text-white"
    >
      <div className="flex flex-col h-full">
        <span className="self-start text-[10px] font-bold uppercase tracking-widest text-white/95 rounded-full px-3 py-1" style={{ background: "rgba(255,255,255,0.2)", backdropFilter: "blur(4px)" }}>{c.tag}</span>
        <h4 className="text-3xl font-bold mt-6 leading-tight">{c.title}</h4>
        <p className="mt-4 text-sm text-white/90 leading-relaxed">{c.body}</p>
        <div className="mt-auto text-xs text-white/70 text-center pt-4">← swipe →</div>
      </div>
    </motion.div>
  );
}

function FunFactGenerator() {
  const [fact, setFact] = useState<string>(FUN_FACTS[0]);
  const [spin, setSpin] = useState(0);
  useEffect(() => {
    setFact(FUN_FACTS[Math.floor(Math.random() * FUN_FACTS.length)]);
    setSpin((s) => s + 1);
  }, []);
  return (
    <div className="glass-strong rounded-3xl p-8 text-center h-full flex flex-col">
      <Sparkles className="h-8 w-8 text-primary mx-auto" />
      <h3 className="text-xl font-bold mt-3">Fun Fact Generator</h3>
      <p className="text-xs text-muted-foreground">Random gender history, laws & trivia.</p>
      <div className="flex-1 grid place-items-center my-6 min-h-[120px]">
        <AnimatePresence mode="wait">
          <motion.p
            key={spin}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            className="text-base font-medium text-foreground/85 leading-relaxed"
          >
            "{fact}"
          </motion.p>
        </AnimatePresence>
      </div>
      <button
        onClick={() => {
          setFact(FUN_FACTS[Math.floor(Math.random() * FUN_FACTS.length)]);
          setSpin((s) => s + 1);
        }}
        className="inline-flex items-center justify-center gap-2 gradient-primary text-white rounded-full px-6 py-3 text-sm font-semibold shadow-glow hover:scale-[1.02] transition"
      >
        Blow My Mind <Sparkles className="h-4 w-4" />
      </button>
    </div>
  );
}

function Quiz() {
  const [quiz, setQuiz] = useState(QUIZ_SETS[0]);
  const [i, setI] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    setQuiz(QUIZ_SETS[Math.floor(Math.random() * QUIZ_SETS.length)]);
  }, []);

  const q = quiz[i];
  const handlePick = (idx: number) => {
    if (picked !== null) return;
    setPicked(idx);
    const correct = idx === q.correct;
    if (correct) setScore((s) => s + 1);
    setTimeout(() => {
      setPicked(null);
      if (i + 1 >= quiz.length) setDone(true);
      else setI(i + 1);
    }, 900);
  };
  const reset = () => {
    setQuiz(QUIZ_SETS[Math.floor(Math.random() * QUIZ_SETS.length)]);
    setI(0); setPicked(null); setScore(0); setDone(false);
  };

  if (done) {
    const pct = Math.round((score / quiz.length) * 100);
    return (
      <div className="glass-strong rounded-3xl p-8 text-center">
        <Trophy className="h-12 w-12 text-primary mx-auto" />
        <h3 className="text-2xl font-bold mt-3">Quiz complete!</h3>
        <div className="my-6">
          <div className="text-6xl font-bold gradient-text">{score}/{quiz.length}</div>
          <div className="text-sm text-muted-foreground mt-2">{pct}% — {pct >= 80 ? "Outstanding!" : pct >= 50 ? "Nice work — keep learning!" : "Plenty more to explore."}</div>
        </div>
        <button onClick={reset} className="inline-flex items-center gap-2 gradient-primary text-white rounded-full px-6 py-3 text-sm font-semibold">
          <RefreshCw className="h-4 w-4" /> Try again
        </button>
      </div>
    );
  }

  return (
    <div className="glass-strong rounded-3xl p-7">
      <div className="flex items-center justify-between text-xs font-semibold text-muted-foreground">
        <span>Question {i + 1} of {quiz.length}</span>
        <span>Score: {score}</span>
      </div>
      <div className="h-1.5 rounded-full bg-primary/10 mt-2 overflow-hidden">
        <motion.div
          className="h-full gradient-primary"
          initial={false}
          animate={{ width: `${((i) / quiz.length) * 100}%` }}
        />
      </div>
      <h3 className="text-lg md:text-xl font-bold mt-5">{q.q}</h3>
      <div className="grid sm:grid-cols-2 gap-2.5 mt-5">
        {q.options.map((o, idx) => {
          const isPicked = picked === idx;
          const isCorrect = picked !== null && idx === q.correct;
          const isWrong = isPicked && idx !== q.correct;
          return (
            <button
              key={o}
              disabled={picked !== null}
              onClick={() => handlePick(idx)}
              className={`text-left rounded-2xl p-4 text-sm font-medium border-2 transition shadow-sm ${
                isCorrect ? "bg-green-100/80 border-green-500 text-green-900 shadow-green-200" :
                isWrong ? "bg-red-100/80 border-red-500 text-red-900 shadow-red-200" :
                isPicked ? "bg-primary/10 border-primary text-primary" :
                "bg-white/70 border-primary/30 hover:border-primary hover:bg-white hover:shadow-md"
              }`}
            >
              <div className="flex items-center justify-between gap-2">
                <span>{o}</span>
                {isCorrect && <Check className="h-4 w-4" />}
                {isWrong && <XIcon className="h-4 w-4" />}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}

export function InteractiveSection() {
  return (
    <>
      <Section id="interactive">
        <SectionHeader
          eyebrow="Interactive Learning"
          title={<>Learn by <span className="gradient-text">swiping, sparking, and scoring</span></>}
          desc="Three playful ways to absorb Philippine gender knowledge — built for short attention spans."
        />
      </Section>

      <Section id="swipe-to-learn" className="!pt-0">
        <SectionHeader
          eyebrow="Swipe to Learn"
          title={<>Tap, drag, <span className="gradient-text">discover</span></>}
          desc="A card deck of bite-sized facts on laws, history, and culture. Swipe through at your own pace."
        />
        <div className="max-w-md mx-auto">
          <SwipeDeck />
        </div>
      </Section>

      <Section id="random-facts">
        <SectionHeader
          eyebrow="Random Facts"
          title={<>Spark a <span className="gradient-text">surprise</span></>}
          desc="Hit the button for a random nugget of Philippine gender history, law, or trivia."
        />
        <div className="max-w-2xl mx-auto">
          <FunFactGenerator />
        </div>
      </Section>

      <Section id="knowledge-quiz">
        <SectionHeader
          eyebrow="Knowledge Quiz"
          title={<>Test what <span className="gradient-text">you know</span></>}
          desc="Ten questions across history, laws, and culture. See how you score."
        />
        <div className="max-w-3xl mx-auto">
          <Quiz />
        </div>
      </Section>
    </>
  );
}
