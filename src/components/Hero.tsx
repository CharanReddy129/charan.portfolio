import { ArrowDown, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/devops-hero.jpg';

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-grid opacity-30" />
      
      {/* Content */}
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <p className="text-lg md:text-xl text-muted-foreground mb-4">
            Hi, I'm <span className="text-primary font-semibold">Alex Johnson</span>
          </p>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="gradient-text">DevOps</span>
            <br />
            <span className="gradient-text-secondary">Engineer</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Passionate about automation, cloud infrastructure, and building scalable systems. 
            Ready to streamline deployments and optimize workflows.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="glow-primary animate-pulse-glow"
              onClick={scrollToAbout}
            >
              Explore My Work
              <ArrowDown className="ml-2 h-5 w-5" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              Download Resume
              <Download className="ml-2 h-5 w-5" />
            </Button>
          </div>
          
          {/* Floating tech icons */}
          <div className="flex justify-center space-x-8 text-muted-foreground">
            <div className="animate-float" style={{ animationDelay: '0s' }}>
              <div className="skill-badge px-4 py-2 rounded-full text-sm">Docker</div>
            </div>
            <div className="animate-float" style={{ animationDelay: '0.5s' }}>
              <div className="skill-badge px-4 py-2 rounded-full text-sm">Kubernetes</div>
            </div>
            <div className="animate-float" style={{ animationDelay: '1s' }}>
              <div className="skill-badge px-4 py-2 rounded-full text-sm">AWS</div>
            </div>
            <div className="animate-float" style={{ animationDelay: '1.5s' }}>
              <div className="skill-badge px-4 py-2 rounded-full text-sm">Jenkins</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-primary" />
      </div>
    </section>
  );
};

export default Hero;