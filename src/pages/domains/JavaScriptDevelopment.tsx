import React from 'react';
import { ArrowLeft, CheckCircle, Code, Globe, Play, Github, Video, Upload, Users, Monitor, Brackets, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const JavaScriptDevelopment = () => {
  const tasks = [
    {
      id: 1,
      title: "Simple Interactive Web Page",
      level: "Beginner",
      description: "Create an interactive web page with buttons, forms, and basic JavaScript functionality.",
      steps: [
        "Set up HTML structure with buttons, input fields, and display areas",
        "Write JavaScript to handle button clicks and form submissions",
        "Change text content and styles dynamically with JavaScript",
        "Add simple animations like color changes and element hiding/showing",
        "Create a basic calculator or simple game"
      ],
      tools: "HTML, CSS, JavaScript, Browser Developer Tools",
      expectedOutput: "An interactive web page with working buttons and dynamic content",
      videoDemo: "Show clicking buttons, filling forms, and demonstrate all interactive features working"
    },
    {
      id: 2,
      title: "Simple To-Do List Application",
      level: "Beginner", 
      description: "Build a to-do list web application with add, delete, and mark complete functionality.",
      steps: [
        "Create HTML structure for input field and task display area",
        "Write JavaScript to add new tasks from user input",
        "Implement delete functionality for individual tasks",
        "Add mark as complete/incomplete toggle feature",
        "Store tasks in browser's local storage for persistence"
      ],
      tools: "JavaScript DOM manipulation, Local Storage, HTML, CSS",
      expectedOutput: "A working to-do list with persistent data storage",
      videoDemo: "Add tasks, mark as complete, delete tasks, and show data persisting after page refresh"
    },
    {
      id: 3,
      title: "Simple Weather Display App",
      level: "Beginner",
      description: "Create a weather application that displays weather information for different cities.",
      steps: [
        "Design interface with city input and weather display area",
        "Use a simple weather API (like OpenWeatherMap free tier)",
        "Write JavaScript to fetch weather data based on user input",
        "Display weather information in a user-friendly format",
        "Add error handling for invalid cities or network issues"
      ],
      tools: "JavaScript Fetch API, Weather API, JSON handling, Error handling",
      expectedOutput: "A weather app that shows real weather data for any city",
      videoDemo: "Search for different cities and show weather information being displayed"
    },
    {
      id: 4,
      title: "Simple Photo Gallery with Slideshow",
      level: "Beginner",
      description: "Build an interactive photo gallery with slideshow functionality.",
      steps: [
        "Create HTML structure for photo display and navigation buttons",
        "Implement JavaScript for next/previous photo navigation",
        "Add automatic slideshow functionality with start/stop controls",
        "Include photo thumbnails for quick navigation",
        "Add fade or slide transitions between photos"
      ],
      tools: "JavaScript Arrays, DOM manipulation, CSS transitions, Image handling",
      expectedOutput: "An interactive photo gallery with slideshow and navigation",
      videoDemo: "Show manual navigation, automatic slideshow, and thumbnail navigation working"
    },
    {
      id: 5,
      title: "Simple Quiz Application",
      level: "Beginner",
      description: "Create an interactive quiz application with scoring and results.",
      steps: [
        "Create question database with multiple choice answers",
        "Build quiz interface with questions and answer options",
        "Implement scoring system and progress tracking",
        "Add timer functionality for each question (optional)",
        "Display final results with correct answer review"
      ],
      tools: "JavaScript Objects, Arrays, DOM manipulation, Timer functions",
      expectedOutput: "A complete quiz app with scoring and results display",
      videoDemo: "Take the complete quiz, show scoring, and demonstrate results with review"
    },
    {
      id: 6,
      title: "Simple Expense Tracker",
      level: "Beginner",
      description: "Build an expense tracking application with categories and simple charts.",
      steps: [
        "Create form for adding expenses with amount, category, and date",
        "Display list of all expenses with edit and delete options",
        "Calculate and show total expenses by category",
        "Create simple bar chart or pie chart for expense visualization",
        "Add filtering by date range or category"
      ],
      tools: "JavaScript Forms, Local Storage, Basic Chart library (Chart.js), Date handling",
      expectedOutput: "An expense tracker with categorization and visual charts",
      videoDemo: "Add expenses, view by category, and show charts updating with new data"
    },
    {
      id: 7,
      title: "Simple Recipe Finder App",
      level: "Beginner",
      description: "Create a recipe finder application using a recipe API.",
      steps: [
        "Design interface with search input and recipe display area",
        "Integrate with a recipe API (like TheMealDB or Edamam)",
        "Implement search functionality for recipes",
        "Display recipe results with images and basic information",
        "Add recipe details view with ingredients and instructions"
      ],
      tools: "JavaScript Fetch API, Recipe API, JSON parsing, Dynamic content",
      expectedOutput: "A recipe finder app with search and detailed recipe viewing",
      videoDemo: "Search for different recipes and show detailed recipe information"
    },
    {
      id: 8,
      title: "Simple Memory Card Game",
      level: "Beginner",
      description: "Build an interactive memory card matching game.",
      steps: [
        "Create game board with face-down cards",
        "Implement card flip functionality on click",
        "Add matching logic for paired cards",
        "Include score tracking and move counter",
        "Add win condition and game reset functionality"
      ],
      tools: "JavaScript Game Logic, DOM manipulation, CSS animations, Game state management",
      expectedOutput: "A working memory card game with scoring and win conditions",
      videoDemo: "Play through a complete game showing card flipping, matching, and winning"
    },
    {
      id: 9,
      title: "Simple Chat Interface",
      level: "Beginner",
      description: "Create a basic chat interface with message sending and display.",
      steps: [
        "Design chat interface with message display and input area",
        "Implement message sending on button click or Enter key",
        "Display messages with timestamps and user identification",
        "Add emoji picker or basic text formatting",
        "Store chat history in local storage"
      ],
      tools: "JavaScript Events, DOM manipulation, Local Storage, Date formatting",
      expectedOutput: "A chat interface with message sending and history",
      videoDemo: "Send messages, show timestamps, and demonstrate message persistence"
    },
    {
      id: 10,
      title: "Complete JavaScript Portfolio Website",
      level: "Beginner",
      description: "Build a comprehensive portfolio website combining multiple JavaScript features.",
      steps: [
        "Create multi-section portfolio with smooth scrolling navigation",
        "Add interactive elements like image galleries and project showcases",
        "Implement contact form with validation and submission",
        "Include dark/light theme toggle functionality",
        "Add animations and transitions for better user experience",
        "Integrate social media links and resume download",
        "Make the website fully responsive and mobile-friendly"
      ],
      tools: "Complete JavaScript DOM manipulation, CSS animations, Form handling, Responsive design",
      expectedOutput: "A complete portfolio website with all interactive features working",
      videoDemo: "Give full tour of portfolio showing all sections, interactions, theme toggle, and mobile responsiveness"
    }
  ];

  const prerequisites = [
    "Basic understanding of HTML and CSS",
    "Familiarity with web browsers and how websites work",
    "Understanding of basic programming concepts",
    "Interest in web development and interactive websites"
  ];

  const learningObjectives = [
    "Learn JavaScript programming language fundamentals",
    "Master DOM manipulation and event handling",
    "Understand how to make interactive web pages",
    "Develop skills in API integration and data handling",
    "Learn modern JavaScript features and best practices",
    "Build practical web applications and games"
  ];

  const getLevelColor = (level) => {
    switch (level) {
      case 'Beginner': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen">
      <br></br>
      {/* Mobile-Friendly Enhanced Header */}
      <section className="pt-16 pb-12 sm:pt-20 sm:pb-20 bg-gradient-to-br from-yellow-50 to-orange-50 relative overflow-hidden">
        {/* 3D Background Elements - Reduced on mobile */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 left-5 w-32 h-32 sm:top-20 sm:left-10 sm:w-64 sm:h-64 bg-gradient-to-r from-yellow-300 to-orange-200 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-blob animate-morph"></div>
          <div className="absolute top-20 right-5 w-40 h-40 sm:top-40 sm:right-10 sm:w-72 sm:h-72 bg-gradient-to-r from-orange-300 to-red-200 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-blob animation-delay-2000 animate-morph"></div>
          <div className="absolute bottom-5 left-1/3 w-24 h-24 sm:bottom-10 sm:w-48 sm:h-48 bg-gradient-to-r from-red-300 to-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-blob animation-delay-4000"></div>
        </div>

        {/* Floating 3D Elements - Hidden on small mobile */}
        <div className="hidden sm:block absolute top-1/4 left-1/5 w-6 h-6 bg-gradient-to-r from-yellow-500 to-orange-400 rounded-full animate-float shadow-lg"></div>
        <div className="hidden sm:block absolute top-2/3 right-1/4 w-8 h-8 bg-gradient-to-r from-orange-500 to-red-400 rounded-lg animate-pulse shadow-xl transform rotate-45"></div>
        <div className="hidden sm:block absolute top-1/2 right-1/5 w-4 h-4 bg-gradient-to-r from-red-500 to-yellow-400 rounded-full animate-bounce shadow-md"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Mobile-Responsive Header - Fixed text wrapping */}
          <div className="flex flex-col sm:flex-row sm:items-center mb-6 sm:mb-8">
            <div className="flex items-center mb-4 sm:mb-0 sm:mr-4">
              <div className="p-2 sm:p-3 rounded-xl bg-gradient-to-r from-yellow-50 to-orange-50 mr-3 sm:mr-4 hover:scale-110 transition-transform duration-300">
                <Code className="w-8 h-8 sm:w-12 sm:h-12 text-yellow-600" />
              </div>
              <div className="flex-1">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
                  JavaScript Development
                </h1>
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent leading-tight">
                  Internship
                </div>
              </div>
            </div>
          </div>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-6">Master modern JavaScript and build interactive web applications</p>

          {/* Mobile-Friendly Professional Instructions */}
          <div className="glass-morphism rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 border border-yellow-200 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-16 h-16 sm:w-32 sm:h-32 bg-gradient-to-br from-yellow-400/10 to-orange-400/10 rounded-bl-full"></div>
            <div className="absolute bottom-0 left-0 w-12 h-12 sm:w-24 sm:h-24 bg-gradient-to-tr from-orange-400/10 to-yellow-400/10 rounded-tr-full"></div>
            
            <div className="relative z-10">
              <div className="flex flex-col sm:flex-row sm:items-center mb-4 sm:mb-6">
                <div className="p-2 sm:p-3 rounded-xl bg-gradient-to-r from-yellow-500 to-orange-500 text-white mr-0 sm:mr-4 mb-3 sm:mb-0 w-fit">
                  <Users className="w-6 h-6 sm:w-8 sm:h-8" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-800">Internship Project Guidelines</h2>
              </div>

              {/* Mobile-First Grid Layout */}
              <div className="space-y-4 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-6 mb-6 sm:mb-8">
                <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-sm border border-gray-100">
                  <div className="flex items-center mb-3 sm:mb-4">
                    <div className="p-2 rounded-lg bg-yellow-100 mr-3">
                      <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-600" />
                    </div>
                    <h3 className="text-base sm:text-lg font-semibold text-gray-800">Task Selection</h3>
                  </div>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    Choose any <strong>2 tasks</strong> from the 10 beginner-friendly JavaScript development tasks provided below. Select based on your interests and learning goals.
                  </p>
                </div>

                <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-sm border border-gray-100">
                  <div className="flex items-center mb-3 sm:mb-4">
                    <div className="p-2 rounded-lg bg-orange-100 mr-3">
                      <Brackets className="w-5 h-5 sm:w-6 sm:h-6 text-orange-600" />
                    </div>
                    <h3 className="text-base sm:text-lg font-semibold text-gray-800">Web App Demo</h3>
                  </div>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    Create a <strong>3-minute video</strong> or take <strong>screenshots</strong> showing your JavaScript web application working. Upload to LinkedIn with <strong>#CosmoDigitalServices</strong>.
                  </p>
                </div>

                <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-sm border border-gray-100">
                  <div className="flex items-center mb-3 sm:mb-4">
                    <div className="p-2 rounded-lg bg-red-100 mr-3">
                      <Github className="w-5 h-5 sm:w-6 sm:h-6 text-red-600" />
                    </div>
                    <h3 className="text-base sm:text-lg font-semibold text-gray-800">Code Repository</h3>
                  </div>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    Upload your complete JavaScript project files to <strong>GitHub</strong> with proper documentation. Repository links will be collected through our submission portal.
                  </p>
                </div>
              </div>

              {/* Mobile-Friendly Requirements Section */}
              <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg sm:rounded-xl p-4 sm:p-6 border-l-4 border-yellow-500">
                <h4 className="text-base sm:text-lg font-semibold text-gray-800 mb-3 flex items-center">
                  <Play className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-yellow-600" />
                  Submission Requirements
                </h4>
                <div className="space-y-4 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-4 text-sm text-gray-700">
                  <div className="space-y-2">
                    <h5 className="font-medium text-gray-800 text-sm sm:text-base">Video/Screenshot Content Must Include:</h5>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 text-xs sm:text-sm">
                      <li>Complete web application functionality demonstration</li>
                      <li>User interactions and dynamic content changes</li>
                      <li>Code walkthrough explaining key JavaScript features</li>
                      <li>Browser developer tools showing console output</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h5 className="font-medium text-gray-800 text-sm sm:text-base">Code Repository Must Include:</h5>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 text-xs sm:text-sm">
                      <li>Complete HTML, CSS, and JavaScript files</li>
                      <li>Live demo link (GitHub Pages or similar hosting)</li>
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
          <div className="absolute top-5 right-5 w-32 h-32 sm:top-10 sm:right-10 sm:w-64 sm:h-64 bg-gradient-to-r from-yellow-200 to-orange-200 rounded-full filter blur-3xl animate-float"></div>
          <div className="absolute bottom-5 left-5 w-24 h-24 sm:bottom-10 sm:left-10 sm:w-48 sm:h-48 bg-gradient-to-r from-orange-200 to-red-200 rounded-full filter blur-2xl animate-float animation-delay-2000"></div>
        </div>

        {/* Mobile-First Layout */}
        <div className="space-y-8 lg:space-y-0 lg:flex lg:flex-row lg:gap-8 relative z-10">
          
          {/* Mobile-First Sidebar */}
          <div className="w-full lg:w-1/3 lg:order-2">
            <div className="space-y-4 sm:space-y-6">
              {/* Learning Objectives */}
              <div className="group glass-morphism rounded-xl p-4 sm:p-6 card-3d-hover relative overflow-hidden">
                <div className="absolute top-0 right-0 w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-yellow-400/20 to-orange-400/20 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4 relative z-10">Learning Objectives</h3>
                <ul className="space-y-2 sm:space-y-3 relative z-10">
                  {learningObjectives.map((objective, index) => (
                    <li key={index} className="flex items-start group-hover:translate-x-1 transition-transform duration-300" style={{ transitionDelay: `${index * 50}ms` }}>
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-500 mr-2 sm:mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600 text-xs sm:text-sm leading-relaxed">{objective}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Prerequisites */}
              <div className="group glass-morphism rounded-xl p-4 sm:p-6 card-3d-hover relative overflow-hidden animation-delay-500">
                <div className="absolute top-0 right-0 w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-orange-400/20 to-red-400/20 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4 relative z-10">Prerequisites</h3>
                <ul className="space-y-2 sm:space-y-3 relative z-10">
                  {prerequisites.map((prerequisite, index) => (
                    <li key={index} className="flex items-start group-hover:translate-x-1 transition-transform duration-300" style={{ transitionDelay: `${index * 50}ms` }}>
                      <Code className="w-4 h-4 sm:w-5 sm:h-5 text-orange-500 mr-2 sm:mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600 text-xs sm:text-sm leading-relaxed">{prerequisite}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Duration Options */}
              <div className="group glass-morphism rounded-xl p-4 sm:p-6 card-3d-hover relative overflow-hidden animation-delay-1000">
                <div className="absolute top-0 right-0 w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-red-400/20 to-yellow-400/20 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4 relative z-10">Duration Options</h3>
                <div className="space-y-3 relative z-10">
                  <div className="flex items-center justify-between p-3 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg hover:from-yellow-100 hover:to-orange-100 transition-colors duration-300">
                    <span className="font-medium text-yellow-700 text-sm sm:text-base">4 Weeks</span>
                    <span className="text-yellow-600 text-xs sm:text-sm">Intensive Track</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gradient-to-r from-orange-50 to-red-50 rounded-lg hover:from-orange-100 hover:to-red-100 transition-colors duration-300">
                    <span className="font-medium text-orange-700 text-sm sm:text-base">8 Weeks</span>
                    <span className="text-orange-600 text-xs sm:text-sm">Comprehensive Track</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile-First Main Content */}
          <div className="w-full lg:w-2/3 lg:order-1">
            <div className="glass-morphism rounded-xl p-4 sm:p-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-16 h-16 sm:w-32 sm:h-32 bg-gradient-to-br from-yellow-400/10 to-orange-400/10 rounded-bl-full"></div>
              
              <div className="relative z-10">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6">
                  JavaScript Development <span className="bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">Project Tasks</span>
                </h2>
                
                <div className="space-y-4 sm:space-y-6">
                  {tasks.map((task, index) => (
                    <div 
                      key={task.id} 
                      className="group glass-morphism border border-gray-200 rounded-xl p-4 sm:p-6 card-3d-hover relative overflow-hidden"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      {/* 3D Glow Effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                      
                      <div className="relative z-10">
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3 sm:mb-4">
                          <div className="flex-1">
                            <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-2">
                              <span className="text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-yellow-600 to-orange-600 px-2 sm:px-3 py-1 rounded-full">
                                Task {task.id}
                              </span>
                              <span className={`text-xs font-medium px-2 py-1 rounded-full ${getLevelColor(task.level)}`}>
                                {task.level}
                              </span>
                            </div>
                            <h3 className="text-base sm:text-lg font-semibold text-gray-800 group-hover:text-yellow-600 transition-colors duration-300 leading-tight">
                              {task.title}
                            </h3>
                          </div>
                        </div>
                        
                        <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 leading-relaxed">{task.description}</p>
                        
                        <div className="mb-3 sm:mb-4">
                          <h4 className="font-medium text-gray-800 mb-2 flex items-center text-sm sm:text-base">
                            <span className="w-2 h-2 bg-gradient-to-r from-yellow-600 to-orange-600 rounded-full mr-2"></span>
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
                            <Code className="w-3 h-3 sm:w-4 sm:h-4 mr-2 text-orange-600" />
                            Required Tools:
                          </h4>
                          <p className="text-gray-600 text-xs sm:text-sm bg-gray-50 p-2 rounded-lg leading-relaxed">{task.tools}</p>
                        </div>

                        <div className="mb-3 sm:mb-4">
                          <h4 className="font-medium text-gray-800 mb-2 flex items-center text-sm sm:text-base">
                            <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 mr-2 text-yellow-600" />
                            Expected Deliverable:
                          </h4>
                          <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">{task.expectedOutput}</p>
                        </div>
                        
                        <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-3 sm:p-4 rounded-lg border border-yellow-200">
                          <h4 className="font-medium text-yellow-800 mb-2 flex items-center text-sm sm:text-base">
                            <Brackets className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                            Web App Demo Requirements:
                          </h4>
                          <p className="text-yellow-700 text-xs sm:text-sm mb-2 leading-relaxed">{task.videoDemo}</p>
                          <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs text-yellow-600">
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

export default JavaScriptDevelopment;
