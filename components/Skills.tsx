import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { DataParticles } from "./DataParticles";
import {
  Database,
  Code,
  Cloud,
  Server,
  Palette,
  Layers,
  Zap,
  Cpu,
  BarChart3,
  Workflow,
} from "lucide-react";
import { Progress } from "./ui/progress";

export const Skills: React.FC = () => {
  const primarySkills = [
    {
      title: "Azure Data Engineering",
      icon: Database,
      color: "indigo",
      description: "Enterprise-scale data solutions and cloud architecture",
      level: 95,
      skills: [
        "Azure Data Factory",
        "Synapse Analytics",
        "Databricks",
        "Delta Lake",
        "Event Hubs",
        "Stream Analytics",
        "Data Lake Storage",
        "Azure SQL",
        "Cosmos DB",
        "Power BI",
      ],
    },
    {
      title: "Data Pipeline Architecture",
      icon: Workflow,
      color: "blue",
      description: "Real-time and batch processing solutions",
      level: 92,
      skills: [
        "Apache Spark",
        "Kafka Streaming",
        "ETL/ELT Design",
        "Data Warehousing",
        "SSIS Integration",
        "CI/CD Pipelines",
        "Monitoring & Alerting",
        "Performance Tuning",
        "Data Quality",
        "Disaster Recovery",
      ],
    },
    {
      title: "Analytics & Intelligence",
      icon: BarChart3,
      color: "cyan",
      description: "Business intelligence and advanced analytics",
      level: 88,
      skills: [
        "Power BI Development",
        "Tableau",
        "SQL Server Reporting",
        "DAX & MDX",
        "Data Modeling",
        "Statistical Analysis",
        "Machine Learning",
        "Predictive Analytics",
        "KPI Development",
        "Dashboard Design",
      ],
    },
  ];

  const secondarySkills = [
    {
      title: "Full-Stack Development",
      icon: Code,
      color: "purple",
      skills: [
        "React/Next.js",
        "TypeScript",
        "Node.js",
        "Express.js",
        "MongoDB",
        "PostgreSQL",
        "GraphQL",
        "REST APIs",
      ],
    },
    {
      title: "Cloud & DevOps",
      icon: Cloud,
      color: "green",
      skills: [
        "Microsoft Azure",
        "AWS Basics",
        "Docker",
        "Kubernetes",
        "Terraform",
        "GitHub Actions",
        "Azure DevOps",
        "Monitoring",
      ],
    },
    {
      title: "Creative & Design",
      icon: Palette,
      color: "pink",
      skills: [
        "Three.js",
        "WebGL",
        "Figma",
        "Tailwind CSS",
        "GSAP Animations",
        "Design Systems",
        "UI/UX Design",
        "Prototyping",
      ],
    },
  ];

  const getColorClasses = (color: string) => {
    const colorMap: Record<string, any> = {
      indigo: {
        border: "border-indigo-200 dark:border-indigo-800",
        bg: "bg-gradient-to-br from-indigo-50 to-indigo-100 dark:from-indigo-950 dark:to-indigo-900",
        icon: "bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-400",
        title: "text-indigo-700 dark:text-indigo-300",
        badge:
          "bg-indigo-50 text-indigo-700 dark:bg-indigo-900/50 dark:text-indigo-300",
        progress: "bg-indigo-600",
      },
      blue: {
        border: "border-blue-200 dark:border-blue-800",
        bg: "bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900",
        icon: "bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400",
        title: "text-blue-700 dark:text-blue-300",
        badge:
          "bg-blue-50 text-blue-700 dark:bg-blue-900/50 dark:text-blue-300",
        progress: "bg-blue-600",
      },
      cyan: {
        border: "border-cyan-200 dark:border-cyan-800",
        bg: "bg-gradient-to-br from-cyan-50 to-cyan-100 dark:from-cyan-950 dark:to-cyan-900",
        icon: "bg-cyan-100 dark:bg-cyan-900 text-cyan-600 dark:text-cyan-400",
        title: "text-cyan-700 dark:text-cyan-300",
        badge:
          "bg-cyan-50 text-cyan-700 dark:bg-cyan-900/50 dark:text-cyan-300",
        progress: "bg-cyan-600",
      },
      purple: {
        border: "border-purple-200 dark:border-purple-800",
        bg: "bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950 dark:to-purple-900",
        icon: "bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-400",
        title: "text-purple-700 dark:text-purple-300",
        badge:
          "bg-purple-50 text-purple-700 dark:bg-purple-900/50 dark:text-purple-300",
      },
      green: {
        border: "border-green-200 dark:border-green-800",
        bg: "bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950 dark:to-green-900",
        icon: "bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400",
        title: "text-green-700 dark:text-green-300",
        badge:
          "bg-green-50 text-green-700 dark:bg-green-900/50 dark:text-green-300",
      },
      pink: {
        border: "border-pink-200 dark:border-pink-800",
        bg: "bg-gradient-to-br from-pink-50 to-pink-100 dark:from-pink-950 dark:to-pink-900",
        icon: "bg-pink-100 dark:bg-pink-900 text-pink-600 dark:text-pink-400",
        title: "text-pink-700 dark:text-pink-300",
        badge:
          "bg-pink-50 text-pink-700 dark:bg-pink-900/50 dark:text-pink-300",
      },
    };
    return colorMap[color];
  };

  return (
    <section className="relative py-24 px-6 md:px-12 lg:px-20 bg-white dark:bg-gray-900 overflow-hidden">
      <DataParticles />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-gradient-to-r from-indigo-600 to-cyan-600 rounded-2xl shadow-2xl">
              <Zap className="h-12 w-12 text-white" />
            </div>
          </div>
          <h2 className="text-5xl md:text-6xl mb-6 bg-gradient-to-r from-indigo-600 to-cyan-600 bg-clip-text text-transparent">
            Technical Expertise
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Specialized in Azure data engineering with comprehensive full-stack
            development background
          </p>
        </div>

        {/* Primary Skills - Data Engineering Focus */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl mb-4 text-gray-800 dark:text-gray-200">
              Core Data Engineering Expertise
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Enterprise-scale solutions and cloud-native architectures
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {primarySkills.map((category, index) => {
              const colors = getColorClasses(category.color);
              return (
                <Card
                  key={index}
                  className={`border-2 ${colors.border} ${colors.bg} hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group`}
                >
                  <CardHeader className="text-center pb-6">
                    <div className="flex justify-center mb-6">
                      <div
                        className={`p-4 ${colors.icon} rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}
                      >
                        <category.icon className="h-10 w-10" />
                      </div>
                    </div>
                    <CardTitle className={`text-2xl ${colors.title} mb-2`}>
                      {category.title}
                    </CardTitle>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      {category.description}
                    </p>

                    {/* Skill Level Progress */}
                    <div className="mt-4 space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600 dark:text-gray-400">
                          Proficiency
                        </span>
                        <span className={colors.title}>{category.level}%</span>
                      </div>
                      <div className="relative">
                        <Progress value={category.level} className="h-3" />
                        <div
                          className={`absolute top-0 left-0 h-3 ${colors.progress} rounded-full transition-all duration-1000 ease-out`}
                          style={{ width: `${category.level}%` }}
                        ></div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {category.skills.map((skill, skillIndex) => (
                        <Badge
                          key={skillIndex}
                          variant="secondary"
                          className={`${colors.badge} transition-all duration-200 hover:scale-105 text-xs`}
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Secondary Skills */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl mb-4 text-gray-800 dark:text-gray-200">
              Supporting Technologies
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Full-stack development and creative technologies
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {secondarySkills.map((category, index) => {
              const colors = getColorClasses(category.color);
              return (
                <Card
                  key={index}
                  className={`border ${colors.border} hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}
                >
                  <CardHeader className="text-center pb-4">
                    <div className="flex justify-center mb-4">
                      <div className={`p-3 ${colors.icon} rounded-xl`}>
                        <category.icon className="h-8 w-8" />
                      </div>
                    </div>
                    <CardTitle className={`text-xl ${colors.title}`}>
                      {category.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {category.skills.map((skill, skillIndex) => (
                        <Badge
                          key={skillIndex}
                          variant="outline"
                          className={`${colors.badge} border-0 text-xs transition-colors hover:scale-105`}
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Skills Evolution */}
        <div className="text-center">
          <Card className="max-w-4xl mx-auto p-8 bg-gradient-to-r from-indigo-600 to-cyan-600 border-0 text-white shadow-2xl">
            <div className="flex justify-center mb-6">
              <Cpu className="h-16 w-16" />
            </div>
            <h3 className="text-3xl md:text-4xl mb-4">Continuous Innovation</h3>
            <p className="text-xl opacity-90 mb-8 leading-relaxed">
              My journey from MERN stack developer to Azure Data Engineer
              represents a strategic evolution, combining creative
              problem-solving with enterprise-scale data solutions.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                "AI/ML Integration",
                "Advanced Analytics",
                "Real-time Processing",
                "Cloud Architecture",
              ].map((skill, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="px-4 py-2 bg-white/20 text-white border-0 hover:bg-white/30 transition-colors"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
