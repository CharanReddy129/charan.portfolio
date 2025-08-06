import { Heart, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <h3 className="text-xl font-bold gradient-text mb-4">DevOps Portfolio</h3>
            <p className="text-muted-foreground text-sm max-w-xs">
              Passionate about automation, cloud infrastructure, and building scalable systems.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2 text-sm">
              <a href="#about" className="block text-muted-foreground hover:text-primary transition-colors">About</a>
              <a href="#education" className="block text-muted-foreground hover:text-primary transition-colors">Education</a>
              <a href="#skills" className="block text-muted-foreground hover:text-primary transition-colors">Skills</a>
              <a href="#projects" className="block text-muted-foreground hover:text-primary transition-colors">Projects</a>
              <a href="#contact" className="block text-muted-foreground hover:text-primary transition-colors">Contact</a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="space-y-2 text-sm">
              <a href="mailto:contact@devops-portfolio.dev" className="block text-muted-foreground hover:text-primary transition-colors">
                Email
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="block text-muted-foreground hover:text-primary transition-colors">
                LinkedIn
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="block text-muted-foreground hover:text-primary transition-colors">
                GitHub
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            Made with <Heart className="h-4 w-4 text-red-500" fill="currentColor" /> by a DevOps enthusiast
          </p>
          
          <div className="flex items-center gap-4 mt-4 md:mt-0">
            <p className="text-sm text-muted-foreground">
              © {currentYear} DevOps Portfolio. All rights reserved.
            </p>
            <Button
              variant="outline"
              size="sm"
              onClick={scrollToTop}
              className="border-border hover:border-primary"
            >
              <ArrowUp className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;