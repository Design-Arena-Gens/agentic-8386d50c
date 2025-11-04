'use client';

import { useState } from 'react';
import './globals.css';

export default function Home() {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div className="page-container">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-content">
          <div className="logo">
            <span className="logo-icon">🎓</span>
            <span className="logo-text">Harmony Academy</span>
          </div>
          <ul className="nav-links">
            <li><a href="#home" onClick={() => setActiveSection('home')}>Home</a></li>
            <li><a href="#about" onClick={() => setActiveSection('about')}>About</a></li>
            <li><a href="#programs" onClick={() => setActiveSection('programs')}>Programs</a></li>
            <li><a href="#admissions" onClick={() => setActiveSection('admissions')}>Admissions</a></li>
            <li><a href="#contact" onClick={() => setActiveSection('contact')}>Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">Welcome to Harmony Academy</h1>
          <p className="hero-subtitle">Where Excellence Meets Innovation</p>
          <p className="hero-description">Empowering minds, shaping futures, and fostering a lifelong love of learning</p>
          <button className="cta-button">Explore Our Campus</button>
        </div>
        <div className="scroll-indicator">
          <div className="scroll-arrow"></div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section about-section">
        <div className="container">
          <h2 className="section-title">Our Legacy of Excellence</h2>
          <div className="section-divider"></div>
          <div className="about-grid">
            <div className="about-card">
              <div className="card-icon">📚</div>
              <h3>Academic Excellence</h3>
              <p>Our rigorous curriculum prepares students for success in higher education and beyond, with a 98% college acceptance rate.</p>
            </div>
            <div className="about-card">
              <div className="card-icon">🌟</div>
              <h3>Character Development</h3>
              <p>We nurture ethical leaders who demonstrate integrity, empathy, and a commitment to making a positive impact.</p>
            </div>
            <div className="about-card">
              <div className="card-icon">🎨</div>
              <h3>Creative Innovation</h3>
              <p>Our state-of-the-art facilities foster creativity and innovation across arts, sciences, and technology.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">500+</div>
              <div className="stat-label">Students</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">50+</div>
              <div className="stat-label">Expert Faculty</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">98%</div>
              <div className="stat-label">College Acceptance</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">30+</div>
              <div className="stat-label">Years of Excellence</div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="section programs-section">
        <div className="container">
          <h2 className="section-title">Our Programs</h2>
          <div className="section-divider"></div>
          <div className="programs-grid">
            <div className="program-card">
              <div className="program-header">
                <span className="program-icon">🔬</span>
                <h3>STEM Excellence</h3>
              </div>
              <p>Advanced courses in Science, Technology, Engineering, and Mathematics with hands-on laboratory experience.</p>
              <ul className="program-features">
                <li>Robotics & AI Lab</li>
                <li>Research Partnerships</li>
                <li>Competition Teams</li>
              </ul>
            </div>
            <div className="program-card">
              <div className="program-header">
                <span className="program-icon">🎭</span>
                <h3>Arts & Humanities</h3>
              </div>
              <p>Comprehensive programs in visual arts, performing arts, music, and literature to nurture creative expression.</p>
              <ul className="program-features">
                <li>Professional Studios</li>
                <li>Annual Showcases</li>
                <li>Master Classes</li>
              </ul>
            </div>
            <div className="program-card">
              <div className="program-header">
                <span className="program-icon">⚽</span>
                <h3>Athletics & Wellness</h3>
              </div>
              <p>Championship sports programs and holistic wellness initiatives promoting physical and mental health.</p>
              <ul className="program-features">
                <li>15+ Sports Teams</li>
                <li>Fitness Center</li>
                <li>Wellness Programs</li>
              </ul>
            </div>
            <div className="program-card">
              <div className="program-header">
                <span className="program-icon">🌍</span>
                <h3>Global Studies</h3>
              </div>
              <p>International exchange programs and multicultural curriculum preparing students for a connected world.</p>
              <ul className="program-features">
                <li>Study Abroad</li>
                <li>Language Programs</li>
                <li>Cultural Exchange</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Admissions Section */}
      <section id="admissions" className="section admissions-section">
        <div className="container">
          <h2 className="section-title">Join Our Community</h2>
          <div className="section-divider"></div>
          <div className="admissions-content">
            <div className="admissions-info">
              <h3>Application Process</h3>
              <div className="timeline">
                <div className="timeline-item">
                  <div className="timeline-marker">1</div>
                  <div className="timeline-content">
                    <h4>Submit Application</h4>
                    <p>Complete our online application form and submit required documents</p>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-marker">2</div>
                  <div className="timeline-content">
                    <h4>Campus Visit</h4>
                    <p>Tour our facilities and meet with faculty and current students</p>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-marker">3</div>
                  <div className="timeline-content">
                    <h4>Assessment</h4>
                    <p>Participate in academic assessment and personal interview</p>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-marker">4</div>
                  <div className="timeline-content">
                    <h4>Enrollment</h4>
                    <p>Receive decision and complete enrollment process</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="admissions-cta">
              <div className="cta-card">
                <h3>Ready to Begin?</h3>
                <p>Applications for the 2025-2026 academic year are now open.</p>
                <button className="cta-button secondary">Apply Now</button>
                <button className="cta-button outline">Schedule a Visit</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section contact-section">
        <div className="container">
          <h2 className="section-title">Get in Touch</h2>
          <div className="section-divider"></div>
          <div className="contact-grid">
            <div className="contact-info">
              <div className="contact-item">
                <div className="contact-icon">📍</div>
                <div>
                  <h4>Address</h4>
                  <p>123 Education Boulevard<br/>Excellence City, EC 12345</p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">📞</div>
                <div>
                  <h4>Phone</h4>
                  <p>(555) 123-4567</p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">✉️</div>
                <div>
                  <h4>Email</h4>
                  <p>info@harmonyacademy.edu</p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">⏰</div>
                <div>
                  <h4>Office Hours</h4>
                  <p>Monday - Friday: 8:00 AM - 4:00 PM</p>
                </div>
              </div>
            </div>
            <div className="contact-form">
              <h3>Send us a message</h3>
              <form>
                <input type="text" placeholder="Your Name" className="form-input" />
                <input type="email" placeholder="Your Email" className="form-input" />
                <input type="text" placeholder="Subject" className="form-input" />
                <textarea placeholder="Your Message" className="form-textarea" rows="5"></textarea>
                <button type="submit" className="cta-button">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h4>Harmony Academy</h4>
              <p>Empowering minds since 1995</p>
            </div>
            <div className="footer-section">
              <h4>Quick Links</h4>
              <ul>
                <li><a href="#about">About Us</a></li>
                <li><a href="#programs">Programs</a></li>
                <li><a href="#admissions">Admissions</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Connect</h4>
              <div className="social-links">
                <a href="#" className="social-icon">Facebook</a>
                <a href="#" className="social-icon">Twitter</a>
                <a href="#" className="social-icon">Instagram</a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2025 Harmony Academy. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
