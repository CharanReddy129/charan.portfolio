import { 
  Container, 
  Cloud, 
  GitBranch, 
  Monitor, 
  Server, 
  Terminal,
  Shield,
  Code,
  Workflow
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Skills = () => {
  const skillCategories = [
    {
      icon: Cloud,
      title: "Cloud Platforms",
      skills: ["AWS"],
      color: "text-blue-500"
    },
    {
      icon: Container,
      title: "Containerization",
      skills: ["Docker", "Kubernetes", "Docker Compose"],
      color: "text-primary"
    },
    {
      icon: GitBranch,
      title: "Version Control",
      skills: ["Git", "GitHub"],
      color: "text-secondary"
    },
    {
      icon: Code,
      title: "Infrastructure as Code",
      skills: ["Terraform", "Ansible", "Helm"],
      color: "text-green-500"
    },
    {
      icon: Terminal,
      title: "Operating Systems",
      skills: ["Linux", "Ubuntu", "Debian"],
      color: "text-orange-500"
    },
    {
      icon: Workflow,
      title: "CI/CD",
      skills: ["Jenkins", "GitHub Actions", "AgroCD"],
      color: "text-indigo-500"
    },
    {
      icon: Server,
      title: "Web Server",
      skills: ["Nginx"],
      color: "text-purple-500"
    },
    {
      icon: Monitor,
      title: "Monitoring",
      skills: ["Prometheus", "Grafana"],
      color: "text-red-500"
    }
  ];


  return (
    <section id="skills" className="py-20 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8"></div>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            DevOps tools and technologies I work with
          </p>
        </div>

        <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-6">
          {skillCategories.map((category, index) => (
            <Card 
              key={index} 
              className="card-hover border-border bg-card animate-slide-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="text-center pb-4">
                <div className="mx-auto p-3 bg-muted/50 rounded-lg mb-3 w-fit">
                  <category.icon className={`h-8 w-8 ${category.color}`} />
                </div>
                <CardTitle className="text-lg text-foreground">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 justify-center">
                  {category.skills.map((skill, idx) => (
                    <Badge 
                      key={idx} 
                      variant="secondary" 
                      className="skill-badge text-xs text-cyan-400"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;