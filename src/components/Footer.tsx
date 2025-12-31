import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row justify-between items-center gap-6"
        >
          <div>
            <span className="text-xl font-heading font-bold text-foreground">
              Ethan Kruger
            </span>
            <p className="text-sm text-muted-foreground mt-1">
              Web Design & Development
            </p>
          </div>
          
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Ethan Kruger. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;