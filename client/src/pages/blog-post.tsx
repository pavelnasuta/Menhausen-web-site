import { Layout } from "@/components/layout";
import { SEO } from "@/components/seo";
import { Button } from "@/components/ui/button";
import { Link, useRoute } from "wouter";
import { ArrowLeft } from "lucide-react";
import blogImage from "@assets/generated_images/Abstract_order_from_chaos_for_stress_management_page_8136dc7e.png";

export default function BlogPost() {
  const [match, params] = useRoute("/blog/:slug");
  const slug = params?.slug;

  // Mock content - in a real app this would fetch from CMS
  const title = "5 Scientific Techniques to Lower Cortisol Immediately";
  
  return (
    <Layout>
      <SEO 
        title={title} 
        description="Learn effective techniques to manage stress instantly."
      />
      
      <article className="py-16">
        <div className="container mx-auto px-4 sm:px-8 max-w-3xl">
          <Link href="/blog" className="inline-flex items-center text-muted-foreground hover:text-primary mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Journal
          </Link>

          <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            {title}
          </h1>

          <div className="flex items-center gap-4 mb-8 text-sm text-muted-foreground">
            <span>Nov 18, 2025</span>
            <span>•</span>
            <span>5 min read</span>
            <span>•</span>
            <span className="text-primary font-medium">Stress Management</span>
          </div>

          <div className="rounded-2xl overflow-hidden mb-12 shadow-lg">
            <img src={blogImage} alt="Article Hero" className="w-full h-auto" />
          </div>

          <div className="prose prose-lg prose-slate dark:prose-invert max-w-none">
             <p className="lead">
               Stress isn't just "in your head." It's a physiological cascade of hormones, primarily cortisol and adrenaline. To stop stress, you have to speak the body's language.
             </p>
             
             <h2>1. The Physiological Sigh</h2>
             <p>
               Discovered by neuroscientists, this breathing pattern is the fastest known way to lower arousal in real-time.
             </p>
             <ul>
               <li>Inhale deeply through the nose.</li>
               <li>Take a second, shorter inhale on top of it (to fully inflate alveoli).</li>
               <li>Exhale slowly and fully through the mouth.</li>
               <li>Repeat 1-3 times.</li>
             </ul>

             <h2>2. Visual Panorama</h2>
             <p>
               When we are stressed, our vision narrows (tunnel vision). This is a vestigial predator response. By consciously widening your gaze to see the periphery (panoramic vision), you signal to your brain that you are safe.
             </p>

             <div className="bg-muted/50 p-8 rounded-xl border border-border my-8 not-prose">
               <h3 className="text-xl font-bold mb-4">Need a guide?</h3>
               <p className="mb-6 text-muted-foreground">
                 Menhausen has a guided 2-minute "Panic Reset" card that walks you through these steps.
               </p>
               <Button asChild>
                 <a href="tg://resolve?domain=ImFineBot&start=miniapp">Try Panic Reset in App</a>
               </Button>
             </div>

             <h2>3. Cold Exposure</h2>
             <p>
               Splashing cold water on your face triggers the "mammalian dive reflex," which instantly lowers heart rate. It's crude, but effective.
             </p>

             <h2>Conclusion</h2>
             <p>
               You cannot "think" your way out of a stress response. You must "act" your way out. These tools are your first line of defense.
             </p>
          </div>
        </div>
      </article>
    </Layout>
  );
}
