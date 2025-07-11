import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";
import { CodeMatrix } from "./CodeMatrix";
import { Database, Globe, Chrome, Activity } from "lucide-react";

export const Projects: React.FC = () => {
  const projects = [
    {
      title: "Azure Financial Data Pipeline",
      description:
        "Enterprise-scale real-time financial data processing pipeline using Azure Data Factory, Synapse Analytics, and Delta Lake for automated reporting and regulatory compliance.",
      longDescription:
        "Built a comprehensive data pipeline processing over 10 million transactions daily with real-time fraud detection and automated compliance reporting.",
      techStack: [
        "Azure Data Factory",
        "Synapse Analytics",
        "Delta Lake",
        "Azure SQL",
        "Power BI",
        "Event Hubs",
      ],
      github: "https://github.com/baljeet/azure-financial-pipeline",
      demo: null,
      gradient: "from-blue-500 to-indigo-600",
      icon: Database,
      category: "Data Engineering",
      scale: "Enterprise",
      metrics: [
        "10M+ transactions/day",
        "99.9% uptime",
        "Real-time processing",
      ],
    },
    {
      title: "Azure Healthcare ETL with Synapse & Delta",
      description:
        "HIPAA-compliant healthcare data ETL solution processing patient records and medical data with advanced security features and audit trails.",
      longDescription:
        "Implemented secure data processing for healthcare records with automated anonymization and compliance monitoring.",
      techStack: [
        "Azure Synapse",
        "Delta Lake",
        "Databricks",
        "Azure Security",
        "Apache Spark",
        "FHIR",
      ],
      github: "https://github.com/baljeet/healthcare-etl",
      demo: null,
      gradient: "from-green-500 to-teal-600",
      icon: Activity,
      category: "Data Engineering",
      scale: "Healthcare",
      metrics: ["HIPAA compliant", "500K+ records", "Automated anonymization"],
    },
    {
      title: "Full-stack Task Management App",
      description:
        "Modern task management application with real-time collaboration, advanced analytics, and AI-powered insights for team productivity optimization.",
      longDescription:
        "Built with MERN stack featuring real-time collaboration, advanced analytics dashboard, and machine learning-powered task prioritization.",
      techStack: [
        "React",
        "Node.js",
        "MongoDB",
        "Express",
        "Socket.io",
        "Tailwind CSS",
        "ML.js",
      ],
      github: "https://github.com/baljeet/task-management",
      demo: "https://task-management-demo.vercel.app",
      gradient: "from-purple-500 to-pink-600",
      icon: Globe,
      category: "Full-Stack",
      scale: "SaaS",
      metrics: ["1000+ users", "Real-time sync", "AI insights"],
    },
    {
      title: "Chrome Extension for Productivity",
      description:
        "Advanced productivity Chrome extension with AI-powered time tracking, intelligent website blocking, and detailed analytics dashboard.",
      longDescription:
        "Comprehensive productivity suite with machine learning algorithms for habit analysis and productivity optimization.",
      techStack: [
        "JavaScript",
        "Chrome APIs",
        "React",
        "IndexedDB",
        "Manifest V3",
        "TensorFlow.js",
      ],
      github: "https://github.com/baljeet/productivity-extension",
      demo: "https://chrome.google.com/webstore/detail/productivity-ext",
      gradient: "from-orange-500 to-red-600",
      icon: Chrome,
      category: "Browser Extension",
      scale: "Consumer",
      metrics: [
        // "50K+ downloads",
        "4.8★ rating",
        "AI-powered",
      ],
    },
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Data Engineering":
        return "bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200";
      case "Full-Stack":
        return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200";
      case "Browser Extension":
        return "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200";
    }
  };

  return (
    <section className="relative py-24 px-6 md:px-12 lg:px-20 bg-gray-50 dark:bg-gray-800 overflow-hidden">
      <CodeMatrix />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl shadow-2xl">
              <Database className="h-12 w-12 text-white" />
            </div>
          </div>
          <h2 className="text-5xl md:text-6xl mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Showcase of enterprise data solutions and full-stack applications
            that solve real-world problems
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-xl bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm transform hover:-translate-y-2"
              >
                <div
                  className={`h-2 bg-gradient-to-r ${project.gradient} rounded-t-lg`}
                ></div>

                <CardHeader className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-4">
                      <div
                        className={`p-3 bg-gradient-to-r ${project.gradient} rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300`}
                      >
                        <IconComponent className="h-8 w-8 text-white" />
                      </div>
                      <div>
                        <div className="flex items-center space-x-2 mb-2">
                          <Badge className={getCategoryColor(project.category)}>
                            {project.category}
                          </Badge>
                          <Badge variant="outline" className="text-xs">
                            {project.scale}
                          </Badge>
                        </div>
                        <CardTitle className="text-2xl text-gray-800 dark:text-gray-200 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-600 group-hover:bg-clip-text transition-all duration-300">
                          {project.title}
                        </CardTitle>
                      </div>
                    </div>
                  </div>

                  <CardDescription className="text-gray-600 dark:text-gray-400 leading-relaxed text-base mb-4">
                    {project.description}
                  </CardDescription>

                  <div className="text-sm text-gray-500 dark:text-gray-500 leading-relaxed mb-6">
                    {project.longDescription}
                  </div>

                  {/* Project Metrics */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.metrics.map((metric, metricIndex) => (
                      <Badge
                        key={metricIndex}
                        variant="secondary"
                        className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs"
                      >
                        {metric}
                      </Badge>
                    ))}
                  </div>
                </CardHeader>

                <CardContent className="p-8 pt-0">
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.techStack.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="outline"
                        className="border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* <div className="flex gap-3">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex items-center gap-2 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300"
                      asChild
                    >
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="h-4 w-4" />
                        Source Code
                      </a>
                    </Button>
                    {project.demo && (
                      <Button
                        variant="default"
                        size="sm"
                        className={`flex items-center gap-2 bg-gradient-to-r ${project.gradient} hover:opacity-90 transition-all duration-300 text-white border-0 shadow-lg hover:shadow-xl`}
                        asChild
                      >
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="h-4 w-4" />
                          Live Demo
                        </a>
                      </Button>
                    )}
                  </div> */}
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center">
          <Card className="max-w-4xl mx-auto p-12 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 border-0 text-white shadow-2xl">
            <h3 className="text-3xl md:text-4xl mb-4">
              Ready to Build Something Amazing?
            </h3>
            <p className="text-xl opacity-90 mb-8 leading-relaxed">
              Let&apos;s collaborate on your next data engineering or full-stack
              development project. From concept to deployment, I bring
              enterprise-scale expertise and creative solutions.
            </p>
            {/* <div className="flex flex-wrap justify-center gap-4">
              <Button
                variant="secondary"
                size="lg"
                className="bg-white/20 hover:bg-white/30 text-white border-0 backdrop-blur-sm px-8 py-3"
              >
                Start a Project
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white/30 hover:bg-white/10 text-white px-8 py-3"
              >
                View All Projects
              </Button>
            </div> */}
          </Card>
        </div>
      </div>
    </section>
  );
};
