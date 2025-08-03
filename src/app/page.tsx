"use client";
import React, { createContext, useContext, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Compass3D } from "@/components/compass-3d";
import { ProjectCard } from "@/components/project-card";
import {
  Star,
  Github,
  Code,
  Users,
  Award,
  TrendingUp,
  Heart,
} from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { Project } from "@/types/project";

export default function Home() {
  // Fetch featured projects from JSON file
  const { data: allProjects = [] } = useQuery({
    queryKey: ["projects"],
    queryFn: async (): Promise<Project[]> => {
      const response = await fetch("/data/projects.json");
      if (!response.ok) throw new Error("Failed to fetch projects");
      return response.json();
    },
  });

  // Filter featured projects
  const featuredProjects = allProjects.filter((project) => project.featured);

  const stats = [
    { value: "50k+", label: "Active Developers", icon: Users },
    { value: "25+", label: "Open Source Tools", icon: Code },
    { value: "100k+", label: "GitHub Stars", icon: Star },
    { value: "95%", label: "Developer Satisfaction", icon: Award },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-blue via-gray-800 to-navy-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="space-y-4">
                <Badge className="bg-blue-accent/20 text-blue-accent border-blue-accent/30 px-4 py-2">
                  <Star className="w-4 h-4 mr-2" />
                  Open Source Excellence
                </Badge>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                  Navigate Your{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-accent to-professional-blue">
                    Development Journey
                  </span>
                </h1>
                <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
                  Professional open-source organization building innovative free
                  & premium software tools for developers and students
                  worldwide.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/projects">
                  <Button
                    size="lg"
                    className="bg-blue-accent hover:bg-blue-600 text-white px-8 py-4 text-lg font-semibold"
                  >
                    Browse Projects
                  </Button>
                </Link>
                <Link href="/mission">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 text-lg font-semibold"
                  >
                    Get Started
                  </Button>
                </Link>
              </div>

              <div className="flex items-center space-x-8 text-sm text-gray-300">
                <div className="flex items-center space-x-2">
                  <Github className="w-5 h-5 text-blue-accent" />
                  <span>Open Source</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Star className="w-5 h-5 text-blue-accent" />
                  <span>Free & Premium</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Code className="w-5 h-5 text-blue-accent" />
                  <span>Developer Tools</span>
                </div>
              </div>
            </motion.div>

            {/* 3D Compass Visualization */}
            <motion.div
              className="flex justify-center lg:justify-end"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <Compass3D />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Tools Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Featured Developer Tools
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Discover our most popular free and premium tools designed to
              accelerate your development workflow
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredProjects.length > 0 ? (
              featuredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <ProjectCard project={project} />
                </motion.div>
              ))
            ) : allProjects.length === 0 ? (
              // Loading state
              <div className="col-span-full text-center py-12">
                <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-accent mb-4"></div>
                <h3 className="text-xl font-semibold text-gray-600 dark:text-gray-400 mb-2">
                  Loading Featured Projects...
                </h3>
                <p className="text-gray-500 dark:text-gray-500">
                  Discovering our best developer tools for you.
                </p>
              </div>
            ) : (
              // No featured projects but projects exist
              <div className="col-span-full text-center py-12">
                <Code className="w-16 h-16 text-gray-400 dark:text-gray-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-600 dark:text-gray-400 mb-2">
                  No Featured Projects Yet
                </h3>
                <p className="text-gray-500 dark:text-gray-500 mb-4">
                  We have great tools available, but none are currently
                  featured.
                </p>
                <Link href="/projects">
                  <Button className="bg-blue-accent hover:bg-blue-600 text-white">
                    View All Projects
                  </Button>
                </Link>
              </div>
            )}
          </div>

          <motion.div
            className="text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <Link href="/projects">
              <Button
                size="lg"
                className="bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-100"
              >
                View All Projects
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Community & Stats Section */}
      {/* <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="space-y-4">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white">
                  Join Our Growing Community
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                  Connect with thousands of developers worldwide who trust
                  CodeCompass for their development needs. From students to
                  enterprise teams, our tools scale with your ambitions.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-8">
                {stats.map(({ value, label, icon: Icon }, index) => (
                  <motion.div
                    key={label}
                    className="text-center lg:text-left"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="flex items-center justify-center lg:justify-start mb-2">
                      <Icon className="w-6 h-6 text-blue-accent mr-2" />
                      <div className="text-3xl lg:text-4xl font-bold text-blue-accent">
                        {value}
                      </div>
                    </div>
                    <div className="text-gray-600 dark:text-gray-300">
                      {label}
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-blue-accent hover:bg-blue-600 text-white">
                  <Users className="w-4 h-4 mr-2" />
                  Join Community
                </Button>
                <Button
                  variant="outline"
                  className="border-gray-300 dark:border-gray-600"
                >
                  Documentation
                </Button>
              </div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
                alt="Modern developer workspace with multiple monitors"
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-accent/20 to-transparent rounded-2xl"></div>
            </motion.div>
          </div>
        </div>
      </section> */}
      
    </div>
  );
}
