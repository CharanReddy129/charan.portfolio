import { ExternalLink, Github, Play } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const projects = [
    {
      title: "Automated two-tier application deployment pipeline",
      description: "Automated the end-to-end deployment of a two-tier application consisting of a Flask backend and MySQL database using a Jenkins CI/CD pipeline. The solution includes containerization, persistent volume provisioning, Kubernetes deployment, and Git-based automation triggers",
      technologies: ["Jenkins", "Docker", "Kubernetes", "Git", "GitHub"],
      features: [
        "Automated build and deployment pipeline using Jenkins",
        "Dockerized Flask backend application",
        "Persistent Volume setup for MySQL data storage",
        "Kubernetes manifests for deployment and service exposure ",
        "Application accessible via Kubernetes NodePort service",
      ],
      github: "https://github.com/CharanReddy129/two-tier-web-application.git",
      demo: "#",
      status: "Completed"
    },
    {
      title: "Cloud Infrastructure Automation with GitHub Actions",
      description: "Automated cloud infrastructure provisioning using GitHub Actions as the CI/CD tool. Used Terraform as an Infrastructure as Code tool to provision and manage AWS resources. Created a fully functional Amazon EKS cluster within a custom VPC, enabling scalable and secure deployment environments",
      technologies: ["AWS", "Terraform", "GitHub Actions", "EKS", "VPC", "Git", "GitHub"],
      features: [
        "GitHub Actions workflow for automated infrastructure provisioning",
        "Infrastructure as Code using Terraform",
        "Provisioned Amazon EKS cluster inside a custom VPC",
        "Version-controlled infrastructure with Git",
        "Automated and repeatable cloud environment setup",
      ],
      github: "https://github.com/CharanReddy129/EKS_Cluster_with_Actions.git",
      status: "Completed"
    },
    {
      title: "End-to-End CI/CD Pipeline for Java Application on AWS EKS",
      description: "Automated the end-to-end CI/CD pipeline to deploy a Java-based application into an AWS EKS cluster using GitHub Actions. The application was built using Maven, performed integrated security checks using SonarQube and Trivy. The application was then containerized with Docker, the image was pushed to AWS ECR, and the deployment to EKS was managed declaratively using ArgoCD.",
      technologies: ["Docker", "Kubernetes", "AWS EKS", "AWS ECR", "Git", "GitHub", "ArgoCD", "GitHub Actions",],
      features: [
        "GitHub Actions pipeline for build, security scanning, and deployment",
        "Java application build and test automation using Maven",
        "Static code analysis with SonarQube and image vulnerability scanning with Trivy",
        "Dockerized application and pushed image to Amazon ECR",
        "Declarative application deployment to EKS using ArgoCD"
      ],
      github: "https://github.com/CharanReddy129/Java_maven_Project.git",
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
                    <Badge key={idx} variant="secondary" className="skill-badge text-xs text-cyan-400">
                      {tech}
                    </Badge>
                    ))}
                  </div>
                </div>
                
                <div className="flex gap-3 mt-auto">
                  <Button asChild variant="outline" size="sm" className="flex-1" disabled={project.github === "#"}>
                    <a href={project.github !== "#" ? project.github : undefined} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </a>
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
          <Button asChild variant="outline" className="glow-primary">
            <a href="https://github.com/CharanReddy129" target="_blank" rel="noopener noreferrer">
            <ExternalLink className="h-4 w-4 mr-2" />
            View All Projects
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;