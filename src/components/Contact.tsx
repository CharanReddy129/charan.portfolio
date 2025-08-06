import { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Send } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send this data to your backend
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. I'll get back to you soon!",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "contact@devops-portfolio.dev",
      href: "mailto:contact@devops-portfolio.dev"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+1 (555) 123-4567",
      href: "tel:+15551234567"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "City, State, Country",
      href: "#"
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com",
      color: "hover:text-blue-500"
    },
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com",
      color: "hover:text-primary"
    },
    {
      icon: Mail,
      label: "Email",
      href: "mailto:contact@devops-portfolio.dev",
      color: "hover:text-secondary"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to discuss DevOps opportunities, collaborate on projects, or just connect? 
            Let's start a conversation!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-8">
            {/* Contact Information */}
            <Card className="border-border bg-card animate-slide-in">
              <CardHeader>
                <CardTitle className="gradient-text-secondary">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.href}
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors group"
                  >
                    <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <info.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-sm text-foreground">{info.label}</p>
                      <p className="text-muted-foreground text-sm">{info.value}</p>
                    </div>
                  </a>
                ))}
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="border-border bg-card animate-slide-in" style={{ animationDelay: '0.2s' }}>
              <CardHeader>
                <CardTitle className="gradient-text-secondary">Connect With Me</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex justify-center space-x-6">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 bg-muted/50 rounded-lg hover:bg-muted transition-all duration-200 ${social.color} transform hover:scale-110`}
                      title={social.label}
                    >
                      <social.icon className="h-6 w-6" />
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;