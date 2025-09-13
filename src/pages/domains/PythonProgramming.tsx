import React from 'react';
import { ArrowLeft, CheckCircle, Code, Globe, Play, Github, Video, Upload, Users, Monitor, Package, FileText, Database } from 'lucide-react';
import { Link } from 'react-router-dom';

const PythonProgramming = () => {
  const tasks = [
    {
      id: 1,
      title: "Simple Calculator with Functions",
      level: "Beginner",
      description: "Create a basic calculator program using Python functions for different operations.",
      steps: [
        "Set up Python development environment (Python + VS Code)",
        "Create functions for basic math operations (add, subtract, multiply, divide)",
        "Build a simple menu system for user interaction",
        "Add input validation to handle errors gracefully",
        "Test all operations with different number inputs"
      ],
      tools: "Python, Basic Functions, User Input, Error Handling",
      expectedOutput: "A working calculator that performs basic math operations with user input",
      videoDemo: "Show calculator working with different operations and demonstrate error handling with invalid inputs"
    },
    {
      id: 2,
      title: "Simple Student Grade Manager",
      level: "Beginner", 
      description: "Build a program to manage student information and calculate grades.",
      steps: [
        "Create a Student class with name, subjects, and grades",
        "Add methods to calculate average grades and letter grades",
        "Store multiple students in a list or dictionary",
        "Create functions to add, view, and update student information",
        "Generate simple grade reports for individual students"
      ],
      tools: "Python Classes, Lists/Dictionaries, Basic OOP, Grade Calculations",
      expectedOutput: "A student grade management system with class-based structure",
      videoDemo: "Add students, update grades, and show grade report generation with different students"
    },
    {
      id: 3,
      title: "Simple File-Based To-Do List",
      level: "Beginner",
      description: "Create a to-do list application that saves tasks to a text file.",
      steps: [
        "Create functions to add, view, and delete tasks",
        "Save tasks to a text file for persistence",
        "Load existing tasks when program starts",
        "Add task status (completed/pending) functionality",
        "Create simple menu system for user interactions"
      ],
      tools: "Python File I/O, Text Files, Lists, Basic Menu System",
      expectedOutput: "A to-do list app that saves tasks to file and loads them on restart",
      videoDemo: "Add tasks, mark as complete, delete tasks, and show persistence by restarting program"
    },
    {
      id: 4,
      title: "Simple Word Count and Text Analyzer",
      level: "Beginner",
      description: "Build a text analysis tool that processes text files and provides statistics.",
      steps: [
        "Read text from files and count words, lines, and characters",
        "Find the most frequent words in the text",
        "Calculate average word length and sentence count",
        "Handle different text file formats gracefully",
        "Display results in a user-friendly format"
      ],
      tools: "Python File Reading, String Operations, Text Processing, Statistics",
      expectedOutput: "A text analyzer that provides comprehensive statistics about text files",
      videoDemo: "Analyze different text files and show various statistics and word frequency results"
    },
    {
      id: 5,
      title: "Simple Contact Book with Search",
      level: "Beginner",
      description: "Create a contact management system with search and file storage.",
      steps: [
        "Design Contact class with name, phone, email, and address",
        "Add contacts and store them in a file (CSV or text format)",
        "Implement search functionality by name or phone number",
        "Create edit and delete contact features",
        "Load and save contacts automatically"
      ],
      tools: "Python Classes, File I/O, CSV handling, Search algorithms",
      expectedOutput: "A contact book with full CRUD operations and file-based storage",
      videoDemo: "Add contacts, search by different criteria, edit contacts, and show data persistence"
    },
    {
      id: 6,
      title: "Simple Quiz Game Generator",
      level: "Beginner",
      description: "Build an interactive quiz game that loads questions from a file.",
      steps: [
        "Create quiz questions in a text file or CSV format",
        "Load questions and present them to users one by one",
        "Keep track of correct and incorrect answers",
        "Calculate final score and percentage",
        "Add different difficulty levels or categories"
      ],
      tools: "Python File Reading, Lists, Dictionaries, Score Tracking",
      expectedOutput: "An interactive quiz game with scoring and multiple question sets",
      videoDemo: "Play through quiz showing question presentation, answer checking, and final score calculation"
    },
    {
      id: 7,
      title: "Simple Expense Tracker with Charts",
      level: "Beginner",
      description: "Create an expense tracking application with basic data visualization.",
      steps: [
        "Create Expense class with amount, category, date, and description",
        "Store expenses in a file and load them on program start",
        "Calculate totals by category and monthly summaries",
        "Create simple charts using matplotlib library",
        "Generate expense reports with visualizations"
      ],
      tools: "Python Classes, File I/O, matplotlib, Data visualization",
      expectedOutput: "An expense tracker with categorization and visual charts",
      videoDemo: "Add expenses, view by category, and show chart generation with expense breakdowns"
    },
    {
      id: 8,
      title: "Simple Password Generator and Manager",
      level: "Beginner",
      description: "Build a secure password generator and simple password storage system.",
      steps: [
        "Create password generator with different character sets",
        "Allow users to specify password length and complexity",
        "Store generated passwords with website names in encrypted format",
        "Add password retrieval functionality with master password",
        "Include password strength checker"
      ],
      tools: "Python Random module, String operations, Basic encryption, File storage",
      expectedOutput: "A password generator and manager with secure storage",
      videoDemo: "Generate passwords with different settings, store them, and retrieve with master password"
    },
    {
      id: 9,
      title: "Simple Web Scraper for News Headlines",
      level: "Beginner",
      description: "Create a web scraper to extract news headlines and save them to a file.",
      steps: [
        "Use requests library to fetch web page content",
        "Parse HTML using BeautifulSoup to extract headlines",
        "Save headlines with dates to a text file",
        "Handle different news websites or RSS feeds",
        "Create automated daily news collection script"
      ],
      tools: "Python requests, BeautifulSoup, Web scraping, File I/O",
      expectedOutput: "A news scraper that collects and saves headlines from websites",
      videoDemo: "Show scraper collecting headlines from websites and saving to file with timestamps"
    },
    {
      id: 10,
      title: "Complete Python Toolkit Application",
      level: "Beginner",
      description: "Build a comprehensive desktop application combining multiple Python tools.",
      steps: [
        "Create main application with multiple tool modules",
        "Include calculator, file manager, text analyzer, and password generator",
        "Build simple GUI using tkinter for user-friendly interface",
        "Add file operations, data export, and settings management",
        "Create user manual and help system within the application",
        "Package application for easy distribution and installation",
        "Add error logging and user feedback systems"
      ],
      tools: "Python tkinter, Multiple modules, GUI development, Application packaging",
      expectedOutput: "A complete desktop application with multiple integrated Python tools",
      videoDemo: "Give complete tour of application showing all tools working, GUI interface, and demonstrate integrated functionality across different modules"
    }
  ];

  const prerequisites = [
    "Basic understanding of programming logic and problem-solving",
    "Familiarity with using computers and file systems",
    "Understanding of basic mathematics and logical thinking",
    "Interest in learning programming and building applications"
  ];

  const learningObjectives = [
    "Learn Python programming language fundamentals",
    "Master Python syntax, data types, and control structures",
    "Understand object-oriented programming with Python classes",
    "Develop skills in file handling and data persistence",
    "Learn to build practical applications and tools",
    "Build problem-solving skills with programming"
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
      <section className="pt-16 pb-12 sm:pt-20 sm:pb-20 bg-gradient-to-br from-yellow-50 to-amber-50 relative overflow-hidden">
        {/* 3D Background Elements - Reduced on mobile */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 left-5 w-32 h-32 sm:top-20 sm:left-10 sm:w-64 sm:h-64 bg-gradient-to-r from-yellow-300 to-amber-200 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-blob animate-morph"></div>
          <div className="absolute top-20 right-5 w-40 h-40 sm:top-40 sm:right-10 sm:w-72 sm:h-72 bg-gradient-to-r from-amber-300 to-orange-200 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-blob animation-delay-2000 animate-morph"></div>
          <div className="absolute bottom-5 left-1/3 w-24 h-24 sm:bottom-10 sm:w-48 sm:h-48 bg-gradient-to-r from-orange-300 to-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-blob animation-delay-4000"></div>
        </div>

        {/* Floating 3D Elements - Hidden on small mobile */}
        <div className="hidden sm:block absolute top-1/4 left-1/5 w-6 h-6 bg-gradient-to-r from-yellow-500 to-amber-400 rounded-full animate-float shadow-lg"></div>
        <div className="hidden sm:block absolute top-2/3 right-1/4 w-8 h-8 bg-gradient-to-r from-amber-500 to-orange-400 rounded-lg animate-pulse shadow-xl transform rotate-45"></div>
        <div className="hidden sm:block absolute top-1/2 right-1/5 w-4 h-4 bg-gradient-to-r from-orange-500 to-yellow-400 rounded-full animate-bounce shadow-md"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Mobile-Responsive Header - Fixed text wrapping */}
          <div className="flex flex-col sm:flex-row sm:items-center mb-6 sm:mb-8">
            <div className="flex items-center mb-4 sm:mb-0 sm:mr-4">
              <div className="p-2 sm:p-3 rounded-xl bg-gradient-to-r from-yellow-50 to-amber-50 mr-3 sm:mr-4 hover:scale-110 transition-transform duration-300">
                <Code className="w-8 h-8 sm:w-12 sm:h-12 text-yellow-600" />
              </div>
              <div className="flex-1">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
                  Python Programming
                </h1>
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-yellow-600 to-amber-600 bg-clip-text text-transparent leading-tight">
                  Internship
                </div>
              </div>
            </div>
          </div>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-6">Develop applications with Python's versatile ecosystem</p>

          {/* Mobile-Friendly Professional Instructions */}
          <div className="glass-morphism rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 border border-yellow-200 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-16 h-16 sm:w-32 sm:h-32 bg-gradient-to-br from-yellow-400/10 to-amber-400/10 rounded-bl-full"></div>
            <div className="absolute bottom-0 left-0 w-12 h-12 sm:w-24 sm:h-24 bg-gradient-to-tr from-amber-400/10 to-yellow-400/10 rounded-tr-full"></div>
            
            <div className="relative z-10">
              <div className="flex flex-col sm:flex-row sm:items-center mb-4 sm:mb-6">
                <div className="p-2 sm:p-3 rounded-xl bg-gradient-to-r from-yellow-500 to-amber-500 text-white mr-0 sm:mr-4 mb-3 sm:mb-0 w-fit">
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
                    Choose any <strong>2 tasks</strong> from the 10 beginner-friendly Python programming tasks provided below. Select based on your interests and learning goals.
                  </p>
                </div>

                <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-sm border border-gray-100">
                  <div className="flex items-center mb-3 sm:mb-4">
                    <div className="p-2 rounded-lg bg-amber-100 mr-3">
                      <Package className="w-5 h-5 sm:w-6 sm:h-6 text-amber-600" />
                    </div>
                    <h3 className="text-base sm:text-lg font-semibold text-gray-800">Program Demo</h3>
                  </div>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    Create a <strong>3-minute video</strong> or take <strong>screenshots</strong> showing your Python programs running and their output. Upload to LinkedIn with <strong>#CosmoDigitalServices</strong>.
                  </p>
                </div>

                <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-sm border border-gray-100">
                  <div className="flex items-center mb-3 sm:mb-4">
                    <div className="p-2 rounded-lg bg-orange-100 mr-3">
                      <Github className="w-5 h-5 sm:w-6 sm:h-6 text-orange-600" />
                    </div>
                    <h3 className="text-base sm:text-lg font-semibold text-gray-800">Code Repository</h3>
                  </div>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    Upload your complete Python project files to <strong>GitHub</strong> with proper documentation. Repository links will be collected through our submission portal.
                  </p>
                </div>
              </div>

              {/* Mobile-Friendly Requirements Section */}
              <div className="bg-gradient-to-r from-yellow-50 to-amber-50 rounded-lg sm:rounded-xl p-4 sm:p-6 border-l-4 border-yellow-500">
                <h4 className="text-base sm:text-lg font-semibold text-gray-800 mb-3 flex items-center">
                  <Play className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-yellow-600" />
                  Submission Requirements
                </h4>
                <div className="space-y-4 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-4 text-sm text-gray-700">
                  <div className="space-y-2">
                    <h5 className="font-medium text-gray-800 text-sm sm:text-base">Video/Screenshot Content Must Include:</h5>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 text-xs sm:text-sm">
                      <li>Program execution showing input and output</li>
                      <li>Code walkthrough explaining key Python concepts</li>
                      <li>Demonstration of all program features working</li>
                      <li>Error handling and edge case testing</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h5 className="font-medium text-gray-800 text-sm sm:text-base">Code Repository Must Include:</h5>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 text-xs sm:text-sm">
                      <li>Complete Python source code files (.py)</li>
                      <li>Sample data files used by the programs</li>
                      <li>README.md with setup and usage instructions</li>
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
          <div className="absolute top-5 right-5 w-32 h-32 sm:top-10 sm:right-10 sm:w-64 sm:h-64 bg-gradient-to-r from-yellow-200 to-amber-200 rounded-full filter blur-3xl animate-float"></div>
          <div className="absolute bottom-5 left-5 w-24 h-24 sm:bottom-10 sm:left-10 sm:w-48 sm:h-48 bg-gradient-to-r from-amber-200 to-orange-200 rounded-full filter blur-2xl animate-float animation-delay-2000"></div>
        </div>

        {/* Mobile-First Layout */}
        <div className="space-y-8 lg:space-y-0 lg:flex lg:flex-row lg:gap-8 relative z-10">
          
          {/* Mobile-First Sidebar */}
          <div className="w-full lg:w-1/3 lg:order-2">
            <div className="space-y-4 sm:space-y-6">
              {/* Learning Objectives */}
              <div className="group glass-morphism rounded-xl p-4 sm:p-6 card-3d-hover relative overflow-hidden">
                <div className="absolute top-0 right-0 w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-yellow-400/20 to-amber-400/20 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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
                <div className="absolute top-0 right-0 w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-amber-400/20 to-orange-400/20 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4 relative z-10">Prerequisites</h3>
                <ul className="space-y-2 sm:space-y-3 relative z-10">
                  {prerequisites.map((prerequisite, index) => (
                    <li key={index} className="flex items-start group-hover:translate-x-1 transition-transform duration-300" style={{ transitionDelay: `${index * 50}ms` }}>
                      <Code className="w-4 h-4 sm:w-5 sm:h-5 text-amber-500 mr-2 sm:mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600 text-xs sm:text-sm leading-relaxed">{prerequisite}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Duration Options */}
              <div className="group glass-morphism rounded-xl p-4 sm:p-6 card-3d-hover relative overflow-hidden animation-delay-1000">
                <div className="absolute top-0 right-0 w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-orange-400/20 to-yellow-400/20 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4 relative z-10">Duration Options</h3>
                <div className="space-y-3 relative z-10">
                  <div className="flex items-center justify-between p-3 bg-gradient-to-r from-yellow-50 to-amber-50 rounded-lg hover:from-yellow-100 hover:to-amber-100 transition-colors duration-300">
                    <span className="font-medium text-yellow-700 text-sm sm:text-base">4 Weeks</span>
                    <span className="text-yellow-600 text-xs sm:text-sm">Intensive Track</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gradient-to-r from-amber-50 to-orange-50 rounded-lg hover:from-amber-100 hover:to-orange-100 transition-colors duration-300">
                    <span className="font-medium text-amber-700 text-sm sm:text-base">8 Weeks</span>
                    <span className="text-amber-600 text-xs sm:text-sm">Comprehensive Track</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile-First Main Content */}
          <div className="w-full lg:w-2/3 lg:order-1">
            <div className="glass-morphism rounded-xl p-4 sm:p-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-16 h-16 sm:w-32 sm:h-32 bg-gradient-to-br from-yellow-400/10 to-amber-400/10 rounded-bl-full"></div>
              
              <div className="relative z-10">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6">
                  Python Programming <span className="bg-gradient-to-r from-yellow-600 to-amber-600 bg-clip-text text-transparent">Project Tasks</span>
                </h2>
                
                <div className="space-y-4 sm:space-y-6">
                  {tasks.map((task, index) => (
                    <div 
                      key={task.id} 
                      className="group glass-morphism border border-gray-200 rounded-xl p-4 sm:p-6 card-3d-hover relative overflow-hidden"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      {/* 3D Glow Effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 to-amber-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                      
                      <div className="relative z-10">
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3 sm:mb-4">
                          <div className="flex-1">
                            <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-2">
                              <span className="text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-yellow-600 to-amber-600 px-2 sm:px-3 py-1 rounded-full">
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
                            <span className="w-2 h-2 bg-gradient-to-r from-yellow-600 to-amber-600 rounded-full mr-2"></span>
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
                            <Code className="w-3 h-3 sm:w-4 sm:h-4 mr-2 text-amber-600" />
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
                        
                        <div className="bg-gradient-to-r from-yellow-50 to-amber-50 p-3 sm:p-4 rounded-lg border border-yellow-200">
                          <h4 className="font-medium text-yellow-800 mb-2 flex items-center text-sm sm:text-base">
                            <Package className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                            Program Demo Requirements:
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

export default PythonProgramming;
