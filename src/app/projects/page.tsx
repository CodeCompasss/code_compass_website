"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ProjectCard } from "@/components/project-card";
import { useQuery } from "@tanstack/react-query";
import { Project } from "@/types/project";
import { Code, Filter } from "lucide-react";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<
    "all" | "developer" | "student"
  >("all");

  // Fetch projects from JSON file
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  const { data: projects = [], isLoading } = useQuery({
    queryKey: ["projects"],
    queryFn: async (): Promise<Project[]> => {
      const response = await fetch(`${basePath}/data/projects.json`);
      if (!response.ok) throw new Error("Failed to fetch projects");
      return response.json();
    },
  });

  // Map filter keys to display and filter logic
  const filterMap = {
    all: () => true,
    developer: (project: Project) => project.category === "developer",
    student: (project: Project) => project.category === "student",
  };

  const filteredProjects = projects.filter(filterMap[activeFilter]);

  const filters = [
    { key: "all" as const, label: "All Projects" },
    { key: "developer" as const, label: "Software Developer" },
    { key: "student" as const, label: "College Student" },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-800">
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Our Developer Tools
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Explore our comprehensive collection of free and premium tools
              designed to enhance your development workflow
            </p>
          </motion.div>

          {/* Filter Tabs */}
          <motion.div
            className="flex justify-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="bg-gray-100 dark:bg-gray-700 p-1 rounded-xl">
              {filters.map(({ key, label }) => (
                <Button
                  key={key}
                  variant={activeFilter === key ? "default" : "ghost"}
                  className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                    activeFilter === key
                      ? "bg-white dark:bg-gray-600 text-gray-900 dark:text-white shadow-sm"
                      : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                  }`}
                  onClick={() => setActiveFilter(key)}
                >
                  {key !== "all" && <Filter className="w-4 h-4 mr-2" />}
                  {label}
                </Button>
              ))}
            </div>
          </motion.div>

          {/* Projects Grid */}
          {isLoading ? (
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-accent"></div>
              <p className="mt-4 text-gray-600 dark:text-gray-400">
                Loading projects...
              </p>
            </div>
          ) : filteredProjects.length > 0 ? (
            <>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <ProjectCard project={project} />
                  </motion.div>
                ))}
              </div>
            </>
          ) : (
            // Empty state
            <motion.div
              className="text-center py-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <Code className="w-24 h-24 text-gray-400 dark:text-gray-600 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-gray-600 dark:text-gray-400 mb-4">
                {activeFilter === "all"
                  ? "No Projects Available"
                  : activeFilter === "developer"
                  ? "No Software Developer Projects Available"
                  : "No College Student Projects Available"}
              </h3>
              <p className="text-gray-500 dark:text-gray-500 max-w-md mx-auto mb-8">
                {activeFilter === "all"
                  ? "Projects will appear here once GitHub integration is configured with a valid organization or user."
                  : activeFilter === "developer"
                  ? `We don't have any software developer projects available at the moment. Check back later or try a different filter.`
                  : `We don't have any college student projects available at the moment. Check back later or try a different filter.`}
              </p>
              {activeFilter !== "all" && (
                <Button
                  onClick={() => setActiveFilter("all")}
                  className="bg-blue-accent hover:bg-blue-600 text-white"
                >
                  View All Projects
                </Button>
              )}
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
}
