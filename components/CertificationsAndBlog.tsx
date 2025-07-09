import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import {
  ExternalLink,
  Calendar,
  Award,
  BookOpen,
  Clock,
  TrendingUp,
  Users,
  Eye,
  Star,
  ChevronRight,
} from "lucide-react";
import { ImageWithFallback } from "./ImageWithFallback";

export const CertificationsAndBlog: React.FC = () => {
  const certifications = [
    {
      title: "Microsoft Azure Data Engineer Associate",
      issuer: "Microsoft",
      code: "DP-203",
      date: "2023",
      credentialId: "H123-4567-8901",
      verifyUrl:
        "https://learn.microsoft.com/en-us/users/baljeetjangra/credentials",
      level: "Associate",
      status: "Active",
      color: "from-blue-500 to-indigo-600",
    },
    {
      title: "Azure Data Fundamentals",
      issuer: "Microsoft",
      code: "DP-900",
      date: "2022",
      credentialId: "F234-5678-9012",
      verifyUrl:
        "https://learn.microsoft.com/en-us/users/baljeetjangra/credentials",
      level: "Fundamentals",
      status: "Active",
      color: "from-cyan-500 to-blue-600",
    },
    {
      title: "Azure Fundamentals",
      issuer: "Microsoft",
      code: "AZ-900",
      date: "2022",
      credentialId: "A345-6789-0123",
      verifyUrl:
        "https://learn.microsoft.com/en-us/users/baljeetjangra/credentials",
      level: "Fundamentals",
      status: "Active",
      color: "from-indigo-500 to-purple-600",
    },
    {
      title: "Professional Data Engineer",
      issuer: "Google Cloud",
      code: "GCP-PDE",
      date: "2023",
      credentialId: "G456-7890-1234",
      verifyUrl: "https://www.credential.net/profile/baljeetjangra/wallet",
      level: "Professional",
      status: "Active",
      color: "from-green-500 to-teal-600",
    },
  ];

  const blogPosts = [
    {
      title: "Building Real-time Data Pipelines with Azure Stream Analytics",
      excerpt:
        "A comprehensive guide to implementing scalable real-time data processing solutions using Azure Stream Analytics and Event Hubs.",
      readTime: "8 min read",
      publishDate: "2024-01-15",
      views: "12.5K",
      category: "Azure Data Engineering",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=300&fit=crop",
      url: "https://blog.baljeetjangra.com/real-time-pipelines",
      featured: true,
    },
    {
      title: "Delta Lake vs Traditional Data Warehouses: A Complete Comparison",
      excerpt:
        "Exploring the advantages of Delta Lake architecture over traditional data warehousing solutions for modern analytics.",
      readTime: "12 min read",
      publishDate: "2024-01-02",
      views: "8.2K",
      category: "Data Architecture",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=300&fit=crop",
      url: "https://blog.baljeetjangra.com/delta-lake-comparison",
    },
    {
      title: "Optimizing Databricks Clusters for Cost and Performance",
      excerpt:
        "Best practices for configuring and managing Databricks clusters to achieve optimal performance while controlling costs.",
      readTime: "10 min read",
      publishDate: "2023-12-18",
      views: "15.7K",
      category: "Performance Optimization",
      image:
        "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=600&h=300&fit=crop",
      url: "https://blog.baljeetjangra.com/databricks-optimization",
    },
    {
      title: "From MERN to Azure: My Data Engineering Journey",
      excerpt:
        "Personal insights on transitioning from full-stack development to data engineering and lessons learned along the way.",
      readTime: "6 min read",
      publishDate: "2023-12-01",
      views: "9.8K",
      category: "Career Journey",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=300&fit=crop",
      url: "https://blog.baljeetjangra.com/career-transition",
    },
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Professional":
        return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200";
      case "Associate":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200";
      case "Fundamentals":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200";
    }
  };

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      "Azure Data Engineering":
        "bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200",
      "Data Architecture":
        "bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-200",
      "Performance Optimization":
        "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
      "Career Journey":
        "bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200",
    };
    return (
      colors[category] ||
      "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200"
    );
  };

  return (
    <section className="py-24 px-6 md:px-12 lg:px-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl shadow-2xl">
              <Award className="h-12 w-12 text-white" />
            </div>
          </div>
          <h2 className="text-5xl md:text-6xl mb-6 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
            Credentials & Insights
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Professional certifications and thought leadership in data
            engineering and cloud technologies
          </p>
        </div>

        {/* Certifications Section */}
        <div className="mb-24">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h3 className="text-3xl md:text-4xl mb-2 text-gray-800 dark:text-gray-200">
                Professional Certifications
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                Industry-recognized credentials and expertise validation
              </p>
            </div>
            <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 px-4 py-2">
              {certifications.length} Active Certifications
            </Badge>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-l-4 border-l-blue-500"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <div
                        className={`p-3 bg-gradient-to-r ${cert.color} rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300`}
                      >
                        <Award className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <Badge className={getLevelColor(cert.level)}>
                          {cert.level}
                        </Badge>
                        <Badge variant="outline" className="ml-2 text-xs">
                          {cert.code}
                        </Badge>
                      </div>
                    </div>
                    <div className="text-right">
                      <Badge className="bg-green-50 text-green-700 dark:bg-green-900/30 dark:text-green-300">
                        {cert.status}
                      </Badge>
                    </div>
                  </div>

                  <CardTitle className="text-xl text-gray-800 dark:text-gray-200 leading-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {cert.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 dark:text-gray-400">
                    {cert.issuer} • Issued {cert.date}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="space-y-3">
                    <div className="text-sm text-gray-500 dark:text-gray-500">
                      <span className="font-medium">Credential ID:</span>{" "}
                      {cert.credentialId}
                    </div>

                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full justify-between group-hover:bg-blue-50 dark:group-hover:bg-blue-900/30 transition-colors"
                      asChild
                    >
                      <a
                        href={cert.verifyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span className="flex items-center">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Verify Credential
                        </span>
                        <ChevronRight className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Blog Section */}
        <div>
          <div className="flex items-center justify-between mb-12">
            <div>
              <h3 className="text-3xl md:text-4xl mb-2 text-gray-800 dark:text-gray-200">
                Latest Blog Posts
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                Sharing knowledge and insights from the data engineering world
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <BookOpen className="h-5 w-5 text-gray-500" />
              <span className="text-sm text-gray-500">45K+ total reads</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {blogPosts.map((post, index) => (
              <Card
                key={index}
                className={`group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden ${
                  post.featured
                    ? "ring-2 ring-orange-200 dark:ring-orange-800"
                    : ""
                }`}
              >
                {post.featured && (
                  <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 text-sm flex items-center">
                    <Star className="h-4 w-4 mr-2" />
                    Featured Post
                  </div>
                )}

                <div className="relative overflow-hidden">
                  <ImageWithFallback
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className={getCategoryColor(post.category)}>
                      {post.category}
                    </Badge>
                  </div>
                </div>

                <CardHeader>
                  <CardTitle className="text-xl text-gray-800 dark:text-gray-200 leading-tight group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors line-clamp-2">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 dark:text-gray-400 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-500 mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {new Date(post.publishDate).toLocaleDateString(
                          "en-US",
                          {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                          }
                        )}
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {post.readTime}
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Eye className="h-4 w-4 mr-1" />
                      {post.views}
                    </div>
                  </div>

                  <Button
                    variant="outline"
                    className="w-full justify-between group-hover:bg-orange-50 dark:group-hover:bg-orange-900/30 transition-colors"
                    asChild
                  >
                    <a
                      href={post.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span>Read Article</span>
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Blog Stats & CTA */}
          <div className="mt-16 text-center">
            <Card className="max-w-4xl mx-auto p-12 bg-gradient-to-r from-orange-600 to-red-600 border-0 text-white shadow-2xl">
              <div className="flex justify-center mb-6">
                <TrendingUp className="h-16 w-16" />
              </div>
              <h3 className="text-3xl md:text-4xl mb-4">
                Join the Data Engineering Community
              </h3>
              <p className="text-xl opacity-90 mb-8 leading-relaxed">
                Follow my blog for in-depth tutorials, best practices, and
                insights from real-world data engineering projects. New posts
                published weekly.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-8">
                <div className="text-center">
                  <div className="text-2xl">45K+</div>
                  <div className="text-sm opacity-80">Total Reads</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl">2.5K+</div>
                  <div className="text-sm opacity-80">Subscribers</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl">4.8★</div>
                  <div className="text-sm opacity-80">Average Rating</div>
                </div>
              </div>
              <Button
                variant="secondary"
                size="lg"
                className="bg-white/20 hover:bg-white/30 text-white border-0 backdrop-blur-sm px-8 py-3"
              >
                <Users className="h-5 w-5 mr-2" />
                Subscribe to Newsletter
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
