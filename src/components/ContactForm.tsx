import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        toast({
          title: "Project brief sent!",
          description: "I'll get back to you within 24-48 hours.",
        });
        (e.target as HTMLFormElement).reset();
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute bottom-0 right-0 w-1/2 h-96 bg-primary/5 blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-sm uppercase tracking-widest text-primary mb-4 block">
              Get Started
            </span>
            <h2 className="text-4xl md:text-6xl font-heading font-bold mb-6">
              Project Brief
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              This is a no-pressure starting point. Share some details about your business
              and what you're looking for, and we'll start a conversation.
            </p>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card p-8 md:p-12"
          >
            {/* Web3Forms Access Key */}
            <input type="hidden" name="access_key" value="9f3c5de7-bc19-4521-b58e-fafe6a063f87" />

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Business Name</label>
                <Input name="business_name" placeholder="Your business name" required />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Contact Name</label>
                <Input name="name" placeholder="Your name" required />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Email</label>
                <Input name="email" type="email" placeholder="you@example.com" required />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Phone (optional)</label>
                <Input name="phone" type="tel" placeholder="(555) 123-4567" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Current Website URL</label>
                <Input name="website" placeholder="https://yoursite.com" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">City</label>
                <Input name="city" placeholder="Eau Claire" required />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Industry</label>
                <Input name="industry" placeholder="e.g. Restaurant, Retail, Services" required />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Budget Range</label>
                <Input name="budget" placeholder="e.g. $500-$1000" />
              </div>
            </div>

            <div className="space-y-2 mb-6">
              <label className="text-sm font-medium text-foreground">Short description of your business</label>
              <textarea
                name="business_description"
                className="flex min-h-28 w-full rounded-xl border border-border bg-secondary/50 px-4 py-3 text-base text-foreground ring-offset-background transition-all duration-300 placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:border-primary resize-none"
                placeholder="Tell me about your business..."
                required
              />
            </div>

            <div className="space-y-2 mb-8">
              <label className="text-sm font-medium text-foreground">Anything specific you want on the new site? (optional)</label>
              <textarea
                name="specific_requirements"
                className="flex min-h-28 w-full rounded-xl border border-border bg-secondary/50 px-4 py-3 text-base text-foreground ring-offset-background transition-all duration-300 placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:border-primary resize-none"
                placeholder="Any features or ideas you have in mind..."
              />
            </div>

            <Button
              type="submit"
              variant="hero"
              size="lg"
              className="w-full md:w-auto"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  Send Project Brief
                  <Send className="w-4 h-4" />
                </>
              )}
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;