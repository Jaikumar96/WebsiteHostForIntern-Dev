import React from 'react';
import { ArrowLeft, CheckCircle, Palette, Code, Globe, Play, Github, Video, Upload, Users, Monitor, Eye, Pen } from 'lucide-react';
import { Link } from 'react-router-dom';

const UIUXDesign = () => {
  const tasks = [
    {
      id: 1,
      title: "Simple Mobile App Wireframe",
      level: "Beginner",
      description: "Create basic wireframes for a simple mobile app using design tools.",
      steps: [
        "Set up Figma account and learn basic navigation",
        "Choose a simple app idea (to-do list, weather, or calculator)",
        "Create 3-5 basic wireframe screens showing main user flow",
        "Add simple annotations explaining each screen's purpose",
        "Export wireframes and create a simple presentation"
      ],
      tools: "Figma, Basic wireframing techniques, Simple shapes and text",
      expectedOutput: "A set of basic mobile app wireframes with clear user flow",
      videoDemo: "Show wireframe screens, explain the user flow, and demonstrate navigation between screens"
    },
    {
      id: 2,
      title: "Simple Logo Design Project",
      level: "Beginner", 
      description: "Design a basic logo for a fictional business using simple design principles.",
      steps: [
        "Choose a simple business type (cafe, bookstore, gym)",
        "Research similar logos and gather inspiration",
        "Create 3-5 different logo concepts using basic shapes",
        "Choose colors that match the business personality",
        "Present the final logo with business card mockup"
      ],
      tools: "Figma, Basic shapes, Color selection, Typography basics",
      expectedOutput: "A complete logo design with different variations and mockup",
      videoDemo: "Show different logo concepts, explain design choices, and present final logo application"
    },
    {
      id: 3,
      title: "Simple Website Landing Page Design",
      level: "Beginner",
      description: "Create a basic landing page design for a small business or service.",
      steps: [
        "Choose a business to design for (restaurant, portfolio, service)",
        "Plan the page sections (header, about, services, contact)",
        "Design the page layout using simple grid system",
        "Add appropriate images, text, and call-to-action buttons",
        "Make the design look clean and professional"
      ],
      tools: "Figma, Grid layouts, Image placement, Button design",
      expectedOutput: "A complete landing page design with all sections and content",
      videoDemo: "Walk through each section of the landing page and explain design decisions"
    },
    {
      id: 4,
      title: "Simple User Profile Design",
      level: "Beginner",
      description: "Design a basic user profile interface for a mobile or web application.",
      steps: [
        "Create a simple user profile layout with photo and information",
        "Design edit profile screen with form elements",
        "Add settings screen with toggle switches and options",
        "Use consistent colors, fonts, and spacing throughout",
        "Create simple icons for different profile sections"
      ],
      tools: "Figma, Form design, Icon creation, Consistent styling",
      expectedOutput: "A user profile interface with multiple connected screens",
      videoDemo: "Show profile screens, demonstrate form elements, and explain user experience flow"
    },
    {
      id: 5,
      title: "Simple Color Palette and Style Guide",
      level: "Beginner",
      description: "Create a basic color palette and style guide for a brand or project.",
      steps: [
        "Choose a theme or brand personality (modern, playful, professional)",
        "Select 4-6 colors that work well together",
        "Choose 2-3 fonts for headings and body text",
        "Create spacing and sizing guidelines",
        "Design simple style guide document showing all elements"
      ],
      tools: "Figma, Color theory basics, Typography, Style documentation",
      expectedOutput: "A complete style guide with colors, fonts, and usage examples",
      videoDemo: "Present style guide, explain color choices, and show how elements work together"
    },
    {
      id: 6,
      title: "Simple E-commerce Product Card",
      level: "Beginner",
      description: "Design product cards and listing page for a simple e-commerce interface.",
      steps: [
        "Design individual product card with image, name, and price",
        "Create product grid layout showing multiple cards",
        "Add simple filters (category, price range) to the page",
        "Design product detail page with larger images and description",
        "Include add to cart button and basic interaction states"
      ],
      tools: "Figma, Card design, Grid layouts, Button states",
      expectedOutput: "E-commerce product cards and listing page with detail view",
      videoDemo: "Show product cards, demonstrate filtering options, and walk through product detail page"
    },
    {
      id: 7,
      title: "Simple Dashboard Interface",
      level: "Beginner",
      description: "Create a basic dashboard design with charts and information cards.",
      steps: [
        "Design simple navigation sidebar with menu items",
        "Create information cards showing key statistics",
        "Add basic charts (bar chart, pie chart) using simple shapes",
        "Design data tables with user-friendly formatting",
        "Use colors and icons to make information easy to understand"
      ],
      tools: "Figma, Chart design, Card layouts, Data visualization",
      expectedOutput: "A dashboard interface with navigation, cards, and simple data visualization",
      videoDemo: "Tour the dashboard, explain information hierarchy, and show different data visualization elements"
    },
    {
      id: 8,
      title: "Simple Icon Set Design",
      level: "Beginner",
      description: "Create a consistent set of simple icons for an application or website.",
      steps: [
        "Choose an icon theme (business, social media, travel, food)",
        "Design 10-15 icons using consistent style and line weight",
        "Create both outline and filled versions of each icon",
        "Ensure all icons work at different sizes",
        "Organize icons in a clear presentation format"
      ],
      tools: "Figma, Vector design, Icon design principles, Consistent styling",
      expectedOutput: "A complete icon set with consistent style and multiple variations",
      videoDemo: "Present icon set, show different styles and sizes, explain design consistency"
    },
    {
      id: 9,
      title: "Simple App Onboarding Flow",
      level: "Beginner",
      description: "Design a basic onboarding experience for a mobile application.",
      steps: [
        "Create 3-4 onboarding screens introducing app features",
        "Design simple illustrations or icons for each screen",
        "Add clear, friendly text explaining each feature",
        "Create progress indicators and navigation buttons",
        "Design welcome screen and signup/login options"
      ],
      tools: "Figma, Illustration basics, Flow design, User guidance",
      expectedOutput: "Complete app onboarding flow with illustrations and user guidance",
      videoDemo: "Walk through onboarding flow, explain user experience, and show screen transitions"
    },
    {
      id: 10,
      title: "Complete Design Portfolio Project",
      level: "Beginner",
      description: "Create a comprehensive design portfolio combining multiple design projects.",
      steps: [
        "Select best work from previous tasks and refine the designs",
        "Create portfolio website design showcasing all projects",
        "Write simple case studies explaining design process for each project",
        "Design about section with personal branding and contact information",
        "Create consistent visual identity across all portfolio elements",
        "Add project mockups showing designs in realistic contexts",
        "Organize portfolio for easy navigation and professional presentation"
      ],
      tools: "Complete design toolkit, Portfolio presentation, Case study writing, Personal branding",
      expectedOutput: "A complete design portfolio website with multiple projects and case studies",
      videoDemo: "Give complete tour of portfolio showing all projects, explain design process, and demonstrate professional presentation of design work"
    }
  ];

  const prerequisites = [
    "Basic understanding of visual design principles",
    "Interest in user experience and interface design",
    "Familiarity with using design software or willingness to learn",
    "Understanding of mobile and web applications"
  ];

  const learningObjectives = [
    "Learn fundamental UI/UX design principles and concepts",
    "Master basic design tools and software (Figma)",
    "Understand user-centered design thinking",
    "Develop skills in visual design and layout",
    "Learn to create consistent design systems",
    "Build a professional design portfolio"
  ];

  const getLevelColor = (level) => {
    switch (level) {
      case 'Beginner': return 'bg-teal-100 text-teal-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen">
      <br></br>
      {/* Mobile-Friendly Enhanced Header */}
      <section className="pt-16 pb-12 sm:pt-20 sm:pb-20 bg-gradient-to-br from-teal-50 to-cyan-50 relative overflow-hidden">
        {/* 3D Background Elements - Reduced on mobile */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 left-5 w-32 h-32 sm:top-20 sm:left-10 sm:w-64 sm:h-64 bg-gradient-to-r from-teal-300 to-cyan-200 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-blob animate-morph"></div>
          <div className="absolute top-20 right-5 w-40 h-40 sm:top-40 sm:right-10 sm:w-72 sm:h-72 bg-gradient-to-r from-cyan-300 to-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-blob animation-delay-2000 animate-morph"></div>
          <div className="absolute bottom-5 left-1/3 w-24 h-24 sm:bottom-10 sm:w-48 sm:h-48 bg-gradient-to-r from-blue-300 to-teal-300 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-blob animation-delay-4000"></div>
        </div>

        {/* Floating 3D Elements - Hidden on small mobile */}
        <div className="hidden sm:block absolute top-1/4 left-1/5 w-6 h-6 bg-gradient-to-r from-teal-500 to-cyan-400 rounded-full animate-float shadow-lg"></div>
        <div className="hidden sm:block absolute top-2/3 right-1/4 w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-400 rounded-lg animate-pulse shadow-xl transform rotate-45"></div>
        <div className="hidden sm:block absolute top-1/2 right-1/5 w-4 h-4 bg-gradient-to-r from-blue-500 to-teal-400 rounded-full animate-bounce shadow-md"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Mobile-Responsive Header - Fixed text wrapping */}
          <div className="flex flex-col sm:flex-row sm:items-center mb-6 sm:mb-8">
            <div className="flex items-center mb-4 sm:mb-0 sm:mr-4">
              <div className="p-2 sm:p-3 rounded-xl bg-gradient-to-r from-teal-50 to-cyan-50 mr-3 sm:mr-4 hover:scale-110 transition-transform duration-300">
                <Palette className="w-8 h-8 sm:w-12 sm:h-12 text-teal-600" />
              </div>
              <div className="flex-1">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
                  UI/UX Design
                </h1>
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent leading-tight">
                  Internship
                </div>
              </div>
            </div>
          </div>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-6">Design user-centered interfaces and experiences</p>

          {/* Mobile-Friendly Professional Instructions */}
          <div className="glass-morphism rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 border border-teal-200 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-16 h-16 sm:w-32 sm:h-32 bg-gradient-to-br from-teal-400/10 to-cyan-400/10 rounded-bl-full"></div>
            <div className="absolute bottom-0 left-0 w-12 h-12 sm:w-24 sm:h-24 bg-gradient-to-tr from-cyan-400/10 to-teal-400/10 rounded-tr-full"></div>
            
            <div className="relative z-10">
              <div className="flex flex-col sm:flex-row sm:items-center mb-4 sm:mb-6">
                <div className="p-2 sm:p-3 rounded-xl bg-gradient-to-r from-teal-500 to-cyan-500 text-white mr-0 sm:mr-4 mb-3 sm:mb-0 w-fit">
                  <Users className="w-6 h-6 sm:w-8 sm:h-8" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-800">Internship Project Guidelines</h2>
              </div>

              {/* Mobile-First Grid Layout */}
              <div className="space-y-4 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-6 mb-6 sm:mb-8">
                <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-sm border border-gray-100">
                  <div className="flex items-center mb-3 sm:mb-4">
                    <div className="p-2 rounded-lg bg-teal-100 mr-3">
                      <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-teal-600" />
                    </div>
                    <h3 className="text-base sm:text-lg font-semibold text-gray-800">Task Selection</h3>
                  </div>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    Choose any <strong>2 tasks</strong> from the 10 beginner-friendly UI/UX design tasks provided below. Select based on your interests and learning goals.
                  </p>
                </div>

                <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-sm border border-gray-100">
                  <div className="flex items-center mb-3 sm:mb-4">
                    <div className="p-2 rounded-lg bg-cyan-100 mr-3">
                      <Eye className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-600" />
                    </div>
                    <h3 className="text-base sm:text-lg font-semibold text-gray-800">Design Demo</h3>
                  </div>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    Create a <strong>3-minute video</strong> or take <strong>screenshots</strong> showing your design work and process. Upload to LinkedIn with <strong>#CosmoDigitalServices</strong>.
                  </p>
                </div>

                <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-sm border border-gray-100">
                  <div className="flex items-center mb-3 sm:mb-4">
                    <div className="p-2 rounded-lg bg-blue-100 mr-3">
                      <Github className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
                    </div>
                    <h3 className="text-base sm:text-lg font-semibold text-gray-800">Design Files</h3>
                  </div>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    Upload your complete design files to <strong>Figma</strong> or <strong>Behance</strong> with proper documentation. Links will be collected through our submission portal.
                  </p>
                </div>
              </div>

              {/* Mobile-Friendly Requirements Section */}
              <div className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-lg sm:rounded-xl p-4 sm:p-6 border-l-4 border-teal-500">
                <h4 className="text-base sm:text-lg font-semibold text-gray-800 mb-3 flex items-center">
                  <Play className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-teal-600" />
                  Submission Requirements
                </h4>
                <div className="space-y-4 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-4 text-sm text-gray-700">
                  <div className="space-y-2">
                    <h5 className="font-medium text-gray-800 text-sm sm:text-base">Video/Screenshot Content Must Include:</h5>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 text-xs sm:text-sm">
                      <li>Complete design work and creative process</li>
                      <li>Explanation of design decisions and user experience</li>
                      <li>Design tool usage and workflow demonstration</li>
                      <li>Final designs in context and usage scenarios</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h5 className="font-medium text-gray-800 text-sm sm:text-base">Design Files Must Include:</h5>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 text-xs sm:text-sm">
                      <li>Original design files (Figma, XD, or Sketch files)</li>
                      <li>High-resolution design exports and mockups</li>
                      <li>Design documentation and style guide</li>
                      <li>Clear project description and design rationale</li>
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
          <div className="absolute top-5 right-5 w-32 h-32 sm:top-10 sm:right-10 sm:w-64 sm:h-64 bg-gradient-to-r from-teal-200 to-cyan-200 rounded-full filter blur-3xl animate-float"></div>
          <div className="absolute bottom-5 left-5 w-24 h-24 sm:bottom-10 sm:left-10 sm:w-48 sm:h-48 bg-gradient-to-r from-cyan-200 to-blue-200 rounded-full filter blur-2xl animate-float animation-delay-2000"></div>
        </div>

        {/* Mobile-First Layout */}
        <div className="space-y-8 lg:space-y-0 lg:flex lg:flex-row lg:gap-8 relative z-10">
          
          {/* Mobile-First Sidebar */}
          <div className="w-full lg:w-1/3 lg:order-2">
            <div className="space-y-4 sm:space-y-6">
              {/* Learning Objectives */}
              <div className="group glass-morphism rounded-xl p-4 sm:p-6 card-3d-hover relative overflow-hidden">
                <div className="absolute top-0 right-0 w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-teal-400/20 to-cyan-400/20 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4 relative z-10">Learning Objectives</h3>
                <ul className="space-y-2 sm:space-y-3 relative z-10">
                  {learningObjectives.map((objective, index) => (
                    <li key={index} className="flex items-start group-hover:translate-x-1 transition-transform duration-300" style={{ transitionDelay: `${index * 50}ms` }}>
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-teal-500 mr-2 sm:mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600 text-xs sm:text-sm leading-relaxed">{objective}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Prerequisites */}
              <div className="group glass-morphism rounded-xl p-4 sm:p-6 card-3d-hover relative overflow-hidden animation-delay-500">
                <div className="absolute top-0 right-0 w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-cyan-400/20 to-blue-400/20 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4 relative z-10">Prerequisites</h3>
                <ul className="space-y-2 sm:space-y-3 relative z-10">
                  {prerequisites.map((prerequisite, index) => (
                    <li key={index} className="flex items-start group-hover:translate-x-1 transition-transform duration-300" style={{ transitionDelay: `${index * 50}ms` }}>
                      <Code className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-500 mr-2 sm:mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600 text-xs sm:text-sm leading-relaxed">{prerequisite}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Duration Options */}
              <div className="group glass-morphism rounded-xl p-4 sm:p-6 card-3d-hover relative overflow-hidden animation-delay-1000">
                <div className="absolute top-0 right-0 w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-blue-400/20 to-teal-400/20 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4 relative z-10">Duration Options</h3>
                <div className="space-y-3 relative z-10">
                  <div className="flex items-center justify-between p-3 bg-gradient-to-r from-teal-50 to-cyan-50 rounded-lg hover:from-teal-100 hover:to-cyan-100 transition-colors duration-300">
                    <span className="font-medium text-teal-700 text-sm sm:text-base">4 Weeks</span>
                    <span className="text-teal-600 text-xs sm:text-sm">Intensive Track</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gradient-to-r from-cyan-50 to-blue-50 rounded-lg hover:from-cyan-100 hover:to-blue-100 transition-colors duration-300">
                    <span className="font-medium text-cyan-700 text-sm sm:text-base">8 Weeks</span>
                    <span className="text-cyan-600 text-xs sm:text-sm">Comprehensive Track</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile-First Main Content */}
          <div className="w-full lg:w-2/3 lg:order-1">
            <div className="glass-morphism rounded-xl p-4 sm:p-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-16 h-16 sm:w-32 sm:h-32 bg-gradient-to-br from-teal-400/10 to-cyan-400/10 rounded-bl-full"></div>
              
              <div className="relative z-10">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6">
                  UI/UX Design <span className="bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">Project Tasks</span>
                </h2>
                
                <div className="space-y-4 sm:space-y-6">
                  {tasks.map((task, index) => (
                    <div 
                      key={task.id} 
                      className="group glass-morphism border border-gray-200 rounded-xl p-4 sm:p-6 card-3d-hover relative overflow-hidden"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      {/* 3D Glow Effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-teal-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                      
                      <div className="relative z-10">
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3 sm:mb-4">
                          <div className="flex-1">
                            <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-2">
                              <span className="text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-teal-600 to-cyan-600 px-2 sm:px-3 py-1 rounded-full">
                                Task {task.id}
                              </span>
                              <span className={`text-xs font-medium px-2 py-1 rounded-full ${getLevelColor(task.level)}`}>
                                {task.level}
                              </span>
                            </div>
                            <h3 className="text-base sm:text-lg font-semibold text-gray-800 group-hover:text-teal-600 transition-colors duration-300 leading-tight">
                              {task.title}
                            </h3>
                          </div>
                        </div>
                        
                        <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 leading-relaxed">{task.description}</p>
                        
                        <div className="mb-3 sm:mb-4">
                          <h4 className="font-medium text-gray-800 mb-2 flex items-center text-sm sm:text-base">
                            <span className="w-2 h-2 bg-gradient-to-r from-teal-600 to-cyan-600 rounded-full mr-2"></span>
                            Design Steps:
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
                            <Pen className="w-3 h-3 sm:w-4 sm:h-4 mr-2 text-cyan-600" />
                            Design Tools:
                          </h4>
                          <p className="text-gray-600 text-xs sm:text-sm bg-gray-50 p-2 rounded-lg leading-relaxed">{task.tools}</p>
                        </div>

                        <div className="mb-3 sm:mb-4">
                          <h4 className="font-medium text-gray-800 mb-2 flex items-center text-sm sm:text-base">
                            <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 mr-2 text-teal-600" />
                            Expected Deliverable:
                          </h4>
                          <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">{task.expectedOutput}</p>
                        </div>
                        
                        <div className="bg-gradient-to-r from-teal-50 to-cyan-50 p-3 sm:p-4 rounded-lg border border-teal-200">
                          <h4 className="font-medium text-teal-800 mb-2 flex items-center text-sm sm:text-base">
                            <Eye className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                            Design Demo Requirements:
                          </h4>
                          <p className="text-teal-700 text-xs sm:text-sm mb-2 leading-relaxed">{task.videoDemo}</p>
                          <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs text-teal-600">
                            <span className="flex items-center">
                              <Monitor className="w-3 h-3 mr-1" />
                              Screenshots or Video
                            </span>
                            <span className="flex items-center">
                              <Upload className="w-3 h-3 mr-1" />
                              LinkedIn #CosmoDigitalServices
                            </span>
                            <span className="flex items-center">
                              <Palette className="w-3 h-3 mr-1" />
                              Design files required
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

export default UIUXDesign;
