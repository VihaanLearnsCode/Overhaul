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
              <span className="text-2xl font-bold text-gray-900">VK</span>
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
          <div className="bg-teal-900/90 backdrop-blur-md rounded-2xl p-8 shadow-2xl border border-teal-800/50">
            <span className="text-5xl md:text-7xl font-bold text-teal-50 mb-6 nice-font">
              Hi, I'm <span className="text-teal-300">Vihaan Khare</span>
            </span>
            <p className="text-xl md:text-2xl text-teal-100 mb-8 nice-font">
              Full-Stack Developer & Creative Technologist
            </p>
            <p className="text-lg text-teal-200 mb-8 max-w-2xl mx-auto nice-font">
              I build beautiful, functional web applications with modern technologies. 
              Passionate about creating exceptional user experiences and solving complex problems.
            </p>
          </div>
          
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#projects" 
              className="bg-white hover:bg-teal-500 text-gray-800 hover:text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              View My Work
            </a>
          </div>
          
          <button 
            className="mt-4 bg-white hover:bg-teal-500 text-gray-800 hover:text-white font-medium py-3 px-6 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            onClick={() => window.open('https://en.wikipedia.org/wiki/L-system', '_blank')}
          >
            Curious about the background? Click here!
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-teal-800/90 backdrop-blur-md rounded-2xl p-8 shadow-2xl border border-teal-700/50">
            <h2 className="text-4xl font-bold text-teal-50 text-center mb-16 nice-font">About Me</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg text-teal-100 mb-6 nice-font">
                  I'm a passionate developer with expertise in modern web technologies. 
                  I love turning ideas into reality through clean, efficient code and thoughtful design.
                </p>
                <p className="text-lg text-teal-100 mb-8 nice-font">
                  My journey in tech started with curiosity and has evolved into a career 
                  focused on building impactful digital experiences.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-teal-700/80 backdrop-blur-sm border border-teal-600 p-4 rounded-lg shadow-sm">
                    <h3 className="text-teal-300 font-semibold mb-2 nice-font">Frontend</h3>
                    <p className="text-teal-200 text-sm nice-font">React, Vue, TypeScript, Tailwind CSS</p>
                  </div>
                  <div className="bg-teal-700/80 backdrop-blur-sm border border-teal-600 p-4 rounded-lg shadow-sm">
                    <h3 className="text-teal-300 font-semibold mb-2 nice-font">Backend</h3>
                    <p className="text-teal-200 text-sm nice-font">Node.js, Python, PostgreSQL, MongoDB</p>
                  </div>
                  <div className="bg-teal-700/80 backdrop-blur-sm border border-teal-600 p-4 rounded-lg shadow-sm">
                    <h3 className="text-teal-300 font-semibold mb-2 nice-font">Tools</h3>
                    <p className="text-teal-200 text-sm nice-font">Git, Docker, AWS, Vercel</p>
                  </div>
                  <div className="bg-teal-700/80 backdrop-blur-sm border border-teal-600 p-4 rounded-lg shadow-sm">
                    <h3 className="text-teal-300 font-semibold mb-2 nice-font">Design</h3>
                    <p className="text-teal-200 text-sm nice-font">Figma, Adobe XD, Responsive Design</p>
                  </div>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="w-64 h-64 bg-gradient-to-br from-teal-600 to-teal-700 rounded-full flex items-center justify-center shadow-xl">
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
          <div className="bg-teal-700/90 backdrop-blur-md rounded-2xl p-8 shadow-2xl border border-teal-600/50">
            <h2 className="text-4xl font-bold text-teal-50 text-center mb-16 nice-font">Featured Projects</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-teal-600/90 backdrop-blur-sm border border-teal-500 rounded-lg p-6 hover:transform hover:scale-105 transition-all shadow-lg hover:shadow-xl">
                <div className="h-40 bg-gradient-to-br from-teal-500 to-teal-600 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-4xl">🚀</span>
                </div>
                <h3 className="text-xl font-semibold text-teal-50 mb-2 nice-font">Project Alpha</h3>
                <p className="text-teal-100 mb-4 nice-font">A modern web application built with React and Node.js, featuring real-time data synchronization.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs bg-teal-500 text-teal-50 px-2 py-1 rounded-full nice-font">React</span>
                  <span className="text-xs bg-teal-600 text-teal-50 px-2 py-1 rounded-full nice-font">Node.js</span>
                  <span className="text-xs bg-teal-500 text-teal-50 px-2 py-1 rounded-full nice-font">MongoDB</span>
                </div>
              </div>
              
              <div className="bg-teal-600/90 backdrop-blur-sm border border-teal-500 rounded-lg p-6 hover:transform hover:scale-105 transition-all shadow-lg hover:shadow-xl">
                <div className="h-40 bg-gradient-to-br from-teal-500 to-teal-600 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-4xl">📱</span>
                </div>
                <h3 className="text-xl font-semibold text-teal-50 mb-2 nice-font">Mobile App</h3>
                <p className="text-teal-100 mb-4 nice-font">Cross-platform mobile application with offline support and push notifications.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs bg-teal-500 text-teal-50 px-2 py-1 rounded-full nice-font">React Native</span>
                  <span className="text-xs bg-teal-600 text-teal-50 px-2 py-1 rounded-full nice-font">Firebase</span>
                </div>
              </div>
              
              <div className="bg-teal-600/90 backdrop-blur-sm border border-teal-500 rounded-lg p-6 hover:transform hover:scale-105 transition-all shadow-lg hover:shadow-xl">
                <div className="h-40 bg-gradient-to-br from-teal-500 to-teal-600 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-4xl">🤖</span>
                </div>
                <h3 className="text-xl font-semibold text-teal-50 mb-2 nice-font">AI Platform</h3>
                <p className="text-teal-100 mb-4 nice-font">Machine learning platform for data analysis and predictive modeling.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs bg-teal-500 text-teal-50 px-2 py-1 rounded-full nice-font">Python</span>
                  <span className="text-xs bg-teal-600 text-teal-50 px-2 py-1 rounded-full nice-font">TensorFlow</span>
                  <span className="text-xs bg-teal-500 text-teal-50 px-2 py-1 rounded-full nice-font">FastAPI</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-teal-600/90 backdrop-blur-md rounded-2xl p-8 shadow-2xl border border-teal-500/50">
            <h2 className="text-4xl font-bold text-teal-50 text-center mb-8 nice-font">Let's Connect</h2>
            <p className="text-xl text-teal-100 mb-12 nice-font">
              I'm always interested in hearing about new projects and opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <a href="mailto:vihaan@example.com" className="bg-teal-500/90 backdrop-blur-sm border border-teal-400 px-6 py-3 rounded-lg text-teal-50 hover:bg-teal-400/90 transition-all shadow-sm nice-font">
                📧 vihaan@example.com
              </a>
              <a href="https://github.com/VihaanLearnsCode" className="bg-teal-500/90 backdrop-blur-sm border border-teal-400 px-6 py-3 rounded-lg text-teal-50 hover:bg-teal-400/90 transition-all shadow-sm nice-font">
                💻 github.com/VihaanLearnsCode
              </a>
              <a href="https://linkedin.com/in/vihaank" className="bg-teal-500/90 backdrop-blur-sm border border-teal-400 px-6 py-3 rounded-lg text-teal-50 hover:bg-teal-400/90 transition-all shadow-sm nice-font">
                💼 linkedin.com/in/vihaank
              </a>
            </div>
            <div className="flex justify-center gap-4">
              <a href="https://github.com/VihaanLearnsCode" className="w-12 h-12 bg-teal-500 hover:bg-teal-400 rounded-full flex items-center justify-center text-white transition-all shadow-lg">
                G
              </a>
              <a href="https://linkedin.com/in/vihaank" className="w-12 h-12 bg-teal-600 hover:bg-teal-500 rounded-full flex items-center justify-center text-white transition-all shadow-lg">
                in
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
