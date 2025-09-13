import React from 'react';
import { ArrowLeft, CheckCircle, Globe, Code, Play, Github, Video, Upload, Users, Monitor, Layers, Component } from 'lucide-react';
import { Link } from 'react-router-dom';

const ReactJSDevelopment = () => {
  const tasks = [
    {
      id: 1,
      title: "Simple Personal Portfolio Website",
      level: "Beginner",
      description: "Create a basic personal portfolio website using React components and props.",
      steps: [
        "Set up React development environment (Node.js + Create React App)",
        "Create Header, About, Skills, and Contact components",
        "Use props to pass data between components",
        "Style components with basic CSS and make responsive",
        "Add navigation between different sections"
      ],
      tools: "React, Create React App, JSX, CSS, Basic Components",
      expectedOutput: "A personal portfolio website with multiple React components",
      videoDemo: "Show different sections of portfolio, component structure, and responsive design working"
    },
    {
      id: 2,
      title: "Simple Counter and Calculator App",
      level: "Beginner", 
      description: "Build an interactive counter and calculator using React state and event handling.",
      steps: [
        "Create counter component with increment, decrement, and reset buttons",
        "Add calculator component with basic math operations",
        "Use useState hook to manage component state",
        "Handle button clicks and user input events",
        "Style the applications with attractive UI"
      ],
      tools: "React Hooks (useState), Event Handling, Component State",
      expectedOutput: "Interactive counter and calculator with working buttons and state management",
      videoDemo: "Demonstrate counter operations and calculator functionality with state updates"
    },
    {
      id: 3,
      title: "Simple To-Do List with Local Storage",
      level: "Beginner",
      description: "Create a to-do list application with add, delete, and complete functionality.",
      steps: [
        "Build to-do item components with text and status",
        "Add form to create new to-do items",
        "Implement delete and mark complete functionality",
        "Use useEffect hook for side effects",
        "Store tasks in browser's local storage for persistence"
      ],
      tools: "React Hooks (useState, useEffect), Local Storage, Forms",
      expectedOutput: "A functional to-do list with persistent data storage",
      videoDemo: "Add tasks, mark complete, delete items, and show persistence after page refresh"
    },
    {
      id: 4,
      title: "Simple Weather App with API",
      level: "Beginner",
      description: "Build a weather application that fetches data from a weather API.",
      steps: [
        "Create weather display component with city search",
        "Use fetch API to get weather data from OpenWeatherMap",
        "Handle loading states and error messages",
        "Display weather information with icons and temperature",
        "Add search history and favorite cities feature"
      ],
      tools: "React, Fetch API, Weather API, Conditional Rendering",
      expectedOutput: "A weather app that displays real weather data for searched cities",
      videoDemo: "Search for different cities, show weather data loading, and demonstrate error handling"
    },
    {
      id: 5,
      title: "Simple Recipe Book App",
      level: "Beginner",
      description: "Create a recipe book application with search and filtering capabilities.",
      steps: [
        "Create recipe card components to display recipe information",
        "Build recipe list and detail view components",
        "Add search functionality to find recipes by name",
        "Implement category filtering (breakfast, lunch, dinner)",
        "Use static recipe data or simple recipe API"
      ],
      tools: "React Components, Props, State, Search/Filter Logic",
      expectedOutput: "A recipe book with search, filter, and detailed recipe views",
      videoDemo: "Browse recipes, use search and filter features, and show recipe details"
    },
    {
      id: 6,
      title: "Simple Photo Gallery with Categories",
      level: "Beginner",
      description: "Build a photo gallery application with category filtering and modal views.",
      steps: [
        "Create photo grid component to display thumbnails",
        "Add category filter buttons (nature, city, people)",
        "Implement modal component for full-size image viewing",
        "Add next/previous navigation in modal view",
        "Use sample images or free image APIs"
      ],
      tools: "React Components, State Management, Modal Components, Image Handling",
      expectedOutput: "A photo gallery with filtering and modal viewing capabilities",
      videoDemo: "Filter photos by category, open modal view, and navigate between images"
    },
    {
      id: 7,
      title: "Simple Quiz Application",
      level: "Beginner",
      description: "Create an interactive quiz application with scoring and results.",
      steps: [
        "Create question components with multiple choice options",
        "Build quiz navigation (next, previous, submit)",
        "Track user answers and calculate final score",
        "Show results screen with correct answer review",
        "Add timer functionality for each question (optional)"
      ],
      tools: "React State, Conditional Rendering, Array Methods, Timer Functions",
      expectedOutput: "A complete quiz app with questions, scoring, and results display",
      videoDemo: "Take quiz, show question navigation, scoring, and final results with review"
    },
    {
      id: 8,
      title: "Simple E-commerce Product Catalog",
      level: "Beginner",
      description: "Build a basic e-commerce product catalog with cart functionality.",
      steps: [
        "Create product card components with image, name, and price",
        "Build shopping cart component with add/remove items",
        "Implement product search and category filtering",
        "Calculate total price and item quantities in cart",
        "Add simple checkout form for user information"
      ],
      tools: "React Components, State Management, Cart Logic, Form Handling",
      expectedOutput: "A product catalog with working shopping cart and checkout",
      videoDemo: "Browse products, add to cart, modify quantities, and complete checkout process"
    },
    {
      id: 9,
      title: "Simple Blog Website with Comments",
      level: "Beginner",
      description: "Create a blog website with posts, comments, and basic navigation.",
      steps: [
        "Create blog post components with title, content, and date",
        "Build blog post list and individual post views",
        "Add comment component with add comment functionality",
        "Implement simple routing between blog posts",
        "Store blog posts and comments in component state"
      ],
      tools: "React Router, Component Navigation, Forms, State Management",
      expectedOutput: "A blog website with posts, comments, and navigation between pages",
      videoDemo: "Browse blog posts, read individual posts, add comments, and show navigation"
    },
    {
      id: 10,
      title: "Complete React Dashboard Application",
      level: "Beginner",
      description: "Build a comprehensive dashboard combining multiple React features and components.",
      steps: [
        "Create main dashboard layout with sidebar navigation",
        "Include widgets for weather, to-do list, calculator, and photo gallery",
        "Add user profile section with editable information",
        "Implement dark/light theme toggle functionality",
        "Create responsive design that works on mobile devices",
        "Add data persistence using local storage for all components",
        "Include comprehensive error handling and loading states"
      ],
      tools: "Complete React Ecosystem, Multiple Components, Routing, Theming, Responsive Design",
      expectedOutput: "A complete dashboard application with multiple integrated features",
      videoDemo: "Give full tour of dashboard showing all widgets working, theme toggle, responsive design, and integrated functionality"
    }
  ];

  const prerequisites = [
    "Basic understanding of JavaScript ES6+ features",
    "Familiarity with HTML and CSS fundamentals",
    "Understanding of modern web development concepts",
    "Interest in building interactive user interfaces"
  ];

  const learningObjectives = [
    "Learn React library fundamentals and component architecture",
    "Master JSX syntax and modern JavaScript in React",
    "Understand React hooks and state management",
    "Develop skills in building interactive user interfaces",
    "Learn component composition and reusability patterns",
    "Build practical web applications with React"
  ];

  const getLevelColor = (level) => {
    switch (level) {
      case 'Beginner': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen">
      <br></br>
      {/* Mobile-Friendly Enhanced Header */}
      <section className="pt-16 pb-12 sm:pt-20 sm:pb-20 bg-gradient-to-br from-blue-50 to-indigo-50 relative overflow-hidden">
        {/* 3D Background Elements - Reduced on mobile */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 left-5 w-32 h-32 sm:top-20 sm:left-10 sm:w-64 sm:h-64 bg-gradient-to-r from-blue-300 to-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-blob animate-morph"></div>
          <div className="absolute top-20 right-5 w-40 h-40 sm:top-40 sm:right-10 sm:w-72 sm:h-72 bg-gradient-to-r from-indigo-300 to-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-blob animation-delay-2000 animate-morph"></div>
          <div className="absolute bottom-5 left-1/3 w-24 h-24 sm:bottom-10 sm:w-48 sm:h-48 bg-gradient-to-r from-purple-300 to-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-blob animation-delay-4000"></div>
        </div>

        {/* Floating 3D Elements - Hidden on small mobile */}
        <div className="hidden sm:block absolute top-1/4 left-1/5 w-6 h-6 bg-gradient-to-r from-blue-500 to-indigo-400 rounded-full animate-float shadow-lg"></div>
        <div className="hidden sm:block absolute top-2/3 right-1/4 w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-400 rounded-lg animate-pulse shadow-xl transform rotate-45"></div>
        <div className="hidden sm:block absolute top-1/2 right-1/5 w-4 h-4 bg-gradient-to-r from-purple-500 to-blue-400 rounded-full animate-bounce shadow-md"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Mobile-Responsive Header - Fixed text wrapping */}
          <div className="flex flex-col sm:flex-row sm:items-center mb-6 sm:mb-8">
            <div className="flex items-center mb-4 sm:mb-0 sm:mr-4">
              <div className="p-2 sm:p-3 rounded-xl bg-gradient-to-r from-blue-50 to-indigo-50 mr-3 sm:mr-4 hover:scale-110 transition-transform duration-300">
                <Globe className="w-8 h-8 sm:w-12 sm:h-12 text-blue-600" />
              </div>
              <div className="flex-1">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
                  ReactJS Development
                </h1>
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent leading-tight">
                  Internship
                </div>
              </div>
            </div>
          </div>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-6">Create dynamic web applications with React</p>

          {/* Mobile-Friendly Professional Instructions */}
          <div className="glass-morphism rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 border border-blue-200 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-16 h-16 sm:w-32 sm:h-32 bg-gradient-to-br from-blue-400/10 to-indigo-400/10 rounded-bl-full"></div>
            <div className="absolute bottom-0 left-0 w-12 h-12 sm:w-24 sm:h-24 bg-gradient-to-tr from-indigo-400/10 to-blue-400/10 rounded-tr-full"></div>
            
            <div className="relative z-10">
              <div className="flex flex-col sm:flex-row sm:items-center mb-4 sm:mb-6">
                <div className="p-2 sm:p-3 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 text-white mr-0 sm:mr-4 mb-3 sm:mb-0 w-fit">
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
                    Choose any <strong>2 tasks</strong> from the 10 beginner-friendly React development tasks provided below. Select based on your interests and learning goals.
                  </p>
                </div>

                <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-sm border border-gray-100">
                  <div className="flex items-center mb-3 sm:mb-4">
                    <div className="p-2 rounded-lg bg-indigo-100 mr-3">
                      <Component className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-600" />
                    </div>
                    <h3 className="text-base sm:text-lg font-semibold text-gray-800">App Demo</h3>
                  </div>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    Create a <strong>3-minute video</strong> or take <strong>screenshots</strong> showing your React application functionality. Upload to LinkedIn with <strong>#CosmoDigitalServices</strong>.
                  </p>
                </div>

                <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-sm border border-gray-100">
                  <div className="flex items-center mb-3 sm:mb-4">
                    <div className="p-2 rounded-lg bg-purple-100 mr-3">
                      <Github className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600" />
                    </div>
                    <h3 className="text-base sm:text-lg font-semibold text-gray-800">Code Repository</h3>
                  </div>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    Upload your complete React project code to <strong>GitHub</strong> with proper documentation. Repository links will be collected through our submission portal.
                  </p>
                </div>
              </div>

              {/* Mobile-Friendly Requirements Section */}
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg sm:rounded-xl p-4 sm:p-6 border-l-4 border-blue-500">
                <h4 className="text-base sm:text-lg font-semibold text-gray-800 mb-3 flex items-center">
                  <Play className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-blue-600" />
                  Submission Requirements
                </h4>
                <div className="space-y-4 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-4 text-sm text-gray-700">
                  <div className="space-y-2">
                    <h5 className="font-medium text-gray-800 text-sm sm:text-base">Video/Screenshot Content Must Include:</h5>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 text-xs sm:text-sm">
                      <li>Complete React application functionality demonstration</li>
                      <li>Component interactions and state management showcase</li>
                      <li>User interface responsiveness and navigation</li>
                      <li>Code explanation of key React concepts used</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h5 className="font-medium text-gray-800 text-sm sm:text-base">Code Repository Must Include:</h5>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 text-xs sm:text-sm">
                      <li>Complete React project source code</li>
                      <li>Live demo link (GitHub Pages, Netlify, Vercel)</li>
                      <li>README.md with setup and feature descriptions</li>
                      <li>Clear component structure and documentation</li>
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
          <div className="absolute top-5 right-5 w-32 h-32 sm:top-10 sm:right-10 sm:w-64 sm:h-64 bg-gradient-to-r from-blue-200 to-indigo-200 rounded-full filter blur-3xl animate-float"></div>
          <div className="absolute bottom-5 left-5 w-24 h-24 sm:bottom-10 sm:left-10 sm:w-48 sm:h-48 bg-gradient-to-r from-indigo-200 to-purple-200 rounded-full filter blur-2xl animate-float animation-delay-2000"></div>
        </div>

        {/* Mobile-First Layout */}
        <div className="space-y-8 lg:space-y-0 lg:flex lg:flex-row lg:gap-8 relative z-10">
          
          {/* Mobile-First Sidebar */}
          <div className="w-full lg:w-1/3 lg:order-2">
            <div className="space-y-4 sm:space-y-6">
              {/* Learning Objectives */}
              <div className="group glass-morphism rounded-xl p-4 sm:p-6 card-3d-hover relative overflow-hidden">
                <div className="absolute top-0 right-0 w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-blue-400/20 to-indigo-400/20 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4 relative z-10">Learning Objectives</h3>
                <ul className="space-y-2 sm:space-y-3 relative z-10">
                  {learningObjectives.map((objective, index) => (
                    <li key={index} className="flex items-start group-hover:translate-x-1 transition-transform duration-300" style={{ transitionDelay: `${index * 50}ms` }}>
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500 mr-2 sm:mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600 text-xs sm:text-sm leading-relaxed">{objective}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Prerequisites */}
              <div className="group glass-morphism rounded-xl p-4 sm:p-6 card-3d-hover relative overflow-hidden animation-delay-500">
                <div className="absolute top-0 right-0 w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-indigo-400/20 to-purple-400/20 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4 relative z-10">Prerequisites</h3>
                <ul className="space-y-2 sm:space-y-3 relative z-10">
                  {prerequisites.map((prerequisite, index) => (
                    <li key={index} className="flex items-start group-hover:translate-x-1 transition-transform duration-300" style={{ transitionDelay: `${index * 50}ms` }}>
                      <Code className="w-4 h-4 sm:w-5 sm:h-5 text-indigo-500 mr-2 sm:mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600 text-xs sm:text-sm leading-relaxed">{prerequisite}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Duration Options */}
              <div className="group glass-morphism rounded-xl p-4 sm:p-6 card-3d-hover relative overflow-hidden animation-delay-1000">
                <div className="absolute top-0 right-0 w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-purple-400/20 to-blue-400/20 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4 relative z-10">Duration Options</h3>
                <div className="space-y-3 relative z-10">
                  <div className="flex items-center justify-between p-3 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg hover:from-blue-100 hover:to-indigo-100 transition-colors duration-300">
                    <span className="font-medium text-blue-700 text-sm sm:text-base">4 Weeks</span>
                    <span className="text-blue-600 text-xs sm:text-sm">Intensive Track</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg hover:from-indigo-100 hover:to-purple-100 transition-colors duration-300">
                    <span className="font-medium text-indigo-700 text-sm sm:text-base">8 Weeks</span>
                    <span className="text-indigo-600 text-xs sm:text-sm">Comprehensive Track</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile-First Main Content */}
          <div className="w-full lg:w-2/3 lg:order-1">
            <div className="glass-morphism rounded-xl p-4 sm:p-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-16 h-16 sm:w-32 sm:h-32 bg-gradient-to-br from-blue-400/10 to-indigo-400/10 rounded-bl-full"></div>
              
              <div className="relative z-10">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6">
                  ReactJS Development <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Project Tasks</span>
                </h2>
                
                <div className="space-y-4 sm:space-y-6">
                  {tasks.map((task, index) => (
                    <div 
                      key={task.id} 
                      className="group glass-morphism border border-gray-200 rounded-xl p-4 sm:p-6 card-3d-hover relative overflow-hidden"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      {/* 3D Glow Effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                      
                      <div className="relative z-10">
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3 sm:mb-4">
                          <div className="flex-1">
                            <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-2">
                              <span className="text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-blue-600 to-indigo-600 px-2 sm:px-3 py-1 rounded-full">
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
                            <span className="w-2 h-2 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full mr-2"></span>
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
                            <Code className="w-3 h-3 sm:w-4 sm:h-4 mr-2 text-indigo-600" />
                            Required Tools:
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
                        
                        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-3 sm:p-4 rounded-lg border border-blue-200">
                          <h4 className="font-medium text-blue-800 mb-2 flex items-center text-sm sm:text-base">
                            <Component className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                            App Demo Requirements:
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

export default ReactJSDevelopment;
