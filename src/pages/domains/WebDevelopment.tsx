import React from 'react';
import { ArrowLeft, CheckCircle, Globe, Code, Smartphone, Play, Github, Video, Upload, Users, Monitor, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';

const WebDevelopment = () => {
  const tasks = [
    {
      id: 1,
      title: "Simple Personal Portfolio Website",
      level: "Beginner",
      description: "Create a basic personal portfolio website using HTML, CSS, and simple JavaScript.",
      steps: [
        "Set up HTML structure with header, about, skills, and contact sections",
        "Style the website using CSS with colors, fonts, and basic layout",
        "Add responsive design to work on mobile and desktop",
        "Include simple JavaScript for smooth scrolling between sections",
        "Deploy the website using GitHub Pages or Netlify"
      ],
      tools: "HTML5, CSS3, Basic JavaScript, GitHub Pages/Netlify",
      expectedOutput: "A complete personal portfolio website that works on all devices",
      videoDemo: "Show website on different devices, demonstrate navigation, and explain each section's purpose"
    },
    {
      id: 2,
      title: "Simple To-Do List Web App",
      level: "Beginner", 
      description: "Build a functional to-do list application with add, delete, and complete features.",
      steps: [
        "Create HTML structure with input field and task list area",
        "Style the interface with CSS to make it look modern and clean",
        "Add JavaScript to handle adding new tasks from user input",
        "Implement delete and mark complete functionality for tasks",
        "Store tasks in browser's local storage for persistence"
      ],
      tools: "HTML, CSS, JavaScript, Local Storage, Basic DOM manipulation",
      expectedOutput: "A working to-do list app that saves tasks between browser sessions",
      videoDemo: "Add tasks, mark as complete, delete tasks, and show persistence by refreshing the page"
    },
    {
      id: 3,
      title: "Simple Restaurant Landing Page",
      level: "Beginner",
      description: "Create a responsive landing page for a fictional restaurant business.",
      steps: [
        "Design header section with restaurant name and navigation menu",
        "Add hero section with attractive food images and welcome message",
        "Create menu section showing popular dishes with prices",
        "Include contact section with address and phone number",
        "Make the page responsive for mobile, tablet, and desktop"
      ],
      tools: "HTML5, CSS3, Responsive Design, CSS Grid/Flexbox",
      expectedOutput: "A professional-looking restaurant landing page that works on all screen sizes",
      videoDemo: "Show the website on different screen sizes and demonstrate responsive design features"
    },
    {
      id: 4,
      title: "Simple Photo Gallery Website",
      level: "Beginner",
      description: "Build an interactive photo gallery with categories and lightbox functionality.",
      steps: [
        "Create grid layout to display photos in an organized way",
        "Add category buttons to filter photos by type",
        "Implement lightbox feature to view full-size images",
        "Add next/previous navigation within the lightbox",
        "Include image captions and descriptions"
      ],
      tools: "HTML, CSS Grid, JavaScript, Image handling, Basic animations",
      expectedOutput: "An interactive photo gallery with filtering and lightbox viewing",
      videoDemo: "Browse photos, use category filters, and demonstrate lightbox functionality"
    },
    {
      id: 5,
      title: "Simple Weather Information Website",
      level: "Beginner",
      description: "Create a basic weather website using a simple weather API.",
      steps: [
        "Sign up for a free weather API service (OpenWeatherMap)",
        "Create simple interface with city search input field",
        "Use JavaScript fetch to get weather data from the API",
        "Display current weather with temperature and conditions",
        "Add error handling for invalid city names or API issues"
      ],
      tools: "HTML, CSS, JavaScript Fetch API, Weather API, JSON handling",
      expectedOutput: "A weather website that shows real weather data for searched cities",
      videoDemo: "Search for different cities and show weather information being displayed"
    },
    {
      id: 6,
      title: "Simple Calculator Web Application",
      level: "Beginner",
      description: "Build an interactive calculator with basic mathematical operations.",
      steps: [
        "Design calculator interface with number buttons and operation buttons",
        "Style the calculator to look like a real calculator device",
        "Add JavaScript functionality for basic math operations (+, -, ×, ÷)",
        "Implement clear button and decimal point functionality",
        "Add keyboard support for number and operation inputs"
      ],
      tools: "HTML, CSS, JavaScript, Math operations, Event handling",
      expectedOutput: "A fully functional calculator that works with mouse and keyboard",
      videoDemo: "Perform various calculations and show both mouse and keyboard input working"
    },
    {
      id: 7,
      title: "Simple Quiz Game Website",
      level: "Beginner",
      description: "Create an interactive quiz game with multiple choice questions and scoring.",
      steps: [
        "Create quiz interface with question display and answer options",
        "Add multiple choice questions on a topic you're interested in",
        "Implement scoring system and progress tracking",
        "Show results screen with final score and correct answers",
        "Add restart functionality to take the quiz again"
      ],
      tools: "HTML, CSS, JavaScript, Array handling, Score calculation",
      expectedOutput: "A complete quiz game with questions, scoring, and results",
      videoDemo: "Take the complete quiz, show scoring system, and demonstrate results screen"
    },
    {
      id: 8,
      title: "Simple Recipe Sharing Website",
      level: "Beginner",
      description: "Build a recipe website where users can view and search for recipes.",
      steps: [
        "Create recipe card layout to display recipe information",
        "Add search functionality to find recipes by name or ingredient",
        "Include recipe details page with ingredients and instructions",
        "Add favorite recipes feature with local storage",
        "Make the website responsive for mobile viewing"
      ],
      tools: "HTML, CSS, JavaScript, Search functionality, Local Storage",
      expectedOutput: "A recipe website with search, detailed views, and favorite functionality",
      videoDemo: "Search for recipes, view recipe details, and add/remove favorites"
    },
    {
      id: 9,
      title: "Simple Contact Form Website",
      level: "Beginner",
      description: "Create a contact form with validation and user-friendly interface.",
      steps: [
        "Design contact form with name, email, subject, and message fields",
        "Add CSS styling to make the form look professional",
        "Implement JavaScript form validation for required fields",
        "Add email format validation and helpful error messages",
        "Create success message when form is submitted correctly"
      ],
      tools: "HTML Forms, CSS, JavaScript Validation, Form handling",
      expectedOutput: "A professional contact form with complete validation and user feedback",
      videoDemo: "Fill out form correctly and incorrectly to show validation working"
    },
    {
      id: 10,
      title: "Complete Multi-Page Website Project",
      level: "Beginner",
      description: "Build a comprehensive multi-page website combining all learned web development skills.",
      steps: [
        "Plan website structure with multiple pages (home, about, services, contact)",
        "Create consistent navigation menu that works across all pages",
        "Include interactive elements like image galleries, forms, and animations",
        "Add responsive design ensuring all pages work on mobile devices",
        "Implement JavaScript features like smooth scrolling and form validation",
        "Deploy the complete website using free hosting service",
        "Test all functionality and fix any issues across different browsers"
      ],
      tools: "Complete HTML/CSS/JavaScript stack, Multi-page navigation, Responsive design, Web hosting",
      expectedOutput: "A complete multi-page website with professional design and functionality",
      videoDemo: "Give complete tour of website showing all pages, interactive features, responsive design, and demonstrate functionality on different devices"
    }
  ];

  const prerequisites = [
    "Basic understanding of HTML tags and structure",
    "Familiarity with CSS styling and basic layouts",
    "Understanding of simple JavaScript concepts",
    "Interest in building websites and web applications"
  ];

  const learningObjectives = [
    "Learn modern web development with HTML, CSS, and JavaScript",
    "Master responsive web design for mobile and desktop",
    "Understand how to make interactive websites with JavaScript",
    "Develop skills in API integration and data handling",
    "Learn website deployment and hosting basics",
    "Build practical websites and web applications"
  ];

  const getLevelColor = (level) => {
    switch (level) {
      case 'Beginner': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen">
      <br></br>
      {/* Mobile-Friendly Enhanced Header */}
      <section className="pt-16 pb-12 sm:pt-20 sm:pb-20 bg-gradient-to-br from-blue-50 to-green-50 relative overflow-hidden">
        {/* 3D Background Elements - Reduced on mobile */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 left-5 w-32 h-32 sm:top-20 sm:left-10 sm:w-64 sm:h-64 bg-gradient-to-r from-blue-300 to-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-blob animate-morph"></div>
          <div className="absolute top-20 right-5 w-40 h-40 sm:top-40 sm:right-10 sm:w-72 sm:h-72 bg-gradient-to-r from-green-300 to-teal-200 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-blob animation-delay-2000 animate-morph"></div>
          <div className="absolute bottom-5 left-1/3 w-24 h-24 sm:bottom-10 sm:w-48 sm:h-48 bg-gradient-to-r from-teal-300 to-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-blob animation-delay-4000"></div>
        </div>

        {/* Floating 3D Elements - Hidden on small mobile */}
        <div className="hidden sm:block absolute top-1/4 left-1/5 w-6 h-6 bg-gradient-to-r from-blue-500 to-green-400 rounded-full animate-float shadow-lg"></div>
        <div className="hidden sm:block absolute top-2/3 right-1/4 w-8 h-8 bg-gradient-to-r from-green-500 to-teal-400 rounded-lg animate-pulse shadow-xl transform rotate-45"></div>
        <div className="hidden sm:block absolute top-1/2 right-1/5 w-4 h-4 bg-gradient-to-r from-teal-500 to-blue-400 rounded-full animate-bounce shadow-md"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Mobile-Responsive Header - Fixed text wrapping */}
          <div className="flex flex-col sm:flex-row sm:items-center mb-6 sm:mb-8">
            <div className="flex items-center mb-4 sm:mb-0 sm:mr-4">
              <div className="p-2 sm:p-3 rounded-xl bg-gradient-to-r from-blue-50 to-green-50 mr-3 sm:mr-4 hover:scale-110 transition-transform duration-300">
                <Globe className="w-8 h-8 sm:w-12 sm:h-12 text-blue-600" />
              </div>
              <div className="flex-1">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
                  Web Development
                </h1>
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent leading-tight">
                  Internship
                </div>
              </div>
            </div>
          </div>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-6">Build modern, responsive websites and web applications</p>

          {/* Mobile-Friendly Professional Instructions */}
          <div className="glass-morphism rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 border border-blue-200 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-16 h-16 sm:w-32 sm:h-32 bg-gradient-to-br from-blue-400/10 to-green-400/10 rounded-bl-full"></div>
            <div className="absolute bottom-0 left-0 w-12 h-12 sm:w-24 sm:h-24 bg-gradient-to-tr from-green-400/10 to-blue-400/10 rounded-tr-full"></div>
            
            <div className="relative z-10">
              <div className="flex flex-col sm:flex-row sm:items-center mb-4 sm:mb-6">
                <div className="p-2 sm:p-3 rounded-xl bg-gradient-to-r from-blue-500 to-green-500 text-white mr-0 sm:mr-4 mb-3 sm:mb-0 w-fit">
                  <Users className="w-6 h-6 sm:w-8 sm:h-8" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-800">Internship Project Guidelines</h2>
              </div>

              {/* Mobile-First Grid Layout */}
              <div className="space-y-4 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-6 mb-6 sm:mb-8">
                <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-sm border border-gray-100">
                  <div className="flex items-center mb-3 sm:mb-4">
                    <div className="p-2 rounded-lg bg-blue-100 mr-3">
                      <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
                    </div>
                    <h3 className="text-base sm:text-lg font-semibold text-gray-800">Task Selection</h3>
                  </div>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    Choose any <strong>2 tasks</strong> from the 10 beginner-friendly web development tasks provided below. Select based on your interests and learning goals.
                  </p>
                </div>

                <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-sm border border-gray-100">
                  <div className="flex items-center mb-3 sm:mb-4">
                    <div className="p-2 rounded-lg bg-green-100 mr-3">
                      <Globe className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />
                    </div>
                    <h3 className="text-base sm:text-lg font-semibold text-gray-800">Website Demo</h3>
                  </div>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    Create a <strong>3-minute video</strong> or take <strong>screenshots</strong> showing your website working on different devices. Upload to LinkedIn with <strong>#CosmoDigitalServices</strong>.
                  </p>
                </div>

                <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-sm border border-gray-100">
                  <div className="flex items-center mb-3 sm:mb-4">
                    <div className="p-2 rounded-lg bg-teal-100 mr-3">
                      <Github className="w-5 h-5 sm:w-6 sm:h-6 text-teal-600" />
                    </div>
                    <h3 className="text-base sm:text-lg font-semibold text-gray-800">Code Repository</h3>
                  </div>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    Upload your complete website code to <strong>GitHub</strong> with proper documentation. Repository links will be collected through our submission portal.
                  </p>
                </div>
              </div>

              {/* Mobile-Friendly Requirements Section */}
              <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-lg sm:rounded-xl p-4 sm:p-6 border-l-4 border-blue-500">
                <h4 className="text-base sm:text-lg font-semibold text-gray-800 mb-3 flex items-center">
                  <Play className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-blue-600" />
                  Submission Requirements
                </h4>
                <div className="space-y-4 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-4 text-sm text-gray-700">
                  <div className="space-y-2">
                    <h5 className="font-medium text-gray-800 text-sm sm:text-base">Video/Screenshot Content Must Include:</h5>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 text-xs sm:text-sm">
                      <li>Complete website functionality demonstration</li>
                      <li>Responsive design working on mobile and desktop</li>
                      <li>Interactive features and user interface showcase</li>
                      <li>Code walkthrough explaining key web development concepts</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h5 className="font-medium text-gray-800 text-sm sm:text-base">Code Repository Must Include:</h5>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 text-xs sm:text-sm">
                      <li>Complete HTML, CSS, and JavaScript files</li>
                      <li>Live demo link (GitHub Pages, Netlify, or Vercel)</li>
                      <li>README.md with setup and feature descriptions</li>
                      <li>Clear code comments and documentation</li>
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
          <div className="absolute top-5 right-5 w-32 h-32 sm:top-10 sm:right-10 sm:w-64 sm:h-64 bg-gradient-to-r from-blue-200 to-green-200 rounded-full filter blur-3xl animate-float"></div>
          <div className="absolute bottom-5 left-5 w-24 h-24 sm:bottom-10 sm:left-10 sm:w-48 sm:h-48 bg-gradient-to-r from-green-200 to-teal-200 rounded-full filter blur-2xl animate-float animation-delay-2000"></div>
        </div>

        {/* Mobile-First Layout */}
        <div className="space-y-8 lg:space-y-0 lg:flex lg:flex-row lg:gap-8 relative z-10">
          
          {/* Mobile-First Sidebar */}
          <div className="w-full lg:w-1/3 lg:order-2">
            <div className="space-y-4 sm:space-y-6">
              {/* Learning Objectives */}
              <div className="group glass-morphism rounded-xl p-4 sm:p-6 card-3d-hover relative overflow-hidden">
                <div className="absolute top-0 right-0 w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-blue-400/20 to-green-400/20 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4 relative z-10">Learning Objectives</h3>
                <ul className="space-y-2 sm:space-y-3 relative z-10">
                  {learningObjectives.map((objective, index) => (
                    <li key={index} className="flex items-start group-hover:translate-x-1 transition-transform duration-300" style={{ transitionDelay: `${index * 50}ms` }}>
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-2 sm:mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600 text-xs sm:text-sm leading-relaxed">{objective}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Prerequisites */}
              <div className="group glass-morphism rounded-xl p-4 sm:p-6 card-3d-hover relative overflow-hidden animation-delay-500">
                <div className="absolute top-0 right-0 w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-green-400/20 to-teal-400/20 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4 relative z-10">Prerequisites</h3>
                <ul className="space-y-2 sm:space-y-3 relative z-10">
                  {prerequisites.map((prerequisite, index) => (
                    <li key={index} className="flex items-start group-hover:translate-x-1 transition-transform duration-300" style={{ transitionDelay: `${index * 50}ms` }}>
                      <Code className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500 mr-2 sm:mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600 text-xs sm:text-sm leading-relaxed">{prerequisite}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Duration Options */}
              <div className="group glass-morphism rounded-xl p-4 sm:p-6 card-3d-hover relative overflow-hidden animation-delay-1000">
                <div className="absolute top-0 right-0 w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-teal-400/20 to-blue-400/20 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4 relative z-10">Duration Options</h3>
                <div className="space-y-3 relative z-10">
                  <div className="flex items-center justify-between p-3 bg-gradient-to-r from-blue-50 to-green-50 rounded-lg hover:from-blue-100 hover:to-green-100 transition-colors duration-300">
                    <span className="font-medium text-blue-700 text-sm sm:text-base">4 Weeks</span>
                    <span className="text-blue-600 text-xs sm:text-sm">Intensive Track</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gradient-to-r from-green-50 to-teal-50 rounded-lg hover:from-green-100 hover:to-teal-100 transition-colors duration-300">
                    <span className="font-medium text-green-700 text-sm sm:text-base">8 Weeks</span>
                    <span className="text-green-600 text-xs sm:text-sm">Comprehensive Track</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile-First Main Content */}
          <div className="w-full lg:w-2/3 lg:order-1">
            <div className="glass-morphism rounded-xl p-4 sm:p-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-16 h-16 sm:w-32 sm:h-32 bg-gradient-to-br from-blue-400/10 to-green-400/10 rounded-bl-full"></div>
              
              <div className="relative z-10">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6">
                  Web Development <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">Project Tasks</span>
                </h2>
                
                <div className="space-y-4 sm:space-y-6">
                  {tasks.map((task, index) => (
                    <div 
                      key={task.id} 
                      className="group glass-morphism border border-gray-200 rounded-xl p-4 sm:p-6 card-3d-hover relative overflow-hidden"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      {/* 3D Glow Effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-green-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                      
                      <div className="relative z-10">
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3 sm:mb-4">
                          <div className="flex-1">
                            <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-2">
                              <span className="text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-blue-600 to-green-600 px-2 sm:px-3 py-1 rounded-full">
                                Task {task.id}
                              </span>
                              <span className={`text-xs font-medium px-2 py-1 rounded-full ${getLevelColor(task.level)}`}>
                                {task.level}
                              </span>
                            </div>
                            <h3 className="text-base sm:text-lg font-semibold text-gray-800 group-hover:text-blue-600 transition-colors duration-300 leading-tight">
                              {task.title}
                            </h3>
                          </div>
                        </div>
                        
                        <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 leading-relaxed">{task.description}</p>
                        
                        <div className="mb-3 sm:mb-4">
                          <h4 className="font-medium text-gray-800 mb-2 flex items-center text-sm sm:text-base">
                            <span className="w-2 h-2 bg-gradient-to-r from-blue-600 to-green-600 rounded-full mr-2"></span>
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
                            <Code className="w-3 h-3 sm:w-4 sm:h-4 mr-2 text-green-600" />
                            Required Technologies:
                          </h4>
                          <p className="text-gray-600 text-xs sm:text-sm bg-gray-50 p-2 rounded-lg leading-relaxed">{task.tools}</p>
                        </div>

                        <div className="mb-3 sm:mb-4">
                          <h4 className="font-medium text-gray-800 mb-2 flex items-center text-sm sm:text-base">
                            <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 mr-2 text-blue-600" />
                            Expected Deliverable:
                          </h4>
                          <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">{task.expectedOutput}</p>
                        </div>
                        
                        <div className="bg-gradient-to-r from-blue-50 to-green-50 p-3 sm:p-4 rounded-lg border border-blue-200">
                          <h4 className="font-medium text-blue-800 mb-2 flex items-center text-sm sm:text-base">
                            <Globe className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                            Website Demo Requirements:
                          </h4>
                          <p className="text-blue-700 text-xs sm:text-sm mb-2 leading-relaxed">{task.videoDemo}</p>
                          <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs text-blue-600">
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

export default WebDevelopment;
