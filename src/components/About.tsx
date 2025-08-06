import { Server, Cloud, Code, Zap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const highlights = [
    {
      icon: Server,
      title: "Infrastructure",
      description: "Experience with cloud platforms and server management"
    },
    {
      icon: Code,
      title: "Automation",
      description: "Passionate about CI/CD pipelines and workflow automation"
    },
    {
      icon: Cloud,
      title: "Cloud Native",
      description: "Focus on containerization and microservices architecture"
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Committed to optimizing system performance and reliability"
    }
  ];

  return (
    <section id="about" className="py-20 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I'm a passionate DevOps fresher with a strong foundation in cloud technologies, 
            automation, and infrastructure management. My journey in technology is driven by 
            curiosity and a desire to build efficient, scalable systems that make a difference.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-in">
            <h3 className="text-2xl font-semibold mb-6 gradient-text-secondary">My Journey</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Starting my career in DevOps, I'm excited to apply theoretical knowledge 
                to real-world challenges. I believe in the power of automation to transform 
                how we build, deploy, and maintain software systems.
              </p>
              <p>
                My technical interests span across containerization, cloud infrastructure, 
                monitoring, and continuous integration. I'm always eager to learn new 
                technologies and best practices in the ever-evolving DevOps landscape.
              </p>
              <p>
                I thrive in collaborative environments and am committed to improving 
                development workflows, reducing deployment times, and ensuring system 
                reliability through innovative solutions.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {highlights.map((highlight, index) => (
              <Card 
                key={index} 
                className="card-hover border-border bg-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <highlight.icon className="h-8 w-8 text-primary mx-auto mb-3" />
                  <h4 className="font-semibold mb-2">{highlight.title}</h4>
                  <p className="text-sm text-muted-foreground">{highlight.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;