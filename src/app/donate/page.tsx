'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Github, Coffee, Star, Code, Users } from 'lucide-react';

export default function Donate() {
  const reasons = [
    {
      icon: Star,
      title: 'Free Tools',
      description: 'Keep our essential developer tools completely free and accessible to everyone',
      color: 'blue-accent',
    },
    {
      icon: Code,
      title: 'Innovation',
      description: 'Fund research and development of cutting-edge developer productivity tools',
      color: 'professional-blue',
    },
    {
      icon: Users,
      title: 'Community',
      description: 'Support documentation, tutorials, and community resources for developers',
      color: 'blue-accent',
    },
  ];

  const handleGitHubSponsors = () => {
    // In a real app, this would redirect to the actual GitHub Sponsors page
    window.open('https://github.com/sponsors/codecompass', '_blank');
  };

  const handleKofiSupport = () => {
    // In a real app, this would redirect to the actual Ko-fi page
    window.open('https://ko-fi.com/codecompass', '_blank');
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-blue via-gray-800 to-navy-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div 
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Support Our Mission
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Help us continue building free, high-quality developer tools that empower the global development community. Your support makes open source innovation possible.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* GitHub Sponsors */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Card className="bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-blue-accent rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Github className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">GitHub Sponsors</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    Support our work directly through GitHub Sponsors with monthly contributions that help fund development, hosting, and maintenance.
                  </p>
                  <Button 
                    onClick={handleGitHubSponsors}
                    className="bg-blue-accent hover:bg-blue-600 text-white px-6 py-3 font-semibold"
                  >
                    <Github className="w-5 h-5 mr-2" />
                    Sponsor on GitHub
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* Ko-fi Support */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Card className="bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-professional-blue rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Coffee className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Ko-fi Support</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    Make a one-time contribution or buy us a coffee to show your appreciation for our open source efforts.
                  </p>
                  <Button 
                    onClick={handleKofiSupport}
                    className="bg-professional-blue hover:bg-blue-600 text-white px-6 py-3 font-semibold"
                  >
                    <Coffee className="w-5 h-5 mr-2" />
                    Support on Ko-fi
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Why Support Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Card className="bg-white/5 backdrop-blur-sm border border-white/10">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6">Why Your Support Matters</h3>
                <div className="grid md:grid-cols-3 gap-8 text-center">
                  {reasons.map(({ icon: Icon, title, description, color }, index) => (
                    <motion.div
                      key={title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                    >
                      <div className={`w-12 h-12 bg-${color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <h4 className="text-lg font-semibold mb-2">{title}</h4>
                      <p className="text-gray-300 text-sm">{description}</p>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Additional Info Section */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Every Contribution Makes a Difference
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
              Whether it's a one-time coffee or monthly sponsorship, your support directly impacts thousands of developers worldwide. 
              Together, we're building a more accessible and innovative development ecosystem.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="p-6">
                <div className="text-2xl font-bold text-emerald-accent mb-2">$5/month</div>
                <p className="text-gray-600 dark:text-gray-400 text-sm">Helps cover hosting costs</p>
              </div>
              <div className="p-6">
                <div className="text-2xl font-bold text-professional-teal mb-2">$25/month</div>
                <p className="text-gray-600 dark:text-gray-400 text-sm">Funds new feature development</p>
              </div>
              <div className="p-6">
                <div className="text-2xl font-bold text-emerald-accent mb-2">$100/month</div>
                <p className="text-gray-600 dark:text-gray-400 text-sm">Enables full-time development</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
