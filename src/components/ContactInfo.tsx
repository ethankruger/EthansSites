import { motion } from "framer-motion";
import { Mail, Phone, Linkedin } from "lucide-react";

const ContactInfo = () => {
    const contactItems = [
        {
            icon: Phone,
            label: "Phone",
            value: "(763) 234-6166",
            href: "tel:7632346166",
        },
        {
            icon: Mail,
            label: "Personal Email",
            value: "ethankruger505@gmail.com",
            href: "mailto:ethankruger505@gmail.com",
        },
        {
            icon: Mail,
            label: "School Email",
            value: "krugere0349@uwec.edu",
            href: "mailto:krugere0349@uwec.edu",
        },
        {
            icon: Linkedin,
            label: "LinkedIn",
            value: "Connect on LinkedIn",
            href: "https://www.linkedin.com/in/ethan-kruger-b90b49373/",
        },
    ];

    return (
        <section className="py-24 relative overflow-hidden">
            {/* Background accent */}
            <div className="absolute top-0 left-0 w-1/2 h-96 bg-primary/5 blur-3xl" />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="text-sm uppercase tracking-widest text-primary mb-4 block">
                        Get In Touch
                    </span>
                    <h2 className="text-4xl md:text-6xl font-heading font-bold mb-6">
                        Contact Information
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-xl mx-auto">
                        Feel free to reach out through any of these channels
                    </p>
                </motion.div>

                <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
                    {contactItems.map((item, index) => (
                        <motion.a
                            key={index}
                            href={item.href}
                            target={item.icon === Linkedin ? "_blank" : undefined}
                            rel={item.icon === Linkedin ? "noopener noreferrer" : undefined}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="glass-card p-6 flex items-start gap-4 hover:border-primary/50 transition-all duration-300 group"
                        >
                            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                                <item.icon className="w-6 h-6 text-primary" />
                            </div>
                            <div className="flex-1 min-w-0">
                                <p className="text-sm text-muted-foreground mb-1">{item.label}</p>
                                <p className="text-foreground font-medium break-words">{item.value}</p>
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ContactInfo;
