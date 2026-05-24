
import React from 'react';
import { motion } from 'framer-motion';

const TeamMemberCard = ({ name, position, image, bio, index = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-border/50"
    >
      <div className="aspect-square overflow-hidden bg-muted">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-6">
        <h3 className="text-lg font-semibold text-card-foreground mb-1">{name}</h3>
        <p className="text-sm text-primary font-medium mb-3">{position}</p>
        {bio && <p className="text-sm text-muted-foreground leading-relaxed">{bio}</p>}
      </div>
    </motion.div>
  );
};

export default TeamMemberCard;
