import { useState } from 'react'
import './App.css'
import PlantBackground from './components/PlantBackground'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
      <PlantBackground />
      <div className="min-h-screen" style={{ backgroundColor: 'transparent' }}>
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass-effect">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <span className="text-2xl font-bold text-gray-900 nice-font">VK</span>
            </div>
            
            {/* Desktop Menu */} 
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="#home" className="text-gray-900 hover:text-teal-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">Home</a>
                <a href="#about" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors">About</a>
                <a href="#projects" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors">Projects</a>
                <a href="#contact" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors">Contact</a>
              </div>
            </div>
            
            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-900 hover:text-blue-600 p-2"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {isMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden glass-effect">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#home" className="text-gray-900 hover:text-teal-600 block px-3 py-2 rounded-md text-base font-medium">Home</a>
              <a href="#about" className="text-gray-600 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium">About</a>
              <a href="#projects" className="text-gray-600 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium">Projects</a>
              <a href="#contact" className="text-gray-600 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium">Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 min-h-screen flex items-center justify-center px-4">
        <div className="text-center max-w-4xl">
          <div className="bg-yellow-100/95 backdrop-blur-md rounded-2xl p-8 shadow-2xl border border-yellow-200/50">
            <span className="text-5xl md:text-7xl font-bold text-yellow-900 mb-6 nice-font">
              Hi, I'm <span className="text-amber-700">Vihaan Khare</span>
            </span>
            <p className="text-xl md:text-2xl text-yellow-800 mb-8 nice-font">
              Full-Stack Developer & Creative Technologist
            </p>
            <p className="text-lg text-yellow-700 mb-8 max-w-2xl mx-auto nice-font">
              I build beautiful, functional web applications with modern technologies. 
              Passionate about creating exceptional user experiences and solving complex problems.
            </p>
          </div>
          
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#projects" 
              className="bg-white hover:bg-teal-500 text-gray-800 hover:text-white font-medium py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl nice-font"
            >
              View My Work
            </a>
          </div>
          
          <button 
            className="mt-4 bg-white hover:bg-teal-500 text-gray-800 hover:text-white font-medium py-3 px-6 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 nice-font"
            onClick={() => window.open('https://en.wikipedia.org/wiki/L-system', '_blank')}
          >
            Curious about the background? Click here!
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-yellow-50/95 backdrop-blur-md rounded-2xl p-8 shadow-2xl border border-yellow-100/50">
            <h2 className="text-4xl font-bold text-yellow-900 text-center mb-16 nice-font">About Me</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg text-yellow-800 mb-6 nice-font">
                  I'm a passionate developer with expertise in modern web technologies. 
                  I love turning ideas into reality through clean, efficient code and thoughtful design.
                </p>
                <p className="text-lg text-yellow-800 mb-8 nice-font">
                  My journey in tech started with curiosity and has evolved into a career 
                  focused on building impactful digital experiences.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-yellow-100/80 backdrop-blur-sm p-4 rounded-lg shadow-sm">
                    <h3 className="text-yellow-700 font-semibold mb-2 nice-font">Frontend</h3>
                    <p className="text-yellow-600 text-sm nice-font">React, Vue, TypeScript, Tailwind CSS</p>
                  </div>
                  <div className="bg-yellow-100/80 backdrop-blur-sm p-4 rounded-lg shadow-sm">
                    <h3 className="text-yellow-700 font-semibold mb-2 nice-font">Backend</h3>
                    <p className="text-yellow-600 text-sm nice-font">Node.js, Python, PostgreSQL, MongoDB</p>
                  </div>
                  <div className="bg-yellow-100/80 backdrop-blur-sm p-4 rounded-lg shadow-sm">
                    <h3 className="text-yellow-700 font-semibold mb-2 nice-font">Tools</h3>
                    <p className="text-yellow-600 text-sm nice-font">Git, Docker, AWS, Vercel</p>
                  </div>
                  <div className="bg-yellow-100/80 backdrop-blur-sm p-4 rounded-lg shadow-sm">
                    <h3 className="text-yellow-700 font-semibold mb-2 nice-font">Design</h3>
                    <p className="text-yellow-600 text-sm nice-font">Figma, Adobe XD, Responsive Design</p>
                  </div>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="w-64 h-64 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center shadow-xl">
                  <span className="text-6xl">👨‍💻</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-yellow-50/95 backdrop-blur-md rounded-2xl p-8 shadow-2xl border border-yellow-100/50">
            <h2 className="text-4xl font-bold text-yellow-900 text-center mb-16 nice-font">Featured Projects</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-yellow-100/90 backdrop-blur-sm rounded-lg p-6 hover:transform hover:scale-105 transition-all shadow-lg hover:shadow-xl">
                <div className="h-40 bg-gradient-to-br from-yellow-300 to-yellow-400 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-4xl">🚀</span>
                </div>
                <h3 className="text-xl font-semibold text-yellow-900 mb-2 nice-font">Project Alpha</h3>
                <p className="text-yellow-800 mb-4 nice-font">A modern web application built with React and Node.js, featuring real-time data synchronization.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs bg-yellow-300 text-yellow-900 px-2 py-1 rounded-full nice-font">React</span>
                  <span className="text-xs bg-yellow-400 text-yellow-900 px-2 py-1 rounded-full nice-font">Node.js</span>
                  <span className="text-xs bg-yellow-300 text-yellow-900 px-2 py-1 rounded-full nice-font">MongoDB</span>
                </div>
              </div>
              
              <div className="bg-yellow-100/90 backdrop-blur-sm rounded-lg p-6 hover:transform hover:scale-105 transition-all shadow-lg hover:shadow-xl">
                <div className="h-40 bg-gradient-to-br from-yellow-300 to-yellow-400 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-4xl">📱</span>
                </div>
                <h3 className="text-xl font-semibold text-yellow-900 mb-2 nice-font">Mobile App</h3>
                <p className="text-yellow-800 mb-4 nice-font">Cross-platform mobile application with offline support and push notifications.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs bg-yellow-300 text-yellow-900 px-2 py-1 rounded-full nice-font">React Native</span>
                  <span className="text-xs bg-yellow-400 text-yellow-900 px-2 py-1 rounded-full nice-font">Firebase</span>
                </div>
              </div>
              
              <div className="bg-yellow-100/90 backdrop-blur-sm rounded-lg p-6 hover:transform hover:scale-105 transition-all shadow-lg hover:shadow-xl">
                <div className="h-40 bg-gradient-to-br from-yellow-300 to-yellow-400 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-4xl">🤖</span>
                </div>
                <h3 className="text-xl font-semibold text-yellow-900 mb-2 nice-font">AI Platform</h3>
                <p className="text-yellow-800 mb-4 nice-font">Machine learning platform for data analysis and predictive modeling.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs bg-yellow-300 text-yellow-900 px-2 py-1 rounded-full nice-font">Python</span>
                  <span className="text-xs bg-yellow-400 text-yellow-900 px-2 py-1 rounded-full nice-font">TensorFlow</span>
                  <span className="text-xs bg-yellow-300 text-yellow-900 px-2 py-1 rounded-full nice-font">FastAPI</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-yellow-50/95 backdrop-blur-md rounded-2xl p-8 shadow-2xl border border-yellow-100/50">
            <h2 className="text-4xl font-bold text-yellow-900 text-center mb-8 nice-font">Let's Connect</h2>
            <p className="text-xl text-yellow-800 mb-12 nice-font">
              I'm always interested in hearing about new projects and opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <a href="mailto:vihaan@example.com" className="bg-yellow-200/90 backdrop-blur-sm border border-yellow-300 px-6 py-3 rounded-lg text-yellow-900 hover:bg-yellow-300/90 transition-all shadow-sm nice-font">
                📧 vihaan@example.com
              </a>
              <a href="https://github.com/VihaanLearnsCode" className="bg-yellow-200/90 backdrop-blur-sm border border-yellow-300 px-6 py-3 rounded-lg text-yellow-900 hover:bg-yellow-300/90 transition-all shadow-sm nice-font">
                💻 github.com/VihaanLearnsCode
              </a>
              <a href="https://linkedin.com/in/vihaank" className="bg-yellow-200/90 backdrop-blur-sm border border-yellow-300 px-6 py-3 rounded-lg text-yellow-900 hover:bg-yellow-300/90 transition-all shadow-sm nice-font">
                💼 linkedin.com/in/vihaank
              </a>
            </div>
            <div className="flex justify-center gap-4">
              <a href="https://github.com/VihaanLearnsCode" className="w-12 h-12 bg-yellow-400 hover:bg-yellow-300 rounded-full flex items-center justify-center text-white transition-all shadow-lg">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-.908 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a href="https://linkedin.com/in/vihaank" className="w-12 h-12 bg-yellow-500 hover:bg-yellow-400 rounded-full flex items-center justify-center text-white transition-all shadow-lg">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-teal-500/80 backdrop-blur-sm border-t border-teal-400 py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-teal-50 nice-font">
            © 2026 Vihaan Khare
          </p>
        </div>
      </footer>
    </div>
    </>
  )
}

export default App
