
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import TeamMemberCard from '@/components/TeamMemberCard.jsx';

const TeamPage = () => {
  const teamMembers = [
    {
      name: 'Dr. Ahmad Fauzi',
      position: 'Director & Senior Scholar',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
      bio: 'PhD in Islamic Studies from Al-Azhar University. Specializes in Quranic exegesis and Islamic jurisprudence.'
    },
    {
      name: 'Ustadzah Siti Nurhaliza',
      position: 'Head of Academic Affairs',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
      bio: 'Master\'s in Islamic Education. Oversees curriculum development and academic standards.'
    },
    {
      name: 'Ustadz Muhammad Rizki',
      position: 'Arabic Language Coordinator',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e',
      bio: 'Graduate of Islamic University of Madinah. Expert in classical and modern Arabic instruction.'
    },
    {
      name: 'Dr. Fatimah Zahra',
      position: 'Islamic Studies Professor',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80',
      bio: 'PhD in Islamic Theology. Teaches advanced courses in aqeedah and comparative religion.'
    },
    {
      name: 'Ustadz Yusuf Ibrahim',
      position: 'Quranic Studies Instructor',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',
      bio: 'Certified Qari with ijazah in multiple qira\'at. Specializes in tajweed and Quran memorization.'
    },
    {
      name: 'Ustadzah Aisha Rahman',
      position: 'Youth Program Director',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb',
      bio: 'Master\'s in Islamic Psychology. Develops programs for youth development and counseling.'
    },
    {
      name: 'Ustadz Hassan Malik',
      position: 'Fiqh & Usul Instructor',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d',
      bio: 'Graduate of Darul Uloom. Teaches Islamic jurisprudence and legal theory.'
    },
    {
      name: 'Dr. Khadijah Ali',
      position: 'Research Coordinator',
      image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f',
      bio: 'PhD in Islamic History. Leads research initiatives and academic publications.'
    },
    {
      name: 'Ustadz Omar Abdullah',
      position: 'Community Outreach Manager',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7',
      bio: 'Coordinates community programs, interfaith dialogue, and social services.'
    },
    {
      name: 'Ustadzah Maryam Hassan',
      position: 'Women\'s Education Coordinator',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2',
      bio: 'Specializes in Islamic education for women and family counseling.'
    },
    {
      name: 'Ustadz Bilal Ahmed',
      position: 'Islamic Ethics Instructor',
      image: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce',
      bio: 'Master\'s in Islamic Philosophy. Teaches akhlaq and spiritual development.'
    },
    {
      name: 'Ustadzah Zainab Yusuf',
      position: 'Student Affairs Coordinator',
      image: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb',
      bio: 'Manages student services, counseling, and extracurricular activities.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Our Team - LPH STAI Tanbihul Ghofilin</title>
        <meta name="description" content="Meet our dedicated team of scholars, instructors, and staff committed to providing excellence in Islamic education and character development." />
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
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Our team</h1>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  Meet our dedicated scholars, instructors, and staff who are committed to nurturing the next generation of knowledgeable and righteous Muslims
                </p>
              </motion.div>
            </div>
          </section>

          <section className="py-20 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {teamMembers.map((member, index) => (
                  <TeamMemberCard
                    key={index}
                    name={member.name}
                    position={member.position}
                    image={member.image}
                    bio={member.bio}
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
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Organizational structure</h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  Our institution is organized to ensure effective delivery of educational programs and student support services
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="bg-card rounded-xl p-6 text-center shadow-lg border border-border/50"
                >
                  <div className="text-3xl font-bold text-primary mb-2">Leadership</div>
                  <p className="text-sm text-muted-foreground">
                    Director and senior management team overseeing strategic direction and operations
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="bg-card rounded-xl p-6 text-center shadow-lg border border-border/50"
                >
                  <div className="text-3xl font-bold text-primary mb-2">Academic</div>
                  <p className="text-sm text-muted-foreground">
                    Faculty members and instructors delivering high-quality Islamic education
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="bg-card rounded-xl p-6 text-center shadow-lg border border-border/50"
                >
                  <div className="text-3xl font-bold text-primary mb-2">Student Affairs</div>
                  <p className="text-sm text-muted-foreground">
                    Support services for student welfare, counseling, and extracurricular activities
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="bg-card rounded-xl p-6 text-center shadow-lg border border-border/50"
                >
                  <div className="text-3xl font-bold text-primary mb-2">Community</div>
                  <p className="text-sm text-muted-foreground">
                    Outreach programs, partnerships, and community engagement initiatives
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

export default TeamPage;
