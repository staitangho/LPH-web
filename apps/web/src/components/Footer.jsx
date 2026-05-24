
import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Mail, Phone, MapPin, Facebook, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                <BookOpen className="h-6 w-6" />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-bold leading-none">LPH STAI</span>
                <span className="text-xs leading-none opacity-80">Tanbihul Ghofilin</span>
              </div>
            </div>
            <p className="text-sm opacity-80 leading-relaxed">
              Lembaga Pendidikan Islam yang berkomitmen untuk membentuk generasi Qur'ani yang berakhlak mulia.
            </p>
          </div>

          <div>
            <span className="text-sm font-semibold mb-4 block">Quick links</span>
            <nav className="flex flex-col gap-2">
              <Link to="/" className="text-sm opacity-80 hover:opacity-100 transition-opacity duration-200">
                Home
              </Link>
              <Link to="/about" className="text-sm opacity-80 hover:opacity-100 transition-opacity duration-200">
                About us
              </Link>
              <Link to="/programs" className="text-sm opacity-80 hover:opacity-100 transition-opacity duration-200">
                Programs
              </Link>
              <Link to="/team" className="text-sm opacity-80 hover:opacity-100 transition-opacity duration-200">
                Team
              </Link>
              <Link to="/contact" className="text-sm opacity-80 hover:opacity-100 transition-opacity duration-200">
                Contact
              </Link>
            </nav>
          </div>

          <div>
            <span className="text-sm font-semibold mb-4 block">Contact info</span>
            <div className="flex flex-col gap-3">
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 opacity-60" />
                <span className="text-sm opacity-80 leading-relaxed">
                  Jl. Pendidikan No. 123, Jakarta Selatan
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 opacity-60" />
                <span className="text-sm opacity-80">+62 21 1234 5678</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 opacity-60" />
                <span className="text-sm opacity-80">info@lphstai.ac.id</span>
              </div>
            </div>
          </div>

          <div>
            <span className="text-sm font-semibold mb-4 block">Follow us</span>
            <div className="flex gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-background/50 hover:bg-background transition-all duration-200"
                aria-label="Facebook"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-background/50 hover:bg-background transition-all duration-200"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-background/50 hover:bg-background transition-all duration-200"
                aria-label="YouTube"
              >
                <Youtube className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border/50 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm opacity-60">
            © 2026 LPH STAI Tanbihul Ghofilin. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/privacy" className="text-sm opacity-60 hover:opacity-100 transition-opacity duration-200">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-sm opacity-60 hover:opacity-100 transition-opacity duration-200">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
