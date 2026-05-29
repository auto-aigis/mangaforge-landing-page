"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import {
  BookOpen,
  Sparkles,
  Layers,
  MessageSquare,
  Download,
  ChevronRight,
  Star,
  Zap,
  Palette,
  Layout,
  Check,
  ArrowRight,
} from "lucide-react";

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface Step {
  number: string;
  title: string;
  description: string;
  badge: string;
}

interface PricingTier {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  highlighted: boolean;
  badge: string | null;
}

interface Testimonial {
  name: string;
  role: string;
  content: string;
  rating: number;
}

interface FAQItem {
  question: string;
  answer: string;
}

const features: Feature[] = [
  {
    icon: <BookOpen className="w-6 h-6" />,
    title: "Story-to-Script AI",
    description: "Write a simple story seed and watch AI craft a full manga script with scene breakdowns, character arcs, and pacing built for manga conventions.",
  },
  {
    icon: <Layout className="w-6 h-6" />,
    title: "Panel Layout Engine",
    description: "Automatically generates 9-panel grids, splash pages, and action sequences using genre-specific visual language that manga readers recognize instantly.",
  },
  {
    icon: <Palette className="w-6 h-6" />,
    title: "Genre-Aware Art Styles",
    description: "Choose from shōnen, shōjo, isekai, horror, and more. The AI adapts line weight, shading, and composition to match the aesthetic of each genre.",
  },
  {
    icon: <Sparkles className="w-6 h-6" />,
    title: "Consistent Characters",
    description: "Our character consistency engine ensures your protagonist looks the same across all 10 pages — the #1 problem with every other AI art tool.",
  },
  {
    icon: <MessageSquare className="w-6 h-6" />,
    title: "Dialogue Bubble System",
    description: "Automatically places speech bubbles, thought clouds, and sound effects in the right spots using proven manga layout rules.",
  },
  {
    icon: <Download className="w-6 h-6" />,
    title: "Multi-Page Export",
    description: "Export your complete 10-page chapter as print-ready PDF, web-optimized JPGs, or Webtoon-formatted vertical scroll — ready to publish anywhere.",
  },
];

const steps: Step[] = [
  {
    number: "01",
    title: "Pick Your Genre & Style",
    description: "Select a manga genre and art style from our curated library. Each combination unlocks genre-specific panel conventions and visual language.",
    badge: "30 seconds",
  },
  {
    number: "02",
    title: "Write Your Story Seed",
    description: "Describe your story in a few sentences. Who are the characters? What is the conflict? What happens in this chapter? No writing experience needed.",
    badge: "2 minutes",
  },
  {
    number: "03",
    title: "AI Generates Your Chapter",
    description: "MangaForge chains together script generation, panel layout, art generation, and dialogue placement into a single seamless pipeline.",
    badge: "Under 5 min",
  },
  {
    number: "04",
    title: "Review & Refine",
    description: "Tweak individual panels, adjust dialogue, swap compositions, or regenerate specific pages. Full creative control at every step.",
    badge: "Your pace",
  },
  {
    number: "05",
    title: "Export & Share",
    description: "Download your finished chapter in multiple formats optimized for print, web, or Webtoon publishing. Share with the world.",
    badge: "Instant",
  },
];

const pricingTiers: PricingTier[] = [
  {
    name: "Sketch",
    price: "$0",
    period: "forever",
    description: "Perfect for testing the waters and exploring what MangaForge can do.",
    features: [
      "2 manga chapters per month",
      "3 genre styles",
      "Standard resolution export",
      "Basic dialogue bubbles",
      "Community support",
    ],
    highlighted: false,
    badge: null,
  },
  {
    name: "Mangaka",
    price: "$19",
    period: "per month",
    description: "For creators serious about building a manga series with consistent output.",
    features: [
      "20 manga chapters per month",
      "All 12 genre styles",
      "High-resolution export",
      "Advanced dialogue & SFX system",
      "Character consistency lock",
      "Webtoon format export",
      "Priority generation queue",
      "Email support",
    ],
    highlighted: true,
    badge: "Most Popular",
  },
  {
    name: "Studio",
    price: "$79",
    period: "per month",
    description: "For studios, educators, and power creators with high-volume needs.",
    features: [
      "Unlimited manga chapters",
      "All genres + custom styles",
      "Print-ready 600 DPI export",
      "Full dialogue & SFX control",
      "Multi-character consistency",
      "API access",
      "Team collaboration (5 seats)",
      "Dedicated support",
      "Early access to new features",
    ],
    highlighted: false,
    badge: "Best Value",
  },
];

