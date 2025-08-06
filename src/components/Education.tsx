import { GraduationCap, Calendar, MapPin } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Education = () => {
  const education = [
    {
      degree: "Bachelor of Technology in Computer Science",
      institution: "Tech University",
      location: "City, State",
      period: "2020 - 2024",
      grade: "CGPA: 8.5/10",
      highlights: [
        "Data Structures & Algorithms",
        "Operating Systems",
        "Computer Networks",
        "Database Management",
        "Software Engineering"
      ]
    },
    {
      degree: "Senior Secondary (12th)",
      institution: "Excellence High School",
      location: "City, State", 
      period: "2018 - 2020",
      grade: "92%",
      highlights: [
        "Mathematics",
        "Physics", 
        "Computer Science"
      ]
    }
  ];


  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Education</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My academic foundation and continuous learning journey in technology
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-semibold gradient-text-secondary mb-6">Academic Qualifications</h3>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <Card 
                key={index} 
                className="card-hover border-border bg-card animate-slide-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <GraduationCap className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-2">{edu.degree}</CardTitle>
                      <div className="space-y-1 text-muted-foreground">
                        <p className="font-medium">{edu.institution}</p>
                        <div className="flex items-center gap-4 text-sm">
                          <span className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            {edu.location}
                          </span>
                          <span className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {edu.period}
                          </span>
                        </div>
                        <p className="text-primary font-medium">{edu.grade}</p>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {edu.highlights.map((subject, idx) => (
                      <Badge key={idx} variant="secondary" className="skill-badge">
                        {subject}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;