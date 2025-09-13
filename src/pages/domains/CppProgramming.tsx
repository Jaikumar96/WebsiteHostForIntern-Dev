import React from 'react';
import { ArrowLeft, CheckCircle, Code, Globe, Play, Github, Video, Upload, Users, Monitor } from 'lucide-react';
import { Link } from 'react-router-dom';

const CppProgramming = () => {
  const tasks = [
    {
      id: 1,
      title: "Simple Grade Calculator",
      level: "Beginner",
      description: "Create a program that calculates student grades based on marks input.",
      steps: [
        "Create a C++ program that takes student marks as input",
        "Calculate percentage and assign grades (A, B, C, D, F)",
        "Display student information with calculated grade",
        "Add validation for input marks (0-100 range)",
        "Create a simple menu for multiple students"
      ],
      tools: "C++ Compiler, Basic IDE (Code::Blocks, Dev-C++, or VS Code)",
      expectedOutput: "A working grade calculator that processes multiple students",
      videoDemo: "Show inputting marks for different students and displaying their grades with calculations"
    },
    {
      id: 2,
      title: "Basic Calculator with Functions",
      level: "Beginner", 
      description: "Build a calculator program using functions for different mathematical operations.",
      steps: [
        "Create separate functions for add, subtract, multiply, divide",
        "Implement a menu system for operation selection",
        "Add input validation and error handling",
        "Include additional operations like power and square root",
        "Create a loop for continuous calculations"
      ],
      tools: "C++ Compiler, Functions, Basic Math Operations",
      expectedOutput: "A menu-driven calculator with multiple mathematical functions",
      videoDemo: "Demonstrate all calculator operations and show the menu system working"
    },
    {
      id: 3,
      title: "Student Record System",
      level: "Beginner",
      description: "Create a simple system to store and manage student information using arrays.",
      steps: [
        "Define a structure for student information (name, roll number, marks)",
        "Create arrays to store multiple student records",
        "Implement functions to add new students",
        "Add search functionality to find students by roll number",
        "Display all student records in a formatted way"
      ],
      tools: "C++ Structures, Arrays, Basic File Operations",
      expectedOutput: "A student management system with add, search, and display features",
      videoDemo: "Add students, search for specific students, and display all records"
    },
    {
      id: 4,
      title: "Simple Banking System",
      level: "Beginner",
      description: "Build a basic banking application with account operations.",
      steps: [
        "Create account structure with account number, name, and balance",
        "Implement deposit and withdrawal functions",
        "Add balance inquiry functionality",
        "Create simple interest calculation",
        "Add basic account creation and display features"
      ],
      tools: "C++ Structures, Functions, Basic Validation",
      expectedOutput: "A banking system with deposit, withdrawal, and balance inquiry",
      videoDemo: "Create accounts, perform transactions, and show balance updates"
    },
    {
      id: 5,
      title: "Simple Library Management",
      level: "Beginner",
      description: "Create a basic library system to manage books and borrowing.",
      steps: [
        "Define book structure with title, author, and availability status",
        "Create functions to add new books to library",
        "Implement book search by title or author",
        "Add book borrowing and returning functionality",
        "Display available books list"
      ],
      tools: "C++ Structures, Arrays, String Handling",
      expectedOutput: "A library management system with book operations",
      videoDemo: "Add books, search books, borrow and return books showing status changes"
    },
    {
      id: 6,
      title: "Number Pattern Generator",
      level: "Beginner",
      description: "Create a program that generates various number and star patterns.",
      steps: [
        "Implement pyramid patterns with numbers and stars",
        "Create diamond patterns and inverted triangles",
        "Add menu to select different pattern types",
        "Allow user to specify pattern size",
        "Include both number and character patterns"
      ],
      tools: "C++ Loops, Pattern Logic, Menu System",
      expectedOutput: "A pattern generator with multiple pattern options",
      videoDemo: "Generate different patterns with various sizes and show the menu options"
    },
    {
      id: 7,
      title: "Simple Inventory System",
      level: "Beginner",
      description: "Build an inventory management system for a small shop.",
      steps: [
        "Create product structure with name, price, and quantity",
        "Implement functions to add new products",
        "Add product search and update functionality",
        "Calculate total inventory value",
        "Create low stock alert system"
      ],
      tools: "C++ Structures, File Handling, Basic Calculations",
      expectedOutput: "An inventory system with product management features",
      videoDemo: "Add products, update quantities, search products, and show inventory reports"
    },
    {
      id: 8,
      title: "Simple Game - Number Guessing",
      level: "Beginner",
      description: "Create an interactive number guessing game with scoring.",
      steps: [
        "Generate random numbers for guessing",
        "Implement hint system (higher/lower guidance)",
        "Add scoring based on number of attempts",
        "Create difficulty levels with different ranges",
        "Include play again functionality with score tracking"
      ],
      tools: "C++ Random Numbers, Game Logic, Score Tracking",
      expectedOutput: "A number guessing game with hints and scoring system",
      videoDemo: "Play the game at different difficulty levels and show scoring mechanism"
    },
    {
      id: 9,
      title: "Employee Payroll Calculator",
      level: "Beginner",
      description: "Create a payroll system to calculate employee salaries with deductions.",
      steps: [
        "Define employee structure with basic details and salary",
        "Calculate gross pay with overtime calculations",
        "Implement deductions (tax, insurance, etc.)",
        "Calculate net pay and generate pay slip",
        "Add multiple employee handling with summary report"
      ],
      tools: "C++ Calculations, Structures, Report Generation",
      expectedOutput: "A payroll calculator with detailed pay slip generation",
      videoDemo: "Calculate payroll for different employees and show detailed pay slips"
    },
    {
      id: 10,
      title: "Complete Management System",
      level: "Beginner",
      description: "Build a comprehensive management system combining multiple features.",
      steps: [
        "Integrate student and library management features",
        "Add file storage to save data permanently",
        "Create a main menu system linking all modules",
        "Implement user authentication (simple login)",
        "Add data backup and restore functionality",
        "Include comprehensive reporting features"
      ],
      tools: "C++ File Handling, Multiple Modules, Menu Systems",
      expectedOutput: "A complete management system with file storage and multiple modules",
      videoDemo: "Demonstrate all system features, file saving, and show data persistence across program runs"
    }
  ];

  const prerequisites = [
    "Basic understanding of programming concepts",
    "Familiarity with variables, loops, and conditions",
    "Understanding of basic mathematical operations",
    "Knowledge of computer basics and file operations"
  ];

  const learningObjectives = [
    "Master C++ programming fundamentals and syntax",
    "Learn to work with functions, structures, and arrays",
    "Understand file handling and data storage concepts",
    "Develop problem-solving skills with programming logic",
    "Build practical applications using C++ concepts",
    "Gain experience with menu-driven programming"
  ];

  const getLevelColor = (level) => {
    switch (level) {
      case 'Beginner': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen">
      <br></br>
      {/* Mobile-Friendly Enhanced Header */}
      <section className="pt-16 pb-12 sm:pt-20 sm:pb-20 bg-gradient-to-br from-red-50 to-orange-50 relative overflow-hidden">
        {/* 3D Background Elements - Reduced on mobile */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 left-5 w-32 h-32 sm:top-20 sm:left-10 sm:w-64 sm:h-64 bg-gradient-to-r from-red-300 to-orange-200 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-blob animate-morph"></div>
          <div className="absolute top-20 right-5 w-40 h-40 sm:top-40 sm:right-10 sm:w-72 sm:h-72 bg-gradient-to-r from-orange-300 to-red-200 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-blob animation-delay-2000 animate-morph"></div>
          <div className="absolute bottom-5 left-1/3 w-24 h-24 sm:bottom-10 sm:w-48 sm:h-48 bg-gradient-to-r from-pink-300 to-red-300 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-blob animation-delay-4000"></div>
        </div>

        {/* Floating 3D Elements - Hidden on small mobile */}
        <div className="hidden sm:block absolute top-1/4 left-1/5 w-6 h-6 bg-gradient-to-r from-red-500 to-orange-400 rounded-full animate-float shadow-lg"></div>
        <div className="hidden sm:block absolute top-2/3 right-1/4 w-8 h-8 bg-gradient-to-r from-orange-500 to-red-400 rounded-lg animate-pulse shadow-xl transform rotate-45"></div>
        <div className="hidden sm:block absolute top-1/2 right-1/5 w-4 h-4 bg-gradient-to-r from-pink-500 to-red-400 rounded-full animate-bounce shadow-md"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Mobile-Responsive Header - Fixed text wrapping */}
          <div className="flex flex-col sm:flex-row sm:items-center mb-6 sm:mb-8">
            <div className="flex items-center mb-4 sm:mb-0 sm:mr-4">
              <div className="p-2 sm:p-3 rounded-xl bg-gradient-to-r from-red-50 to-orange-50 mr-3 sm:mr-4 hover:scale-110 transition-transform duration-300">
                <Code className="w-8 h-8 sm:w-12 sm:h-12 text-red-600" />
              </div>
              <div className="flex-1">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
                  C++ Programming
                </h1>
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent leading-tight">
                  Internship
                </div>
              </div>
            </div>
          </div>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-6">Learn system programming and build practical applications</p>

          {/* Mobile-Friendly Professional Instructions */}
          <div className="glass-morphism rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 border border-red-200 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-16 h-16 sm:w-32 sm:h-32 bg-gradient-to-br from-red-400/10 to-orange-400/10 rounded-bl-full"></div>
            <div className="absolute bottom-0 left-0 w-12 h-12 sm:w-24 sm:h-24 bg-gradient-to-tr from-orange-400/10 to-red-400/10 rounded-tr-full"></div>
            
            <div className="relative z-10">
              <div className="flex flex-col sm:flex-row sm:items-center mb-4 sm:mb-6">
                <div className="p-2 sm:p-3 rounded-xl bg-gradient-to-r from-red-500 to-orange-500 text-white mr-0 sm:mr-4 mb-3 sm:mb-0 w-fit">
                  <Users className="w-6 h-6 sm:w-8 sm:h-8" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-800">Internship Project Guidelines</h2>
              </div>

              {/* Mobile-First Grid Layout */}
              <div className="space-y-4 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-6 mb-6 sm:mb-8">
                <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-sm border border-gray-100">
                  <div className="flex items-center mb-3 sm:mb-4">
                    <div className="p-2 rounded-lg bg-red-100 mr-3">
                      <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-red-600" />
                    </div>
                    <h3 className="text-base sm:text-lg font-semibold text-gray-800">Task Selection</h3>
                  </div>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    Choose any <strong>2 tasks</strong> from the 10 beginner-friendly C++ programming tasks provided below. Select based on your interests and learning goals.
                  </p>
                </div>

                <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-sm border border-gray-100">
                  <div className="flex items-center mb-3 sm:mb-4">
                    <div className="p-2 rounded-lg bg-orange-100 mr-3">
                      <Monitor className="w-5 h-5 sm:w-6 sm:h-6 text-orange-600" />
                    </div>
                    <h3 className="text-base sm:text-lg font-semibold text-gray-800">Output Demo</h3>
                  </div>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    Create a <strong>3-minute video</strong> or take <strong>screenshots</strong> showing your program execution and outputs. Upload to LinkedIn with <strong>#CosmoDigitalServices</strong>.
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
                    Upload your complete C++ project source code to <strong>GitHub</strong> with proper documentation. Repository links will be collected through our submission portal.
                  </p>
                </div>
              </div>

              {/* Mobile-Friendly Requirements Section */}
              <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-lg sm:rounded-xl p-4 sm:p-6 border-l-4 border-red-500">
                <h4 className="text-base sm:text-lg font-semibold text-gray-800 mb-3 flex items-center">
                  <Play className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-red-600" />
                  Submission Requirements
                </h4>
                <div className="space-y-4 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-4 text-sm text-gray-700">
                  <div className="space-y-2">
                    <h5 className="font-medium text-gray-800 text-sm sm:text-base">Video/Screenshot Content Must Include:</h5>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 text-xs sm:text-sm">
                      <li>Program compilation and execution process</li>
                      <li>All program outputs and user interactions</li>
                      <li>Menu navigation and feature demonstrations</li>
                      <li>Clear display of program functionality</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h5 className="font-medium text-gray-800 text-sm sm:text-base">Code Repository Must Include:</h5>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 text-xs sm:text-sm">
                      <li>Complete C++ source code files</li>
                      <li>Executable file or compilation instructions</li>
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
          <div className="absolute top-5 right-5 w-32 h-32 sm:top-10 sm:right-10 sm:w-64 sm:h-64 bg-gradient-to-r from-red-200 to-orange-200 rounded-full filter blur-3xl animate-float"></div>
          <div className="absolute bottom-5 left-5 w-24 h-24 sm:bottom-10 sm:left-10 sm:w-48 sm:h-48 bg-gradient-to-r from-orange-200 to-red-200 rounded-full filter blur-2xl animate-float animation-delay-2000"></div>
        </div>

        {/* Mobile-First Layout */}
        <div className="space-y-8 lg:space-y-0 lg:flex lg:flex-row lg:gap-8 relative z-10">
          
          {/* Mobile-First Sidebar */}
          <div className="w-full lg:w-1/3 lg:order-2">
            <div className="space-y-4 sm:space-y-6">
              {/* Learning Objectives */}
              <div className="group glass-morphism rounded-xl p-4 sm:p-6 card-3d-hover relative overflow-hidden">
                <div className="absolute top-0 right-0 w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-red-400/20 to-orange-400/20 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4 relative z-10">Learning Objectives</h3>
                <ul className="space-y-2 sm:space-y-3 relative z-10">
                  {learningObjectives.map((objective, index) => (
                    <li key={index} className="flex items-start group-hover:translate-x-1 transition-transform duration-300" style={{ transitionDelay: `${index * 50}ms` }}>
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-red-500 mr-2 sm:mr-3 flex-shrink-0 mt-0.5" />
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
                <div className="absolute top-0 right-0 w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-red-400/20 to-pink-400/20 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4 relative z-10">Duration Options</h3>
                <div className="space-y-3 relative z-10">
                  <div className="flex items-center justify-between p-3 bg-gradient-to-r from-red-50 to-orange-50 rounded-lg hover:from-red-100 hover:to-orange-100 transition-colors duration-300">
                    <span className="font-medium text-red-700 text-sm sm:text-base">4 Weeks</span>
                    <span className="text-red-600 text-xs sm:text-sm">Intensive Track</span>
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
              <div className="absolute top-0 right-0 w-16 h-16 sm:w-32 sm:h-32 bg-gradient-to-br from-red-400/10 to-orange-400/10 rounded-bl-full"></div>
              
              <div className="relative z-10">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6">
                  C++ Programming <span className="bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">Project Tasks</span>
                </h2>
                
                <div className="space-y-4 sm:space-y-6">
                  {tasks.map((task, index) => (
                    <div 
                      key={task.id} 
                      className="group glass-morphism border border-gray-200 rounded-xl p-4 sm:p-6 card-3d-hover relative overflow-hidden"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      {/* 3D Glow Effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                      
                      <div className="relative z-10">
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3 sm:mb-4">
                          <div className="flex-1">
                            <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-2">
                              <span className="text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-red-600 to-orange-600 px-2 sm:px-3 py-1 rounded-full">
                                Task {task.id}
                              </span>
                              <span className={`text-xs font-medium px-2 py-1 rounded-full ${getLevelColor(task.level)}`}>
                                {task.level}
                              </span>
                            </div>
                            <h3 className="text-base sm:text-lg font-semibold text-gray-800 group-hover:text-red-600 transition-colors duration-300 leading-tight">
                              {task.title}
                            </h3>
                          </div>
                        </div>
                        
                        <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 leading-relaxed">{task.description}</p>
                        
                        <div className="mb-3 sm:mb-4">
                          <h4 className="font-medium text-gray-800 mb-2 flex items-center text-sm sm:text-base">
                            <span className="w-2 h-2 bg-gradient-to-r from-red-600 to-orange-600 rounded-full mr-2"></span>
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
                            <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 mr-2 text-red-600" />
                            Expected Deliverable:
                          </h4>
                          <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">{task.expectedOutput}</p>
                        </div>
                        
                        <div className="bg-gradient-to-r from-red-50 to-orange-50 p-3 sm:p-4 rounded-lg border border-red-200">
                          <h4 className="font-medium text-red-800 mb-2 flex items-center text-sm sm:text-base">
                            <Monitor className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                            Output Demo Requirements:
                          </h4>
                          <p className="text-red-700 text-xs sm:text-sm mb-2 leading-relaxed">{task.videoDemo}</p>
                          <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs text-red-600">
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

export default CppProgramming;
