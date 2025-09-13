import React from 'react';
import { ArrowLeft, CheckCircle, TrendingUp, Code, Globe, Play, Github, Video, Upload, Users, Monitor, Target, BarChart } from 'lucide-react';
import { Link } from 'react-router-dom';

const DigitalMarketing = () => {
  const tasks = [
    {
      id: 1,
      title: "Simple Social Media Content Plan",
      level: "Beginner",
      description: "Create a basic social media content strategy and post scheduler for a small business.",
      steps: [
        "Choose a business type (restaurant, shop, service) to create content for",
        "Create a simple 1-week content calendar with daily posts",
        "Design 7 social media posts using free tools like Canva",
        "Write engaging captions with relevant hashtags",
        "Plan posting times for maximum engagement"
      ],
      tools: "Canva, Free Social Media Templates, Hashtag Research",
      expectedOutput: "A complete 1-week social media content plan with designed posts",
      videoDemo: "Show your content calendar, display the designed posts, and explain your content strategy"
    },
    {
      id: 2,
      title: "Basic SEO Website Analysis",
      level: "Beginner", 
      description: "Analyze a website's SEO performance and create improvement recommendations.",
      steps: [
        "Choose a small business website to analyze",
        "Check basic SEO elements (title tags, meta descriptions, headings)",
        "Research 5-10 relevant keywords for the business",
        "Identify simple SEO improvement opportunities",
        "Create a basic SEO improvement checklist"
      ],
      tools: "Free SEO Tools, Google Keyword Planner, Basic Website Analysis",
      expectedOutput: "An SEO analysis report with actionable improvement recommendations",
      videoDemo: "Walk through your SEO analysis process and explain the improvements you recommend"
    },
    {
      id: 3,
      title: "Simple Email Newsletter Campaign",
      level: "Beginner",
      description: "Design and create a basic email newsletter for a business or cause.",
      steps: [
        "Choose a business or cause to create newsletter for",
        "Design a simple email template using free tools",
        "Write engaging subject lines and email content",
        "Create a call-to-action and contact information section",
        "Plan a simple email series (welcome, weekly update, special offer)"
      ],
      tools: "Free Email Design Tools, Canva, Simple Email Templates",
      expectedOutput: "A complete email newsletter design with content and series plan",
      videoDemo: "Show your email designs, explain the content strategy, and demonstrate the email series"
    },
    {
      id: 4,
      title: "Basic Google Ads Campaign Plan",
      level: "Beginner",
      description: "Create a simple Google Ads campaign strategy without actual spending.",
      steps: [
        "Research keywords for a local business",
        "Write compelling ad headlines and descriptions",
        "Create ad groups with relevant keywords",
        "Design a simple landing page concept",
        "Calculate basic budget and expected results"
      ],
      tools: "Google Keyword Planner, Ad Copy Templates, Landing Page Concepts",
      expectedOutput: "A complete Google Ads campaign plan with keywords and ad copy",
      videoDemo: "Present your campaign strategy, show keyword research, and explain ad copy choices"
    },
    {
      id: 5,
      title: "Simple Content Marketing Blog Plan",
      level: "Beginner",
      description: "Create a content marketing strategy with blog topics and writing samples.",
      steps: [
        "Choose a niche or industry to create content for",
        "Research popular topics and questions in that niche",
        "Create a list of 20 blog post ideas",
        "Write 2 complete blog posts (300-500 words each)",
        "Plan a simple content distribution strategy"
      ],
      tools: "Content Research Tools, Blog Writing, Topic Planning",
      expectedOutput: "A content marketing plan with blog topics and sample posts",
      videoDemo: "Show your content research process, present blog topics, and read excerpts from your posts"
    },
    {
      id: 6,
      title: "Basic Facebook Business Page Setup",
      level: "Beginner",
      description: "Create and optimize a complete Facebook business page with content.",
      steps: [
        "Set up a Facebook business page for a fictional or real business",
        "Add all business information, photos, and contact details",
        "Create and publish 10 different types of posts",
        "Set up basic page insights and analytics",
        "Create a simple posting schedule"
      ],
      tools: "Facebook Business Page, Basic Graphics, Content Calendar",
      expectedOutput: "A fully optimized Facebook business page with active content",
      videoDemo: "Tour your Facebook page, show different post types, and explain your posting strategy"
    },
    {
      id: 7,
      title: "Simple Marketing Analytics Dashboard",
      level: "Beginner",
      description: "Create a basic marketing performance tracking dashboard.",
      steps: [
        "Choose metrics to track (followers, engagement, website visits)",
        "Create a simple spreadsheet dashboard",
        "Collect sample data for different marketing channels",
        "Create basic charts and graphs showing performance",
        "Write simple insights and recommendations"
      ],
      tools: "Google Sheets/Excel, Basic Chart Creation, Sample Data",
      expectedOutput: "A marketing analytics dashboard with charts and insights",
      videoDemo: "Walk through your dashboard, explain the metrics, and share your marketing insights"
    },
    {
      id: 8,
      title: "Basic Influencer Outreach Campaign",
      level: "Beginner",
      description: "Research and create an influencer marketing outreach strategy.",
      steps: [
        "Research micro-influencers in a specific niche",
        "Create a list of 20 potential influencer partners",
        "Write template outreach messages",
        "Design a simple collaboration proposal",
        "Create a tracking system for outreach responses"
      ],
      tools: "Social Media Research, Outreach Templates, Collaboration Planning",
      expectedOutput: "An influencer outreach campaign with research and templates",
      videoDemo: "Show your influencer research, present outreach templates, and explain collaboration ideas"
    },
    {
      id: 9,
      title: "Simple Local Business Marketing Plan",
      level: "Beginner",
      description: "Create a comprehensive marketing plan for a local business.",
      steps: [
        "Choose a local business type to create marketing plan for",
        "Research the target audience and local competitors",
        "Plan marketing strategies for different channels",
        "Create a simple budget allocation for marketing activities",
        "Design a 3-month marketing calendar"
      ],
      tools: "Market Research, Planning Templates, Budget Planning",
      expectedOutput: "A complete local business marketing plan with timeline and budget",
      videoDemo: "Present your marketing plan, explain target audience research, and walk through the marketing calendar"
    },
    {
      id: 10,
      title: "Complete Digital Marketing Portfolio",
      level: "Beginner",
      description: "Create a comprehensive digital marketing portfolio showcasing all learned skills.",
      steps: [
        "Combine elements from all previous tasks into one cohesive project",
        "Choose a business or cause to create complete marketing strategy for",
        "Include social media plan, SEO recommendations, email campaign, and content strategy",
        "Create a simple website or landing page showcasing your work",
        "Add analytics tracking and performance projections",
        "Design a professional presentation of your marketing portfolio",
        "Include case studies showing before/after scenarios"
      ],
      tools: "Complete Digital Marketing Tools, Portfolio Website, Presentation Software",
      expectedOutput: "A comprehensive digital marketing portfolio with multiple campaign examples",
      videoDemo: "Present your complete portfolio, walk through different marketing strategies, and explain expected results for each campaign"
    }
  ];

  const prerequisites = [
    "Basic understanding of social media platforms",
    "Familiarity with internet browsing and email",
    "Understanding of basic business concepts",
    "Interest in marketing and communication"
  ];

  const learningObjectives = [
    "Learn fundamental digital marketing strategies",
    "Master social media content creation and planning",
    "Understand basic SEO and website optimization",
    "Develop email marketing and content creation skills",
    "Learn to create marketing plans and track performance",
    "Build a professional digital marketing portfolio"
  ];

  const getLevelColor = (level) => {
    switch (level) {
      case 'Beginner': return 'bg-emerald-100 text-emerald-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen">
      <br></br>
      {/* Mobile-Friendly Enhanced Header */}
      <section className="pt-16 pb-12 sm:pt-20 sm:pb-20 bg-gradient-to-br from-emerald-50 to-teal-50 relative overflow-hidden">
        {/* 3D Background Elements - Reduced on mobile */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 left-5 w-32 h-32 sm:top-20 sm:left-10 sm:w-64 sm:h-64 bg-gradient-to-r from-emerald-300 to-teal-200 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-blob animate-morph"></div>
          <div className="absolute top-20 right-5 w-40 h-40 sm:top-40 sm:right-10 sm:w-72 sm:h-72 bg-gradient-to-r from-teal-300 to-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-blob animation-delay-2000 animate-morph"></div>
          <div className="absolute bottom-5 left-1/3 w-24 h-24 sm:bottom-10 sm:w-48 sm:h-48 bg-gradient-to-r from-green-300 to-emerald-300 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-blob animation-delay-4000"></div>
        </div>

        {/* Floating 3D Elements - Hidden on small mobile */}
        <div className="hidden sm:block absolute top-1/4 left-1/5 w-6 h-6 bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full animate-float shadow-lg"></div>
        <div className="hidden sm:block absolute top-2/3 right-1/4 w-8 h-8 bg-gradient-to-r from-teal-500 to-green-400 rounded-lg animate-pulse shadow-xl transform rotate-45"></div>
        <div className="hidden sm:block absolute top-1/2 right-1/5 w-4 h-4 bg-gradient-to-r from-green-500 to-emerald-400 rounded-full animate-bounce shadow-md"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Mobile-Responsive Header - Fixed text wrapping */}
          <div className="flex flex-col sm:flex-row sm:items-center mb-6 sm:mb-8">
            <div className="flex items-center mb-4 sm:mb-0 sm:mr-4">
              <div className="p-2 sm:p-3 rounded-xl bg-gradient-to-r from-emerald-50 to-teal-50 mr-3 sm:mr-4 hover:scale-110 transition-transform duration-300">
                <TrendingUp className="w-8 h-8 sm:w-12 sm:h-12 text-emerald-600" />
              </div>
              <div className="flex-1">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
                  Digital Marketing
                </h1>
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent leading-tight">
                  Internship
                </div>
              </div>
            </div>
          </div>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-6">Master online marketing strategies and social media</p>

          {/* Mobile-Friendly Professional Instructions */}
          <div className="glass-morphism rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 border border-emerald-200 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-16 h-16 sm:w-32 sm:h-32 bg-gradient-to-br from-emerald-400/10 to-teal-400/10 rounded-bl-full"></div>
            <div className="absolute bottom-0 left-0 w-12 h-12 sm:w-24 sm:h-24 bg-gradient-to-tr from-teal-400/10 to-emerald-400/10 rounded-tr-full"></div>
            
            <div className="relative z-10">
              <div className="flex flex-col sm:flex-row sm:items-center mb-4 sm:mb-6">
                <div className="p-2 sm:p-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-white mr-0 sm:mr-4 mb-3 sm:mb-0 w-fit">
                  <Users className="w-6 h-6 sm:w-8 sm:h-8" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-800">Internship Project Guidelines</h2>
              </div>

              {/* Mobile-First Grid Layout */}
              <div className="space-y-4 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-6 mb-6 sm:mb-8">
                <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-sm border border-gray-100">
                  <div className="flex items-center mb-3 sm:mb-4">
                    <div className="p-2 rounded-lg bg-emerald-100 mr-3">
                      <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-600" />
                    </div>
                    <h3 className="text-base sm:text-lg font-semibold text-gray-800">Task Selection</h3>
                  </div>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    Choose any <strong>2 tasks</strong> from the 10 beginner-friendly digital marketing tasks provided below. Select based on your interests and learning goals.
                  </p>
                </div>

                <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-sm border border-gray-100">
                  <div className="flex items-center mb-3 sm:mb-4">
                    <div className="p-2 rounded-lg bg-teal-100 mr-3">
                      <Target className="w-5 h-5 sm:w-6 sm:h-6 text-teal-600" />
                    </div>
                    <h3 className="text-base sm:text-lg font-semibold text-gray-800">Campaign Demo</h3>
                  </div>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    Create a <strong>3-minute video</strong> or take <strong>screenshots</strong> showing your marketing campaigns and strategies. Upload to LinkedIn with <strong>#CosmoDigitalServices</strong>.
                  </p>
                </div>

                <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-sm border border-gray-100">
                  <div className="flex items-center mb-3 sm:mb-4">
                    <div className="p-2 rounded-lg bg-green-100 mr-3">
                      <Github className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />
                    </div>
                    <h3 className="text-base sm:text-lg font-semibold text-gray-800">Portfolio Repository</h3>
                  </div>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    Upload your complete marketing materials and campaign files to <strong>GitHub</strong> or <strong>Google Drive</strong> with proper documentation. Links will be collected through our submission portal.
                  </p>
                </div>
              </div>

              {/* Mobile-Friendly Requirements Section */}
              <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-lg sm:rounded-xl p-4 sm:p-6 border-l-4 border-emerald-500">
                <h4 className="text-base sm:text-lg font-semibold text-gray-800 mb-3 flex items-center">
                  <Play className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-emerald-600" />
                  Submission Requirements
                </h4>
                <div className="space-y-4 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-4 text-sm text-gray-700">
                  <div className="space-y-2">
                    <h5 className="font-medium text-gray-800 text-sm sm:text-base">Video/Screenshot Content Must Include:</h5>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 text-xs sm:text-sm">
                      <li>Complete marketing campaign demonstration</li>
                      <li>Social media content and planning process</li>
                      <li>Marketing strategies and target audience analysis</li>
                      <li>Performance metrics and campaign results</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h5 className="font-medium text-gray-800 text-sm sm:text-base">Portfolio Repository Must Include:</h5>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 text-xs sm:text-sm">
                      <li>Complete marketing materials and designs</li>
                      <li>Campaign planning documents and calendars</li>
                      <li>README.md with project descriptions and results</li>
                      <li>Clear organization and professional presentation</li>
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
          <div className="absolute top-5 right-5 w-32 h-32 sm:top-10 sm:right-10 sm:w-64 sm:h-64 bg-gradient-to-r from-emerald-200 to-teal-200 rounded-full filter blur-3xl animate-float"></div>
          <div className="absolute bottom-5 left-5 w-24 h-24 sm:bottom-10 sm:left-10 sm:w-48 sm:h-48 bg-gradient-to-r from-teal-200 to-green-200 rounded-full filter blur-2xl animate-float animation-delay-2000"></div>
        </div>

        {/* Mobile-First Layout */}
        <div className="space-y-8 lg:space-y-0 lg:flex lg:flex-row lg:gap-8 relative z-10">
          
          {/* Mobile-First Sidebar */}
          <div className="w-full lg:w-1/3 lg:order-2">
            <div className="space-y-4 sm:space-y-6">
              {/* Learning Objectives */}
              <div className="group glass-morphism rounded-xl p-4 sm:p-6 card-3d-hover relative overflow-hidden">
                <div className="absolute top-0 right-0 w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-emerald-400/20 to-teal-400/20 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4 relative z-10">Learning Objectives</h3>
                <ul className="space-y-2 sm:space-y-3 relative z-10">
                  {learningObjectives.map((objective, index) => (
                    <li key={index} className="flex items-start group-hover:translate-x-1 transition-transform duration-300" style={{ transitionDelay: `${index * 50}ms` }}>
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-500 mr-2 sm:mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600 text-xs sm:text-sm leading-relaxed">{objective}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Prerequisites */}
              <div className="group glass-morphism rounded-xl p-4 sm:p-6 card-3d-hover relative overflow-hidden animation-delay-500">
                <div className="absolute top-0 right-0 w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-teal-400/20 to-green-400/20 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4 relative z-10">Prerequisites</h3>
                <ul className="space-y-2 sm:space-y-3 relative z-10">
                  {prerequisites.map((prerequisite, index) => (
                    <li key={index} className="flex items-start group-hover:translate-x-1 transition-transform duration-300" style={{ transitionDelay: `${index * 50}ms` }}>
                      <Code className="w-4 h-4 sm:w-5 sm:h-5 text-teal-500 mr-2 sm:mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600 text-xs sm:text-sm leading-relaxed">{prerequisite}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Duration Options */}
              <div className="group glass-morphism rounded-xl p-4 sm:p-6 card-3d-hover relative overflow-hidden animation-delay-1000">
                <div className="absolute top-0 right-0 w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-green-400/20 to-emerald-400/20 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4 relative z-10">Duration Options</h3>
                <div className="space-y-3 relative z-10">
                  <div className="flex items-center justify-between p-3 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-lg hover:from-emerald-100 hover:to-teal-100 transition-colors duration-300">
                    <span className="font-medium text-emerald-700 text-sm sm:text-base">4 Weeks</span>
                    <span className="text-emerald-600 text-xs sm:text-sm">Intensive Track</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gradient-to-r from-teal-50 to-green-50 rounded-lg hover:from-teal-100 hover:to-green-100 transition-colors duration-300">
                    <span className="font-medium text-teal-700 text-sm sm:text-base">8 Weeks</span>
                    <span className="text-teal-600 text-xs sm:text-sm">Comprehensive Track</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile-First Main Content */}
          <div className="w-full lg:w-2/3 lg:order-1">
            <div className="glass-morphism rounded-xl p-4 sm:p-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-16 h-16 sm:w-32 sm:h-32 bg-gradient-to-br from-emerald-400/10 to-teal-400/10 rounded-bl-full"></div>
              
              <div className="relative z-10">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6">
                  Digital Marketing <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Project Tasks</span>
                </h2>
                
                <div className="space-y-4 sm:space-y-6">
                  {tasks.map((task, index) => (
                    <div 
                      key={task.id} 
                      className="group glass-morphism border border-gray-200 rounded-xl p-4 sm:p-6 card-3d-hover relative overflow-hidden"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      {/* 3D Glow Effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                      
                      <div className="relative z-10">
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3 sm:mb-4">
                          <div className="flex-1">
                            <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-2">
                              <span className="text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-emerald-600 to-teal-600 px-2 sm:px-3 py-1 rounded-full">
                                Task {task.id}
                              </span>
                              <span className={`text-xs font-medium px-2 py-1 rounded-full ${getLevelColor(task.level)}`}>
                                {task.level}
                              </span>
                            </div>
                            <h3 className="text-base sm:text-lg font-semibold text-gray-800 group-hover:text-emerald-600 transition-colors duration-300 leading-tight">
                              {task.title}
                            </h3>
                          </div>
                        </div>
                        
                        <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 leading-relaxed">{task.description}</p>
                        
                        <div className="mb-3 sm:mb-4">
                          <h4 className="font-medium text-gray-800 mb-2 flex items-center text-sm sm:text-base">
                            <span className="w-2 h-2 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-full mr-2"></span>
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
                            <Code className="w-3 h-3 sm:w-4 sm:h-4 mr-2 text-teal-600" />
                            Required Tools:
                          </h4>
                          <p className="text-gray-600 text-xs sm:text-sm bg-gray-50 p-2 rounded-lg leading-relaxed">{task.tools}</p>
                        </div>

                        <div className="mb-3 sm:mb-4">
                          <h4 className="font-medium text-gray-800 mb-2 flex items-center text-sm sm:text-base">
                            <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 mr-2 text-emerald-600" />
                            Expected Deliverable:
                          </h4>
                          <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">{task.expectedOutput}</p>
                        </div>
                        
                        <div className="bg-gradient-to-r from-emerald-50 to-teal-50 p-3 sm:p-4 rounded-lg border border-emerald-200">
                          <h4 className="font-medium text-emerald-800 mb-2 flex items-center text-sm sm:text-base">
                            <Target className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                            Campaign Demo Requirements:
                          </h4>
                          <p className="text-emerald-700 text-xs sm:text-sm mb-2 leading-relaxed">{task.videoDemo}</p>
                          <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs text-emerald-600">
                            <span className="flex items-center">
                              <Monitor className="w-3 h-3 mr-1" />
                              Screenshots or Video
                            </span>
                            <span className="flex items-center">
                              <Upload className="w-3 h-3 mr-1" />
                              LinkedIn #CosmoDigitalServices
                            </span>
                            <span className="flex items-center">
                              <BarChart className="w-3 h-3 mr-1" />
                              Portfolio required
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

export default DigitalMarketing;
