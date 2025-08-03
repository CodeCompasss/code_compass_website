'use client';
import { motion } from 'framer-motion';
import { TeamMemberCard } from '@/components/team-member-card';
import { useQuery } from '@tanstack/react-query';
import { Star, Github, Code, Users } from 'lucide-react';
import { TeamMember } from '@/types/project';

export default function Mission() {
  // Fetch team members from JSON file
  const { data: teamMembers = [], isLoading: teamLoading } = useQuery({
    queryKey: ['team'],
    queryFn: async (): Promise<TeamMember[]> => {
      const response = await fetch('/data/team.json');
      if (!response.ok) throw new Error('Failed to fetch team data');
      return response.json();
    },
  });

  const missionPoints = [
    {
      icon: Star,
      title: 'Innovation First',
      description: 'We pioneer cutting-edge development tools that solve real-world problems, always staying ahead of industry trends and developer needs.',
      color: 'blue-accent',
    },
    {
      icon: Github,
      title: 'Open Source Values',
      description: 'We believe in transparent, collaborative development that builds trust and fosters community-driven innovation across the globe.',
      color: 'professional-blue',
    },
    {
      icon: Code,
      title: 'Developer Experience',
      description: 'Every tool we create prioritizes exceptional user experience, comprehensive documentation, and seamless integration workflows.',
      color: 'blue-accent',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Mission Section */}
      <section className="py-20 bg-gradient-to-br from-slate-blue via-gray-800 to-navy-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Our Mission & Vision
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Empowering developers worldwide with innovative, accessible tools that accelerate software development and foster collaborative open-source communities.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="space-y-6">
                {missionPoints.map(({ icon: Icon, title, description, color }, index) => (
                  <motion.div 
                    key={title}
                    className="flex items-start space-x-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                  >
                    <div className={`w-12 h-12 bg-${color} rounded-xl flex items-center justify-center flex-shrink-0 mt-1`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-3">{title}</h3>
                      <p className="text-gray-300 leading-relaxed">{description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&w=800&h=600&fit=crop" 
                alt="Diverse software development team collaborating"
                className="rounded-2xl shadow-2xl w-full h-auto" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-accent/20 to-transparent rounded-2xl"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Passionate developers, designers, and innovators working together to build the future of development tools
            </p>
          </motion.div>

          {teamLoading ? (
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-accent"></div>
              <p className="mt-4 text-gray-600 dark:text-gray-400">Loading team members...</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.length > 0 ? (
                teamMembers.map((member, index) => (
                  <motion.div
                    key={member.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <TeamMemberCard member={member} />
                  </motion.div>
                ))
              ) : (
                <motion.div 
                  className="col-span-full text-center py-16"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <Users className="w-24 h-24 text-gray-400 dark:text-gray-600 mx-auto mb-6" />
                  <h3 className="text-2xl font-bold text-gray-600 dark:text-gray-400 mb-4">
                    Team Information Unavailable
                  </h3>
                  <p className="text-gray-500 dark:text-gray-500 max-w-md mx-auto">
                    Team member information will be displayed here once the data is loaded.
                  </p>
                </motion.div>
              )}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
