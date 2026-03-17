export default function App() {
  return (
    <>
      <nav className="navbar">
        <input type="checkbox" id="menu-toggle" className="menu-checkbox" />
        <div className="nav-container">
          <div className="logo">
            <span className="logo-mark">
              <i className="fas fa-code"></i>
            </span>
            <span>Tharindu Nimsara</span>
          </div>
          <ul className="nav-menu">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#education">Education</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#experience">Experience</a>
            </li>
            <li>
              <a href="#activities">Activities</a>
            </li>
            <li>
              <a href="#achievements">Achievements</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#cv">CV</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
          <label htmlFor="menu-toggle" className="menu-toggle">
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>
      </nav>

      <section id="home" className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1>
              Hello.
              <br />
              I&apos;m <span className="highlight">Tharindu</span>
            </h1>
            <p className="subtitle">Software Developer</p>
            <p className="description">
              CS Undergraduate • Fullstack Developer • AI Enthusiast
              <br />
              passionate about creating innovative solutions and exploring
              cutting-edge technologies.
            </p>
            <div className="cta-buttons">
              <a href="#projects" className="btn btn-primary">
                Got a project?
              </a>
              <a href="#contact" className="btn btn-secondary">
                Let&apos;s talk
              </a>
            </div>
          </div>
          <div className="hero-image">
            <img
              src="/Images/Tharindu-1.png"
              alt="Tharindu Nimsara"
              className="profile-image"
            />
          </div>
        </div>
      </section>

      <section id="about" className="section">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <div className="about-grid">
            <div className="about-content">
              <h3>Hello! I&apos;m Tharindu Nimsara</h3>
              <p>
                I&apos;m a Computer Science undergraduate at the University of
                Sri Jayewardenepura with a strong focus on full-stack web
                development, software quality, and building production-ready
                solutions. I work across both frontend and backend development,
                and I&apos;m comfortable handling modern web technologies,
                testing practices, and DevOps-related workflows that support
                reliable software delivery.
              </p>
              <p>
                I&apos;m familiar with the React ecosystem and have built many
                projects using trending web technologies, with attention to
                clean implementation, maintainability, and user experience. My
                goal is to grow as a well-rounded software engineer who can take
                ownership of features end to end, from designing intuitive
                interfaces to developing scalable backend services and
                supporting deployment pipelines.
              </p>
              <p>
                I&apos;m also currently learning AI integration for embedded
                systems, which is expanding my understanding of how intelligent
                software can connect with real-world hardware environments. In
                addition to technical work, I have demonstrated leadership
                through my involvement with development teams and event
                organizing teams, where I have taken responsibility, worked
                collaboratively, and delivered under pressure. I&apos;m prepared
                to contribute in a professional environment, adapt quickly, and
                take on responsibilities with confidence.
              </p>
            </div>
            <div>
              <img
                src="/Images/me-rtl.JPG"
                alt="Tharindu Nimsara Waidyathilake"
                className="about-profile-image"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="education" className="section">
        <div className="container">
          <h2 className="section-title">Education</h2>
          <div className="education-grid">
            <div className="card">
              <h4>University Education</h4>
              <div className="education-item">
                <h5>Bachelor of Computing (Hons) Computer Science</h5>
                <div className="institution">
                  University of Sri Jayewardenepura
                </div>
                <div className="duration">April 2024 - April 2028</div>
                <div className="description">
                  Currently pursuing undergraduate degree in Computer Science
                </div>
              </div>
              <div className="education-item">
                <h5>G.C.E. Advanced Level</h5>
                <div className="institution">Eheliyagoda Central College</div>
                <div className="duration">February 2014 - December 2022</div>
                <div className="description">
                  Combined Mathematics, Physics, Chemistry
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="section">
        <div className="container">
          <h2 className="section-title">My Projects</h2>
          <div className="projects-grid">
            <div className="project-card fade-in">
              <div className="project-image">
                <img
                  src="/Images/projects/hackathonx.png"
                  alt="HackathonX Event Registration Platform preview"
                />
              </div>
              <div className="project-content">
                <h3 className="project-title">
                  HackathonX Event Registration Platform
                </h3>
                <p className="project-description">
                  Built and deployed a complete Hackathon event platform with
                  timeline, FAQ, rules, contacts, and booklet preview, optimized
                  for speed and responsive UX.
                </p>
                <div className="project-tech">
                  <span className="tech-tag">Next.js 16</span>
                  <span className="tech-tag">React 19</span>
                  <span className="tech-tag">Tailwind CSS 4</span>
                  <span className="tech-tag">JavaScript</span>
                  <span className="tech-tag">ESLint</span>
                  <span className="tech-tag">Vercel</span>
                </div>
                <div className="project-links">
                  <a
                    href="https://hackathonx-black.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fas fa-external-link-alt"></i> Live Demo
                  </a>
                  <a
                    href="https://github.com/Tharindu-Nimsara/event-reg"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fab fa-github"></i> GitHub
                  </a>
                </div>
              </div>
            </div>

            <div className="project-card fade-in">
              <div className="project-image">
                <img
                  src="/Images/projects/url-shortner.png"
                  alt="SnapLink URL Shortener preview"
                />
              </div>
              <div className="project-content">
                <h3 className="project-title">SnapLink URL Shortener</h3>
                <p className="project-description">
                  Developed a production-ready URL shortener with real-time
                  analytics, Redis caching, and Dockerized deployment for fast,
                  scalable link redirection.
                </p>
                <div className="project-tech">
                  <span className="tech-tag">React</span>
                  <span className="tech-tag">Vite</span>
                  <span className="tech-tag">Node.js</span>
                  <span className="tech-tag">Express.js</span>
                  <span className="tech-tag">Redis</span>
                  <span className="tech-tag">Supabase</span>
                  <span className="tech-tag">Docker</span>
                  <span className="tech-tag">OCI</span>
                  <span className="tech-tag">Nginx</span>
                </div>
                <div className="project-links">
                  <a
                    href="https://snaplink.gleeze.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fas fa-external-link-alt"></i> Live Demo
                  </a>
                  <a
                    href="https://github.com/Tharindu-Nimsara/url-shortner"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fab fa-github"></i> GitHub
                  </a>
                </div>
              </div>
            </div>

            <div className="project-card fade-in">
              <div className="project-image">
                <img
                  src="/Images/projects/react-ecommerce.jpeg"
                  alt="Full-Stack E-Commerce Platform preview"
                />
              </div>
              <div className="project-content">
                <h3 className="project-title">
                  Full-Stack E-Commerce Platform with Automated Testing
                </h3>
                <p className="project-description">
                  Created a full-stack e-commerce SPA with product browsing,
                  cart flow, and checkout, backed by Express APIs and tested
                  with Vitest and React Testing Library.
                </p>
                <div className="project-tech">
                  <span className="tech-tag">React</span>
                  <span className="tech-tag">React Router</span>
                  <span className="tech-tag">Express.js</span>
                  <span className="tech-tag">Axios</span>
                  <span className="tech-tag">Vitest</span>
                  <span className="tech-tag">React Testing Library</span>
                  <span className="tech-tag">Vite</span>
                </div>
                <div className="project-links">
                  <a
                    href="https://github.com/Tharindu-Nimsara/React_Ecommerce_project"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fab fa-github"></i> GitHub
                  </a>
                </div>
              </div>
            </div>

            <div className="project-card fade-in">
              <div className="project-image">
                <img
                  src="/Images/projects/ML-sentiment.jpeg"
                  alt="Machine Learning Sentiment Analysis preview"
                />
              </div>
              <div className="project-content">
                <h3 className="project-title">
                  Machine Learning - Sentiment Analysis
                </h3>
                <p className="project-description">
                  Built an end-to-end sentiment analysis web app that classifies
                  user comments in real time, from data prep to deployment.
                </p>
                <div className="project-tech">
                  <span className="tech-tag">Python</span>
                  <span className="tech-tag">Scikit-learn</span>
                  <span className="tech-tag">Flask</span>
                  <span className="tech-tag">Bootstrap</span>
                  <span className="tech-tag">Pandas</span>
                  <span className="tech-tag">NLTK</span>
                </div>
                <div className="project-links">
                  <a
                    href="https://github.com/Tharindu-Nimsara/Machine_learning_sentiment_Analysis"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fab fa-github"></i> GitHub
                  </a>
                </div>
              </div>
            </div>

            <div className="project-card fade-in">
              <div className="project-image">
                <i className="fas fa-robot"></i>
              </div>
              <div className="project-content">
                <h3 className="project-title">
                  AI Agent for Research Assistance
                </h3>
                <p className="project-description">
                  Developed an AI research assistant with LangChain, Claude, and
                  GPT support, integrated with live web and Wikipedia tools for
                  faster knowledge retrieval.
                </p>
                <div className="project-tech">
                  <span className="tech-tag">Python</span>
                  <span className="tech-tag">LangChain</span>
                  <span className="tech-tag">Claude 3.5</span>
                  <span className="tech-tag">GPT-3.5</span>
                  <span className="tech-tag">Pydantic</span>
                </div>
                <div className="project-links">
                  <a
                    href="https://github.com/Tharindu-Nimsara"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fab fa-github"></i> GitHub
                  </a>
                </div>
              </div>
            </div>

            <div className="project-card fade-in">
              <div className="project-image">
                <img
                  src="/Images/projects/flutter-todo.jpeg"
                  alt="Flutter ToDo App preview"
                />
              </div>
              <div className="project-content">
                <h3 className="project-title">Flutter ToDo App</h3>
                <p className="project-description">
                  Built a Flutter task manager with add, complete, and delete
                  actions, using Hive for local persistence and smooth UX.
                </p>
                <div className="project-tech">
                  <span className="tech-tag">Flutter</span>
                  <span className="tech-tag">Dart</span>
                  <span className="tech-tag">Hive</span>
                  <span className="tech-tag">Material Design</span>
                </div>
                <div className="project-links">
                  <a
                    href="https://github.com/Tharindu-Nimsara/flutter_todo_app"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fab fa-github"></i> GitHub
                  </a>
                </div>
              </div>
            </div>

            <div className="project-card fade-in">
              <div className="project-image">
                <img
                  src="/Images/projects/travel-ui.jpeg"
                  alt="Travel App UI Design preview"
                />
              </div>
              <div className="project-content">
                <h3 className="project-title">Travel App UI Design</h3>
                <p className="project-description">
                  Recreated a modern travel app interface in Figma with strong
                  focus on layout, typography, and clean mobile-first UI/UX
                  design principles.
                </p>
                <div className="project-tech">
                  <span className="tech-tag">Figma</span>
                  <span className="tech-tag">UI/UX Design</span>
                  <span className="tech-tag">Prototyping</span>
                </div>
                <div className="project-links">
                  <a
                    href="https://github.com/Tharindu-Nimsara"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fas fa-external-link-alt"></i> View Design
                  </a>
                </div>
              </div>
            </div>

            <div className="project-card fade-in">
              <div className="project-image">
                <img
                  src="/Images/projects/weather-app.jpeg"
                  alt="Responsive Weather App preview"
                />
              </div>
              <div className="project-content">
                <h3 className="project-title">Responsive Weather App</h3>
                <p className="project-description">
                  Built a responsive weather app using JavaScript and live API
                  data, with dynamic weather states and mobile-friendly
                  interactions.
                </p>
                <div className="project-tech">
                  <span className="tech-tag">HTML</span>
                  <span className="tech-tag">CSS</span>
                  <span className="tech-tag">JavaScript</span>
                  <span className="tech-tag">Weather API</span>
                </div>
                <div className="project-links">
                  <a
                    href="https://github.com/Tharindu-Nimsara"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fab fa-github"></i> GitHub
                  </a>
                  <a href="#" target="_blank" rel="noreferrer">
                    <i className="fas fa-external-link-alt"></i> Live Demo
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="section">
        <div className="container">
          <h2 className="section-title">Technical Skills</h2>
          <div className="tech-skills-grid">
            <div className="skill-card">
              <i className="fab fa-react skill-logo"></i>
              <h4>React</h4>
              <div className="skill-bar">
                <div
                  className="skill-progress"
                  style={{ "--skill-width": "95%" }}
                  data-width="95"
                ></div>
              </div>
            </div>
            <div className="skill-card">
              <i className="fas fa-layer-group skill-logo"></i>
              <h4>Next.js</h4>
              <div className="skill-bar">
                <div
                  className="skill-progress"
                  style={{ "--skill-width": "90%" }}
                  data-width="90"
                ></div>
              </div>
            </div>
            <div className="skill-card">
              <i className="fab fa-node-js skill-logo"></i>
              <h4>Express.js</h4>
              <div className="skill-bar">
                <div
                  className="skill-progress"
                  style={{ "--skill-width": "85%" }}
                  data-width="85"
                ></div>
              </div>
            </div>
            <div className="skill-card">
              <i className="fas fa-leaf skill-logo"></i>
              <h4>Spring Boot</h4>
              <div className="skill-bar">
                <div
                  className="skill-progress"
                  style={{ "--skill-width": "80%" }}
                  data-width="80"
                ></div>
              </div>
            </div>
            <div className="skill-card">
              <i className="fas fa-database skill-logo"></i>
              <h4>PostgreSQL</h4>
              <div className="skill-bar">
                <div
                  className="skill-progress"
                  style={{ "--skill-width": "85%" }}
                  data-width="85"
                ></div>
              </div>
            </div>
            <div className="skill-card">
              <i className="fab fa-js skill-logo"></i>
              <h4>JavaScript</h4>
              <div className="skill-bar">
                <div
                  className="skill-progress"
                  style={{ "--skill-width": "95%" }}
                  data-width="95"
                ></div>
              </div>
            </div>
            <div className="skill-card">
              <i className="fab fa-python skill-logo"></i>
              <h4>Python</h4>
              <div className="skill-bar">
                <div
                  className="skill-progress"
                  style={{ "--skill-width": "80%" }}
                  data-width="80"
                ></div>
              </div>
            </div>
            <div className="skill-card">
              <i className="fab fa-java skill-logo"></i>
              <h4>Java</h4>
              <div className="skill-bar">
                <div
                  className="skill-progress"
                  style={{ "--skill-width": "80%" }}
                  data-width="80"
                ></div>
              </div>
            </div>
            <div className="skill-card">
              <i className="fas fa-link skill-logo"></i>
              <h4>LangChain &amp; LLMs</h4>
              <div className="skill-bar">
                <div
                  className="skill-progress"
                  style={{ "--skill-width": "75%" }}
                  data-width="75"
                ></div>
              </div>
            </div>
            <div className="skill-card">
              <i className="fas fa-pen-ruler skill-logo"></i>
              <h4>UI/UX Design</h4>
              <div className="skill-bar">
                <div
                  className="skill-progress"
                  style={{ "--skill-width": "90%" }}
                  data-width="90"
                ></div>
              </div>
            </div>
            <div className="skill-card">
              <i className="fas fa-mobile-screen-button skill-logo"></i>
              <h4>Flutter</h4>
              <div className="skill-bar">
                <div
                  className="skill-progress"
                  style={{ "--skill-width": "75%" }}
                  data-width="75"
                ></div>
              </div>
            </div>
            <div className="skill-card">
              <i className="fab fa-git-alt skill-logo"></i>
              <h4>Git &amp; Version Control</h4>
              <div className="skill-bar">
                <div
                  className="skill-progress"
                  style={{ "--skill-width": "95%" }}
                  data-width="95"
                ></div>
              </div>
            </div>
          </div>
          <div className="additional-tech">
            <h3>Additional Technologies &amp; Tools</h3>
            <div className="additional-tech-list">
              <span>MongoDB</span>
              <span>PostgreSQL</span>
              <span>Docker</span>
              <span>AWS</span>
              <span>Vercel</span>
              <span>Netlify</span>
              <span>Figma</span>
              <span>VS Code</span>
              <span>Postman</span>
              <span>Electron</span>
            </div>
          </div>
        </div>
      </section>

      <section id="experience" className="section">
        <div className="container">
          <h2 className="section-title">Experience</h2>
          <div className="timeline">
            <div className="timeline-item">
              <h4>Webmaster and Social Media Coordinator</h4>
              <div className="company">
                IEEE Young Professionals Sri Lanka (AI Driven SL) - Part-time
              </div>
              <div className="duration">March 2026 - Present</div>
              <div className="description">
                Webmaster and Social Media Coordinator of the AI Driven Sri
                Lanka project by IEEE Young Professionals Sri Lanka, responsible
                for managing the website, handling digital platforms, and
                coordinating the project&apos;s social media presence in
                Colombo, Western Province, Sri Lanka (Hybrid).
              </div>
            </div>
            <div className="timeline-item">
              <h4>Head of Design</h4>
              <div className="company">
                IEEE Student Branch - University of Sri Jayewardenepura
              </div>
              <div className="duration">January 2025 - Present</div>
              <div className="description">
                Leading design initiatives for Term 24/25, bringing creativity
                and innovation to content and design, ensuring every detail
                reflects the vision of our branch.
              </div>
            </div>
            <div className="timeline-item">
              <h4>Chief Editor</h4>
              <div className="company">
                Association of Computing Students - University of Sri
                Jayewardenepura
              </div>
              <div className="duration">June 2025 - Present</div>
              <div className="description">
                Leading editorial responsibilities and overseeing content
                creation for the computing students association. Also served as
                Designing &amp; Marketing Head at TechXplore 1.0.
              </div>
            </div>
            <div className="timeline-item">
              <h4>University Ambassador</h4>
              <div className="company">IEEE IAS Sri Lanka Chapter</div>
              <div className="duration">June 2025 - Present</div>
              <div className="description">
                Representing the IEEE Industry Applications Society at the
                university level, promoting industry-academia collaboration.
              </div>
            </div>
            <div className="timeline-item">
              <h4>Design &amp; Content Team Lead - RTL 2.0</h4>
              <div className="company">IT LEGACY</div>
              <div className="duration">February 2025 - June 2025</div>
              <div className="description">
                Led the design and content team for RTL 2.0, managing creative
                projects and ensuring high-quality deliverables.
              </div>
            </div>
            <div className="timeline-item">
              <h4>Designing &amp; Marketing Committee Member</h4>
              <div className="company">
                IEEE Student Branch - University of Sri Jayewardenepura
              </div>
              <div className="duration">August 2024 - January 2025</div>
              <div className="description">
                • Designing &amp; Marketing Committee member at
                J&apos;puraXtreme 1.0 Hackathon
                <br />
                • Designing &amp; Marketing Head at IEEEXTREME 18.0
                <br />• Designing &amp; Marketing Member at Evolve 1.0
              </div>
            </div>
            <div className="timeline-item">
              <h4>Co-Founder</h4>
              <div className="company">Blite Photography</div>
              <div className="duration">May 2021 - Present</div>
              <div className="description">
                Co-founded and manage a photography business, handling both
                creative and business aspects of the venture.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="achievements" className="section">
        <div className="container">
          <h2 className="section-title">Certifications 📋</h2>
          <div className="certifications-list">
            <div className="certification-item fade-in">
              <div className="cert-logo">
                <i className="fab fa-aws"></i>
              </div>
              <div className="cert-info">
                <h4 className="cert-title">AWS Cloud Technical Essentials</h4>
                <p className="cert-issuer">Coursera</p>
                <p className="cert-date">Issued Mar 2024</p>
              </div>
              <a
                href="https://www.coursera.org/account/accomplishments/verify/NCN46AH2K2GN?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=pdf_header_button&utm_product=course"
                target="_blank"
                rel="noreferrer"
                className="cert-link-btn"
              >
                <i className="fas fa-external-link-alt"></i> Show credential
              </a>
            </div>

            <div className="certification-item fade-in">
              <div className="cert-logo">
                <i className="fas fa-chart-bar"></i>
              </div>
              <div className="cert-info">
                <h4 className="cert-title">Data Science Orientation</h4>
                <p className="cert-issuer">Coursera</p>
                <p className="cert-date">Issued Feb 2024</p>
              </div>
              <a
                href="https://www.credly.com/badges/40311516-8144-4650-94b3-505ecaf108e2/linked_in_profile"
                target="_blank"
                rel="noreferrer"
                className="cert-link-btn"
              >
                <i className="fas fa-external-link-alt"></i> Show credential
              </a>
            </div>

            <div className="certification-item fade-in">
              <div className="cert-logo">
                <i className="fas fa-graduation-cap"></i>
              </div>
              <div className="cert-info">
                <h4 className="cert-title">Python for Beginners</h4>
                <p className="cert-issuer">University of Moratuwa</p>
                <p className="cert-date">Issued Oct 2024</p>
              </div>
              <a
                href="https://open.uom.lk/lms/login/index.php"
                target="_blank"
                rel="noreferrer"
                className="cert-link-btn"
              >
                <i className="fas fa-external-link-alt"></i> Show credential
              </a>
            </div>

            <div className="certification-item fade-in">
              <div className="cert-logo">
                <i className="fab fa-git"></i>
              </div>
              <div className="cert-info">
                <h4 className="cert-title">Version Control</h4>
                <p className="cert-issuer">Meta</p>
                <p className="cert-date">Issued Jun 2025</p>
                <p className="cert-credential">Credential ID TGJCTSVACZZE</p>
              </div>
              <a
                href="https://www.coursera.org/account/accomplishments/verify/TGJTCSVACZZE"
                target="_blank"
                rel="noreferrer"
                className="cert-link-btn"
              >
                <i className="fas fa-external-link-alt"></i> Show credential
              </a>
            </div>

            <div className="certification-item fade-in">
              <div className="cert-logo">
                <i className="fab fa-meta"></i>
              </div>
              <div className="cert-info">
                <h4 className="cert-title">
                  Introduction to Social Media Marketing
                </h4>
                <p className="cert-issuer">Meta</p>
                <p className="cert-date">Issued Apr 2025</p>
                <p className="cert-credential">Credential ID MWQNSZXS2V35</p>
              </div>
              <a
                href="https://www.coursera.org/account/accomplishments/verify/MWQNSZX52V35"
                target="_blank"
                rel="noreferrer"
                className="cert-link-btn"
              >
                <i className="fas fa-external-link-alt"></i> Show credential
              </a>
            </div>

            <div className="certification-item fade-in">
              <div className="cert-logo">
                <i className="fas fa-brain"></i>
              </div>
              <div className="cert-info">
                <h4 className="cert-title">Edge AI Fundamentals</h4>
                <p className="cert-issuer">Edge Impulse</p>
                <p className="cert-date">Issued Mar 2026</p>
                <p className="cert-credential">Credential ID Y3MC0DXLPVVZ</p>
              </div>
              <a
                href="https://www.coursera.org/account/accomplishments/verify/Y3MC0DXLPVVZ"
                target="_blank"
                rel="noreferrer"
                className="cert-link-btn"
              >
                <i className="fas fa-external-link-alt"></i> Show credential
              </a>
            </div>

            <div className="certification-item fade-in">
              <div className="cert-logo">
                <i className="fas fa-graduation-cap"></i>
              </div>
              <div className="cert-info">
                <h4 className="cert-title">IEEEXtreme 18.0 Hackathon</h4>
                <p className="cert-issuer">IEEE</p>
                <p className="cert-date">Issued 2024</p>
              </div>
            </div>

            <div className="certification-item fade-in">
              <div className="cert-logo">
                <i className="fab fa-java"></i>
              </div>
              <div className="cert-info">
                <h4 className="cert-title">Java Programming Master</h4>
                <p className="cert-issuer">Evotech Education</p>
                <p className="cert-date">Issued 2024</p>
              </div>
            </div>

            <div className="certification-item fade-in">
              <div className="cert-logo">
                <i className="fab fa-python"></i>
              </div>
              <div className="cert-info">
                <h4 className="cert-title">
                  Python Programming Certifications
                </h4>
                <p className="cert-issuer">
                  University of Moratuwa &amp; Sri Jayewardenepura
                </p>
                <p className="cert-date">Issued 2024</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="activities" className="section">
        <div className="container">
          <h2 className="section-title">Extra-Curricular Activities</h2>
          <div className="activities-grid">
            <div className="activity-card fade-in">
              <h4>IEEE Student Branch Leadership</h4>
              <p>
                Active member and leader in the IEEE Student Branch, serving as
                Head of Design and contributing to various technical events and
                hackathons.
              </p>
            </div>
            <div className="activity-card fade-in">
              <h4>Association of Computing Students</h4>
              <p>
                Chief Editor and active member of the Computing Students
                Association, organizing technical events like TechXplore 1.0.
              </p>
            </div>
            <div className="activity-card fade-in">
              <h4>Photography &amp; Visual Arts</h4>
              <p>
                Co-founder of Blite Photography and former Program Coordinator
                of the Photographic Society, combining technical skills with
                creative expression.
              </p>
            </div>
            <div className="activity-card fade-in">
              <h4>Hackathons &amp; Competitions</h4>
              <p>
                Participated in various programming competitions including
                IEEEXtreme 18.0 and organized technical events like
                J&apos;puraXtreme 1.0.
              </p>
            </div>
            <div className="activity-card fade-in">
              <h4>Design &amp; Marketing</h4>
              <p>
                Led design and marketing initiatives for multiple tech events,
                combining creativity with strategic communication.
              </p>
            </div>
            <div className="activity-card fade-in">
              <h4>Content Creation</h4>
              <p>
                Experience in content creation and editorial work, managing
                communications and promotional materials for various
                organizations.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="cv" className="section">
        <div className="container">
          <div className="cv-section">
            <h2>Download My CV</h2>
            <p>
              Get a complete overview of my experience, skills, and achievements
              in a comprehensive PDF format.
            </p>
            <a href="/assets/CV-Tharindu.pdf" download className="download-btn">
              <i className="fas fa-download"></i>
              Download CV (PDF)
            </a>
          </div>
        </div>
      </section>

      <section id="contact" className="section">
        <div className="container">
          <h2 className="section-title">Get In Touch</h2>
          <div className="contact-grid">
            <div className="contact-card fade-in">
              <i className="fas fa-envelope"></i>
              <h4>Email</h4>
              <a href="mailto:tharindunimsara42@gmail.com">
                tharindunimsara42@gmail.com
              </a>
            </div>
            <div className="contact-card fade-in">
              <i className="fas fa-mobile-alt"></i>
              <h4>Phone</h4>
              <a href="tel:+94702287863">+94 70 228 7863</a>
            </div>
            <div className="contact-card fade-in">
              <i className="fab fa-linkedin-in"></i>
              <h4>LinkedIn</h4>
              <a
                href="https://www.linkedin.com/in/tharindu-nimsara-waidyathilake-578a112a0/"
                target="_blank"
                rel="noreferrer"
              >
                Connect with me
              </a>
            </div>
            <div className="contact-card fade-in">
              <i className="fab fa-github"></i>
              <h4>GitHub</h4>
              <a
                href="https://github.com/Tharindu-Nimsara"
                target="_blank"
                rel="noreferrer"
              >
                View my repositories
              </a>
            </div>
            <div className="contact-card fade-in">
              <i className="fas fa-map-marker-alt"></i>
              <h4>Location</h4>
              <p>Colombo District, Western Province, Sri Lanka</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <div className="social-links">
            <a
              href="https://www.linkedin.com/in/tharindunimsara-waidyathilake-578a112a0"
              target="_blank"
              title="LinkedIn"
              rel="noreferrer"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a
              href="https://github.com/Tharindu-Nimsara"
              target="_blank"
              title="GitHub"
              rel="noreferrer"
            >
              <i className="fab fa-github"></i>
            </a>
            <a href="mailto:tharindunimsara42@gmail.com" title="Email">
              <i className="fas fa-envelope"></i>
            </a>
            <a href="tel:+94702287863" title="Phone">
              <i className="fas fa-mobile-alt"></i>
            </a>
          </div>
          <p>
            &copy; 2026 Tharindu Nimsara Waidyathilake. All rights reserved.
          </p>
          <p>Built with passion using React Js</p>
        </div>
      </footer>
    </>
  );
}
