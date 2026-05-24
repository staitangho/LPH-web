
import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, Users, Award, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import ProgramCard from '@/components/ProgramCard.jsx';

const HomePage = () => {
  const featuredPrograms = [
    {
      icon: BookOpen,
      title: 'Islamic Studies',
      description: 'Comprehensive study of Islamic theology, jurisprudence, and history with modern pedagogical approaches.'
    },
    {
      icon: Users,
      title: 'Community Outreach',
      description: 'Engaging with local communities through educational programs, social services, and spiritual guidance.'
    },
    {
      icon: Award,
      title: 'Arabic Language',
      description: 'Intensive Arabic language courses from beginner to advanced levels with native speaker instructors.'
    },
    {
      icon: Heart,
      title: 'Character Development',
      description: 'Building strong moral character and ethical values through Islamic teachings and practical application.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>LPH STAI Tanbihul Ghofilin - Islamic Education Excellence</title>
        <meta name="description" content="LPH STAI Tanbihul Ghofilin is a leading Islamic educational institution committed to nurturing Quranic generations with noble character and academic excellence." />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-1">
          <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 z-0">
              <img
                src="https://images.unsplash.com/photo-1583575360253-790939c12503"
                alt="Islamic architecture with intricate geometric patterns"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/80 to-primary/70"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight" style={{ letterSpacing: '-0.02em' }}>
                  LPH STAI Tanbihul Ghofilin
                </h1>
                <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto leading-relaxed">
                  Membentuk generasi Qur'ani yang berakhlak mulia dan berwawasan luas
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 transition-all duration-200 active:scale-[0.98]">
                    <Link to="/programs">
                      Explore programs
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="bg-primary-foreground/10 text-primary-foreground border-primary-foreground/30 hover:bg-primary-foreground/20 transition-all duration-200 active:scale-[0.98]">
                    <Link to="/contact">Contact us</Link>
                  </Button>
                </div>
              </motion.div>
            </div>
          </section>

          <section className="py-20 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Welcome to our institution</h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  LPH STAI Tanbihul Ghofilin is a premier Islamic educational institution dedicated to providing comprehensive Islamic education while fostering academic excellence and moral development. We combine traditional Islamic scholarship with modern educational methodologies.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f"
                    alt="Students studying Islamic texts in a traditional setting"
                    className="rounded-2xl shadow-xl w-full h-[400px] object-cover"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <h3 className="text-2xl font-semibold mb-4">Our commitment</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Since our establishment, we have been committed to nurturing students who are not only knowledgeable in Islamic sciences but also equipped with critical thinking skills and strong moral character.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Our curriculum integrates classical Islamic scholarship with contemporary educational approaches, preparing students to become leaders and positive contributors to society.
                  </p>
                  <Button asChild className="transition-all duration-200 active:scale-[0.98]">
                    <Link to="/about">Learn more about us</Link>
                  </Button>
                </motion.div>
              </div>
            </div>
          </section>

          <section className="py-20 bg-secondary">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured programs</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                  Discover our comprehensive range of educational programs designed to nurture both spiritual and intellectual growth.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                {featuredPrograms.map((program, index) => (
                  <ProgramCard
                    key={index}
                    icon={program.icon}
                    title={program.title}
                    description={program.description}
                    index={index}
                  />
                ))}
              </div>

              <div className="text-center">
                <Button asChild size="lg" className="transition-all duration-200 active:scale-[0.98]">
                  <Link to="/programs">
                    View all programs
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default HomePage;