const testimonials: Testimonial[] = [
  {
    name: "Yuki T.",
    role: "Webtoon Creator",
    content: "I had 3 story ideas sitting in my notes app for two years. MangaForge turned all three into full chapters in a single afternoon. The panel layouts actually look like real manga — not just AI-generated images slapped together.",
    rating: 5,
  },
  {
    name: "Marcus D.",
    role: "Game Writer",
    content: "I use it to pitch narrative concepts to my team. Instead of writing a 20-page design doc, I hand them a 10-page manga chapter. Approval rates went through the roof.",
    rating: 5,
  },
  {
    name: "Priya S.",
    role: "Indie Novelist",
    content: "The character consistency feature is what sold me. Every other tool I tried would make my protagonist look like a completely different person panel to panel. MangaForge actually solves that problem.",
    rating: 5,
  },
];

const faqs: FAQItem[] = [
  {
    question: "Do I need any drawing or writing skills to use MangaForge?",
    answer: "None at all. If you can describe a story in a few sentences — even just a rough idea like 'a high school student discovers they can hear the thoughts of their cat' — MangaForge handles everything else. The AI writes the script, designs the pages, draws the art, and places the dialogue.",
  },
  {
    question: "How does character consistency work across 10 pages?",
    answer: "Our Character Consistency Engine creates a visual DNA for each character when they first appear and references it throughout the entire chapter. This ensures the same face shape, hair style, clothing, and proportions appear consistently — something most AI art tools fundamentally cannot do.",
  },
  {
    question: "What manga genres are supported?",
    answer: "Currently we support shōnen, shōjo, seinen, josei, isekai, horror, slice-of-life, romance, mecha, sports, fantasy, and sci-fi. Each genre has its own panel conventions, visual language, and art style presets baked in. We add new genres regularly based on user requests.",
  },
  {
    question: "Can I edit the generated pages?",
    answer: "Yes, fully. You can regenerate individual panels, edit dialogue text directly, swap out scene compositions, adjust character poses, or change the panel layout of any page. You can also export the raw panel images and edit them in your preferred software.",
  },
  {
    question: "What formats can I export in?",
    answer: "On Mangaka and Studio plans you can export as print-ready PDF, high-res JPGs, and Webtoon-optimized vertical scroll format. Studio plan users also get 600 DPI exports suitable for professional printing and API access for custom workflows.",
  },
  {
    question: "Do I own the manga I create?",
    answer: "Yes. You retain full commercial rights to all content generated with your account. You can publish, sell, or distribute your manga chapters however you choose. We only ask that you do not use MangaForge to generate content that violates our content policy.",
  },
];

const genres = ["Shōnen", "Shōjo", "Isekai", "Horror", "Slice of Life", "Mecha", "Romance", "Seinen"];

