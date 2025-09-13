import React from 'react';
import { ArrowLeft, CheckCircle, Zap, Code, Globe, Play, Github, Video, Upload, Users, Monitor, Brain, BarChart, Target } from 'lucide-react';
import { Link } from 'react-router-dom';

const MachineLearning = () => {
  const tasks = [
    {
      id: 1,
      title: "Simple House Price Predictor",
      level: "Beginner",
      description: "Build a basic machine learning model to predict house prices based on simple features.",
      steps: [
        "Set up Python environment with basic ML libraries (scikit-learn, pandas)",
        "Load a simple house price dataset (size, bedrooms, location)",
        "Clean and prepare the data for training",
        "Train a simple linear regression model",
        "Test the model and calculate accuracy using basic metrics"
      ],
      tools: "Python, pandas, scikit-learn, matplotlib, Jupyter Notebook",
      expectedOutput: "A working house price prediction model with accuracy metrics",
      videoDemo: "Show loading data, training the model, and making predictions with accuracy results"
    },
    {
      id: 2,
      title: "Simple Email Spam Detector",
      level: "Beginner", 
      description: "Create a machine learning model to classify emails as spam or not spam.",
      steps: [
        "Use a pre-built email spam dataset",
        "Clean and preprocess text data (remove special characters)",
        "Convert text to numbers using simple techniques",
        "Train a basic classification model (Naive Bayes)",
        "Test with new emails and show spam/not spam predictions"
      ],
      tools: "Python, scikit-learn, pandas, Text processing, Classification",
      expectedOutput: "A spam detector that can classify new emails with accuracy score",
      videoDemo: "Show testing the model with different email examples and display predictions"
    },
    {
      id: 3,
      title: "Simple Movie Recommendation System",
      level: "Beginner",
      description: "Build a basic recommendation system that suggests movies based on user preferences.",
      steps: [
        "Use a simple movie ratings dataset",
        "Calculate similarity between users or movies",
        "Create basic collaborative filtering recommendations",
        "Test recommendations for sample users",
        "Display recommended movies with rating predictions"
      ],
      tools: "Python, pandas, Simple similarity calculations, Collaborative filtering",
      expectedOutput: "A movie recommendation system that suggests movies for users",
      videoDemo: "Show getting recommendations for different users and explain the suggestions"
    },
    {
      id: 4,
      title: "Simple Stock Price Trend Analyzer",
      level: "Beginner",
      description: "Create a model to analyze and predict simple stock price trends.",
      steps: [
        "Get historical stock price data (using free APIs or CSV)",
        "Calculate simple moving averages and basic indicators",
        "Identify upward and downward trends",
        "Create simple buy/sell signals based on trends",
        "Visualize price trends and predictions"
      ],
      tools: "Python, pandas, matplotlib, Simple trend analysis, Financial data",
      expectedOutput: "A stock trend analyzer with buy/sell signals and visualizations",
      videoDemo: "Show stock price analysis, trend identification, and trading signals"
    },
    {
      id: 5,
      title: "Simple Customer Segmentation",
      level: "Beginner",
      description: "Group customers into different categories based on their shopping behavior.",
      steps: [
        "Use customer purchase data (amount spent, frequency, recency)",
        "Calculate simple customer metrics and scores",
        "Group customers using basic clustering (K-means)",
        "Identify customer segments (high value, regular, occasional)",
        "Create customer profiles for each segment"
      ],
      tools: "Python, scikit-learn, Customer data analysis, Basic clustering",
      expectedOutput: "Customer segments with clear profiles and characteristics",
      videoDemo: "Show different customer segments and explain their shopping patterns"
    },
    {
      id: 6,
      title: "Simple Image Classification",
      level: "Beginner",
      description: "Build a basic image classifier to recognize simple objects or animals.",
      steps: [
        "Use a simple image dataset (cats vs dogs, or fruit images)",
        "Load and preprocess images (resize, normalize)",
        "Extract basic image features or use pre-trained models",
        "Train a simple classification model",
        "Test with new images and show predictions with confidence"
      ],
      tools: "Python, scikit-learn or simple CNN, Image processing basics",
      expectedOutput: "An image classifier that can identify objects with confidence scores",
      videoDemo: "Test the classifier with different images and show prediction results"
    },
    {
      id: 7,
      title: "Simple Sales Forecast Model",
      level: "Beginner",
      description: "Create a model to predict future sales based on historical data.",
      steps: [
        "Use historical sales data with dates and sales amounts",
        "Identify sales patterns and trends over time",
        "Create simple time-based features (month, season, holidays)",
        "Train a basic regression model for sales prediction",
        "Generate future sales forecasts with visualizations"
      ],
      tools: "Python, Time series basics, Linear regression, Sales forecasting",
      expectedOutput: "A sales forecasting model with future predictions and charts",
      videoDemo: "Show historical sales analysis and future sales predictions with charts"
    },
    {
      id: 8,
      title: "Simple Sentiment Analysis Tool",
      level: "Beginner",
      description: "Build a tool to analyze whether text reviews or comments are positive or negative.",
      steps: [
        "Use a dataset of movie or product reviews with ratings",
        "Clean and preprocess text data (remove punctuation, lowercase)",
        "Convert text to simple numerical features",
        "Train a basic sentiment classification model",
        "Test with new reviews and show positive/negative predictions"
      ],
      tools: "Python, Text processing, Sentiment classification, scikit-learn",
      expectedOutput: "A sentiment analyzer that classifies text as positive or negative",
      videoDemo: "Test sentiment analysis on different reviews and show prediction results"
    },
    {
      id: 9,
      title: "Simple Health Risk Predictor",
      level: "Beginner",
      description: "Create a basic health risk assessment model using simple health indicators.",
      steps: [
        "Use health data with basic indicators (age, BMI, exercise, smoking)",
        "Clean and prepare health data for analysis",
        "Train a simple model to predict health risk levels",
        "Create risk categories (low, medium, high risk)",
        "Build a simple health risk calculator for new inputs"
      ],
      tools: "Python, Health data analysis, Basic classification, Risk assessment",
      expectedOutput: "A health risk predictor with risk categories and recommendations",
      videoDemo: "Show risk assessment for different health profiles and display recommendations"
    },
    {
      id: 10,
      title: "Complete ML Dashboard Project",
      level: "Beginner",
      description: "Build a comprehensive machine learning dashboard combining multiple simple models.",
      steps: [
        "Choose 3-4 simple ML models from previous tasks",
        "Create a user-friendly interface to interact with models",
        "Combine predictions from multiple models in one dashboard",
        "Add data upload functionality for users to test with their data",
        "Include simple visualizations and explanations for each prediction",
        "Deploy the dashboard using simple tools (Streamlit or Flask)",
        "Create user guide and documentation"
      ],
      tools: "Python, Streamlit/Flask, Multiple ML models, Web interface, Data visualization",
      expectedOutput: "A complete ML dashboard with multiple models and user interface",
      videoDemo: "Give complete tour of dashboard showing all models working, user interactions, and explain how each prediction is made"
    }
  ];

  const prerequisites = [
    "Basic understanding of Python programming",
    "Familiarity with simple mathematics and statistics",
    "Understanding of basic data concepts (spreadsheets, databases)",
    "Interest in data analysis and pattern recognition"
  ];

  const learningObjectives = [
    "Learn fundamental machine learning concepts and terminology",
    "Master basic data preparation and cleaning techniques",
    "Understand different types of ML problems (classification, regression)",
    "Develop skills in model training and evaluation",
    "Learn to interpret and present ML results",
    "Build practical ML applications for real-world problems"
  ];

  const getLevelColor = (level) => {
    switch (level) {
      case 'Beginner': return 'bg-pink-100 text-pink-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen">
      <br></br>
      {/* Mobile-Friendly Enhanced Header */}
      <section className="pt-16 pb-12 sm:pt-20 sm:pb-20 bg-gradient-to-br from-pink-50 to-purple-50 relative overflow-hidden">
        {/* 3D Background Elements - Reduced on mobile */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 left-5 w-32 h-32 sm:top-20 sm:left-10 sm:w-64 sm:h-64 bg-gradient-to-r from-pink-300 to-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-blob animate-morph"></div>
          <div className="absolute top-20 right-5 w-40 h-40 sm:top-40 sm:right-10 sm:w-72 sm:h-72 bg-gradient-to-r from-purple-300 to-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-blob animation-delay-2000 animate-morph"></div>
          <div className="absolute bottom-5 left-1/3 w-24 h-24 sm:bottom-10 sm:w-48 sm:h-48 bg-gradient-to-r from-indigo-300 to-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-blob animation-delay-4000"></div>
        </div>

        {/* Floating 3D Elements - Hidden on small mobile */}
        <div className="hidden sm:block absolute top-1/4 left-1/5 w-6 h-6 bg-gradient-to-r from-pink-500 to-purple-400 rounded-full animate-float shadow-lg"></div>
        <div className="hidden sm:block absolute top-2/3 right-1/4 w-8 h-8 bg-gradient-to-r from-purple-500 to-indigo-400 rounded-lg animate-pulse shadow-xl transform rotate-45"></div>
        <div className="hidden sm:block absolute top-1/2 right-1/5 w-4 h-4 bg-gradient-to-r from-indigo-500 to-pink-400 rounded-full animate-bounce shadow-md"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Mobile-Responsive Header - Fixed text wrapping */}
          <div className="flex flex-col sm:flex-row sm:items-center mb-6 sm:mb-8">
            <div className="flex items-center mb-4 sm:mb-0 sm:mr-4">
              <div className="p-2 sm:p-3 rounded-xl bg-gradient-to-r from-pink-50 to-purple-50 mr-3 sm:mr-4 hover:scale-110 transition-transform duration-300">
                <Zap className="w-8 h-8 sm:w-12 sm:h-12 text-pink-600" />
              </div>
              <div className="flex-1">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
                  Machine Learning
                </h1>
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent leading-tight">
                  Internship
                </div>
              </div>
            </div>
          </div>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-6">Create predictive models and ML algorithms</p>

          {/* Mobile-Friendly Professional Instructions */}
          <div className="glass-morphism rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 border border-pink-200 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-16 h-16 sm:w-32 sm:h-32 bg-gradient-to-br from-pink-400/10 to-purple-400/10 rounded-bl-full"></div>
            <div className="absolute bottom-0 left-0 w-12 h-12 sm:w-24 sm:h-24 bg-gradient-to-tr from-purple-400/10 to-pink-400/10 rounded-tr-full"></div>
            
            <div className="relative z-10">
              <div className="flex flex-col sm:flex-row sm:items-center mb-4 sm:mb-6">
                <div className="p-2 sm:p-3 rounded-xl bg-gradient-to-r from-pink-500 to-purple-500 text-white mr-0 sm:mr-4 mb-3 sm:mb-0 w-fit">
                  <Users className="w-6 h-6 sm:w-8 sm:h-8" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-800">Internship Project Guidelines</h2>
              </div>

              {/* Mobile-First Grid Layout */}
              <div className="space-y-4 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-6 mb-6 sm:mb-8">
                <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-sm border border-gray-100">
                  <div className="flex items-center mb-3 sm:mb-4">
                    <div className="p-2 rounded-lg bg-pink-100 mr-3">
                      <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-pink-600" />
                    </div>
                    <h3 className="text-base sm:text-lg font-semibold text-gray-800">Task Selection</h3>
                  </div>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    Choose any <strong>2 tasks</strong> from the 10 beginner-friendly machine learning tasks provided below. Select based on your interests and learning goals.
                  </p>
                </div>

                <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-sm border border-gray-100">
                  <div className="flex items-center mb-3 sm:mb-4">
                    <div className="p-2 rounded-lg bg-purple-100 mr-3">
                      <Brain className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600" />
                    </div>
                    <h3 className="text-base sm:text-lg font-semibold text-gray-800">Model Demo</h3>
                  </div>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    Create a <strong>3-minute video</strong> or take <strong>screenshots</strong> showing your ML models working and making predictions. Upload to LinkedIn with <strong>#CosmoDigitalServices</strong>.
                  </p>
                </div>

                <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-sm border border-gray-100">
                  <div className="flex items-center mb-3 sm:mb-4">
                    <div className="p-2 rounded-lg bg-indigo-100 mr-3">
                      <Github className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-600" />
                    </div>
                    <h3 className="text-base sm:text-lg font-semibold text-gray-800">Code Repository</h3>
                  </div>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    Upload your complete ML project code and datasets to <strong>GitHub</strong> with proper documentation. Repository links will be collected through our submission portal.
                  </p>
                </div>
              </div>

              {/* Mobile-Friendly Requirements Section */}
              <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-lg sm:rounded-xl p-4 sm:p-6 border-l-4 border-pink-500">
                <h4 className="text-base sm:text-lg font-semibold text-gray-800 mb-3 flex items-center">
                  <Play className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-pink-600" />
                  Submission Requirements
                </h4>
                <div className="space-y-4 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-4 text-sm text-gray-700">
                  <div className="space-y-2">
                    <h5 className="font-medium text-gray-800 text-sm sm:text-base">Video/Screenshot Content Must Include:</h5>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 text-xs sm:text-sm">
                      <li>Model training process and accuracy results</li>
                      <li>Testing the model with new data and predictions</li>
                      <li>Explanation of how the model works and predictions</li>
                      <li>Data visualizations and performance metrics</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h5 className="font-medium text-gray-800 text-sm sm:text-base">Code Repository Must Include:</h5>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 text-xs sm:text-sm">
                      <li>Complete Python code and Jupyter notebooks</li>
                      <li>Sample datasets used for training and testing</li>
                      <li>README.md with setup and usage instructions</li>
                      <li>Clear code comments and model explanations</li>
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
          <div className="absolute top-5 right-5 w-32 h-32 sm:top-10 sm:right-10 sm:w-64 sm:h-64 bg-gradient-to-r from-pink-200 to-purple-200 rounded-full filter blur-3xl animate-float"></div>
          <div className="absolute bottom-5 left-5 w-24 h-24 sm:bottom-10 sm:left-10 sm:w-48 sm:h-48 bg-gradient-to-r from-purple-200 to-indigo-200 rounded-full filter blur-2xl animate-float animation-delay-2000"></div>
        </div>

        {/* Mobile-First Layout */}
        <div className="space-y-8 lg:space-y-0 lg:flex lg:flex-row lg:gap-8 relative z-10">
          
          {/* Mobile-First Sidebar */}
          <div className="w-full lg:w-1/3 lg:order-2">
            <div className="space-y-4 sm:space-y-6">
              {/* Learning Objectives */}
              <div className="group glass-morphism rounded-xl p-4 sm:p-6 card-3d-hover relative overflow-hidden">
                <div className="absolute top-0 right-0 w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-pink-400/20 to-purple-400/20 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4 relative z-10">Learning Objectives</h3>
                <ul className="space-y-2 sm:space-y-3 relative z-10">
                  {learningObjectives.map((objective, index) => (
                    <li key={index} className="flex items-start group-hover:translate-x-1 transition-transform duration-300" style={{ transitionDelay: `${index * 50}ms` }}>
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-pink-500 mr-2 sm:mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600 text-xs sm:text-sm leading-relaxed">{objective}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Prerequisites */}
              <div className="group glass-morphism rounded-xl p-4 sm:p-6 card-3d-hover relative overflow-hidden animation-delay-500">
                <div className="absolute top-0 right-0 w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-purple-400/20 to-indigo-400/20 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4 relative z-10">Prerequisites</h3>
                <ul className="space-y-2 sm:space-y-3 relative z-10">
                  {prerequisites.map((prerequisite, index) => (
                    <li key={index} className="flex items-start group-hover:translate-x-1 transition-transform duration-300" style={{ transitionDelay: `${index * 50}ms` }}>
                      <Code className="w-4 h-4 sm:w-5 sm:h-5 text-purple-500 mr-2 sm:mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600 text-xs sm:text-sm leading-relaxed">{prerequisite}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Duration Options */}
              <div className="group glass-morphism rounded-xl p-4 sm:p-6 card-3d-hover relative overflow-hidden animation-delay-1000">
                <div className="absolute top-0 right-0 w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-indigo-400/20 to-pink-400/20 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4 relative z-10">Duration Options</h3>
                <div className="space-y-3 relative z-10">
                  <div className="flex items-center justify-between p-3 bg-gradient-to-r from-pink-50 to-purple-50 rounded-lg hover:from-pink-100 hover:to-purple-100 transition-colors duration-300">
                    <span className="font-medium text-pink-700 text-sm sm:text-base">4 Weeks</span>
                    <span className="text-pink-600 text-xs sm:text-sm">Intensive Track</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gradient-to-r from-purple-50 to-indigo-50 rounded-lg hover:from-purple-100 hover:to-indigo-100 transition-colors duration-300">
                    <span className="font-medium text-purple-700 text-sm sm:text-base">8 Weeks</span>
                    <span className="text-purple-600 text-xs sm:text-sm">Comprehensive Track</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile-First Main Content */}
          <div className="w-full lg:w-2/3 lg:order-1">
            <div className="glass-morphism rounded-xl p-4 sm:p-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-16 h-16 sm:w-32 sm:h-32 bg-gradient-to-br from-pink-400/10 to-purple-400/10 rounded-bl-full"></div>
              
              <div className="relative z-10">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6">
                  Machine Learning <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">Project Tasks</span>
                </h2>
                
                <div className="space-y-4 sm:space-y-6">
                  {tasks.map((task, index) => (
                    <div 
                      key={task.id} 
                      className="group glass-morphism border border-gray-200 rounded-xl p-4 sm:p-6 card-3d-hover relative overflow-hidden"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      {/* 3D Glow Effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                      
                      <div className="relative z-10">
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3 sm:mb-4">
                          <div className="flex-1">
                            <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-2">
                              <span className="text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-pink-600 to-purple-600 px-2 sm:px-3 py-1 rounded-full">
                                Task {task.id}
                              </span>
                              <span className={`text-xs font-medium px-2 py-1 rounded-full ${getLevelColor(task.level)}`}>
                                {task.level}
                              </span>
                            </div>
                            <h3 className="text-base sm:text-lg font-semibold text-gray-800 group-hover:text-pink-600 transition-colors duration-300 leading-tight">
                              {task.title}
                            </h3>
                          </div>
                        </div>
                        
                        <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 leading-relaxed">{task.description}</p>
                        
                        <div className="mb-3 sm:mb-4">
                          <h4 className="font-medium text-gray-800 mb-2 flex items-center text-sm sm:text-base">
                            <span className="w-2 h-2 bg-gradient-to-r from-pink-600 to-purple-600 rounded-full mr-2"></span>
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
                            <Code className="w-3 h-3 sm:w-4 sm:h-4 mr-2 text-purple-600" />
                            Required Tools:
                          </h4>
                          <p className="text-gray-600 text-xs sm:text-sm bg-gray-50 p-2 rounded-lg leading-relaxed">{task.tools}</p>
                        </div>

                        <div className="mb-3 sm:mb-4">
                          <h4 className="font-medium text-gray-800 mb-2 flex items-center text-sm sm:text-base">
                            <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 mr-2 text-pink-600" />
                            Expected Deliverable:
                          </h4>
                          <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">{task.expectedOutput}</p>
                        </div>
                        
                        <div className="bg-gradient-to-r from-pink-50 to-purple-50 p-3 sm:p-4 rounded-lg border border-pink-200">
                          <h4 className="font-medium text-pink-800 mb-2 flex items-center text-sm sm:text-base">
                            <Brain className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                            Model Demo Requirements:
                          </h4>
                          <p className="text-pink-700 text-xs sm:text-sm mb-2 leading-relaxed">{task.videoDemo}</p>
                          <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs text-pink-600">
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

export default MachineLearning;
