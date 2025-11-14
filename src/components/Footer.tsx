import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-8 mt-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-col md:flex-row items-center gap-4 text-sm text-muted-foreground">
            <a
              href="https://discord.gg/placeholder"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors font-body font-medium"
            >
              Join Our Discord
            </a>
            <span className="hidden md:inline">•</span>
            <a
              href="cfx.re/join/placeholder"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors font-body font-medium"
            >
              Connect to Server
            </a>
          </div>
          
          <div className="flex items-center gap-2 text-sm text-muted-foreground font-body">
            <span>Horizon Studios</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