export default function Home() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [activeGenre, setActiveGenre] = useState("Shōnen");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0f]/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-pink-500 flex items-center justify-center">
              <BookOpen className="w-4 h-4 text-white" />
            </div>
            <span className="text-xl font-bold tracking-tight">MangaForge</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm text-white/60">
            <a href="#features" className="hover:text-white transition-colors">Features</a>
            <a href="#how-it-works" className="hover:text-white transition-colors">How It Works</a>
            <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
            <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm" className="text-white/70 hover:text-white hidden sm:flex">
              Sign In
            </Button>
            <Button size="sm" className="bg-gradient-to-r from-violet-600 to-pink-600 hover:from-violet-500 hover:to-pink-500 border-0 text-white">
              Start Free
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative pt-32 pb-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-violet-950/30 via-transparent to-transparent pointer-events-none" />
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-violet-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-5xl mx-auto text-center">
          <Badge className="mb-6 bg-violet-500/20 text-violet-300 border-violet-500/30 hover:bg-violet-500/20 text-sm px-4 py-1">
            <Sparkles className="w-3 h-3 mr-1.5" />
            The Complete Manga Creation Pipeline
          </Badge>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight mb-6">
            Turn any story idea into{" "}
            <span className="bg-gradient-to-r from-violet-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
              10 pages of manga
            </span>
          </h1>

          <p className="text-xl sm:text-2xl text-white/60 max-w-3xl mx-auto mb-10 leading-relaxed">
            No drawing skills required. Pick a genre, write a story seed, and MangaForge generates a fully-laid-out manga chapter complete with panels, art, and dialogue — in minutes.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button size="lg" className="bg-gradient-to-r from-violet-600 to-pink-600 hover:from-violet-500 hover:to-pink-500 border-0 text-white text-lg h-14 px-8">
              Create Your First Chapter Free
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-white/20 text-white/80 hover:bg-white/10 hover:text-white text-lg h-14 px-8">
              See Example Chapters
            </Button>
          </div>

          {/* Genre pills */}
          <div className="flex flex-wrap gap-2 justify-center mb-16">
            {genres.map((genre) => (
              <button
                key={genre}
                onClick={() => setActiveGenre(genre)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeGenre === genre
                    ? "bg-violet-600 text-white"
                    : "bg-white/5 text-white/50 hover:bg-white/10 hover:text-white/80"
                }`}
              >
                {genre}
              </button>
            ))}
          </div>

          {/* Mock manga preview */}
          <div className="relative max-w-4xl mx-auto">
            <div className="bg-gradient-to-b from-white/5 to-transparent rounded-2xl border border-white/10 p-6 overflow-hidden">
              <div className="grid grid-cols-3 gap-3">
                {/* Panel 1 - Large splash */}
                <div className="col-span-2 row-span-2 bg-gradient-to-br from-violet-900/40 to-pink-900/20 rounded-xl border border-white/10 aspect-square flex flex-col items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 opacity-20">
                    {[...Array(12)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute top-1/2 left-1/2 bg-white/30"
                        style={{
                          height: "2px",
                          width: "120%",
                          transformOrigin: "left center",
                          transform: `rotate(${i * 30}deg) translateY(-1px)`,
                        }}
                      />
                    ))}
                  </div>
                  <div className="relative z-10 text-center">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-violet-500 to-pink-500 mx-auto mb-2 flex items-center justify-center">
                      <Zap className="w-8 h-8 text-white" />
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg px-3 py-1 text-xs text-white/70 mt-2">
                      SPLASH PAGE
                    </div>
                  </div>
                </div>

                {/* Panel 2 */}
                <div className="bg-gradient-to-br from-blue-900/30 to-violet-900/20 rounded-xl border border-white/10 aspect-video flex items-center justify-center">
                  <div className="text-center px-2">
                    <div className="w-8 h-8 rounded-full bg-blue-500/40 mx-auto mb-1" />
                    <div className="bg-white/10 rounded px-2 py-0.5 text-xs text-white/50">dialogue</div>
                  </div>
                </div>

                {/* Panel 3 */}
                <div className="bg-gradient-to-br from-pink-900/30 to-orange-900/20 rounded-xl border border-white/10 aspect-video flex items-center justify-center">
                  <div className="text-center px-2">
                    <div className="w-8 h-8 rounded-full bg-pink-500/40 mx-auto mb-1" />
                    <div className="bg-white/10 rounded px-2 py-0.5 text-xs text-white/50">action</div>
                  </div>
                </div>

                {/* Bottom row panels */}
                <div className="bg-gradient-to-br from-emerald-900/20 to-teal-900/20 rounded-xl border border-white/10 aspect-video flex items-center justify-center">
                  <div className="bg-white/10 rounded px-2 py-0.5 text-xs text-white/50">scene</div>
                </div>
                <div className="bg-gradient-to-br from-orange-900/20 to-red-900/20 rounded-xl border border-white/10 aspect-video flex items-center justify-center">
                  <div className="bg-white/10 rounded px-2 py-0.5 text-xs text-white/50">reaction</div>
                </div>
                <div className="bg-gradient-to-br from-violet-900/20 to-indigo-900/20 rounded-xl border border-white/10 aspect-video flex items-center justify-center">
                  <div className="bg-white/10 rounded px-2 py-0.5 text-xs text-white/50">close-up</div>
                </div>
              </div>

              <div className="mt-4 text-center">
                <Badge className="bg-white/5 text-white/40 border-white/10 text-xs">
                  {activeGenre} Chapter — AI Generated Panel Layout
                </Badge>
              </div>
            </div>
          </div>

          {/* Social proof */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-12 text-sm text-white/50">
            <div className="flex items-center gap-1.5">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              ))}
              <span className="ml-1">4.9/5 from 2,400+ creators</span>
            </div>
            <Separator orientation="vertical" className="h-4 bg-white/20 hidden sm:block" />
            <span>12,000+ chapters created</span>
            <Separator orientation="vertical" className="h-4 bg-white/20 hidden sm:block" />
            <span>No credit card required</span>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-pink-500/20 text-pink-300 border-pink-500/30 hover:bg-pink-500/20">
              Features
            </Badge>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              The entire pipeline,{" "}
              <span className="bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent">
                end to end
              </span>
            </h2>
            <p className="text-lg text-white/50 max-w-2xl mx-auto">
              Every competitor solves 1–2 steps. MangaForge owns the entire story-to-storyboard pipeline with features built specifically for manga.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="bg-white/5 border-white/10 hover:bg-white/8 hover:border-white/20 transition-all group">
                <CardHeader>
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500/20 to-pink-500/20 border border-violet-500/20 flex items-center justify-center text-violet-400 group-hover:from-violet-500/30 group-hover:to-pink-500/30 transition-all mb-2">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-white text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-white/50 leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-24 px-4 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-500/20 text-blue-300 border-blue-500/30 hover:bg-blue-500/20">
              How It Works
            </Badge>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              From idea to chapter{" "}
              <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
                in 5 steps
              </span>
            </h2>
            <p className="text-lg text-white/50 max-w-2xl mx-auto">
              MangaForge chains together five AI systems in a single pipeline. You write one paragraph — we deliver a complete manga chapter.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-violet-500/50 via-pink-500/30 to-transparent hidden md:block" />
            <div className="space-y-8">
              {steps.map((step, index) => (
                <div key={index} className="relative flex gap-8 items-start group">
                  <div className="relative z-10 flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-600/30 to-pink-600/20 border border-violet-500/30 flex items-center justify-center hidden md:flex group-hover:from-violet-600/50 group-hover:to-pink-600/40 transition-all">
                    <span className="text-violet-300 font-bold text-sm">{step.number}</span>
                  </div>
                  <Card className="flex-1 bg-white/5 border-white/10 hover:bg-white/8 hover:border-white/20 transition-all">
                    <CardHeader>
                      <div className="flex items-center justify-between flex-wrap gap-2">
                        <CardTitle className="text-white">{step.title}</CardTitle>
                        <Badge className="bg-violet-500/20 text-violet-300 border-violet-500/30 hover:bg-violet-500/20 text-xs">
                          <Zap className="w-3 h-3 mr-1" />
                          {step.badge}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-white/50">{step.description}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Genre Showcase */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-orange-500/20 text-orange-300 border-orange-500/30 hover:bg-orange-500/20">
              Genre Library
            </Badge>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Every genre has its own{" "}
              <span className="bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">
                visual language
              </span>
            </h2>
            <p className="text-lg text-white/50 max-w-2xl mx-auto">
              MangaForge understands that shōnen speed lines hit different than horror close-ups. Each genre ships with its own panel conventions baked in.
            </p>
          </div>

          <Tabs defaultValue="shonen" className="w-full">
            <TabsList className="bg-white/5 border border-white/10 h-auto flex-wrap gap-1 p-1 mb-8 mx-auto w-fit">
              <TabsTrigger value="shonen" className="data-[state=active]:bg-violet-600 data-[state=active]:text-white">Shōnen</TabsTrigger>
              <TabsTrigger value="shojo" className="data-[state=active]:bg-pink-600 data-[state=active]:text-white">Shōjo</TabsTrigger>
              <TabsTrigger value="isekai" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">Isekai</TabsTrigger>
              <TabsTrigger value="horror" className="data-[state=active]:bg-red-700 data-[state=active]:text-white">Horror</TabsTrigger>
            </TabsList>

            {[
              {
                value: "shonen",
                title: "Shōnen",
                description: "Action-first composition with dynamic speed lines, impact frames, and power-up splash pages. Characters are expressive, proportions are heroic.",
                tags: ["Speed Lines", "Impact Frames", "Power Panels", "9-Grid Action", "Battle Spreads"],
                color: "from-violet-600/20 to-blue-600/10",
                accent: "violet",
              },
              {
                value: "shojo",
                title: "Shōjo",
                description: "Emotion-driven layouts with soft screen tones, floral overlays, and intimate close-ups. Panel borders are fluid, not rigid.",
                tags: ["Soft Screen Tones", "Floral Overlays", "Emotion Close-ups", "Flowing Borders", "Sparkle Effects"],
                color: "from-pink-600/20 to-rose-600/10",
                accent: "pink",
              },
              {
                value: "isekai",
                title: "Isekai",
                description: "World-building splash pages, status screen overlays, and the classic isekai revelation panel. Fantasy landscapes with modern character designs.",
                tags: ["Status Screens", "World Splash", "Magic Effects", "Revelation Panels", "Fantasy Maps"],
                color: "from-blue-600/20 to-indigo-600/10",
                accent: "blue",
              },
              {
                value: "horror",
                title: "Horror",
                description: "Asymmetric panel breaks, deep shadow rendering, distorted faces, and the creeping dread of negative space. Unsettling by design.",
                tags: ["Shadow Rendering", "Distorted Panels", "Negative Space", "Creeping Dread", "Jump Cut Panels"],
                color: "from-red-900/20 to-black",
                accent: "red",
              },
            ].map((tab) => (
              <TabsContent key={tab.value} value={tab.value}>
                <div className={`rounded-2xl bg-gradient-to-br ${tab.color} border border-white/10 p-8`}>
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div>
                      <h3 className="text-2xl font-bold mb-3">{tab.title} Style</h3>
                      <p className="text-white/60 leading-relaxed mb-6">{tab.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {tab.tags.map((tag) => (
                          <Badge key={tag} className="bg-white/10 text-white/70 border-white/20 hover:bg-white/10 text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      {[...Array(6)].map((_, i) => (
                        <div
                          key={i}
                          className={`rounded-lg border border-white/10 flex items-center justify-center ${
                            i === 0 ? "col-span-2 row-span-2 aspect-square" : "aspect-video"
                          } bg-white/5`}
                        >
                          <div className="text-white/20 text-xs">P{i + 1}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-4 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-yellow-500/20 text-yellow-300 border-yellow-500/30 hover:bg-yellow-500/20">
              Creator Stories
            </Badge>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Real creators,{" "}
              <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                real chapters
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white/5 border-white/10 hover:bg-white/8 transition-all">
                <CardHeader>
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <CardDescription className="text-white/70 leading-relaxed text-sm">
                    {`"`}{testimonial.content}{`"`}
                  </CardDescription>
                </CardHeader>
                <CardFooter>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-violet-500 to-pink-500 flex items-center justify-center text-white font-bold text-sm">
                      {testimonial.name[0]}
                    </div>
                    <div>
                      <div className="text-white font-medium text-sm">{testimonial.name}</div>
                      <div className="text-white/40 text-xs">{testimonial.role}</div>
                    </div>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-emerald-500/20 text-emerald-300 border-emerald-500/30 hover:bg-emerald-500/20">
              Pricing
            </Badge>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Start free,{" "}
              <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                scale as you create
              </span>
            </h2>
            <p className="text-lg text-white/50 max-w-2xl mx-auto">
              No credit card required to start. Upgrade when you are ready to create more.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {pricingTiers.map((tier, index) => (
              <Card
                key={index}
                className={`relative flex flex-col ${
                  tier.highlighted
                    ? "bg-gradient-to-b from-violet-900/50 to-pink-900/20 border-violet-500/40 shadow-2xl shadow-violet-500/10 scale-105"
                    : "bg-white/5 border-white/10"
                } transition-all`}
              >
                {tier.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Badge className={`${tier.highlighted ? "bg-gradient-to-r from-violet-600 to-pink-600 text-white border-0" : "bg-orange-500/20 text-orange-300 border-orange-500/30"} text-xs px-3`}>
                      {tier.badge}
                    </Badge>
                  </div>
                )}
                <CardHeader className="pb-4">
                  <CardTitle className="text-white text-xl">{tier.name}</CardTitle>
                  <div className="mt-2">
                    <span className="text-4xl font-bold text-white">{tier.price}</span>
                    <span className="text-white/40 ml-2 text-sm">/{tier.period}</span>
                  </div>
                  <CardDescription className="text-white/50 text-sm mt-2">{tier.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-3">
                    {tier.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start gap-2.5 text-sm text-white/70">
                        <Check className={`w-4 h-4 mt-0.5 flex-shrink-0 ${tier.highlighted ? "text-violet-400" : "text-emerald-400"}`} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="pt-4">
                  <Button
                    className={`w-full ${
                      tier.highlighted
                        ? "bg-gradient-to-r from-violet-600 to-pink-600 hover:from-violet-500 hover:to-pink-500 border-0 text-white"
                        : "bg-white/10 hover:bg-white/20 border border-white/20 text-white"
                    }`}
                  >
                    Get Started
                    <ChevronRight className="ml-1 w-4 h-4" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <p className="text-center text-white/30 text-sm mt-8">
            All plans include a 7-day money-back guarantee. Annual billing saves 20%.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24 px-4 bg-white/[0.02]">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-indigo-500/20 text-indigo-300 border-indigo-500/30 hover:bg-indigo-500/20">
              FAQ
            </Badge>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Questions answered
            </h2>
          </div>

          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white/5 border border-white/10 rounded-xl px-4 data-[state=open]:border-violet-500/30 transition-all"
              >
                <AccordionTrigger className="text-white hover:text-violet-300 hover:no-underline text-left text-sm font-medium py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-white/50 text-sm leading-relaxed pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="relative bg-gradient-to-br from-violet-900/50 via-pink-900/30 to-orange-900/20 rounded-3xl border border-violet-500/20 p-12 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-violet-600/5 to-pink-600/5 pointer-events-none" />
            <div className="relative">
              <Badge className="mb-6 bg-violet-500/20 text-violet-300 border-violet-500/30 hover:bg-violet-500/20">
                <Sparkles className="w-3 h-3 mr-1.5" />
                Start for free today
              </Badge>
              <h2 className="text-4xl sm:text-5xl font-bold mb-4">
                Your story deserves{" "}
                <span className="bg-gradient-to-r from-violet-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
                  to be a manga chapter
                </span>
              </h2>
              <p className="text-lg text-white/50 max-w-2xl mx-auto mb-10">
                Join 12,000+ creators who stopped letting their story ideas collect dust. Your first 2 chapters are free — no credit card required.
              </p>

              {submitted ? (
                <div className="bg-emerald-500/20 border border-emerald-500/30 rounded-xl py-4 px-6 text-emerald-300 font-medium">
                  <Check className="w-5 h-5 inline mr-2" />
                  You are on the list! We will be in touch soon.
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/30 h-12 flex-1 focus-visible:ring-violet-500"
                  />
                  <Button type="submit" className="bg-gradient-to-r from-violet-600 to-pink-600 hover:from-violet-500 hover:to-pink-500 border-0 text-white h-12 px-6 whitespace-nowrap">
                    Get Early Access
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </form>
              )}

              <p className="text-white/30 text-xs mt-4">
                No spam. No credit card. Just manga.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-violet-500 to-pink-500 flex items-center justify-center">
                <BookOpen className="w-3.5 h-3.5 text-white" />
              </div>
              <span className="text-lg font-bold">MangaForge</span>
            </div>
            <div className="flex gap-6 text-sm text-white/40">
              <a href="#" className="hover:text-white/70 transition-colors">Privacy</a>
              <a href="#" className="hover:text-white/70 transition-colors">Terms</a>
              <a href="#" className="hover:text-white/70 transition-colors">Blog</a>
              <a href="#" className="hover:text-white/70 transition-colors">Discord</a>
              <a href="#" className="hover:text-white/70 transition-colors">Contact</a>
            </div>
            <p className="text-white/20 text-sm">
              {`© ${new Date().getFullYear()} MangaForge. All rights reserved.`}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}