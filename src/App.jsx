import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Github, Linkedin, Mail, MapPin, ExternalLink, Code, Brain, GraduationCap, Award } from 'lucide-react'
import './App.css'

function App() {

  const [darkMode, setDarkMode] = useState(true)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  const projects = [
    {
      name: "dog-v-cat",
      description: "Projeto final do LAMIA - Machine Learning model for classifying dogs vs cats using computer vision techniques.",
      language: "Jupyter Notebook",
      technologies: ["Python", "TensorFlow", "Computer Vision", "Machine Learning"],
      github: "https://github.com/noirelab/dog-v-cat"
    },
    {
      name: "Spotify-playlist-downloader",
      description: "Python application for downloading Spotify playlists with automated music retrieval capabilities.",
      language: "Python",
      technologies: ["Python", "Spotify API", "Audio Processing"],
      github: "https://github.com/noirelab/Spotify-playlist-downloader"
    },
    {
      name: "lamia-bootcamp",
      description: "Educational materials and projects from LAMIA bootcamp focusing on machine learning fundamentals.",
      language: "Jupyter Notebook",
      technologies: ["Python", "Machine Learning", "Data Science", "Jupyter"],
      github: "https://github.com/noirelab/lamia-bootcamp"
    },
    {
      name: "ai-agents-fastcamp",
      description: "Implementation of AI agents using modern frameworks and techniques for autonomous task execution.",
      language: "Jupyter Notebook",
      technologies: ["Python", "AI Agents", "LangChain", "Machine Learning"],
      github: "https://github.com/noirelab/ai-agents-fastcamp"
    }
  ]

  const skills = [
    { name: "Python", level: 90 },
    { name: "Jupyter Notebook", level: 95 },
    { name: "Computer Vision", level: 80 },
    { name: "Machine Learning", level: 85 },
    { name: "TensorFlow", level: 70 },
    { name: "Artificial Intelligence", level: 83 },
    { name: "Data Analysis", level: 65 },
    { name: "Azure AI", level: 65 }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-white">noirelab</div>
          <div className="flex items-center space-x-6">
            <a href="#about" className="text-gray-300 hover:text-white transition-colors">About</a>
            <a href="#projects" className="text-gray-300 hover:text-white transition-colors">Projects</a>
            <a href="#experience" className="text-gray-300 hover:text-white transition-colors">Experience</a>
            <a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-6xl font-bold text-white mb-4">
              Kaique Medeiros Lima
            </h1>
            <h2 className="text-2xl text-purple-300 mb-6">
              Machine Learning Developer & Computer Science Student
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Hello, I'm Kaique. I am a Computer Sciences student at UTFPR, primarily using A.I to tackle complex challenges and craft meaningful solutions.
            </p>
            <div className="flex justify-center space-x-4">
              <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3">
                <Github className="mr-2 h-5 w-5" />
                <a href="#projects">View Projects</a>
              </Button>
              <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 px-8 py-3">
                <Mail className="mr-2 h-5 w-5" />
                <a href="#contact">Contact me</a>
              </Button>
            </div>
          </div>
          
          {/* Fun Fact */}
          <div className="mt-12 p-6 bg-black/20 backdrop-blur-sm rounded-lg border border-white/10 max-w-md mx-auto">
            <Code className="h-8 w-8 text-purple-400 mx-auto mb-3" />
            <p className="text-gray-300 text-sm">
              <span className="text-purple-300 font-mono">fun_fact:</span> "noirelab is Balerion backwards"
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-16">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                I'm currently pursuing Computer Science at Universidade Tecnológica Federal do Paraná (UTFPR) 
                and working as a Machine Learning Member at LAMIA. My passion lies in artificial intelligence 
                and machine learning, where I focus on developing innovative solutions to complex problems.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                My interests extend beyond technology to include gaming, gym, motorsports, and music. 
                I believe in continuous learning and staying updated with the latest developments in AI and ML.
              </p>
              <div className="flex flex-wrap gap-3">
                <Badge variant="secondary" className="bg-purple-600/20 text-purple-300 border-purple-600/30">
                  <Brain className="mr-1 h-3 w-3" />
                  Machine Learning
                </Badge>
                <Badge variant="secondary" className="bg-blue-600/20 text-blue-300 border-blue-600/30">
                  <Code className="mr-1 h-3 w-3" />
                  Python
                </Badge>
                <Badge variant="secondary" className="bg-green-600/20 text-green-300 border-green-600/30">
                  <GraduationCap className="mr-1 h-3 w-3" />
                  Computer Science
                </Badge>
              </div>
            </div>
            <div className="space-y-6">
              <Card className="bg-black/20 border-white/10">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <MapPin className="mr-2 h-5 w-5 text-purple-400" />
                    Location
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">Brazil</p>
                </CardContent>
              </Card>
              <Card className="bg-black/20 border-white/10">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <GraduationCap className="mr-2 h-5 w-5 text-purple-400" />
                    Education
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">Computer Science at UTFPR</p>
                  <p className="text-sm text-gray-400">2023 - 2026</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-6 bg-black/10">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-16">Skills & Technologies</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-white font-medium">{skill.name}</span>
                  <span className="text-purple-300">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-purple-500 to-blue-500 h-2 rounded-full transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-16">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="bg-black/20 border-white/10 hover:bg-black/30 transition-all duration-300 group">
                <CardHeader>
                  <CardTitle className="text-white flex items-center justify-between">
                    {project.name}
                    <ExternalLink className="h-5 w-5 text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </CardTitle>
                  <CardDescription className="text-gray-300">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="border-purple-600/30 text-purple-300">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <Button 
                    variant="outline" 
                    className="w-full border-white/20 text-white hover:bg-white/10"
                    onClick={() => window.open(project.github, '_blank')}
                  >
                    <Github className="mr-2 h-4 w-4" />
                    View on GitHub
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6 bg-black/10">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-16">Experience & Education</h2>
          <div className="space-y-8">
            <Card className="bg-black/20 border-white/10">
              <CardHeader>
                <CardTitle className="text-white">Machine Learning Member</CardTitle>
                <CardDescription className="text-purple-300">LAMIA · Jun 2024 - Present · Remote</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">
                  Working on machine learning projects and research, focusing on data analysis and artificial intelligence applications.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="border-purple-600/30 text-purple-300">Computer Vision</Badge>
                  <Badge variant="outline" className="border-purple-600/30 text-purple-300">Machine Learning</Badge>
                  <Badge variant="outline" className="border-purple-600/30 text-purple-300">Artificial Intelligence</Badge>
                  <Badge variant="outline" className="border-purple-600/30 text-purple-300">Data Analysis</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-black/20 border-white/10">
              <CardHeader>
                <CardTitle className="text-white">Digitalizing Assistent</CardTitle>
                <CardDescription className="text-purple-300">Tecfy · Jan 2023 - Mar 2023 · Guaíra, Paraná, Brasil</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Worked on digitalization projects, contributing to the digital transformation initiatives of the company.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-black/20 border-white/10">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Award className="mr-2 h-5 w-5 text-purple-400" />
                  Certifications
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="text-white font-semibold">AI-900 - Microsoft Azure AI Fundamentals</h4>
                  <p className="text-purple-300 text-sm">Fundação Bradesco · May 2025</p>
                  <p className="text-gray-300 text-sm mt-2">
                    Azure Computer Vision, Natural Language Processing, Document Intelligence, and Generative AI fundamentals.
                  </p>
                </div>
                <div>
                  <h4 className="text-white font-semibold">English Language Certificate</h4>
                  <p className="text-purple-300 text-sm">CCAA</p>
                  <p className="text-gray-300 text-sm mt-2">
                    Basic, Intermediary, Advanced and Superior Advanced Level.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-8">Let's Connect</h2>
          <p className="text-gray-300 text-lg mb-12 max-w-2xl mx-auto">
            I'm always interested in discussing new opportunities, collaborations, or just chatting about AI and technology.
          </p>
          <div className="flex justify-center space-x-6">
            <Button 
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3"
              onClick={() => window.open('https://github.com/noirelab', '_blank')}
            >
              <Github className="mr-2 h-5 w-5" />
              GitHub
            </Button>
            <Button 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3"
              onClick={() => window.open('https://www.linkedin.com/in/kaique-lima-6a095a2aa/', '_blank')}
            >
              <Linkedin className="mr-2 h-5 w-5" />
              LinkedIn
            </Button>
            <Button 
              variant="outline" 
              className="border-white/20 text-white hover:bg-white/10 px-8 py-3"
              onClick={() => window.open('mailto:kaiqueosu@gmail.com', '_blank')}
            >
              <Mail className="mr-2 h-5 w-5" />
              Email
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-black/20 border-t border-white/10">
        <div className="container mx-auto text-center">
          <p className="text-gray-400">
            © 2025 Kaique Medeiros Lima. Built with React and Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App

