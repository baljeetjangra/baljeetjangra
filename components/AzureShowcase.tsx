import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { CloudNetwork } from "./CloudNetwork";
import {
  Database,
  Cloud,
  Zap,
  BarChart3,
  GitBranch,
  Shield,
  Layers,
  Activity,
  TrendingUp,
  Server,
  Workflow,
  Clock,
} from "lucide-react";
import { Progress } from "./ui/progress";

export const AzureShowcase: React.FC = () => {
  const azureServices = [
    { name: "Azure Data Factory", level: 95, icon: Workflow, projects: 25 },
    { name: "Synapse Analytics", level: 90, icon: BarChart3, projects: 18 },
    { name: "Databricks", level: 85, icon: Zap, projects: 15 },
    { name: "Delta Lake", level: 90, icon: Database, projects: 20 },
    { name: "Azure SQL", level: 95, icon: Server, projects: 30 },
    { name: "ADLS Gen2", level: 88, icon: Cloud, projects: 22 },
  ];

  const pipelineStats = [
    {
      label: "Data Pipelines Built",
      value: "15+",
      icon: GitBranch,
      color: "text-blue-600",
    },
    {
      label: "TB of Data Processed",
      value: "50+",
      icon: Database,
      color: "text-indigo-600",
    },
    {
      label: "ETL Processes",
      value: "20+",
      icon: Workflow,
      color: "text-cyan-600",
    },
    {
      label: "Real-time Streams",
      value: "5+",
      icon: Activity,
      color: "text-purple-600",
    },
  ];

  const architectureFeatures = [
    {
      title: "Real-time Data Processing",
      description:
        "Event-driven architectures using Azure Event Hubs and Stream Analytics for millisecond latency processing.",
      icon: Activity,
      technologies: [
        "Event Hubs",
        "Stream Analytics",
        "Kafka",
        "Real-time Processing",
      ],
    },
    {
      title: "Scalable ETL Pipelines",
      description:
        "Automated data transformation workflows handling petabyte-scale datasets with fault tolerance.",
      icon: Layers,
      technologies: ["Data Factory", "SSIS", "Databricks", "Spark Clusters"],
    },
    {
      title: "Data Lake Architecture",
      description:
        "Modern data lake solutions with Delta Lake for ACID transactions and time travel capabilities.",
      icon: Database,
      technologies: ["ADLS Gen2", "Delta Lake", "Parquet", "Data Catalog"],
    },
    {
      title: "Security & Compliance",
      description:
        "Enterprise-grade security with role-based access, encryption, and audit trails for compliance.",
      icon: Shield,
      technologies: [
        "Azure AD",
        "Key Vault",
        "Private Endpoints",
        "Compliance",
      ],
    },
  ];

  return (
    <section className="relative py-24 px-6 md:px-12 lg:px-20 bg-gradient-to-br from-gray-50 to-indigo-50 dark:from-gray-900 dark:to-indigo-950 overflow-hidden">
      <CloudNetwork />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-gradient-to-r from-indigo-600 to-cyan-600 rounded-2xl shadow-2xl">
              <Cloud className="h-12 w-12 text-white" />
            </div>
          </div>
          <h2 className="text-5xl md:text-6xl mb-6 bg-gradient-to-r from-indigo-600 to-cyan-600 bg-clip-text text-transparent">
            Azure Data Engineering
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Specialized in building robust, scalable data solutions that power
            business intelligence and machine learning initiatives across
            enterprise environments.
          </p>
        </div>

        {/* Pipeline Statistics */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {pipelineStats.map((stat, index) => (
            <Card
              key={index}
              className="text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm"
            >
              <CardContent className="p-8">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-gradient-to-br from-indigo-100 to-cyan-100 dark:from-indigo-900 dark:to-cyan-900 rounded-xl">
                    <stat.icon className={`h-8 w-8 ${stat.color}`} />
                  </div>
                </div>
                <div className="text-3xl md:text-4xl mb-2 bg-gradient-to-r from-indigo-600 to-cyan-600 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {stat.label}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Azure Services Expertise */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl mb-4 text-gray-800 dark:text-gray-200">
              Azure Services Expertise
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Deep proficiency across the Microsoft Azure data platform
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {azureServices.map((service, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-lg transition-all duration-300 border-l-4 border-l-indigo-500 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-indigo-100 dark:bg-indigo-900 rounded-lg">
                      <service.icon className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                    </div>
                    <div>
                      <h4 className="text-lg text-gray-800 dark:text-gray-200">
                        {service.name}
                      </h4>
                      {/* <p className="text-sm text-gray-500">
                        {service.projects} projects
                      </p> */}
                    </div>
                  </div>
                  <Badge
                    variant="secondary"
                    className="bg-indigo-50 text-indigo-700 dark:bg-indigo-900 dark:text-indigo-300"
                  >
                    {service.level}%
                  </Badge>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600 dark:text-gray-400">
                      Proficiency
                    </span>
                    <span className="text-gray-800 dark:text-gray-200">
                      {service.level}%
                    </span>
                  </div>
                  <Progress value={service.level} className="h-2" />
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Architecture Capabilities */}
        <div>
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl mb-4 text-gray-800 dark:text-gray-200">
              Architecture Capabilities
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              End-to-end data solutions from ingestion to insights
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {architectureFeatures.map((feature, index) => (
              <Card
                key={index}
                className="p-8 hover:shadow-xl transition-all duration-300 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm"
              >
                <CardHeader className="p-0 mb-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-gradient-to-br from-indigo-500 to-cyan-500 rounded-xl">
                      <feature.icon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-xl text-gray-800 dark:text-gray-200 mb-2">
                        {feature.title}
                      </CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-0">
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                    {feature.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {feature.technologies.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="outline"
                        className="border-indigo-200 dark:border-indigo-700 text-indigo-700 dark:text-indigo-300"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center">
          <Card className="max-w-4xl mx-auto p-12 bg-gradient-to-r from-indigo-600 to-cyan-600 border-0 text-white shadow-2xl">
            <div className="flex justify-center mb-6">
              <TrendingUp className="h-16 w-16" />
            </div>
            <h3 className="text-3xl md:text-4xl mb-4">
              Ready to Transform Your Data Strategy?
            </h3>
            <p className="text-xl opacity-90 mb-8 leading-relaxed">
              Let&apos;s discuss how Azure data solutions can unlock insights
              and drive innovation for your organization.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge
                variant="secondary"
                className="px-4 py-2 bg-white/20 text-white border-0"
              >
                <Clock className="h-4 w-4 mr-2" />
                Quick Turnaround
              </Badge>
              <Badge
                variant="secondary"
                className="px-4 py-2 bg-white/20 text-white border-0"
              >
                <Shield className="h-4 w-4 mr-2" />
                Enterprise Security
              </Badge>
              <Badge
                variant="secondary"
                className="px-4 py-2 bg-white/20 text-white border-0"
              >
                <Zap className="h-4 w-4 mr-2" />
                Scalable Solutions
              </Badge>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
