import React from 'react';
import { ArrowLeft, CheckCircle, Server, Code, Globe, Play, Github, Video, Upload, Users, Monitor, Settings, Cloud } from 'lucide-react';
import { Link } from 'react-router-dom';

const DevOps = () => {
  const tasks = [
    {
      id: 1,
      title: "Simple Git Version Control Project",
      level: "Beginner",
      description: "Learn basic Git commands and create a version-controlled project with collaboration features.",
      steps: [
        "Create a GitHub account and set up Git on your computer",
        "Initialize a new repository for a simple web project",
        "Practice basic Git commands (add, commit, push, pull)",
        "Create branches for different features",
        "Learn to merge branches and resolve simple conflicts"
      ],
      tools: "Git, GitHub, Basic Command Line",
      expectedOutput: "A GitHub repository with multiple branches and commit history",
      videoDemo: "Show creating repository, making commits, creating branches, and merging changes"
    },
    {
      id: 2,
      title: "Simple Docker Container Project",
      level: "Beginner", 
      description: "Create and manage basic Docker containers for web applications.",
      steps: [
        "Install Docker on your system",
        "Create a simple web application (HTML/CSS/JS)",
        "Write a basic Dockerfile to containerize the application",
        "Build and run your Docker container locally",
        "Share your container image on Docker Hub"
      ],
      tools: "Docker, Simple Web App, Dockerfile, Docker Hub",
      expectedOutput: "A containerized web application running in Docker",
      videoDemo: "Demonstrate building container, running it locally, and accessing the web application"
    },
    {
      id: 3,
      title: "Basic CI/CD with GitHub Actions",
      level: "Beginner",
      description: "Set up automated testing and deployment using GitHub Actions.",
      steps: [
        "Create a simple web project with basic tests",
        "Write a GitHub Actions workflow for automated testing",
        "Configure the workflow to run on code changes",
        "Add automatic deployment to GitHub Pages",
        "Set up email notifications for build status"
      ],
      tools: "GitHub Actions, GitHub Pages, Basic Testing",
      expectedOutput: "An automated CI/CD pipeline that tests and deploys your web app",
      videoDemo: "Show code changes triggering automated builds, tests, and deployment"
    },
    {
      id: 4,
      title: "Simple Cloud Deployment Project",
      level: "Beginner",
      description: "Deploy a web application to a cloud platform with basic monitoring.",
      steps: [
        "Choose a free cloud platform (Netlify, Vercel, or Heroku)",
        "Prepare your web application for cloud deployment",
        "Set up automatic deployment from your Git repository",
        "Configure custom domain (optional) and basic settings",
        "Monitor your application performance and uptime"
      ],
      tools: "Cloud Platform (Netlify/Vercel/Heroku), Git Integration",
      expectedOutput: "A web application deployed and accessible on the internet",
      videoDemo: "Show the deployment process and demonstrate the live application working"
    },
    {
      id: 5,
      title: "Basic Server Monitoring Dashboard",
      level: "Beginner",
      description: "Create a simple monitoring system to track application health and performance.",
      steps: [
        "Set up basic application logging",
        "Create simple health check endpoints",
        "Use free monitoring tools (UptimeRobot or similar)",
        "Set up email/SMS alerts for downtime",
        "Create a simple dashboard showing application status"
      ],
      tools: "Monitoring Tools, Basic Logging, Health Checks",
      expectedOutput: "A monitoring system with alerts and basic dashboard",
      videoDemo: "Show monitoring dashboard, trigger alerts, and demonstrate notifications"
    },
    {
      id: 6,
      title: "Simple Environment Configuration",
      level: "Beginner",
      description: "Learn to manage different environments (development, testing, production).",
      steps: [
        "Create environment-specific configuration files",
        "Set up different deployment branches (dev, staging, main)",
        "Configure environment variables for different settings",
        "Test your application in different environments",
        "Create simple deployment scripts for each environment"
      ],
      tools: "Environment Variables, Git Branches, Configuration Files",
      expectedOutput: "Multi-environment setup with proper configuration management",
      videoDemo: "Show deploying to different environments and demonstrate configuration differences"
    },
    {
      id: 7,
      title: "Basic Security and Backup System",
      level: "Beginner",
      description: "Implement basic security practices and backup procedures.",
      steps: [
        "Set up HTTPS for your web application",
        "Configure basic security headers",
        "Create automated backup scripts for your code and data",
        "Set up basic access control (if applicable)",
        "Test backup restoration procedures"
      ],
      tools: "SSL Certificates, Security Headers, Backup Scripts",
      expectedOutput: "Secured application with automated backup system",
      videoDemo: "Show security features working and demonstrate backup/restore process"
    },
    {
      id: 8,
      title: "Simple API Integration and Testing",
      level: "Beginner",
      description: "Create and test simple APIs with automated testing.",
      steps: [
        "Build a simple REST API (or use existing one)",
        "Write basic API tests using simple testing tools",
        "Set up automated API testing in your CI pipeline",
        "Create API documentation with examples",
        "Monitor API performance and response times"
      ],
      tools: "REST API, Testing Tools, API Documentation",
      expectedOutput: "A tested API with documentation and monitoring",
      videoDemo: "Show API testing, documentation, and demonstrate API functionality"
    },
    {
      id: 9,
      title: "Basic Database Operations and Backup",
      level: "Beginner",
      description: "Work with databases in a DevOps context with backup and recovery.",
      steps: [
        "Set up a simple database (SQLite or cloud database)",
        "Create database migration scripts",
        "Implement automated database backups",
        "Practice database restoration from backups",
        "Set up basic database monitoring"
      ],
      tools: "Database (SQLite/Cloud DB), Migration Scripts, Backup Tools",
      expectedOutput: "Database system with automated backup and monitoring",
      videoDemo: "Show database operations, backup process, and restoration procedures"
    },
    {
      id: 10,
      title: "Complete DevOps Portfolio Project",
      level: "Beginner",
      description: "Build a comprehensive project combining all DevOps practices learned.",
      steps: [
        "Create a full-stack web application with database",
        "Set up complete CI/CD pipeline with testing and deployment",
        "Implement monitoring, logging, and alerting",
        "Configure multiple environments with proper security",
        "Add automated backups and disaster recovery procedures",
        "Create comprehensive documentation and user guides",
        "Deploy everything to cloud with custom domain"
      ],
      tools: "Complete DevOps Stack, Cloud Platform, Monitoring Tools",
      expectedOutput: "A fully automated, monitored, and documented application deployment",
      videoDemo: "Present complete project showing CI/CD pipeline, monitoring, security, and all DevOps features working together"
    }
  ];

  const prerequisites = [
    "Basic understanding of web development concepts",
    "Familiarity with command line basics",
    "Understanding of how websites and applications work",
    "Basic knowledge of file systems and directories"
  ];

  const learningObjectives = [
    "Learn fundamental DevOps tools and practices",
    "Master Git version control and collaboration",
    "Understand containerization with Docker basics",
    "Build automated CI/CD pipelines",
    "Learn cloud deployment and monitoring",
    "Implement basic security and backup procedures"
  ];

  const getLevelColor = (level) => {
    switch (level) {
      case 'Beginner': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen">
      <br></br>
      {/* Mobile-Friendly Enhanced Header */}
      <section className="pt-16 pb-12 sm:pt-20 sm:pb-20 bg-gradient-to-br from-slate-50 to-gray-50 relative overflow-hidden">
        {/* 3D Background Elements - Reduced on mobile */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 left-5 w-32 h-32 sm:top-20 sm:left-10 sm:w-64 sm:h-64 bg-gradient-to-r from-slate-300 to-gray-200 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-blob animate-morph"></div>
          <div className="absolute top-20 right-5 w-40 h-40 sm:top-40 sm:right-10 sm:w-72 sm:h-72 bg-gradient-to-r from-gray-300 to-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-blob animation-delay-2000 animate-morph"></div>
          <div className="absolute bottom-5 left-1/3 w-24 h-24 sm:bottom-10 sm:w-48 sm:h-48 bg-gradient-to-r from-blue-300 to-slate-300 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-blob animation-delay-4000"></div>
        </div>

        {/* Floating 3D Elements - Hidden on small mobile */}
        <div className="hidden sm:block absolute top-1/4 left-1/5 w-6 h-6 bg-gradient-to-r from-slate-500 to-gray-400 rounded-full animate-float shadow-lg"></div>
        <div className="hidden sm:block absolute top-2/3 right-1/4 w-8 h-8 bg-gradient-to-r from-gray-500 to-blue-400 rounded-lg animate-pulse shadow-xl transform rotate-45"></div>
        <div className="hidden sm:block absolute top-1/2 right-1/5 w-4 h-4 bg-gradient-to-r from-blue-500 to-slate-400 rounded-full animate-bounce shadow-md"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Mobile-Responsive Header - Fixed text wrapping */}
          <div className="flex flex-col sm:flex-row sm:items-center mb-6 sm:mb-8">
            <div className="flex items-center mb-4 sm:mb-0 sm:mr-4">
              <div className="p-2 sm:p-3 rounded-xl bg-gradient-to-r from-slate-50 to-gray-50 mr-3 sm:mr-4 hover:scale-110 transition-transform duration-300">
                <Server className="w-8 h-8 sm:w-12 sm:h-12 text-slate-600" />
              </div>
              <div className="flex-1">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
                  DevOps
                </h1>
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-slate-600 to-gray-600 bg-clip-text text-transparent leading-tight">
                  Internship
                </div>
              </div>
            </div>
          </div>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-6">Learn deployment, automation, and infrastructure basics</p>

          {/* Mobile-Friendly Professional Instructions */}
          <div className="glass-morphism rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 border border-slate-200 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-16 h-16 sm:w-32 sm:h-32 bg-gradient-to-br from-slate-400/10 to-gray-400/10 rounded-bl-full"></div>
            <div className="absolute bottom-0 left-0 w-12 h-12 sm:w-24 sm:h-24 bg-gradient-to-tr from-gray-400/10 to-slate-400/10 rounded-tr-full"></div>
            
            <div className="relative z-10">
              <div className="flex flex-col sm:flex-row sm:items-center mb-4 sm:mb-6">
                <div className="p-2 sm:p-3 rounded-xl bg-gradient-to-r from-slate-500 to-gray-500 text-white mr-0 sm:mr-4 mb-3 sm:mb-0 w-fit">
                  <Users className="w-6 h-6 sm:w-8 sm:h-8" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-800">Internship Project Guidelines</h2>
              </div>

              {/* Mobile-First Grid Layout */}
              <div className="space-y-4 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-6 mb-6 sm:mb-8">
                <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-sm border border-gray-100">
                  <div className="flex items-center mb-3 sm:mb-4">
                    <div className="p-2 rounded-lg bg-slate-100 mr-3">
                      <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-slate-600" />
                    </div>
                    <h3 className="text-base sm:text-lg font-semibold text-gray-800">Task Selection</h3>
                  </div>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    Choose any <strong>2 tasks</strong> from the 10 beginner-friendly DevOps tasks provided below. Select based on your interests and learning goals.
                  </p>
                </div>

                <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-sm border border-gray-100">
                  <div className="flex items-center mb-3 sm:mb-4">
                    <div className="p-2 rounded-lg bg-gray-100 mr-3">
                      <Settings className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600" />
                    </div>
                    <h3 className="text-base sm:text-lg font-semibold text-gray-800">Process Demo</h3>
                  </div>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    Create a <strong>3-minute video</strong> or take <strong>screenshots</strong> showing your DevOps processes and deployments. Upload to LinkedIn with <strong>#CosmoDigitalServices</strong>.
                  </p>
                </div>

                <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-sm border border-gray-100">
                  <div className="flex items-center mb-3 sm:mb-4">
                    <div className="p-2 rounded-lg bg-blue-100 mr-3">
                      <Github className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
                    </div>
                    <h3 className="text-base sm:text-lg font-semibold text-gray-800">Code Repository</h3>
                  </div>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    Upload your complete DevOps project code and configuration files to <strong>GitHub</strong> with proper documentation. Repository links will be collected through our submission portal.
                  </p>
                </div>
              </div>

              {/* Mobile-Friendly Requirements Section */}
              <div className="bg-gradient-to-r from-slate-50 to-gray-50 rounded-lg sm:rounded-xl p-4 sm:p-6 border-l-4 border-slate-500">
                <h4 className="text-base sm:text-lg font-semibold text-gray-800 mb-3 flex items-center">
                  <Play className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-slate-600" />
                  Submission Requirements
                </h4>
                <div className="space-y-4 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-4 text-sm text-gray-700">
                  <div className="space-y-2">
                    <h5 className="font-medium text-gray-800 text-sm sm:text-base">Video/Screenshot Content Must Include:</h5>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 text-xs sm:text-sm">
                      <li>Complete DevOps process demonstration</li>
                      <li>CI/CD pipeline execution and results</li>
                      <li>Deployment process and live application</li>
                      <li>Monitoring and logging features working</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h5 className="font-medium text-gray-800 text-sm sm:text-base">Code Repository Must Include:</h5>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 text-xs sm:text-sm">
                      <li>Complete application and configuration code</li>
                      <li>CI/CD pipeline configuration files</li>
                      <li>README.md with setup and deployment instructions</li>
                      <li>Clear documentation and deployment guides</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile-Friendly Content Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 relative">
        {/* Background 3D Elements - Reduced on mobile */}
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <div className="absolute top-5 right-5 w-32 h-32 sm:top-10 sm:right-10 sm:w-64 sm:h-64 bg-gradient-to-r from-slate-200 to-gray-200 rounded-full filter blur-3xl animate-float"></div>
          <div className="absolute bottom-5 left-5 w-24 h-24 sm:bottom-10 sm:left-10 sm:w-48 sm:h-48 bg-gradient-to-r from-gray-200 to-blue-200 rounded-full filter blur-2xl animate-float animation-delay-2000"></div>
        </div>

        {/* Mobile-First Layout */}
        <div className="space-y-8 lg:space-y-0 lg:flex lg:flex-row lg:gap-8 relative z-10">
          
          {/* Mobile-First Sidebar */}
          <div className="w-full lg:w-1/3 lg:order-2">
            <div className="space-y-4 sm:space-y-6">
              {/* Learning Objectives */}
              <div className="group glass-morphism rounded-xl p-4 sm:p-6 card-3d-hover relative overflow-hidden">
                <div className="absolute top-0 right-0 w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-slate-400/20 to-gray-400/20 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4 relative z-10">Learning Objectives</h3>
                <ul className="space-y-2 sm:space-y-3 relative z-10">
                  {learningObjectives.map((objective, index) => (
                    <li key={index} className="flex items-start group-hover:translate-x-1 transition-transform duration-300" style={{ transitionDelay: `${index * 50}ms` }}>
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-slate-500 mr-2 sm:mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600 text-xs sm:text-sm leading-relaxed">{objective}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Prerequisites */}
              <div className="group glass-morphism rounded-xl p-4 sm:p-6 card-3d-hover relative overflow-hidden animation-delay-500">
                <div className="absolute top-0 right-0 w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-gray-400/20 to-blue-400/20 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4 relative z-10">Prerequisites</h3>
                <ul className="space-y-2 sm:space-y-3 relative z-10">
                  {prerequisites.map((prerequisite, index) => (
                    <li key={index} className="flex items-start group-hover:translate-x-1 transition-transform duration-300" style={{ transitionDelay: `${index * 50}ms` }}>
                      <Code className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500 mr-2 sm:mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600 text-xs sm:text-sm leading-relaxed">{prerequisite}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Duration Options */}
              <div className="group glass-morphism rounded-xl p-4 sm:p-6 card-3d-hover relative overflow-hidden animation-delay-1000">
                <div className="absolute top-0 right-0 w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-blue-400/20 to-slate-400/20 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4 relative z-10">Duration Options</h3>
                <div className="space-y-3 relative z-10">
                  <div className="flex items-center justify-between p-3 bg-gradient-to-r from-slate-50 to-gray-50 rounded-lg hover:from-slate-100 hover:to-gray-100 transition-colors duration-300">
                    <span className="font-medium text-slate-700 text-sm sm:text-base">4 Weeks</span>
                    <span className="text-slate-600 text-xs sm:text-sm">Intensive Track</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gradient-to-r from-gray-50 to-blue-50 rounded-lg hover:from-gray-100 hover:to-blue-100 transition-colors duration-300">
                    <span className="font-medium text-gray-700 text-sm sm:text-base">8 Weeks</span>
                    <span className="text-gray-600 text-xs sm:text-sm">Comprehensive Track</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile-First Main Content */}
          <div className="w-full lg:w-2/3 lg:order-1">
            <div className="glass-morphism rounded-xl p-4 sm:p-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-16 h-16 sm:w-32 sm:h-32 bg-gradient-to-br from-slate-400/10 to-gray-400/10 rounded-bl-full"></div>
              
              <div className="relative z-10">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6">
                  DevOps <span className="bg-gradient-to-r from-slate-600 to-gray-600 bg-clip-text text-transparent">Project Tasks</span>
                </h2>
                
                <div className="space-y-4 sm:space-y-6">
                  {tasks.map((task, index) => (
                    <div 
                      key={task.id} 
                      className="group glass-morphism border border-gray-200 rounded-xl p-4 sm:p-6 card-3d-hover relative overflow-hidden"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      {/* 3D Glow Effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-slate-500/10 to-gray-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                      
                      <div className="relative z-10">
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3 sm:mb-4">
                          <div className="flex-1">
                            <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-2">
                              <span className="text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-slate-600 to-gray-600 px-2 sm:px-3 py-1 rounded-full">
                                Task {task.id}
                              </span>
                              <span className={`text-xs font-medium px-2 py-1 rounded-full ${getLevelColor(task.level)}`}>
                                {task.level}
                              </span>
                            </div>
                            <h3 className="text-base sm:text-lg font-semibold text-gray-800 group-hover:text-slate-600 transition-colors duration-300 leading-tight">
                              {task.title}
                            </h3>
                          </div>
                        </div>
                        
                        <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 leading-relaxed">{task.description}</p>
                        
                        <div className="mb-3 sm:mb-4">
                          <h4 className="font-medium text-gray-800 mb-2 flex items-center text-sm sm:text-base">
                            <span className="w-2 h-2 bg-gradient-to-r from-slate-600 to-gray-600 rounded-full mr-2"></span>
                            Implementation Steps:
                          </h4>
                          <ul className="list-disc list-inside space-y-1 text-gray-600 ml-4">
                            {task.steps.map((step, stepIndex) => (
                              <li key={stepIndex} className="text-xs sm:text-sm group-hover:translate-x-1 transition-transform duration-300 leading-relaxed" style={{ transitionDelay: `${stepIndex * 50}ms` }}>
                                {step}
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div className="mb-3 sm:mb-4">
                          <h4 className="font-medium text-gray-800 mb-2 flex items-center text-sm sm:text-base">
                            <Code className="w-3 h-3 sm:w-4 sm:h-4 mr-2 text-gray-600" />
                            Required Tools:
                          </h4>
                          <p className="text-gray-600 text-xs sm:text-sm bg-gray-50 p-2 rounded-lg leading-relaxed">{task.tools}</p>
                        </div>

                        <div className="mb-3 sm:mb-4">
                          <h4 className="font-medium text-gray-800 mb-2 flex items-center text-sm sm:text-base">
                            <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 mr-2 text-slate-600" />
                            Expected Deliverable:
                          </h4>
                          <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">{task.expectedOutput}</p>
                        </div>
                        
                        <div className="bg-gradient-to-r from-slate-50 to-gray-50 p-3 sm:p-4 rounded-lg border border-slate-200">
                          <h4 className="font-medium text-slate-800 mb-2 flex items-center text-sm sm:text-base">
                            <Settings className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                            Process Demo Requirements:
                          </h4>
                          <p className="text-slate-700 text-xs sm:text-sm mb-2 leading-relaxed">{task.videoDemo}</p>
                          <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs text-slate-600">
                            <span className="flex items-center">
                              <Monitor className="w-3 h-3 mr-1" />
                              Screenshots or Video
                            </span>
                            <span className="flex items-center">
                              <Upload className="w-3 h-3 mr-1" />
                              LinkedIn #CosmoDigitalServices
                            </span>
                            <span className="flex items-center">
                              <Github className="w-3 h-3 mr-1" />
                              GitHub required
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DevOps;
