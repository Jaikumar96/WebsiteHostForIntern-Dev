import React from 'react';
import { ArrowLeft, CheckCircle, Brain, Code, Globe, Play, Github, Video, Upload, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const ArtificialIntelligence = () => {
  const tasks = [
    {
      id: 1,
      title: "Simple Chatbot with Responses",
      level: "Beginner",
      description: "Create a basic chatbot that can respond to user questions with predefined answers.",
      steps: [
        "Create a simple Python program for chatbot",
        "Define common questions and their answers",
        "Implement basic text matching for responses",
        "Add greeting and goodbye functionality",
        "Create a simple menu-based conversation flow"
      ],
      tools: "Python, Basic Text Processing",
      expectedOutput: "A working chatbot that can answer at least 10 different questions",
      videoDemo: "Show conversation with your chatbot asking different questions and getting responses"
    },
    {
      id: 2,
      title: "Smart Calculator with Voice",
      level: "Beginner", 
      description: "Build an intelligent calculator that can understand voice commands or text input.",
      steps: [
        "Create a calculator with basic operations",
        "Add text-to-speech for result announcement",
        "Implement simple voice recognition (optional)",
        "Add history of calculations",
        "Include some advanced functions like percentage, square root"
      ],
      tools: "Python, pyttsx3 library, Basic Math Operations",
      expectedOutput: "A smart calculator with voice features",
      videoDemo: "Demonstrate calculator operations and voice announcement features"
    },
    {
      id: 3,
      title: "Image Recognition App",
      level: "Beginner",
      description: "Create a simple app that can identify objects in images using pre-trained models.",
      steps: [
        "Use a pre-trained image classification model",
        "Create a simple interface to upload images",
        "Process images and display predictions",
        "Add confidence scores for predictions",
        "Create a gallery of tested images with results"
      ],
      tools: "Python, TensorFlow/Keras Pre-trained Models, PIL",
      expectedOutput: "An app that can identify objects in uploaded images",
      videoDemo: "Upload different images and show the AI identifying objects with confidence scores"
    },
    {
      id: 4,
      title: "Text Emotion Detector",
      level: "Beginner",
      description: "Build an application that can detect emotions from text input.",
      steps: [
        "Use a simple sentiment analysis library",
        "Create text input interface",
        "Analyze text for emotions (happy, sad, angry, neutral)",
        "Display results with emotion icons",
        "Add sample texts for testing"
      ],
      tools: "Python, TextBlob or VADER Sentiment, Simple GUI",
      expectedOutput: "A text emotion detector with simple interface",
      videoDemo: "Test different emotional texts and show the AI detecting emotions correctly"
    },
    {
      id: 5,
      title: "Smart Password Generator",
      level: "Beginner",
      description: "Create an AI-powered password generator that creates secure passwords based on user preferences.",
      steps: [
        "Build basic password generation with different criteria",
        "Add strength checking for generated passwords",
        "Include pattern recognition to avoid weak passwords",
        "Add password suggestions based on user input",
        "Create a simple interface for user preferences"
      ],
      tools: "Python, Random Library, String Operations",
      expectedOutput: "A smart password generator with strength analysis",
      videoDemo: "Generate different types of passwords and show strength analysis"
    },
    {
      id: 6,
      title: "Simple Recommendation System",
      level: "Beginner",
      description: "Build a basic recommendation system for movies, books, or music.",
      steps: [
        "Create a dataset of items with simple ratings",
        "Implement basic similarity calculations",
        "Build user preference collection system",
        "Generate recommendations based on similar users",
        "Display recommendations with explanations"
      ],
      tools: "Python, Pandas, Simple Mathematical Operations",
      expectedOutput: "A recommendation system that suggests items based on preferences",
      videoDemo: "Show user inputting preferences and getting personalized recommendations"
    },
    {
      id: 7,
      title: "Smart Study Assistant",
      level: "Beginner",
      description: "Create an AI study assistant that can help with quiz questions and study planning.",
      steps: [
        "Build a question-answer database for a subject",
        "Create quiz generation from the database",
        "Add scoring and progress tracking",
        "Implement study time recommendations",
        "Include review of wrong answers"
      ],
      tools: "Python, Simple Database (JSON/CSV), Basic Logic",
      expectedOutput: "A study assistant with quiz and progress tracking features",
      videoDemo: "Take a quiz, show scoring, and demonstrate study recommendations"
    },
    {
      id: 8,
      title: "Weather Predictor App",
      level: "Beginner",
      description: "Build a simple weather prediction app using historical data patterns.",
      steps: [
        "Collect historical weather data for your city",
        "Create simple pattern recognition for weather trends",
        "Implement basic prediction based on historical patterns",
        "Add weather icons and descriptions",
        "Create a simple weather dashboard"
      ],
      tools: "Python, CSV Data, Basic Pattern Matching",
      expectedOutput: "A weather prediction app with simple pattern-based forecasting",
      videoDemo: "Show historical data analysis and weather predictions for upcoming days"
    },
    {
      id: 9,
      title: "Smart Language Translator",
      level: "Beginner",
      description: "Create a simple language translation app with common phrases.",
      steps: [
        "Build a database of common phrases in 2-3 languages",
        "Create text input and language selection interface",
        "Implement phrase matching and translation",
        "Add pronunciation help (text-to-speech)",
        "Include common conversation categories"
      ],
      tools: "Python, Dictionary/JSON for translations, pyttsx3",
      expectedOutput: "A language translator for common phrases with pronunciation",
      videoDemo: "Translate phrases between languages and demonstrate pronunciation features"
    },
    {
      id: 10,
      title: "Personal AI Assistant",
      level: "Beginner",
      description: "Build a comprehensive personal assistant that combines multiple AI features.",
      steps: [
        "Integrate features from previous tasks (chatbot, calculator, etc.)",
        "Add current time and date functions",
        "Include simple reminders and notes functionality",
        "Add basic web search capability",
        "Create a main menu to access all features",
        "Make it conversational and user-friendly"
      ],
      tools: "Python, Integration of previous tools, Simple Web APIs",
      expectedOutput: "A complete personal AI assistant with multiple capabilities",
      videoDemo: "Demonstrate all features of your personal assistant in a comprehensive walkthrough"
    }
  ];

  const prerequisites = [
    "Basic understanding of Python programming",
    "Familiarity with simple programming concepts",
    "Understanding of basic computer operations",
    "Interest in artificial intelligence and technology"
  ];

  const learningObjectives = [
    "Learn fundamental AI and machine learning concepts",
    "Understand how to work with pre-trained AI models",
    "Develop skills in text processing and pattern recognition",
    "Build practical AI applications for daily use",
    "Gain experience with AI libraries and tools",
    "Create intelligent systems that solve real problems"
  ];

  const getLevelColor = (level) => {
    switch (level) {
      case 'Beginner': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen">
      {/* Mobile-Friendly Enhanced Header */}
      <section className="pt-16 pb-12 sm:pt-20 sm:pb-20 bg-gradient-to-br from-purple-50 to-indigo-50 relative overflow-hidden">
        {/* 3D Background Elements - Reduced on mobile */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 left-5 w-32 h-32 sm:top-20 sm:left-10 sm:w-64 sm:h-64 bg-gradient-to-r from-purple-300 to-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-blob animate-morph"></div>
          <div className="absolute top-20 right-5 w-40 h-40 sm:top-40 sm:right-10 sm:w-72 sm:h-72 bg-gradient-to-r from-indigo-300 to-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-blob animation-delay-2000 animate-morph"></div>
          <div className="absolute bottom-5 left-1/3 w-24 h-24 sm:bottom-10 sm:w-48 sm:h-48 bg-gradient-to-r from-blue-300 to-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-blob animation-delay-4000"></div>
        </div>

        {/* Floating 3D Elements - Hidden on small mobile */}
        <div className="hidden sm:block absolute top-1/4 left-1/5 w-6 h-6 bg-gradient-to-r from-purple-500 to-indigo-400 rounded-full animate-float shadow-lg"></div>
        <div className="hidden sm:block absolute top-2/3 right-1/4 w-8 h-8 bg-gradient-to-r from-indigo-500 to-blue-400 rounded-lg animate-pulse shadow-xl transform rotate-45"></div>
        <div className="hidden sm:block absolute top-1/2 right-1/5 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-400 rounded-full animate-bounce shadow-md"></div>
<br></br>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Mobile-Responsive Header */}
          <div className="flex flex-col sm:flex-row sm:items-center mb-6 sm:mb-8">
            <div className="flex items-center mb-4 sm:mb-0 sm:mr-4">
              <div className="p-2 sm:p-3 rounded-xl bg-gradient-to-r from-purple-50 to-indigo-50 mr-3 sm:mr-4 hover:scale-110 transition-transform duration-300">
                <Brain className="w-8 h-8 sm:w-12 sm:h-12 text-purple-600" />
              </div>
              <div>
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
                  Artificial Intelligence
                </h1>
                <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  Internship
                </span>
              </div>
            </div>
          </div>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-6">Build intelligent systems and practical AI applications</p>

          {/* Mobile-Friendly Professional Instructions */}
          <div className="glass-morphism rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 border border-purple-200 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-16 h-16 sm:w-32 sm:h-32 bg-gradient-to-br from-purple-400/10 to-indigo-400/10 rounded-bl-full"></div>
            <div className="absolute bottom-0 left-0 w-12 h-12 sm:w-24 sm:h-24 bg-gradient-to-tr from-indigo-400/10 to-purple-400/10 rounded-tr-full"></div>
            
            <div className="relative z-10">
              <div className="flex flex-col sm:flex-row sm:items-center mb-4 sm:mb-6">
                <div className="p-2 sm:p-3 rounded-xl bg-gradient-to-r from-purple-500 to-indigo-500 text-white mr-0 sm:mr-4 mb-3 sm:mb-0 w-fit">
                  <Users className="w-6 h-6 sm:w-8 sm:h-8" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-800">Internship Project Guidelines</h2>
              </div>

              {/* Mobile-First Grid Layout */}
              <div className="space-y-4 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-6 mb-6 sm:mb-8">
                <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-sm border border-gray-100">
                  <div className="flex items-center mb-3 sm:mb-4">
                    <div className="p-2 rounded-lg bg-purple-100 mr-3">
                      <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600" />
                    </div>
                    <h3 className="text-base sm:text-lg font-semibold text-gray-800">Task Selection</h3>
                  </div>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    Choose any <strong>2 tasks</strong> from the 10 beginner-friendly AI development tasks provided below. Select based on your interests and learning goals.
                  </p>
                </div>

                <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-sm border border-gray-100">
                  <div className="flex items-center mb-3 sm:mb-4">
                    <div className="p-2 rounded-lg bg-indigo-100 mr-3">
                      <Video className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-600" />
                    </div>
                    <h3 className="text-base sm:text-lg font-semibold text-gray-800">Video Demo</h3>
                  </div>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    Create a <strong>3-minute demo video</strong> or take <strong>screenshots</strong> showing your AI application working with different data inputs. Upload to LinkedIn with <strong>#CosmoDigitalServices</strong>.
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
                    Upload your complete AI project source code to <strong>GitHub</strong> with proper documentation. Repository links will be collected through our submission portal.
                  </p>
                </div>
              </div>

              {/* Mobile-Friendly Requirements Section */}
              <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-lg sm:rounded-xl p-4 sm:p-6 border-l-4 border-purple-500">
                <h4 className="text-base sm:text-lg font-semibold text-gray-800 mb-3 flex items-center">
                  <Play className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-purple-600" />
                  Submission Requirements
                </h4>
                <div className="space-y-4 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-4 text-sm text-gray-700">
                  <div className="space-y-2">
                    <h5 className="font-medium text-gray-800 text-sm sm:text-base">Video Content Must Include:</h5>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 text-xs sm:text-sm">
                      <li>Complete AI application demonstration</li>
                      <li>User interface walkthrough</li>
                      <li>Key AI features explanation</li>
                      <li>Brief technical overview</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h5 className="font-medium text-gray-800 text-sm sm:text-base">Code Repository Must Include:</h5>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 text-xs sm:text-sm">
                      <li>Complete Python project files</li>
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
          <div className="absolute top-5 right-5 w-32 h-32 sm:top-10 sm:right-10 sm:w-64 sm:h-64 bg-gradient-to-r from-purple-200 to-indigo-200 rounded-full filter blur-3xl animate-float"></div>
          <div className="absolute bottom-5 left-5 w-24 h-24 sm:bottom-10 sm:left-10 sm:w-48 sm:h-48 bg-gradient-to-r from-indigo-200 to-blue-200 rounded-full filter blur-2xl animate-float animation-delay-2000"></div>
        </div>

        {/* Mobile-First Layout */}
        <div className="space-y-8 lg:space-y-0 lg:flex lg:flex-row lg:gap-8 relative z-10">
          
          {/* Mobile-First Sidebar */}
          <div className="w-full lg:w-1/3 lg:order-2">
            <div className="space-y-4 sm:space-y-6">
              {/* Learning Objectives */}
              <div className="group glass-morphism rounded-xl p-4 sm:p-6 card-3d-hover relative overflow-hidden">
                <div className="absolute top-0 right-0 w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-purple-400/20 to-indigo-400/20 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4 relative z-10">Learning Objectives</h3>
                <ul className="space-y-2 sm:space-y-3 relative z-10">
                  {learningObjectives.map((objective, index) => (
                    <li key={index} className="flex items-start group-hover:translate-x-1 transition-transform duration-300" style={{ transitionDelay: `${index * 50}ms` }}>
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-purple-500 mr-2 sm:mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600 text-xs sm:text-sm leading-relaxed">{objective}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Prerequisites */}
              <div className="group glass-morphism rounded-xl p-4 sm:p-6 card-3d-hover relative overflow-hidden animation-delay-500">
                <div className="absolute top-0 right-0 w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-indigo-400/20 to-blue-400/20 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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
                <div className="absolute top-0 right-0 w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4 relative z-10">Duration Options</h3>
                <div className="space-y-3 relative z-10">
                  <div className="flex items-center justify-between p-3 bg-gradient-to-r from-purple-50 to-indigo-50 rounded-lg hover:from-purple-100 hover:to-indigo-100 transition-colors duration-300">
                    <span className="font-medium text-purple-700 text-sm sm:text-base">4 Weeks</span>
                    <span className="text-purple-600 text-xs sm:text-sm">Intensive Track</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gradient-to-r from-indigo-50 to-blue-50 rounded-lg hover:from-indigo-100 hover:to-blue-100 transition-colors duration-300">
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
              <div className="absolute top-0 right-0 w-16 h-16 sm:w-32 sm:h-32 bg-gradient-to-br from-purple-400/10 to-indigo-400/10 rounded-bl-full"></div>
              
              <div className="relative z-10">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6">
                  AI Development <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">Project Tasks</span>
                </h2>
                
                <div className="space-y-4 sm:space-y-6">
                  {tasks.map((task, index) => (
                    <div 
                      key={task.id} 
                      className="group glass-morphism border border-gray-200 rounded-xl p-4 sm:p-6 card-3d-hover relative overflow-hidden"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      {/* 3D Glow Effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                      
                      <div className="relative z-10">
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3 sm:mb-4">
                          <div className="flex-1">
                            <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-2">
                              <span className="text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-purple-600 to-indigo-600 px-2 sm:px-3 py-1 rounded-full">
                                Task {task.id}
                              </span>
                              <span className={`text-xs font-medium px-2 py-1 rounded-full ${getLevelColor(task.level)}`}>
                                {task.level}
                              </span>
                            </div>
                            <h3 className="text-base sm:text-lg font-semibold text-gray-800 group-hover:text-purple-600 transition-colors duration-300 leading-tight">
                              {task.title}
                            </h3>
                          </div>
                        </div>
                        
                        <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 leading-relaxed">{task.description}</p>
                        
                        <div className="mb-3 sm:mb-4">
                          <h4 className="font-medium text-gray-800 mb-2 flex items-center text-sm sm:text-base">
                            <span className="w-2 h-2 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full mr-2"></span>
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
                            <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 mr-2 text-purple-600" />
                            Expected Deliverable:
                          </h4>
                          <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">{task.expectedOutput}</p>
                        </div>
                        
                        <div className="bg-gradient-to-r from-purple-50 to-indigo-50 p-3 sm:p-4 rounded-lg border border-purple-200">
                          <h4 className="font-medium text-purple-800 mb-2 flex items-center text-sm sm:text-base">
                            <Video className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                            Video Demo Requirements:
                          </h4>
                          <p className="text-purple-700 text-xs sm:text-sm mb-2 leading-relaxed">{task.videoDemo}</p>
                          <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs text-purple-600">
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

export default ArtificialIntelligence;
