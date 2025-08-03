import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Github, Code } from 'lucide-react';
import { Project } from '@/types/project';

interface ProjectCardProps {
  project: Project;
  onViewDetails?: () => void;
}

export function ProjectCard({ project, onViewDetails }: ProjectCardProps) {
  const getTypeColor = (type: string) => {
    return type === 'premium' 
      ? 'bg-gradient-to-r from-yellow-400 to-orange-500' 
      : 'bg-blue-accent';
  };

  const getIconGradient = (type: string) => {
    return type === 'premium'
      ? 'from-blue-500 to-purple-600'
      : 'from-blue-accent to-professional-blue';
  };

  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2 }}
    >
      <Card className="hover:shadow-xl transition-all duration-300 bg-gray-50 dark:bg-gray-700 border-0">
        <CardContent className="p-8">
          <div className="flex items-center justify-between mb-6">
            <div className={`w-14 h-14 bg-gradient-to-br ${getIconGradient(project.type)} rounded-xl flex items-center justify-center`}>
              <Code className="w-7 h-7 text-white" />
            </div>
            <Badge className={`${getTypeColor(project.type)} text-white px-3 py-1.5 text-sm font-medium`}>
              {project.type === 'premium' ? 'Premium' : 'Free'}
            </Badge>
          </div>

          <div className="mb-6">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
              {project.name}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              {project.description}
            </p>
          </div>

          <div className="flex items-center space-x-6 text-sm text-gray-500 dark:text-gray-400 mb-6">
            <span className="flex items-center space-x-2">
              <Star className="w-4 h-4" />
              <span>{project.stars.toLocaleString()}</span>
            </span>
            <span className="flex items-center space-x-2">
              <Code className="w-4 h-4" />
              <span>{project.language}</span>
            </span>
            <span className="flex items-center space-x-2">
              <Github className="w-4 h-4" />
              <span>{project.license}</span>
            </span>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <Button 
              className={`flex-1 ${
                project.type === 'premium'
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700'
                  : 'bg-blue-accent hover:bg-blue-600'
              } text-white`}
              onClick={onViewDetails}
            >
              View Details
            </Button>
            <Button 
              variant="outline" 
              className="flex-1 border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-600"
              asChild
            >
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4 mr-2" />
                {project.type === 'premium' ? 'Free Trial' : 'Star on GitHub'}
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
