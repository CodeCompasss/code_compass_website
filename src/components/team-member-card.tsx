import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Github, Linkedin } from 'lucide-react';
import { TeamMember } from '@/types/project';

interface TeamMemberCardProps {
  member: TeamMember;
}

export function TeamMemberCard({ member }: TeamMemberCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      <Card className="hover:shadow-xl transition-all duration-300 bg-gray-50 dark:bg-gray-700 border-0">
        <CardContent className="p-8 text-center">
          <img 
            src={member.image} 
            alt={`${member.name} professional headshot`}
            className="w-24 h-24 rounded-full mx-auto mb-6 object-cover"
          />
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
            {member.name}
          </h3>
          <p className="text-professional-blue dark:text-blue-accent font-medium mb-4">
            {member.role}
          </p>
          <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-6">
            {member.bio}
          </p>
          <div className="flex justify-center space-x-4">
            {member.github && (
              <motion.a 
                href={member.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-accent transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Github className="w-5 h-5" />
              </motion.a>
            )}
            {member.linkedin && (
              <motion.a 
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-professional-blue transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Linkedin className="w-5 h-5" />
              </motion.a>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
