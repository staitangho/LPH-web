
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Target, Eye, Heart, Award } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

const AboutUsPage = () => {
  const coreValues = [
    {
      icon: Heart,
      title: 'Akhlaq Karimah',
      description: 'Upholding noble character and ethical conduct in all aspects of life, following the example of Prophet Muhammad (peace be upon him).'
    },
    {
      icon: Award,
      title: 'Academic Excellence',
      description: 'Pursuing knowledge with dedication and striving for excellence in both Islamic and contemporary sciences.'
    },
    {
      icon: Target,
      title: 'Community Service',
      description: 'Actively contributing to the welfare of society through education, outreach, and social responsibility.'
    },
    {
      icon: Eye,
      title: 'Innovation',
      description: 'Embracing modern educational methodologies while preserving authentic Islamic scholarship and tradition.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>About Us - LPH STAI Tanbihul Ghofilin</title>
        <meta name="description" content="Learn about LPH STAI Tanbihul Ghofilin's history, vision, mission, and core values. Discover our commitment to Islamic education excellence and character development." />
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
                <h1 className="text-4xl md:text-5xl font-bold mb-4">About us</h1>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  Discover our journey, values, and commitment to Islamic education excellence
                </p>
              </motion.div>
            </div>
          </section>

          <section className="py-20 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f"
                    alt="Historic Islamic educational institution building"
                    className="rounded-2xl shadow-xl w-full h-[500px] object-cover"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <h2 className="text-3xl font-bold mb-6">Our history</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    LPH STAI Tanbihul Ghofilin was established with a vision to create an educational institution that bridges traditional Islamic scholarship with contemporary academic standards. Our founders recognized the need for an institution that could prepare students to navigate the complexities of modern life while remaining firmly rooted in Islamic values.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Over the years, we have grown from a small study circle to a comprehensive educational institution serving hundreds of students. Our faculty comprises distinguished scholars who have studied at renowned Islamic universities across the Muslim world, bringing diverse perspectives and deep knowledge to our classrooms.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Today, we continue to evolve and adapt our programs to meet the changing needs of our community while maintaining our commitment to authentic Islamic education and character development. Our graduates have gone on to become teachers, scholars, community leaders, and professionals who contribute positively to society.
                  </p>
                </motion.div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="order-2 lg:order-1"
                >
                  <h2 className="text-3xl font-bold mb-6">Our vision</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    To become a leading Islamic educational institution that produces graduates who are deeply knowledgeable in Islamic sciences, academically excellent, morally upright, and actively engaged in serving their communities.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    We envision a future where our institution serves as a beacon of authentic Islamic knowledge, fostering critical thinking, spiritual growth, and social responsibility among students who will become positive agents of change in society.
                  </p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="order-1 lg:order-2"
                >
                  <img
                    src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6"
                    alt="Students engaged in collaborative learning"
                    className="rounded-2xl shadow-xl w-full h-[400px] object-cover"
                  />
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-muted rounded-2xl p-8 md:p-12 mb-20"
              >
                <h2 className="text-3xl font-bold mb-6 text-center">Our mission</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex gap-4">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold text-lg">
                      1
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      Provide comprehensive Islamic education that integrates traditional scholarship with modern pedagogical approaches.
                    </p>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold text-lg">
                      2
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      Cultivate strong moral character and ethical values based on Quranic teachings and prophetic traditions.
                    </p>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold text-lg">
                      3
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      Foster critical thinking skills and academic excellence across all disciplines of study.
                    </p>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold text-lg">
                      4
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      Engage with the community through educational outreach, social services, and spiritual guidance.
                    </p>
                  </div>
                </div>
              </motion.div>
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
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Our core values</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                  The principles that guide our institution and shape our educational approach
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {coreValues.map((value, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-card rounded-2xl p-6 shadow-lg border border-border/50"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                        <value.icon className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2 text-card-foreground">{value.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default AboutUsPage;
