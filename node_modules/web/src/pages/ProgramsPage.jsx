
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { BookOpen, Languages, Scale, Heart, Users, GraduationCap, Sparkles, Globe } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import ProgramCard from '@/components/ProgramCard.jsx';

const ProgramsPage = () => {
  const programs = [
    {
      icon: BookOpen,
      title: 'Quranic Studies',
      description: 'In-depth study of Quranic recitation, memorization, and interpretation with qualified instructors. Students learn proper tajweed, tafsir methodologies, and the historical context of revelation.'
    },
    {
      icon: Languages,
      title: 'Arabic Language',
      description: 'Comprehensive Arabic language program from beginner to advanced levels, focusing on classical and modern standard Arabic. Includes grammar, vocabulary, conversation, and literature.'
    },
    {
      icon: Scale,
      title: 'Islamic Jurisprudence',
      description: 'Study of Islamic law (fiqh) covering worship, transactions, family law, and contemporary issues. Students learn from multiple schools of thought with emphasis on evidence-based reasoning.'
    },
    {
      icon: Heart,
      title: 'Islamic Ethics & Spirituality',
      description: 'Exploration of Islamic moral philosophy, character development, and spiritual purification based on Quranic teachings and prophetic traditions. Includes practical application in daily life.'
    },
    {
      icon: Users,
      title: 'Community Leadership',
      description: 'Training program for aspiring community leaders, covering public speaking, organizational management, conflict resolution, and effective da\'wah strategies in contemporary contexts.'
    },
    {
      icon: GraduationCap,
      title: 'Islamic History',
      description: 'Comprehensive study of Islamic civilization from the prophetic era to modern times, examining political, social, cultural, and intellectual developments across Muslim societies.'
    },
    {
      icon: Sparkles,
      title: 'Youth Development',
      description: 'Specialized programs for young Muslims focusing on identity formation, peer relationships, academic success, and navigating contemporary challenges while maintaining Islamic values.'
    },
    {
      icon: Globe,
      title: 'Contemporary Issues',
      description: 'Critical examination of modern challenges facing Muslims, including bioethics, environmental stewardship, social justice, interfaith relations, and technology from an Islamic perspective.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Programs - LPH STAI Tanbihul Ghofilin</title>
        <meta name="description" content="Explore our comprehensive Islamic education programs including Quranic studies, Arabic language, Islamic jurisprudence, ethics, community leadership, and more." />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-1">
          <section className="py-20 bg-secondary">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-12"
              >
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Our programs</h1>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  Comprehensive Islamic education programs designed to nurture spiritual growth, academic excellence, and practical skills for serving the community
                </p>
              </motion.div>
            </div>
          </section>

          <section className="py-20 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {programs.map((program, index) => (
                  <ProgramCard
                    key={index}
                    icon={program.icon}
                    title={program.title}
                    description={program.description}
                    index={index}
                  />
                ))}
              </div>
            </div>
          </section>

          <section className="py-20 bg-muted">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Program structure</h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  Our programs are designed with flexibility to accommodate different learning needs and schedules
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="bg-card rounded-xl p-6 shadow-lg border border-border/50"
                >
                  <div className="text-4xl font-bold text-primary mb-2">Full-time</div>
                  <h3 className="text-xl font-semibold mb-3 text-card-foreground">Intensive programs</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Comprehensive curriculum with daily classes, designed for students seeking deep immersion in Islamic studies. Duration: 2-4 years depending on program level.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="bg-card rounded-xl p-6 shadow-lg border border-border/50"
                >
                  <div className="text-4xl font-bold text-primary mb-2">Part-time</div>
                  <h3 className="text-xl font-semibold mb-3 text-card-foreground">Evening & weekend</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Flexible schedule for working professionals and students. Classes held in evenings and weekends, allowing you to balance education with other commitments.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="bg-card rounded-xl p-6 shadow-lg border border-border/50"
                >
                  <div className="text-4xl font-bold text-primary mb-2">Short courses</div>
                  <h3 className="text-xl font-semibold mb-3 text-card-foreground">Specialized topics</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Focused courses on specific topics, ranging from 4-12 weeks. Perfect for those seeking knowledge in particular areas without long-term commitment.
                  </p>
                </motion.div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default ProgramsPage;
