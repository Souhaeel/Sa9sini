import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Github } from 'lucide-react';
import { Link } from 'react-router-dom';
import '../../App.css'; 

export default function Footer() {
    const currentYear = new Date().getFullYear();
  
    return (
      <footer className="footer">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between mb-8">
            <div className="w-full sm:w-1/2 md:w-1/4 mb-8">
              <h3>About</h3>
              <ul>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/careers">Careers</Link></li>
                <li><Link to="/privacy">Privacy Policy</Link></li>
                <li><Link to="/terms">Terms of Service</Link></li>
              </ul>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/4 mb-8">
              <h3>Community</h3>
              <ul>
                <li><Link to="/guidelines">Guidelines</Link></li>
                <li><Link to="/discussions">Discussions</Link></li>
                <li><Link to="/leaderboard">Leaderboard</Link></li>
                <li><Link to="/experts">Experts</Link></li>
              </ul>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/4 mb-8">
              <h3>Business</h3>
              <ul>
                <li><Link to="/advertising">Advertising</Link></li>
                <li><Link to="/partnerships">Partnerships</Link></li>
                <li><Link to="/licensing">Content Licensing</Link></li>
              </ul>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/4 mb-8">
              <h3>Languages</h3>
              <ul>
                <li><Link to="#">English</Link></li>
                <li><Link to="#">Español</Link></li>
                <li><Link to="#">Français</Link></li>
                <li><Link to="#">Deutsch</Link></li>
              </ul>
            </div>
          </div>
  
          <div className="footer-bottom flex flex-col sm:flex-row justify-between items-center border-t border-gray-200 pt-8">
            <div className="mb-4 sm:mb-0">
              <p>&copy; {currentYear} Sa9sini-like. All rights reserved.</p>
            </div>
            <div className="footer-icons flex space-x-4">
              <Link to="#">
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link to="#">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link to="#">
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link to="#">
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link to="#">
                <Github size={20} />
                <span className="sr-only">GitHub</span>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    );
  }