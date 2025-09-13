import React from 'react';
import { ArrowLeft, CheckCircle, Smartphone, Code, Globe, Play, Github, Video, Upload, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const AndroidDevelopment = () => {
  const tasks = [
    {
      id: 1,
      title: "Personal Profile App",
      level: "Beginner",
      description: "Create a simple app to display your personal information with an attractive layout.",
      steps: [
        "Create a new Android project in Android Studio",
        "Design a profile screen with your photo, name, and college details",
        "Add buttons for email, phone, and social media links",
        "Use different colors and fonts to make it attractive",
        "Add your hobbies and skills section"
      ],
      tools: "Android Studio, XML Layouts, ImageView, TextView",
      expectedOutput: "A personal profile app with your information displayed nicely",
      videoDemo: "Show your profile app with all personal details and demonstrate button clicks"
    },
    {
      id: 2,
      title: "Simple Calculator",
      level: "Beginner", 
      description: "Build a basic calculator that can perform simple math operations.",
      steps: [
        "Create calculator layout with number buttons (0-9)",
        "Add operation buttons (+, -, ×, ÷, =)",
        "Implement click listeners for all buttons",
        "Display numbers and results on screen",
        "Handle basic calculations between two numbers"
      ],
      tools: "Android Studio, Button, TextView, OnClickListener",
      expectedOutput: "A working calculator for basic math operations",
      videoDemo: "Demonstrate addition, subtraction, multiplication, and division"
    },
    {
      id: 3,
      title: "Color Palette App",
      level: "Beginner",
      description: "Create an app that displays different colors and their names.",
      steps: [
        "Create a list of colors with their names",
        "Display colors in a grid or list format",
        "Show color name and hex code when clicked",
        "Add at least 20 different colors",
        "Make the interface colorful and attractive"
      ],
      tools: "RecyclerView, CardView, Color Resources",
      expectedOutput: "A colorful app displaying various colors with their details",
      videoDemo: "Show scrolling through colors and tapping to see details"
    },
    {
      id: 4,
      title: "Simple To-Do List",
      level: "Beginner",
      description: "Build a basic to-do list where users can add and delete tasks.",
      steps: [
        "Create input field for adding new tasks",
        "Display tasks in a simple list",
        "Add delete button for each task",
        "Show task count at the top",
        "Store tasks temporarily (no database needed)"
      ],
      tools: "EditText, ListView/RecyclerView, ArrayList",
      expectedOutput: "A functional to-do list with add and delete features",
      videoDemo: "Add several tasks, delete some tasks, and show the count"
    },
    {
      id: 5,
      title: "Unit Converter App",
      level: "Beginner",
      description: "Create an app to convert between different units (length, weight, temperature).",
      steps: [
        "Create input fields for values to convert",
        "Add dropdown/spinner for unit selection",
        "Implement conversion formulas (meters to feet, kg to pounds, etc.)",
        "Display converted result instantly",
        "Add at least 3 different conversion types"
      ],
      tools: "EditText, Spinner, TextWatcher",
      expectedOutput: "A unit converter for multiple measurement types",
      videoDemo: "Demonstrate different conversions and show real-time updates"
    },
    {
      id: 6,
      title: "Random Quote App",
      level: "Beginner",
      description: "Build an app that displays inspirational quotes randomly.",
      steps: [
        "Create a list of 50+ motivational quotes",
        "Display one quote at a time on screen",
        "Add 'Next Quote' button to show random quote",
        "Include quote author names",
        "Make the design attractive with good fonts and colors"
      ],
      tools: "TextView, Button, Random class, String Arrays",
      expectedOutput: "An inspirational quote app with random quote generation",
      videoDemo: "Show multiple random quotes and attractive design"
    },
    {
      id: 7,
      title: "Simple Quiz App",
      level: "Beginner",
      description: "Create a basic quiz app with multiple choice questions.",
      steps: [
        "Prepare 10 simple general knowledge questions",
        "Create question display with 4 multiple choice options",
        "Implement answer checking and score counting",
        "Show final score at the end",
        "Add restart quiz functionality"
      ],
      tools: "RadioButton, Button, TextView, ArrayList",
      expectedOutput: "A quiz app with scoring system",
      videoDemo: "Play through the complete quiz and show final score"
    },
    {
      id: 8,
      title: "Contact Book App",
      level: "Beginner",
      description: "Build a simple contact management app to store friends' information.",
      steps: [
        "Create form to add contact (name, phone, email)",
        "Display all contacts in a list",
        "Add search functionality by name",
        "Include edit and delete contact features",
        "Use local storage to save contacts"
      ],
      tools: "SharedPreferences, RecyclerView, EditText, SearchView",
      expectedOutput: "A contact book with CRUD operations",
      videoDemo: "Add contacts, search, edit, and delete functionality"
    },
    {
      id: 9,
      title: "Weather Display App",
      level: "Beginner",
      description: "Create an app that shows weather information for different cities.",
      steps: [
        "Create a simple weather data for 10 cities (hardcoded)",
        "Display city name, temperature, and weather condition",
        "Add search functionality to find cities",
        "Show weather icons for different conditions",
        "Make the interface clean and user-friendly"
      ],
      tools: "SearchView, RecyclerView, ImageView, Static Data",
      expectedOutput: "A weather app with city search and weather display",
      videoDemo: "Search different cities and show their weather information"
    },
    {
      id: 10,
      title: "Simple Expense Tracker",
      level: "Beginner",
      description: "Build a basic expense tracking app to manage daily expenses.",
      steps: [
        "Create form to add expenses (amount, category, date)",
        "Display all expenses in a list",
        "Show total expense amount",
        "Add categories like Food, Transport, Shopping",
        "Include delete expense functionality"
      ],
      tools: "EditText, Spinner, RecyclerView, SharedPreferences",
      expectedOutput: "An expense tracker with categorization and total calculation",
      videoDemo: "Add expenses in different categories and show total amount"
    }
  ];

  const prerequisites = [
    "Basic understanding of programming concepts",
    "Familiarity with Kotlin or Java programming",
    "Understanding of Android app development basics",
    "Basic knowledge of XML layouts and UI design"
  ];

  const learningObjectives = [
    "Master Android app development with Kotlin",
    "Learn to create user-friendly mobile interfaces",
    "Understand Android UI components and layouts",
    "Develop skills in handling user interactions",
    "Learn local data storage in Android apps",
    "Build confidence in mobile app development"
  ];

  const getLevelColor = (level) => {
    switch (level) {
      case 'Beginner': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen">
      {/* Mobile-Friendly Enhanced Header */}
      <section className="pt-16 pb-12 sm:pt-20 sm:pb-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
        {/* 3D Background Elements - Reduced on mobile */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 left-5 w-32 h-32 sm:top-20 sm:left-10 sm:w-64 sm:h-64 bg-gradient-to-r from-green-300 to-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-blob animate-morph"></div>
          <div className="absolute top-20 right-5 w-40 h-40 sm:top-40 sm:right-10 sm:w-72 sm:h-72 bg-gradient-to-r from-blue-300 to-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-blob animation-delay-2000 animate-morph"></div>
          <div className="absolute bottom-5 left-1/3 w-24 h-24 sm:bottom-10 sm:w-48 sm:h-48 bg-gradient-to-r from-indigo-300 to-green-300 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-blob animation-delay-4000"></div>
        </div>

        {/* Floating 3D Elements - Hidden on small mobile */}
        <div className="hidden sm:block absolute top-1/4 left-1/5 w-6 h-6 bg-gradient-to-r from-green-500 to-blue-400 rounded-full animate-float shadow-lg"></div>
        <div className="hidden sm:block absolute top-2/3 right-1/4 w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-400 rounded-lg animate-pulse shadow-xl transform rotate-45"></div>
        <div className="hidden sm:block absolute top-1/2 right-1/5 w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-400 rounded-full animate-bounce shadow-md"></div>
<br></br>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Mobile-Responsive Header */}
          
          <div className="flex flex-col sm:flex-row sm:items-center mb-6 sm:mb-8">
            <div className="flex items-center mb-4 sm:mb-0 sm:mr-4">
              <div className="p-2 sm:p-3 rounded-xl bg-gradient-to-r from-green-50 to-blue-50 mr-3 sm:mr-4 hover:scale-110 transition-transform duration-300">
                <Smartphone className="w-8 h-8 sm:w-12 sm:h-12 text-green-600" />
              </div>
              <div>
                
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
                  Android Development
                </h1>
                <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                  Internship
                </span>
              </div>
            </div>
          </div>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-6">Create simple and functional Android applications</p>

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
                    Choose any <strong>2 tasks</strong> from the 10 beginner-friendly Android development tasks provided below. Select based on your interests and learning goals.
                  </p>
                </div>

                <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-sm border border-gray-100">
                  <div className="flex items-center mb-3 sm:mb-4">
                    <div className="p-2 rounded-lg bg-green-100 mr-3">
                      <Video className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />
                    </div>
                    <h3 className="text-base sm:text-lg font-semibold text-gray-800">Video Demo</h3>
                  </div>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    Create a <strong>3-minute demo video</strong> or take <strong>screenshots</strong> showing your application working on different devices and attach the media files to your LinkedIn post with <strong>#CosmoDigitalServices</strong>.

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
                    Upload your complete Android project source code to <strong>GitHub</strong> with proper documentation. Repository links will be collected through our submission portal.
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
                    <h5 className="font-medium text-gray-800 text-sm sm:text-base">Video Content Must Include:</h5>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 text-xs sm:text-sm">
                      <li>Complete app functionality demonstration</li>
                      <li>User interface walkthrough</li>
                      <li>Key features explanation</li>
                      <li>Brief technical overview</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h5 className="font-medium text-gray-800 text-sm sm:text-base">Code Repository Must Include:</h5>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 text-xs sm:text-sm">
                      <li>Complete Android Studio project</li>
                      <li>Well-organized file structure</li>
                      <li>README.md with setup instructions</li>
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
          <div className="absolute top-5 right-5 w-32 h-32 sm:top-10 sm:right-10 sm:w-64 sm:h-64 bg-gradient-to-r from-green-200 to-blue-200 rounded-full filter blur-3xl animate-float"></div>
          <div className="absolute bottom-5 left-5 w-24 h-24 sm:bottom-10 sm:left-10 sm:w-48 sm:h-48 bg-gradient-to-r from-blue-200 to-purple-200 rounded-full filter blur-2xl animate-float animation-delay-2000"></div>
        </div>

        {/* Mobile-First Layout */}
        <div className="space-y-8 lg:space-y-0 lg:flex lg:flex-row lg:gap-8 relative z-10">
          
          {/* Mobile-First Sidebar */}
          <div className="w-full lg:w-1/3 lg:order-2">
            <div className="space-y-4 sm:space-y-6">
              {/* Learning Objectives */}
              <div className="group glass-morphism rounded-xl p-4 sm:p-6 card-3d-hover relative overflow-hidden">
                <div className="absolute top-0 right-0 w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-green-400/20 to-blue-400/20 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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
                <div className="absolute top-0 right-0 w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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
                <div className="absolute top-0 right-0 w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4 relative z-10">Duration Options</h3>
                <div className="space-y-3 relative z-10">
                  <div className="flex items-center justify-between p-3 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg hover:from-green-100 hover:to-blue-100 transition-colors duration-300">
                    <span className="font-medium text-green-700 text-sm sm:text-base">4 Weeks</span>
                    <span className="text-green-600 text-xs sm:text-sm">Intensive Track</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg hover:from-blue-100 hover:to-purple-100 transition-colors duration-300">
                    <span className="font-medium text-blue-700 text-sm sm:text-base">8 Weeks</span>
                    <span className="text-blue-600 text-xs sm:text-sm">Comprehensive Track</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile-First Main Content */}
          <div className="w-full lg:w-2/3 lg:order-1">
            <div className="glass-morphism rounded-xl p-4 sm:p-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-16 h-16 sm:w-32 sm:h-32 bg-gradient-to-br from-green-400/10 to-blue-400/10 rounded-bl-full"></div>
              
              <div className="relative z-10">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6">
                  Android Development <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">Project Tasks</span>
                </h2>
                
                <div className="space-y-4 sm:space-y-6">
                  {tasks.map((task, index) => (
                    <div 
                      key={task.id} 
                      className="group glass-morphism border border-gray-200 rounded-xl p-4 sm:p-6 card-3d-hover relative overflow-hidden"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      {/* 3D Glow Effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                      
                      <div className="relative z-10">
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3 sm:mb-4">
                          <div className="flex-1">
                            <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-2">
                              <span className="text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-green-600 to-blue-600 px-2 sm:px-3 py-1 rounded-full">
                                Task {task.id}
                              </span>
                              <span className={`text-xs font-medium px-2 py-1 rounded-full ${getLevelColor(task.level)}`}>
                                {task.level}
                              </span>
                            </div>
                            <h3 className="text-base sm:text-lg font-semibold text-gray-800 group-hover:text-green-600 transition-colors duration-300 leading-tight">
                              {task.title}
                            </h3>
                          </div>
                        </div>
                        
                        <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 leading-relaxed">{task.description}</p>
                        
                        <div className="mb-3 sm:mb-4">
                          <h4 className="font-medium text-gray-800 mb-2 flex items-center text-sm sm:text-base">
                            <span className="w-2 h-2 bg-gradient-to-r from-green-600 to-blue-600 rounded-full mr-2"></span>
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
                            <Code className="w-3 h-3 sm:w-4 sm:h-4 mr-2 text-blue-600" />
                            Required Tools:
                          </h4>
                          <p className="text-gray-600 text-xs sm:text-sm bg-gray-50 p-2 rounded-lg leading-relaxed">{task.tools}</p>
                        </div>

                        <div className="mb-3 sm:mb-4">
                          <h4 className="font-medium text-gray-800 mb-2 flex items-center text-sm sm:text-base">
                            <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 mr-2 text-green-600" />
                            Expected Deliverable:
                          </h4>
                          <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">{task.expectedOutput}</p>
                        </div>
                        
                        <div className="bg-gradient-to-r from-green-50 to-blue-50 p-3 sm:p-4 rounded-lg border border-green-200">
                          <h4 className="font-medium text-green-800 mb-2 flex items-center text-sm sm:text-base">
                            <Video className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                            Video Demo Requirements:
                          </h4>
                          <p className="text-green-700 text-xs sm:text-sm mb-2 leading-relaxed">{task.videoDemo}</p>
                          <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs text-green-600">
                            <span className="flex items-center">
                              <Play className="w-3 h-3 mr-1" />
                              Max 3 minutes
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

export default AndroidDevelopment;
