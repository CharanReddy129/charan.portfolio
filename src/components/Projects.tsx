import { ExternalLink, Github, Play } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const projects = [
    {
      title: "Microservices Deployment Pipeline",
      description: "Built a complete CI/CD pipeline using Jenkins, Docker, and Kubernetes to automate deployment of microservices architecture. Integrated automated testing, security scanning, and deployment rollback mechanisms.",
      technologies: ["Jenkins", "Docker", "Kubernetes", "Git", "Prometheus", "Grafana"],
      features: [
        "Automated build and test pipeline",
        "Container security scanning",
        "Blue-green deployment strategy",
        "Monitoring and alerting setup",
        "Infrastructure as Code with Helm"
      ],
      github: "#",
      demo: "#",
      status: "Completed"
    },
    {
      title: "AWS Infrastructure Automation",
      description: "Designed and implemented scalable AWS infrastructure using Terraform and Ansible. Created auto-scaling web application environment with load balancing, RDS database, and CloudWatch monitoring.",
      technologies: ["AWS", "Terraform", "Ansible", "CloudWatch", "ELB", "RDS"],
      features: [
        "Infrastructure as Code implementation",
        "Auto-scaling configuration",
        "Database backup automation",
        "Cost optimization strategies",
        "Security best practices"
      ],
      github: "#",
      demo: "#",
      status: "In Progress"
    },
    {
      title: "Container Orchestration Lab",
      description: "Created a local development environment using Docker Compose and Kubernetes (Kind) for testing containerized applications. Includes service mesh setup with Istio and observability stack.",
      technologies: ["Docker", "Kubernetes", "Istio", "Jaeger", "Kind", "Helm"],
      features: [
        "Multi-container application setup",
        "Service mesh implementation",
        "Distributed tracing",
        "Local Kubernetes cluster",
        "Development workflow automation"
      ],
      github: "#",
      demo: "#",
      status: "Completed"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed': return 'bg-green-500/10 text-green-500 border-green-500/20';
      case 'In Progress': return 'bg-secondary/10 text-secondary border-secondary/20';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            DevOps projects showcasing automation, infrastructure management, and deployment strategies
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="card-hover border-border bg-card flex flex-col animate-slide-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <CardTitle className="text-xl mb-2 pr-2">{project.title}</CardTitle>
                  <Badge className={`${getStatusColor(project.status)} text-xs`}>
                    {project.status}
                  </Badge>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>
              </CardHeader>
              
              <CardContent className="flex-1 flex flex-col">
                <div className="mb-4">
                  <h4 className="font-semibold mb-2 text-sm">Key Features:</h4>
                  <ul className="space-y-1">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-start">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-2 flex-shrink-0"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold mb-3 text-sm">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <Badge 
                        key={idx} 
                        variant="secondary" 
                        className="skill-badge text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div className="flex gap-3 mt-auto">
                  <Button variant="outline" size="sm" className="flex-1">
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1">
                    <Play className="h-4 w-4 mr-2" />
                    Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="text-center mt-12 animate-fade-in">
          <p className="text-muted-foreground mb-4">
            More projects available on my GitHub profile
          </p>
          <Button variant="outline" className="glow-primary">
            <ExternalLink className="h-4 w-4 mr-2" />
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;