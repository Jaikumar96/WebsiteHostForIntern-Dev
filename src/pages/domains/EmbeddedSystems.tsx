import React from 'react';
import { ArrowLeft, CheckCircle, Cpu, Code, Globe, Play, Github, Video, Upload, Users, Monitor, Settings, Zap, Wifi } from 'lucide-react';
import { Link } from 'react-router-dom';

const EmbeddedSystems = () => {
  const tasks = [
    {
      id: 1,
      title: "Simple LED Control Project",
      level: "Beginner",
      description: "Create a basic LED control system with buttons and different blinking patterns.",
      steps: [
        "Set up Arduino IDE and connect Arduino board to computer",
        "Write program to blink an LED at different speeds",
        "Add push buttons to control LED patterns",
        "Create multiple blinking patterns (fast, slow, fade)",
        "Add serial monitor output to display current pattern"
      ],
      tools: "Arduino IDE, Arduino Board, LEDs, Push Buttons, Resistors",
      expectedOutput: "An LED control system with multiple patterns controlled by buttons",
      videoDemo: "Show different LED patterns, button controls, and serial monitor output"
    },
    {
      id: 2,
      title: "Simple Temperature Monitor",
      level: "Beginner", 
      description: "Build a temperature monitoring system with visual and serial output.",
      steps: [
        "Connect a temperature sensor (LM35 or DHT11) to Arduino",
        "Write code to read temperature values",
        "Display temperature on serial monitor",
        "Add LEDs to show temperature ranges (cold, normal, hot)",
        "Create simple temperature logging to memory"
      ],
      tools: "Arduino, Temperature Sensor, LEDs, Serial Communication",
      expectedOutput: "A temperature monitor with LED indicators and serial data logging",
      videoDemo: "Demonstrate temperature readings, LED indicators changing with temperature"
    },
    {
      id: 3,
      title: "Basic Motor Control System",
      level: "Beginner",
      description: "Create a simple motor control system with speed and direction control.",
      steps: [
        "Connect a DC motor with motor driver to Arduino",
        "Write code to control motor speed using PWM",
        "Add buttons to control motor direction (forward/reverse)",
        "Implement motor start/stop functionality",
        "Add speed control using potentiometer or buttons"
      ],
      tools: "Arduino, DC Motor, Motor Driver, Potentiometer, Push Buttons",
      expectedOutput: "A motor control system with speed and direction control",
      videoDemo: "Show motor running at different speeds and changing directions"
    },
    {
      id: 4,
      title: "Simple Buzzer Alarm System",
      level: "Beginner",
      description: "Build a basic alarm system with different sound patterns and triggers.",
      steps: [
        "Connect buzzer and sensors (light sensor or motion sensor) to Arduino",
        "Program different alarm tones and patterns",
        "Add sensor-triggered alarms",
        "Create manual alarm activation with buttons",
        "Add LED indicators for alarm status"
      ],
      tools: "Arduino, Buzzer, Light/Motion Sensor, LEDs, Push Buttons",
      expectedOutput: "An alarm system with multiple tones and sensor triggers",
      videoDemo: "Trigger alarms with sensors and buttons, show different sound patterns"
    },
    {
      id: 5,
      title: "Basic LCD Display System",
      level: "Beginner",
      description: "Create a simple information display system using LCD screen.",
      steps: [
        "Connect LCD display (16x2) to Arduino",
        "Write code to display text and numbers on LCD",
        "Add sensors to display real-time data",
        "Create menu system using buttons",
        "Display time counter or simple clock"
      ],
      tools: "Arduino, LCD Display, Sensors, Push Buttons, Connecting Wires",
      expectedOutput: "An LCD-based display system with menu and sensor data",
      videoDemo: "Show LCD displaying different information and menu navigation"
    },
    {
      id: 6,
      title: "Simple Light Control System",
      level: "Beginner",
      description: "Build an automated light control system based on ambient light levels.",
      steps: [
        "Connect light sensor (LDR) and relay module to Arduino",
        "Write code to read light levels",
        "Control external lights based on darkness/brightness",
        "Add manual override switches",
        "Create adjustable light threshold settings"
      ],
      tools: "Arduino, Light Sensor (LDR), Relay Module, External Lights, Switches",
      expectedOutput: "An automatic light control system with manual override",
      videoDemo: "Show lights turning on/off based on light levels and manual controls"
    },
    {
      id: 7,
      title: "Basic Servo Control Project",
      level: "Beginner",
      description: "Create a servo motor control system for simple automation tasks.",
      steps: [
        "Connect servo motor to Arduino",
        "Write code to control servo position",
        "Add buttons for different servo positions",
        "Create automatic sweeping motion",
        "Build simple robotic arm movement"
      ],
      tools: "Arduino, Servo Motor, Push Buttons, Mechanical Components",
      expectedOutput: "A servo control system with preset positions and automatic movement",
      videoDemo: "Show servo moving to different positions and automatic sweeping"
    },
    {
      id: 8,
      title: "Simple Data Logger System",
      level: "Beginner",
      description: "Build a basic data logging system to record sensor readings.",
      steps: [
        "Connect multiple sensors (temperature, light, etc.) to Arduino",
        "Write code to read and store sensor data",
        "Add timestamp functionality using millis()",
        "Save data to EEPROM or SD card (if available)",
        "Create data retrieval and display system"
      ],
      tools: "Arduino, Multiple Sensors, EEPROM/SD Card Module, Serial Monitor",
      expectedOutput: "A data logging system that records and displays sensor readings",
      videoDemo: "Show data being logged, retrieved, and displayed over time"
    },
    {
      id: 9,
      title: "Basic Bluetooth Control System",
      level: "Beginner",
      description: "Create a simple Bluetooth-controlled device using smartphone.",
      steps: [
        "Connect Bluetooth module (HC-05) to Arduino",
        "Write code to receive Bluetooth commands",
        "Control LEDs and motors via Bluetooth",
        "Use smartphone app to send commands",
        "Add feedback messages to smartphone"
      ],
      tools: "Arduino, Bluetooth Module, LEDs, Motors, Smartphone App",
      expectedOutput: "A Bluetooth-controlled system with smartphone interface",
      videoDemo: "Show controlling Arduino devices via smartphone Bluetooth app"
    },
    {
      id: 10,
      title: "Complete Home Automation Project",
      level: "Beginner",
      description: "Build a comprehensive home automation system combining multiple features.",
      steps: [
        "Combine previous projects into one home automation system",
        "Include temperature monitoring, light control, and motor control",
        "Add Bluetooth control for remote operation",
        "Create LCD display showing all system status",
        "Add manual controls and automatic modes",
        "Include data logging for all sensors",
        "Create simple alarm and notification system"
      ],
      tools: "Arduino, Multiple Sensors, Motors, LCD, Bluetooth, LEDs, Switches",
      expectedOutput: "A complete home automation system with multiple integrated features",
      videoDemo: "Demonstrate all features working together - sensors, controls, display, and smartphone connectivity"
    }
  ];

  const prerequisites = [
    "Basic understanding of electronics and circuits",
    "Familiarity with simple programming concepts",
    "Understanding of how to use basic tools and components",
    "Interest in hardware and hands-on projects"
  ];

  const learningObjectives = [
    "Learn fundamental embedded systems programming",
    "Master Arduino development and sensor integration",
    "Understand basic electronic circuits and components",
    "Develop skills in hardware-software interfacing",
    "Build practical IoT and automation projects",
    "Learn debugging and testing embedded systems"
  ];

  const getLevelColor = (level) => {
    switch (level) {
      case 'Beginner': return 'bg-slate-100 text-slate-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen">
      <br></br>
      {/* Mobile-Friendly Enhanced Header */}
      <section className="pt-16 pb-12 sm:pt-20 sm:pb-20 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
        {/* 3D Background Elements - Reduced on mobile */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 left-5 w-32 h-32 sm:top-20 sm:left-10 sm:w-64 sm:h-64 bg-gradient-to-r from-slate-300 to-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-blob animate-morph"></div>
          <div className="absolute top-20 right-5 w-40 h-40 sm:top-40 sm:right-10 sm:w-72 sm:h-72 bg-gradient-to-r from-blue-300 to-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-blob animation-delay-2000 animate-morph"></div>
          <div className="absolute bottom-5 left-1/3 w-24 h-24 sm:bottom-10 sm:w-48 sm:h-48 bg-gradient-to-r from-indigo-300 to-slate-300 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-blob animation-delay-4000"></div>
        </div>

        {/* Floating 3D Elements - Hidden on small mobile */}
        <div className="hidden sm:block absolute top-1/4 left-1/5 w-6 h-6 bg-gradient-to-r from-slate-500 to-blue-400 rounded-full animate-float shadow-lg"></div>
        <div className="hidden sm:block absolute top-2/3 right-1/4 w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-400 rounded-lg animate-pulse shadow-xl transform rotate-45"></div>
        <div className="hidden sm:block absolute top-1/2 right-1/5 w-4 h-4 bg-gradient-to-r from-indigo-500 to-slate-400 rounded-full animate-bounce shadow-md"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Mobile-Responsive Header - Fixed text wrapping */}
          <div className="flex flex-col sm:flex-row sm:items-center mb-6 sm:mb-8">
            <div className="flex items-center mb-4 sm:mb-0 sm:mr-4">
              <div className="p-2 sm:p-3 rounded-xl bg-gradient-to-r from-slate-50 to-blue-50 mr-3 sm:mr-4 hover:scale-110 transition-transform duration-300">
                <Cpu className="w-8 h-8 sm:w-12 sm:h-12 text-slate-600" />
              </div>
              <div className="flex-1">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
                  Embedded Systems
                </h1>
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-slate-600 to-blue-600 bg-clip-text text-transparent leading-tight">
                  Internship
                </div>
              </div>
            </div>
          </div>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-6">Work with hardware and embedded programming basics</p>

          {/* Mobile-Friendly Professional Instructions */}
          <div className="glass-morphism rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 border border-slate-200 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-16 h-16 sm:w-32 sm:h-32 bg-gradient-to-br from-slate-400/10 to-blue-400/10 rounded-bl-full"></div>
            <div className="absolute bottom-0 left-0 w-12 h-12 sm:w-24 sm:h-24 bg-gradient-to-tr from-blue-400/10 to-slate-400/10 rounded-tr-full"></div>
            
            <div className="relative z-10">
              <div className="flex flex-col sm:flex-row sm:items-center mb-4 sm:mb-6">
                <div className="p-2 sm:p-3 rounded-xl bg-gradient-to-r from-slate-500 to-blue-500 text-white mr-0 sm:mr-4 mb-3 sm:mb-0 w-fit">
                  <Users className="w-6 h-6 sm:w-8 sm:h-8" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-800">Internship Project Guidelines</h2>
              </div>

              {/* Mobile-First Grid Layout */}
              <div className="space-y-4 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-6 mb-6 sm:mb-8">
                <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-sm border border-gray-100">
                  <div className="flex items-center mb-3 sm:mb-4">
                    <div className="p-2 rounded-lg bg-slate-100 mr-3">
                      <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-slate-600" />
                    </div>
                    <h3 className="text-base sm:text-lg font-semibold text-gray-800">Task Selection</h3>
                  </div>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    Choose any <strong>2 tasks</strong> from the 10 beginner-friendly embedded systems tasks provided below. Select based on your interests and available components.
                  </p>
                </div>

                <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-sm border border-gray-100">
                  <div className="flex items-center mb-3 sm:mb-4">
                    <div className="p-2 rounded-lg bg-blue-100 mr-3">
                      <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
                    </div>
                    <h3 className="text-base sm:text-lg font-semibold text-gray-800">Hardware Demo</h3>
                  </div>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    Create a <strong>3-minute video</strong> or take <strong>screenshots</strong> showing your hardware project working. Upload to LinkedIn with <strong>#CosmoDigitalServices</strong>.
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
                    Upload your complete Arduino code and circuit diagrams to <strong>GitHub</strong> with proper documentation. Repository links will be collected through our submission portal.
                  </p>
                </div>
              </div>

              {/* Mobile-Friendly Requirements Section */}
              <div className="bg-gradient-to-r from-slate-50 to-blue-50 rounded-lg sm:rounded-xl p-4 sm:p-6 border-l-4 border-slate-500">
                <h4 className="text-base sm:text-lg font-semibold text-gray-800 mb-3 flex items-center">
                  <Play className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-slate-600" />
                  Submission Requirements
                </h4>
                <div className="space-y-4 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-4 text-sm text-gray-700">
                  <div className="space-y-2">
                    <h5 className="font-medium text-gray-800 text-sm sm:text-base">Video/Screenshot Content Must Include:</h5>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 text-xs sm:text-sm">
                      <li>Hardware setup and component connections</li>
                      <li>Complete project functionality demonstration</li>
                      <li>Code explanation and key features</li>
                      <li>Testing different inputs and outputs</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h5 className="font-medium text-gray-800 text-sm sm:text-base">Code Repository Must Include:</h5>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 text-xs sm:text-sm">
                      <li>Complete Arduino sketch (.ino files)</li>
                      <li>Circuit diagrams and component lists</li>
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
          <div className="absolute top-5 right-5 w-32 h-32 sm:top-10 sm:right-10 sm:w-64 sm:h-64 bg-gradient-to-r from-slate-200 to-blue-200 rounded-full filter blur-3xl animate-float"></div>
          <div className="absolute bottom-5 left-5 w-24 h-24 sm:bottom-10 sm:left-10 sm:w-48 sm:h-48 bg-gradient-to-r from-blue-200 to-indigo-200 rounded-full filter blur-2xl animate-float animation-delay-2000"></div>
        </div>

        {/* Mobile-First Layout */}
        <div className="space-y-8 lg:space-y-0 lg:flex lg:flex-row lg:gap-8 relative z-10">
          
          {/* Mobile-First Sidebar */}
          <div className="w-full lg:w-1/3 lg:order-2">
            <div className="space-y-4 sm:space-y-6">
              {/* Learning Objectives */}
              <div className="group glass-morphism rounded-xl p-4 sm:p-6 card-3d-hover relative overflow-hidden">
                <div className="absolute top-0 right-0 w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-slate-400/20 to-blue-400/20 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4 relative z-10">Learning Objectives</h3>
                <ul className="space-y-2 sm:space-y-3 relative z-10">
                  {learningObjectives.map((objective, index) => (
                    <li key={index} className="flex items-start group-hover:translate-x-1 transition-transform duration-300" style={{ transitionDelay: `${index * 50}ms` }}>
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-slate-500 mr-2 sm:mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600 text-xs sm:text-sm leading-relaxed">{objective}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Prerequisites */}
              <div className="group glass-morphism rounded-xl p-4 sm:p-6 card-3d-hover relative overflow-hidden animation-delay-500">
                <div className="absolute top-0 right-0 w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-blue-400/20 to-indigo-400/20 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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
                <div className="absolute top-0 right-0 w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-indigo-400/20 to-slate-400/20 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4 relative z-10">Duration Options</h3>
                <div className="space-y-3 relative z-10">
                  <div className="flex items-center justify-between p-3 bg-gradient-to-r from-slate-50 to-blue-50 rounded-lg hover:from-slate-100 hover:to-blue-100 transition-colors duration-300">
                    <span className="font-medium text-slate-700 text-sm sm:text-base">4 Weeks</span>
                    <span className="text-slate-600 text-xs sm:text-sm">Intensive Track</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg hover:from-blue-100 hover:to-indigo-100 transition-colors duration-300">
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
              <div className="absolute top-0 right-0 w-16 h-16 sm:w-32 sm:h-32 bg-gradient-to-br from-slate-400/10 to-blue-400/10 rounded-bl-full"></div>
              
              <div className="relative z-10">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6">
                  Embedded Systems <span className="bg-gradient-to-r from-slate-600 to-blue-600 bg-clip-text text-transparent">Project Tasks</span>
                </h2>
                
                <div className="space-y-4 sm:space-y-6">
                  {tasks.map((task, index) => (
                    <div 
                      key={task.id} 
                      className="group glass-morphism border border-gray-200 rounded-xl p-4 sm:p-6 card-3d-hover relative overflow-hidden"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      {/* 3D Glow Effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-slate-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                      
                      <div className="relative z-10">
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3 sm:mb-4">
                          <div className="flex-1">
                            <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-2">
                              <span className="text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-slate-600 to-blue-600 px-2 sm:px-3 py-1 rounded-full">
                                Task {task.id}
                              </span>
                              <span className={`text-xs font-medium px-2 py-1 rounded-full ${getLevelColor(task.level)}`}>
                                {task.level}
                              </span>
                            </div>
                            <h3 className="text-base sm:text-lg font-semibold text-gray-800 group-hover:text-slate-600 transition-colors duration-300 leading-tight">
                              {task.title}
                            </h3>
                          </div>
                        </div>
                        
                        <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 leading-relaxed">{task.description}</p>
                        
                        <div className="mb-3 sm:mb-4">
                          <h4 className="font-medium text-gray-800 mb-2 flex items-center text-sm sm:text-base">
                            <span className="w-2 h-2 bg-gradient-to-r from-slate-600 to-blue-600 rounded-full mr-2"></span>
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
                            Required Components:
                          </h4>
                          <p className="text-gray-600 text-xs sm:text-sm bg-gray-50 p-2 rounded-lg leading-relaxed">{task.tools}</p>
                        </div>

                        <div className="mb-3 sm:mb-4">
                          <h4 className="font-medium text-gray-800 mb-2 flex items-center text-sm sm:text-base">
                            <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 mr-2 text-slate-600" />
                            Expected Deliverable:
                          </h4>
                          <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">{task.expectedOutput}</p>
                        </div>
                        
                        <div className="bg-gradient-to-r from-slate-50 to-blue-50 p-3 sm:p-4 rounded-lg border border-slate-200">
                          <h4 className="font-medium text-slate-800 mb-2 flex items-center text-sm sm:text-base">
                            <Zap className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                            Hardware Demo Requirements:
                          </h4>
                          <p className="text-slate-700 text-xs sm:text-sm mb-2 leading-relaxed">{task.videoDemo}</p>
                          <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs text-slate-600">
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

export default EmbeddedSystems;
