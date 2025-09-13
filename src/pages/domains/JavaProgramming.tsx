import React from 'react';
import { ArrowLeft, CheckCircle, Coffee, Code, Globe, Play, Github, Video, Upload, Users, Monitor, Package, Database } from 'lucide-react';
import { Link } from 'react-router-dom';

const JavaProgramming = () => {
  const tasks = [
    {
      id: 1,
      title: "Simple Student Grade Calculator",
      level: "Beginner",
      description: "Create a basic Java program to calculate and display student grades with different subjects.",
      steps: [
        "Set up Java development environment (JDK + IDE)",
        "Create a Student class with name and subject marks",
        "Write methods to calculate average and assign letter grades",
        "Display student information and grade report",
        "Add input validation for marks (0-100 range)"
      ],
      tools: "Java JDK, IntelliJ IDEA/Eclipse, Basic OOP Concepts",
      expectedOutput: "A grade calculator that processes multiple students and displays grade reports",
      videoDemo: "Show adding student data, calculating grades, and displaying formatted grade reports"
    },
    {
      id: 2,
      title: "Simple Banking System",
      level: "Beginner", 
      description: "Build a basic banking application with account operations and transaction history.",
      steps: [
        "Create Account class with account number, name, and balance",
        "Implement deposit and withdrawal methods with validation",
        "Add balance inquiry and account details display",
        "Create simple transaction history tracking",
        "Build a menu-driven interface for user interactions"
      ],
      tools: "Java OOP, ArrayList for transaction history, Scanner for input",
      expectedOutput: "A banking system with account operations and transaction tracking",
      videoDemo: "Demonstrate account creation, deposits, withdrawals, and transaction history"
    },
    {
      id: 3,
      title: "Simple Library Management System",
      level: "Beginner",
      description: "Create a library system to manage books, borrowers, and basic operations.",
      steps: [
        "Create Book class with title, author, ISBN, and availability status",
        "Create Borrower class with name, ID, and borrowed books list",
        "Implement book search functionality by title or author",
        "Add book borrowing and returning operations",
        "Display available books and borrower information"
      ],
      tools: "Java Classes, ArrayList, String manipulation, Basic file I/O",
      expectedOutput: "A library management system with book and borrower operations",
      videoDemo: "Show adding books, searching, borrowing/returning books, and generating reports"
    },
    {
      id: 4,
      title: "Simple Employee Payroll System",
      level: "Beginner",
      description: "Build a payroll system to calculate employee salaries with different employee types.",
      steps: [
        "Create Employee base class with common properties",
        "Create subclasses for different employee types (Full-time, Part-time)",
        "Implement salary calculation methods for each type",
        "Add overtime calculation and deductions",
        "Generate payroll reports with employee details"
      ],
      tools: "Java Inheritance, Polymorphism, Basic calculations, File output",
      expectedOutput: "A payroll system with different employee types and salary calculations",
      videoDemo: "Add employees, calculate salaries, and show payroll reports generation"
    },
    {
      id: 5,
      title: "Simple Inventory Management System",
      level: "Beginner",
      description: "Create an inventory system to track products, stock levels, and basic operations.",
      steps: [
        "Create Product class with name, ID, price, and quantity",
        "Implement add, update, and remove product functionality",
        "Add stock level monitoring with low stock alerts",
        "Create product search and filter capabilities",
        "Generate inventory reports and summaries"
      ],
      tools: "Java Collections, File I/O, Exception handling, Report generation",
      expectedOutput: "An inventory system with product management and reporting features",
      videoDemo: "Manage products, check stock levels, and demonstrate reporting features"
    },
    {
      id: 6,
      title: "Simple Quiz Application",
      level: "Beginner",
      description: "Build an interactive quiz application with questions, scoring, and results.",
      steps: [
        "Create Question class with question text and multiple choice options",
        "Build Quiz class to manage questions and scoring",
        "Implement user interface for taking the quiz",
        "Add timer functionality for each question (optional)",
        "Display final score and correct answers review"
      ],
      tools: "Java OOP, ArrayList, Scanner input, Basic timing, File reading",
      expectedOutput: "A quiz application with scoring and results display",
      videoDemo: "Take the quiz, show scoring system, and display final results with review"
    },
    {
      id: 7,
      title: "Simple File Management Utility",
      level: "Beginner",
      description: "Create a utility program for basic file operations and text processing.",
      steps: [
        "Implement file reading and writing operations",
        "Add text search functionality within files",
        "Create file copy and move operations",
        "Add word count and line count features",
        "Handle file exceptions and error messages"
      ],
      tools: "Java File I/O, Exception handling, String processing, File operations",
      expectedOutput: "A file management utility with text processing capabilities",
      videoDemo: "Show file operations, text searching, and demonstrate error handling"
    },
    {
      id: 8,
      title: "Simple Address Book Application",
      level: "Beginner",
      description: "Build a contact management system with search and organization features.",
      steps: [
        "Create Contact class with name, phone, email, and address",
        "Implement add, edit, and delete contact operations",
        "Add search functionality by name or phone number",
        "Create contact grouping or categorization",
        "Save and load contacts from file for persistence"
      ],
      tools: "Java OOP, File I/O, ArrayList, String operations, Data persistence",
      expectedOutput: "An address book with contact management and persistence",
      videoDemo: "Add contacts, search and edit contacts, and show data persistence"
    },
    {
      id: 9,
      title: "Simple Calculator with GUI",
      level: "Beginner",
      description: "Create a graphical calculator application using Java Swing.",
      steps: [
        "Design calculator interface using Java Swing components",
        "Add number buttons (0-9) and operation buttons (+, -, ×, ÷)",
        "Implement button click events and calculation logic",
        "Add clear, equals, and decimal point functionality",
        "Style the interface with colors and proper layout"
      ],
      tools: "Java Swing, JFrame, JButton, ActionListener, Layout managers",
      expectedOutput: "A graphical calculator with working buttons and operations",
      videoDemo: "Show calculator interface and demonstrate all mathematical operations"
    },
    {
      id: 10,
      title: "Complete Student Management System",
      level: "Beginner",
      description: "Build a comprehensive student management system combining multiple Java concepts.",
      steps: [
        "Create comprehensive Student class with all details and grades",
        "Implement course enrollment and grade management",
        "Add teacher/instructor management functionality",
        "Create reports for students, courses, and performance analytics",
        "Build simple GUI interface for easy interaction",
        "Add file-based data persistence for all information",
        "Include search and filter capabilities across all modules"
      ],
      tools: "Complete Java OOP, Swing GUI, File I/O, Collections, Exception handling",
      expectedOutput: "A complete student management system with GUI and data persistence",
      videoDemo: "Demonstrate complete system functionality including student management, course enrollment, grading, and reporting features"
    }
  ];

  const prerequisites = [
    "Basic understanding of programming concepts",
    "Familiarity with problem-solving approaches",
    "Understanding of basic mathematics and logic",
    "Interest in learning object-oriented programming"
  ];

  const learningObjectives = [
    "Learn Java programming language fundamentals",
    "Master object-oriented programming concepts",
    "Understand Java syntax, data types, and control structures",
    "Develop skills in problem-solving with Java",
    "Learn basic GUI development with Java Swing",
    "Build practical applications using Java"
  ];

  const getLevelColor = (level) => {
    switch (level) {
      case 'Beginner': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen">
      <br></br>
      {/* Mobile-Friendly Enhanced Header */}
      <section className="pt-16 pb-12 sm:pt-20 sm:pb-20 bg-gradient-to-br from-orange-50 to-red-50 relative overflow-hidden">
        {/* 3D Background Elements - Reduced on mobile */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 left-5 w-32 h-32 sm:top-20 sm:left-10 sm:w-64 sm:h-64 bg-gradient-to-r from-orange-300 to-red-200 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-blob animate-morph"></div>
          <div className="absolute top-20 right-5 w-40 h-40 sm:top-40 sm:right-10 sm:w-72 sm:h-72 bg-gradient-to-r from-red-300 to-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-blob animation-delay-2000 animate-morph"></div>
          <div className="absolute bottom-5 left-1/3 w-24 h-24 sm:bottom-10 sm:w-48 sm:h-48 bg-gradient-to-r from-yellow-300 to-orange-300 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-blob animation-delay-4000"></div>
        </div>

        {/* Floating 3D Elements - Hidden on small mobile */}
        <div className="hidden sm:block absolute top-1/4 left-1/5 w-6 h-6 bg-gradient-to-r from-orange-500 to-red-400 rounded-full animate-float shadow-lg"></div>
        <div className="hidden sm:block absolute top-2/3 right-1/4 w-8 h-8 bg-gradient-to-r from-red-500 to-yellow-400 rounded-lg animate-pulse shadow-xl transform rotate-45"></div>
        <div className="hidden sm:block absolute top-1/2 right-1/5 w-4 h-4 bg-gradient-to-r from-yellow-500 to-orange-400 rounded-full animate-bounce shadow-md"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Mobile-Responsive Header - Fixed text wrapping */}
          <div className="flex flex-col sm:flex-row sm:items-center mb-6 sm:mb-8">
            <div className="flex items-center mb-4 sm:mb-0 sm:mr-4">
              <div className="p-2 sm:p-3 rounded-xl bg-gradient-to-r from-orange-50 to-red-50 mr-3 sm:mr-4 hover:scale-110 transition-transform duration-300">
                <Coffee className="w-8 h-8 sm:w-12 sm:h-12 text-orange-600" />
              </div>
              <div className="flex-1">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
                  Java Programming
                </h1>
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent leading-tight">
                  Internship
                </div>
              </div>
            </div>
          </div>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-6">Master Java programming and build practical applications</p>

          {/* Mobile-Friendly Professional Instructions */}
          <div className="glass-morphism rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 border border-orange-200 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-16 h-16 sm:w-32 sm:h-32 bg-gradient-to-br from-orange-400/10 to-red-400/10 rounded-bl-full"></div>
            <div className="absolute bottom-0 left-0 w-12 h-12 sm:w-24 sm:h-24 bg-gradient-to-tr from-red-400/10 to-orange-400/10 rounded-tr-full"></div>
            
            <div className="relative z-10">
              <div className="flex flex-col sm:flex-row sm:items-center mb-4 sm:mb-6">
                <div className="p-2 sm:p-3 rounded-xl bg-gradient-to-r from-orange-500 to-red-500 text-white mr-0 sm:mr-4 mb-3 sm:mb-0 w-fit">
                  <Users className="w-6 h-6 sm:w-8 sm:h-8" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-800">Internship Project Guidelines</h2>
              </div>

              {/* Mobile-First Grid Layout */}
              <div className="space-y-4 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-6 mb-6 sm:mb-8">
                <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-sm border border-gray-100">
                  <div className="flex items-center mb-3 sm:mb-4">
                    <div className="p-2 rounded-lg bg-orange-100 mr-3">
                      <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-orange-600" />
                    </div>
                    <h3 className="text-base sm:text-lg font-semibold text-gray-800">Task Selection</h3>
                  </div>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    Choose any <strong>2 tasks</strong> from the 10 beginner-friendly Java programming tasks provided below. Select based on your interests and learning goals.
                  </p>
                </div>

                <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-sm border border-gray-100">
                  <div className="flex items-center mb-3 sm:mb-4">
                    <div className="p-2 rounded-lg bg-red-100 mr-3">
                      <Package className="w-5 h-5 sm:w-6 sm:h-6 text-red-600" />
                    </div>
                    <h3 className="text-base sm:text-lg font-semibold text-gray-800">Program Demo</h3>
                  </div>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    Create a <strong>3-minute video</strong> or take <strong>screenshots</strong> showing your Java programs running and their output. Upload to LinkedIn with <strong>#CosmoDigitalServices</strong>.
                  </p>
                </div>

                <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-sm border border-gray-100">
                  <div className="flex items-center mb-3 sm:mb-4">
                    <div className="p-2 rounded-lg bg-yellow-100 mr-3">
                      <Github className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-600" />
                    </div>
                    <h3 className="text-base sm:text-lg font-semibold text-gray-800">Code Repository</h3>
                  </div>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    Upload your complete Java project files to <strong>GitHub</strong> with proper documentation. Repository links will be collected through our submission portal.
                  </p>
                </div>
              </div>

              {/* Mobile-Friendly Requirements Section */}
              <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-lg sm:rounded-xl p-4 sm:p-6 border-l-4 border-orange-500">
                <h4 className="text-base sm:text-lg font-semibold text-gray-800 mb-3 flex items-center">
                  <Play className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-orange-600" />
                  Submission Requirements
                </h4>
                <div className="space-y-4 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-4 text-sm text-gray-700">
                  <div className="space-y-2">
                    <h5 className="font-medium text-gray-800 text-sm sm:text-base">Video/Screenshot Content Must Include:</h5>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 text-xs sm:text-sm">
                      <li>Program compilation and execution process</li>
                      <li>Complete program functionality demonstration</li>
                      <li>Input/output examples and user interactions</li>
                      <li>Code walkthrough explaining key concepts</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h5 className="font-medium text-gray-800 text-sm sm:text-base">Code Repository Must Include:</h5>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 text-xs sm:text-sm">
                      <li>Complete Java source code files (.java)</li>
                      <li>Compiled class files and executable JAR (if applicable)</li>
                      <li>README.md with setup and run instructions</li>
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
          <div className="absolute top-5 right-5 w-32 h-32 sm:top-10 sm:right-10 sm:w-64 sm:h-64 bg-gradient-to-r from-orange-200 to-red-200 rounded-full filter blur-3xl animate-float"></div>
          <div className="absolute bottom-5 left-5 w-24 h-24 sm:bottom-10 sm:left-10 sm:w-48 sm:h-48 bg-gradient-to-r from-red-200 to-yellow-200 rounded-full filter blur-2xl animate-float animation-delay-2000"></div>
        </div>

        {/* Mobile-First Layout */}
        <div className="space-y-8 lg:space-y-0 lg:flex lg:flex-row lg:gap-8 relative z-10">
          
          {/* Mobile-First Sidebar */}
          <div className="w-full lg:w-1/3 lg:order-2">
            <div className="space-y-4 sm:space-y-6">
              {/* Learning Objectives */}
              <div className="group glass-morphism rounded-xl p-4 sm:p-6 card-3d-hover relative overflow-hidden">
                <div className="absolute top-0 right-0 w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-orange-400/20 to-red-400/20 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4 relative z-10">Learning Objectives</h3>
                <ul className="space-y-2 sm:space-y-3 relative z-10">
                  {learningObjectives.map((objective, index) => (
                    <li key={index} className="flex items-start group-hover:translate-x-1 transition-transform duration-300" style={{ transitionDelay: `${index * 50}ms` }}>
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-orange-500 mr-2 sm:mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600 text-xs sm:text-sm leading-relaxed">{objective}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Prerequisites */}
              <div className="group glass-morphism rounded-xl p-4 sm:p-6 card-3d-hover relative overflow-hidden animation-delay-500">
                <div className="absolute top-0 right-0 w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-red-400/20 to-yellow-400/20 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4 relative z-10">Prerequisites</h3>
                <ul className="space-y-2 sm:space-y-3 relative z-10">
                  {prerequisites.map((prerequisite, index) => (
                    <li key={index} className="flex items-start group-hover:translate-x-1 transition-transform duration-300" style={{ transitionDelay: `${index * 50}ms` }}>
                      <Code className="w-4 h-4 sm:w-5 sm:h-5 text-red-500 mr-2 sm:mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600 text-xs sm:text-sm leading-relaxed">{prerequisite}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Duration Options */}
              <div className="group glass-morphism rounded-xl p-4 sm:p-6 card-3d-hover relative overflow-hidden animation-delay-1000">
                <div className="absolute top-0 right-0 w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-yellow-400/20 to-orange-400/20 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4 relative z-10">Duration Options</h3>
                <div className="space-y-3 relative z-10">
                  <div className="flex items-center justify-between p-3 bg-gradient-to-r from-orange-50 to-red-50 rounded-lg hover:from-orange-100 hover:to-red-100 transition-colors duration-300">
                    <span className="font-medium text-orange-700 text-sm sm:text-base">4 Weeks</span>
                    <span className="text-orange-600 text-xs sm:text-sm">Intensive Track</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gradient-to-r from-red-50 to-yellow-50 rounded-lg hover:from-red-100 hover:to-yellow-100 transition-colors duration-300">
                    <span className="font-medium text-red-700 text-sm sm:text-base">8 Weeks</span>
                    <span className="text-red-600 text-xs sm:text-sm">Comprehensive Track</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile-First Main Content */}
          <div className="w-full lg:w-2/3 lg:order-1">
            <div className="glass-morphism rounded-xl p-4 sm:p-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-16 h-16 sm:w-32 sm:h-32 bg-gradient-to-br from-orange-400/10 to-red-400/10 rounded-bl-full"></div>
              
              <div className="relative z-10">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6">
                  Java Programming <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">Project Tasks</span>
                </h2>
                
                <div className="space-y-4 sm:space-y-6">
                  {tasks.map((task, index) => (
                    <div 
                      key={task.id} 
                      className="group glass-morphism border border-gray-200 rounded-xl p-4 sm:p-6 card-3d-hover relative overflow-hidden"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      {/* 3D Glow Effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-red-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                      
                      <div className="relative z-10">
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3 sm:mb-4">
                          <div className="flex-1">
                            <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-2">
                              <span className="text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-orange-600 to-red-600 px-2 sm:px-3 py-1 rounded-full">
                                Task {task.id}
                              </span>
                              <span className={`text-xs font-medium px-2 py-1 rounded-full ${getLevelColor(task.level)}`}>
                                {task.level}
                              </span>
                            </div>
                            <h3 className="text-base sm:text-lg font-semibold text-gray-800 group-hover:text-orange-600 transition-colors duration-300 leading-tight">
                              {task.title}
                            </h3>
                          </div>
                        </div>
                        
                        <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 leading-relaxed">{task.description}</p>
                        
                        <div className="mb-3 sm:mb-4">
                          <h4 className="font-medium text-gray-800 mb-2 flex items-center text-sm sm:text-base">
                            <span className="w-2 h-2 bg-gradient-to-r from-orange-600 to-red-600 rounded-full mr-2"></span>
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
                            <Code className="w-3 h-3 sm:w-4 sm:h-4 mr-2 text-red-600" />
                            Required Tools:
                          </h4>
                          <p className="text-gray-600 text-xs sm:text-sm bg-gray-50 p-2 rounded-lg leading-relaxed">{task.tools}</p>
                        </div>

                        <div className="mb-3 sm:mb-4">
                          <h4 className="font-medium text-gray-800 mb-2 flex items-center text-sm sm:text-base">
                            <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 mr-2 text-orange-600" />
                            Expected Deliverable:
                          </h4>
                          <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">{task.expectedOutput}</p>
                        </div>
                        
                        <div className="bg-gradient-to-r from-orange-50 to-red-50 p-3 sm:p-4 rounded-lg border border-orange-200">
                          <h4 className="font-medium text-orange-800 mb-2 flex items-center text-sm sm:text-base">
                            <Package className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                            Program Demo Requirements:
                          </h4>
                          <p className="text-orange-700 text-xs sm:text-sm mb-2 leading-relaxed">{task.videoDemo}</p>
                          <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs text-orange-600">
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

export default JavaProgramming;
