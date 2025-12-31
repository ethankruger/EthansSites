import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? "bg-background/80 backdrop-blur-xl border-b border-border/50" 
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            <motion.a
              href="#"
              className="text-xl font-heading font-bold text-foreground"
              whileHover={{ scale: 1.02 }}
            >
              Ethan<span className="text-primary">.</span>
            </motion.a>

            {/* Desktop menu */}
            <div className="hidden md:flex items-center gap-8">
              <button 
                onClick={() => scrollToSection("work")}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Work
              </button>
              <button 
                onClick={() => scrollToSection("contact")}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Contact
              </button>
              <Button 
                variant="default" 
                size="sm"
                onClick={() => scrollToSection("contact")}
              >
                Start a project
              </Button>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 text-foreground"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl md:hidden pt-24"
          >
            <div className="container mx-auto px-6 flex flex-col gap-6">
              <button 
                onClick={() => scrollToSection("work")}
                className="text-2xl font-heading font-semibold text-foreground text-left py-3 border-b border-border/50"
              >
                Work
              </button>
              <button 
                onClick={() => scrollToSection("contact")}
                className="text-2xl font-heading font-semibold text-foreground text-left py-3 border-b border-border/50"
              >
                Contact
              </button>
              <Button 
                variant="hero" 
                size="lg"
                onClick={() => scrollToSection("contact")}
                className="mt-4"
              >
                Start a project
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;