import { 
  Container, 
  Cloud, 
  GitBranch, 
  Monitor, 
  Server, 
  Database,
  Shield,
  Code
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Skills = () => {
  const skillCategories = [
    {
      icon: Cloud,
      title: "Cloud Platforms",
      skills: ["AWS", "Azure", "Google Cloud", "DigitalOcean"],
      color: "text-blue-500"
    },
    {
      icon: Container,
      title: "Containerization",
      skills: ["Docker", "Kubernetes", "Podman", "Docker Compose"],
      color: "text-primary"
    },
    {
      icon: GitBranch,
      title: "CI/CD & Version Control",
      skills: ["Jenkins", "GitHub Actions", "GitLab CI", "Git", "ArgoCD"],
      color: "text-secondary"
    },
    {
      icon: Code,
      title: "Infrastructure as Code",
      skills: ["Terraform", "Ansible", "CloudFormation", "Helm"],
      color: "text-green-500"
    },
    {
      icon: Monitor,
      title: "Monitoring & Logging",
      skills: ["Prometheus", "Grafana", "ELK Stack", "New Relic"],
      color: "text-purple-500"
    },
    {
      icon: Server,
      title: "Operating Systems",
      skills: ["Linux", "Ubuntu", "CentOS", "Windows Server"],
      color: "text-orange-500"
    },
    {
      icon: Database,
      title: "Databases",
      skills: ["MySQL", "PostgreSQL", "MongoDB", "Redis"],
      color: "text-indigo-500"
    },
    {
      icon: Shield,
      title: "Security & Networking",
      skills: ["SSL/TLS", "VPN", "Firewalls", "IAM", "OWASP"],
      color: "text-red-500"
    }
  ];

  const programmingLanguages = [
    { name: "Python", level: 85 },
    { name: "Bash/Shell", level: 80 },
    { name: "YAML", level: 90 },
    { name: "JavaScript", level: 75 },
    { name: "Go", level: 60 },
    { name: "JSON", level: 95 }
  ];

  return (
    <section id="skills" className="py-20 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            DevOps tools and technologies I work with to build robust, scalable infrastructure
          </p>
        </div>

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6 mb-16">
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
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, idx) => (
                    <Badge 
                      key={idx} 
                      variant="secondary" 
                      className="skill-badge text-xs"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Programming Languages with Progress Bars */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-semibold text-center mb-8 gradient-text-secondary">
            Programming & Scripting Languages
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {programmingLanguages.map((lang, index) => (
              <div 
                key={index} 
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium text-foreground">{lang.name}</span>
                  <span className="text-sm text-muted-foreground">{lang.level}%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full transition-all duration-1000 ease-out"
                    style={{ 
                      width: `${lang.level}%`,
                      animation: `width-grow 1.5s ease-out ${index * 0.2}s both`
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;