import { Layout } from "@/components/layout";
import { SEO } from "@/components/seo";
import { Button } from "@/components/ui/button";
import { StressCard } from "@/components/ui/stress-card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Shield, Lock, Brain, Zap, ArrowRight, CheckCircle2, Clock, Activity } from "lucide-react";
import heroImage from "@assets/generated_images/Dark_blue_and_graphite_abstract_geometric_shapes_for_hero_background_66e4b19a.png";
import { Link } from "wouter";

export default function Home() {
  return (
    <Layout>
      <SEO 
        title="Anonymous Stress Management for Men" 
        description="Practical stress cards, CBT & ACT techniques for men. Anonymous, no registration, 3-7 minute daily practices."
      />

      {/* Hero Section */}
      <section className="relative pt-16 pb-24 md:pt-24 md:pb-32 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 max-w-2xl">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                <Shield className="w-4 h-4 mr-2" />
                Private. Secure. Anonymous.
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold tracking-tight text-foreground leading-[1.1]">
                Stress management for men who <span className="text-primary">get things done</span>.
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Practical stress cards in Telegram. 3–7 minute scientific practices. No registration, no therapy talk, just tools that work.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button size="lg" className="rounded-full px-8 text-lg h-14 shadow-xl shadow-primary/25" asChild>
                  <a href="tg://resolve?domain=ImFineBot&start=miniapp" target="_blank" rel="noopener noreferrer">
                    Open in Telegram
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
                <Button variant="outline" size="lg" className="rounded-full px-8 h-14 bg-white/50 backdrop-blur-sm" asChild>
                  <Link href="/stress-cards">See Examples</Link>
                </Button>
              </div>
              <div className="pt-4 text-sm text-muted-foreground flex gap-6">
                <span className="flex items-center"><CheckCircle2 className="w-4 h-4 mr-1 text-green-600" /> No registration</span>
                <span className="flex items-center"><CheckCircle2 className="w-4 h-4 mr-1 text-green-600" /> Free basic plan</span>
              </div>
            </div>
            <div className="relative lg:h-[600px] w-full rounded-2xl overflow-hidden shadow-2xl border border-white/10">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent mix-blend-overlay z-10 pointer-events-none"></div>
              <img 
                src={heroImage} 
                alt="Abstract visualization of calm and structure" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        
        {/* Background Elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none -z-10" />
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Built for the modern male mind</h2>
            <p className="text-lg text-muted-foreground">
              We stripped away the fluff. No long meditations, no "finding your inner child." Just CBT, ACT, and MBCT techniques adapted for rapid application.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Brain className="w-8 h-8 text-primary" />,
                title: "Cognitive Science",
                desc: "Based on Cognitive Behavioral Therapy (CBT) and Acceptance & Commitment Therapy (ACT)."
              },
              {
                icon: <Clock className="w-8 h-8 text-primary" />,
                title: "3-7 Minutes",
                desc: "Short, punchy sessions designed to fit into a busy workday or commute."
              },
              {
                icon: <Lock className="w-8 h-8 text-primary" />,
                title: "100% Anonymous",
                desc: "No login. No email. No personal data collection. Your mental health is your business."
              }
            ].map((feature, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-border/50 hover:shadow-md transition-shadow">
                <div className="mb-6 p-3 bg-primary/10 w-fit rounded-xl">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8">How Menhausen works</h2>
              <div className="space-y-8">
                {[
                  { step: "01", title: "Open in Telegram", desc: "Choose a focus area: Stress, Anxiety, or Burnout." },
                  { step: "02", title: "Complete a Card", desc: "Answer 1-3 targeted questions to reframe your thinking." },
                  { step: "03", title: "Take Action", desc: "Perform a micro-action to ground the psychological change." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6">
                    <span className="text-4xl font-black text-border/60">{item.step}</span>
                    <div>
                      <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                      <p className="text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Button className="mt-10" size="lg" asChild>
                <a href="tg://resolve?domain=ImFineBot&start=miniapp">Start Now</a>
              </Button>
            </div>
            <div className="bg-secondary rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
               <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl -mr-16 -mt-16"></div>
               <div className="relative z-10">
                 <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 mb-4 border border-white/10">
                    <p className="text-xs uppercase tracking-wider opacity-70 mb-2">Current Card</p>
                    <h3 className="text-xl font-bold mb-4">Burnout Prevention</h3>
                    <div className="w-full bg-white/20 h-2 rounded-full mb-4">
                      <div className="bg-primary h-2 rounded-full w-3/4"></div>
                    </div>
                    <p className="text-sm opacity-80">3 questions remaining</p>
                 </div>
                 <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/5 opacity-60 scale-95">
                    <h3 className="text-lg font-bold">Anxiety Check-in</h3>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Card Previews */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Real examples of Stress Cards</h2>
            <p className="text-lg text-muted-foreground">No abstract theory. Just questions that change your state.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <StressCard 
              id="STRESS-04"
              title="Reframing Negative Thoughts"
              questions={[
                "What specific thought is increasing your stress right now?",
                "Come up with 3 alternative interpretations of this situation."
              ]}
              recommendation="Practice reframing 2 times a week."
            />
            <StressCard 
              id="STRESS-07"
              title="Testing Reality"
              questions={[
                "What small experiment can you run to test if this thought is true?",
                "What results do you expect vs what actually happens?"
              ]}
              recommendation="Run this experiment within 24 hours."
            />
            <StressCard 
              id="STRESS-02"
              title="Somatic Awareness"
              questions={[
                "What body signals are you noticing right now?",
                "Where is the tension located?"
              ]}
              recommendation="Rate your tension 1-10 and write it down."
            />
          </div>
          
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" asChild>
              <Link href="/stress-cards">View More Cards</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Who is it for */}
      <section className="py-20 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Who is Menhausen for?</h2>
              <p className="text-lg text-white/70 mb-8">
                Designed for men aged 25–45 who carry high responsibility loads but often neglect their own maintenance.
              </p>
              <ul className="space-y-4">
                {[
                  "Entrepreneurs & Founders facing uncertainty",
                  "IT Specialists & Engineers dealing with burnout",
                  "Managers & Executives making high-stakes decisions",
                  "Men who value privacy and dislike traditional therapy",
                  "Anyone looking for practical, non-spiritual tools"
                ].map((item, i) => (
                  <li key={i} className="flex items-start text-white/90">
                    <CheckCircle2 className="w-6 h-6 mr-3 text-primary shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                <h3 className="text-4xl font-bold text-primary mb-2">25-45</h3>
                <p className="text-sm text-white/60">Core Age Group</p>
              </div>
              <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                <h3 className="text-4xl font-bold text-primary mb-2">100%</h3>
                <p className="text-sm text-white/60">Anonymous</p>
              </div>
              <div className="bg-white/5 p-6 rounded-xl border border-white/10 col-span-2">
                <h3 className="text-4xl font-bold text-primary mb-2">AES-256</h3>
                <p className="text-sm text-white/60">Encryption Standard. Your data never leaves your device.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-8 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Is this a replacement for therapy?</AccordionTrigger>
              <AccordionContent>
                No. Menhausen is a self-help tool based on therapeutic principles (CBT, ACT). It is designed for stress management and prevention. If you are in crisis or suffering from severe depression, please seek professional help.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Is it really anonymous?</AccordionTrigger>
              <AccordionContent>
                Yes. We do not require email, phone number (other than what Telegram uses), or real names. All your journal entries are stored locally or encrypted. We do not build user profiles for advertising.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>How much does it cost?</AccordionTrigger>
              <AccordionContent>
                Menhausen operates on a Freemium model. Basic stress cards are free forever. Advanced modules for specific issues (Deep Burnout, Public Speaking Anxiety, etc.) are available via a Premium subscription.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Take control of your stress today.</h2>
          <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">
            No registration. No credit card required for start. Just open Telegram and begin your first practice.
          </p>
          <Button size="lg" variant="secondary" className="h-16 px-10 text-lg rounded-full shadow-2xl" asChild>
            <a href="tg://resolve?domain=ImFineBot&start=miniapp">
              Open Menhausen in Telegram
            </a>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
