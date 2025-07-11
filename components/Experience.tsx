import React from "react";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Briefcase, Calendar, TrendingUp, Code, Database } from "lucide-react";

export const Experience: React.FC = () => {
  const experiences = [
    {
      title: "Senior Experience Engineer",
      company: "Publicis Sapient",
      period: "Apr 2022 - Present",
      duration: "3+ years",
      description:
        "Leading enterprise data initiatives, designing scalable ETL pipelines using Azure Data Factory and Synapse Analytics. Implemented real-time streaming solutions processing 50+ TB monthly data volume.",
      technologies: [
        "Azure Data Factory",
        "Synapse Analytics",
        "Databricks",
        "Delta Lake",
        "Event Hubs",
        "Power BI",
      ],
      type: "data-engineering",
      highlight: true,
    },
    // {
    //   title: "Data Engineer",
    //   company: "DataFlow Innovations",
    //   period: "2022 - 2023",
    //   duration: "1 year",
    //   description:
    //     "Transitioned from full-stack development to data engineering. Built automated data pipelines, optimized database performance, and implemented modern data warehouse solutions.",
    //   technologies: [
    //     "Azure SQL",
    //     "Python",
    //     "Apache Spark",
    //     "SSIS",
    //     "Data Factory",
    //     "Azure Functions",
    //   ],
    //   type: "data-engineering",
    //   transition: true,
    // },
    {
      title: "Software Engineer",
      company: "Uimatic",
      period: "Jan 2021 - Mar 2022",
      duration: "1 year",
      description:
        "Led MERN stack development projects, built responsive web applications, and implemented modern DevOps practices. Started exploring cloud technologies and data processing.",
      technologies: [
        "React",
        "Node.js",
        "MongoDB",
        "Express",
        "AWS",
        "Docker",
        "CI/CD",
      ],
      type: "full-stack",
    },
    // {
    //   title: "Full-Stack Developer",
    //   company: "TechStart Inc.",
    //   period: "2020 - 2021",
    //   duration: "1 year",
    //   description:
    //     "Developed scalable web applications using MERN stack, implemented RESTful APIs, and contributed to database design. Gained interest in data-driven applications.",
    //   technologies: [
    //     "JavaScript",
    //     "React",
    //     "Node.js",
    //     "MongoDB",
    //     "Express",
    //     "Git",
    //   ],
    //   type: "full-stack",
    // },
    // {
    //   title: "Junior Developer",
    //   company: "CodeCraft Studio",
    //   period: "2019 - 2020",
    //   duration: "1 year",
    //   description:
    //     "Started career in web development, learned modern JavaScript frameworks, and contributed to various client projects. Foundation in software development principles.",
    //   technologies: [
    //     "HTML/CSS",
    //     "JavaScript",
    //     "React",
    //     "MySQL",
    //     "PHP",
    //     "WordPress",
    //   ],
    //   type: "full-stack",
    // },
  ];

  const getTypeColor = (type: string) => {
    return type === "data-engineering"
      ? "bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200"
      : "bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-200";
  };

  const getTypeIcon = (type: string) => {
    return type === "data-engineering" ? Database : Code;
  };

  const getBorderColor = (exp: any) => {
    if (exp.highlight) return "border-l-indigo-500";
    if (exp.transition) return "border-l-purple-500";
    return "border-l-cyan-500";
  };

  return (
    <section className="py-24 px-6 md:px-12 lg:px-20 bg-white dark:bg-gray-900">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4 bg-gradient-to-r from-indigo-600 to-cyan-600 bg-clip-text text-transparent">
            Professional Journey
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            From full-stack development to Azure data engineering - a journey of
            continuous learning and specialization
          </p>
        </div>

        {/* Career Progression Summary */}
        <div className="mb-16">
          <Card className="p-8 bg-gradient-to-r from-indigo-50 to-cyan-50 dark:from-indigo-950/30 dark:to-cyan-950/30 border-0">
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="space-y-2">
                <div className="flex justify-center">
                  <TrendingUp className="h-8 w-8 text-indigo-600" />
                </div>
                <h3 className="text-2xl text-gray-800 dark:text-gray-200">
                  5+ Years
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Total Experience
                </p>
              </div>
              <div className="space-y-2">
                <div className="flex justify-center">
                  <Database className="h-8 w-8 text-indigo-600" />
                </div>
                <h3 className="text-2xl text-gray-800 dark:text-gray-200">
                  3+ Years
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Azure Data Engineering
                </p>
              </div>
              <div className="space-y-2">
                <div className="flex justify-center">
                  <Code className="h-8 w-8 text-cyan-600" />
                </div>
                <h3 className="text-2xl text-gray-800 dark:text-gray-200">
                  2+ Years
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Full-Stack Development
                </p>
              </div>
            </div>
          </Card>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-indigo-500 via-purple-500 to-cyan-500 rounded-full"></div>

          <div className="space-y-12">
            {experiences.map((exp: any, index) => {
              const TypeIcon = getTypeIcon(exp.type);
              return (
                <div key={index} className="relative flex items-start">
                  {/* Timeline dot */}
                  <div
                    className={`absolute left-6 w-6 h-6 rounded-full border-4 border-white dark:border-gray-900 z-10 ${
                      exp.highlight
                        ? "bg-indigo-500"
                        : exp?.transition
                        ? "bg-purple-500"
                        : "bg-cyan-500"
                    } shadow-lg`}
                  >
                    {exp.highlight && (
                      <div className="absolute inset-0 rounded-full bg-indigo-500 animate-ping opacity-20"></div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="ml-16 w-full">
                    <Card
                      className={`hover:shadow-xl transition-all duration-300 border-l-4 ${getBorderColor(
                        exp
                      )} ${
                        exp.highlight
                          ? "bg-gradient-to-r from-indigo-50/50 to-transparent dark:from-indigo-950/30"
                          : ""
                      }`}
                    >
                      <CardContent className="p-8">
                        <div className="flex flex-wrap items-start justify-between mb-6">
                          <div className="space-y-2">
                            <div className="flex items-center space-x-3">
                              <h3 className="text-2xl text-gray-800 dark:text-gray-200">
                                {exp.title}
                              </h3>
                              {exp.highlight && (
                                <Badge className="bg-indigo-600 text-white">
                                  Current
                                </Badge>
                              )}
                              {exp?.transition && (
                                <Badge className="bg-purple-600 text-white">
                                  Career Pivot
                                </Badge>
                              )}
                            </div>
                            <p className="text-xl text-gray-600 dark:text-gray-400">
                              {exp.company}
                            </p>
                            <div className="flex items-center space-x-4 text-sm text-gray-500">
                              <div className="flex items-center">
                                <Calendar className="h-4 w-4 mr-1" />
                                {exp.period}
                              </div>
                              <div className="flex items-center">
                                <Briefcase className="h-4 w-4 mr-1" />
                                {exp.duration}
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center space-x-2">
                            <TypeIcon className="h-5 w-5 text-gray-500" />
                            <Badge className={getTypeColor(exp.type)}>
                              {exp.type === "data-engineering"
                                ? "Data Engineering"
                                : "Full-Stack"}
                            </Badge>
                          </div>
                        </div>

                        <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed text-lg">
                          {exp.description}
                        </p>

                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech: any, techIndex: any) => (
                            <Badge
                              key={techIndex}
                              variant="outline"
                              className="text-sm border-gray-300 dark:border-gray-600"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Career Evolution Note */}
        <div className="mt-16 text-center">
          <Card className="max-w-3xl mx-auto p-8 bg-gradient-to-r from-gray-50 to-indigo-50 dark:from-gray-800 dark:to-indigo-950/30 border-0">
            <h3 className="text-2xl mb-4 text-gray-800 dark:text-gray-200">
              The Evolution Story
            </h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              My transition from full-stack development to Azure data
              engineering wasn't just a career change—it was a natural
              evolution. The problem-solving skills, system thinking, and
              technical foundation from MERN development provided the perfect
              springboard into the world of data engineering, where I now
              combine both skill sets to build comprehensive data solutions.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};
