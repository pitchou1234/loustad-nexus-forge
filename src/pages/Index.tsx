
import React, { useEffect, useState, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowRight, Brain, Dna, Scale, TrendingUp, Zap, ExternalLink, Network, Cpu, Database } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const { toast } = useToast();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLDivElement>(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Neural Link Established",
      description: "Your request has been processed. Our cognitive team will respond within 72 hours.",
    });
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      {/* Advanced Neural Network Background */}
      <div className="fixed inset-0 z-0">
        {/* Main Neural Grid */}
        <div className="absolute inset-0 opacity-20">
          <svg width="100%" height="100%" className="absolute inset-0">
            <defs>
              <pattern id="neural-grid" width="60" height="60" patternUnits="userSpaceOnUse">
                <circle cx="30" cy="30" r="1" fill="#00E5FF" opacity="0.5">
                  <animate attributeName="opacity" values="0.5;1;0.5" dur="3s" repeatCount="indefinite" />
                </circle>
                <circle cx="0" cy="0" r="0.5" fill="#00BCD4" opacity="0.3" />
                <circle cx="60" cy="0" r="0.5" fill="#00BCD4" opacity="0.3" />
                <circle cx="0" cy="60" r="0.5" fill="#00BCD4" opacity="0.3" />
                <circle cx="60" cy="60" r="0.5" fill="#00BCD4" opacity="0.3" />
              </pattern>
              <linearGradient id="neural-glow" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#00E5FF" stopOpacity="0.8" />
                <stop offset="50%" stopColor="#00BCD4" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#004D5B" stopOpacity="0.2" />
              </linearGradient>
            </defs>
            <rect width="100%" height="100%" fill="url(#neural-grid)" />
          </svg>
        </div>

        {/* Dynamic Connection Lines */}
        <div className="absolute inset-0">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="absolute h-px bg-gradient-to-r from-transparent via-turquoise-400 to-transparent opacity-30"
              style={{
                top: `${15 + i * 12}%`,
                left: '0%',
                width: '100%',
                animation: `data-stream ${8 + i * 2}s linear infinite`,
                animationDelay: `${i * 0.5}s`
              }}
            />
          ))}
        </div>

        {/* Floating Neural Nodes */}
        {Array.from({ length: 25 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-turquoise-400 opacity-60"
            style={{
              left: `${5 + (i * 7) % 90}%`,
              top: `${10 + (i * 11) % 80}%`,
              animation: `float ${6 + (i % 3)}s ease-in-out infinite`,
              animationDelay: `${i * 0.2}s`,
              filter: 'blur(0.5px)',
              boxShadow: '0 0 20px rgba(0, 229, 255, 0.6)'
            }}
          />
        ))}

        {/* Interactive Mouse Follower */}
        <div
          className="absolute w-96 h-96 rounded-full pointer-events-none transition-all duration-1000 ease-out"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
            background: 'radial-gradient(circle, rgba(0, 229, 255, 0.1) 0%, rgba(0, 188, 212, 0.05) 50%, transparent 70%)',
            transform: `scale(${0.8 + Math.sin(Date.now() * 0.001) * 0.2})`,
          }}
        />
      </div>

      {/* Hero Section - Enhanced */}
      <section ref={heroRef} className="relative z-10 min-h-screen flex items-center justify-center px-6">
        <div className="max-w-7xl mx-auto text-center">
          {/* Logo/Brand Animation */}
          <div className="mb-12 relative">
            <div className="inline-flex items-center gap-4 mb-8">
              <div className="relative">
                <Network className="w-8 h-8 text-turquoise-400 animate-pulse" />
                <div className="absolute inset-0 animate-ping">
                  <Network className="w-8 h-8 text-turquoise-400 opacity-30" />
                </div>
              </div>
              <div className="h-8 w-px bg-gradient-to-b from-transparent via-turquoise-400 to-transparent"></div>
              <Cpu className="w-7 h-7 text-turquoise-300 animate-bounce" style={{ animationDelay: '0.5s' }} />
              <div className="h-7 w-px bg-gradient-to-b from-transparent via-turquoise-300 to-transparent"></div>
              <Database className="w-6 h-6 text-turquoise-200 animate-pulse" style={{ animationDelay: '1s' }} />
            </div>
            
            <h1 className="text-4xl md:text-6xl font-black mb-6 leading-none">
              <span className="block gradient-text tracking-tight">LOUSTAD</span>
              <span className="block text-2xl md:text-3xl font-light text-turquoise-400 tracking-[0.2em] mt-2">R&D</span>
            </h1>
          </div>

          {/* Enhanced Taglines */}
          <div className="space-y-6 mb-16">
            <p className="text-lg md:text-2xl font-light text-white/90 leading-relaxed">
              The <span className="text-turquoise-400 font-medium">brain</span> behind custom intelligent systems.
            </p>
            <div className="flex flex-wrap justify-center gap-2 text-sm md:text-base text-gray-300">
              {['Law', 'Energy', 'Biology', 'Strategy', 'Finance', 'Health'].map((sector, index) => (
                <span key={sector} className="px-3 py-1 border border-turquoise-400/30 rounded-full bg-turquoise-400/5 backdrop-blur-sm">
                  {sector}
                </span>
              ))}
            </div>
            <p className="text-base md:text-xl text-turquoise-300 font-light max-w-3xl mx-auto leading-relaxed">
              We design the intelligence you need.
            </p>
          </div>
          
          {/* Enhanced CTAs */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-turquoise-500 hover:bg-turquoise-400 text-black font-bold px-8 py-4 text-lg rounded-xl relative overflow-hidden group transition-all duration-300 hover:scale-105"
            >
              <span className="relative z-10 flex items-center">
                Explore Our Systems
                <ArrowRight className="ml-3 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-turquoise-400 to-turquoise-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-turquoise-400 text-turquoise-400 hover:bg-turquoise-400 hover:text-black font-bold px-8 py-4 text-lg rounded-xl backdrop-blur-sm bg-turquoise-400/5 transition-all duration-300 hover:scale-105 relative overflow-hidden group"
            >
              <span className="relative z-10 flex items-center">
                Design Your AI
                <Brain className="ml-3 h-5 w-5 transition-transform group-hover:rotate-12" />
              </span>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Section - Redesigned */}
      <section className="relative z-10 py-32 px-6 bg-gradient-to-b from-transparent to-gray-900/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold mb-12 gradient-text">
              Why Loustad R&D?
            </h2>
            <div className="max-w-4xl mx-auto space-y-8">
              <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
                We blend <span className="text-turquoise-400 font-semibold">legal engineers</span>, 
                <span className="text-turquoise-400 font-semibold"> data scientists</span>, 
                <span className="text-turquoise-400 font-semibold"> bioinformaticians</span>, and 
                <span className="text-turquoise-400 font-semibold"> business experts</span> to create intelligent systems that transcend traditional boundaries.
              </p>
              
              <div className="relative py-16">
                <div className="text-2xl md:text-3xl font-black text-center">
                  <span className="text-white">"You have a </span>
                  <span className="text-turquoise-400 animate-pulse">challenge</span>
                  <span className="text-white">.</span>
                  <br />
                  <span className="text-white">We have the </span>
                  <span className="text-turquoise-400 animate-pulse" style={{ animationDelay: '0.5s' }}>neurons</span>
                  <span className="text-white">."</span>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-turquoise-400 to-transparent"></div>
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-turquoise-400 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Systems - Premium Design */}
      <section className="relative z-10 py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-24 gradient-text">
            Featured Systems
          </h2>
          
          <div className="space-y-16">
            {/* Smart Formulator */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-turquoise-500/10 to-blue-500/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <div className="relative bg-gray-900/40 backdrop-blur-sm border border-turquoise-400/20 rounded-3xl p-12 hover:border-turquoise-400/40 transition-all duration-500 group-hover:transform group-hover:scale-[1.02]">
                <div className="flex flex-col lg:flex-row items-center gap-12">
                  <div className="flex-1 space-y-8">
                    <div className="flex items-center gap-6">
                      <div className="p-4 bg-turquoise-400/10 rounded-2xl">
                        <Dna className="h-8 w-8 text-turquoise-400" />
                      </div>
                      <div>
                        <h3 className="text-2xl md:text-3xl font-bold text-white">Smart Formulator™</h3>
                        <div className="flex gap-2 mt-2">
                          <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm">Biology</span>
                          <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">AI</span>
                          <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm">Health</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-lg text-gray-300 leading-relaxed">
                      Personalized health OS combining advanced biology, AI algorithms, and precision formulation engine 
                      to create perfectly tailored wellness solutions for individual genetic profiles.
                    </p>
                    <Button className="bg-turquoise-500 hover:bg-turquoise-400 text-black font-semibold px-6 py-3 rounded-xl transition-all duration-300 hover:scale-105">
                      See How It Works
                      <ExternalLink className="ml-3 h-4 w-4" />
                    </Button>
                  </div>
                  <div className="w-full lg:w-1/2 h-80 bg-gradient-to-br from-green-500/20 via-turquoise-400/20 to-blue-500/20 rounded-2xl relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/20"></div>
                    <div className="absolute top-8 right-8 animate-pulse">
                      <div className="w-4 h-4 bg-green-400 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Loustad Fintax */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-turquoise-500/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <div className="relative bg-gray-900/40 backdrop-blur-sm border border-turquoise-400/20 rounded-3xl p-12 hover:border-turquoise-400/40 transition-all duration-500 group-hover:transform group-hover:scale-[1.02]">
                <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
                  <div className="flex-1 space-y-8">
                    <div className="flex items-center gap-6">
                      <div className="p-4 bg-green-400/10 rounded-2xl">
                        <Scale className="h-8 w-8 text-green-400" />
                      </div>
                      <div>
                        <h3 className="text-2xl md:text-3xl font-bold text-white">Loustad Fintax™</h3>
                        <div className="flex gap-2 mt-2">
                          <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm">Legal</span>
                          <span className="px-3 py-1 bg-yellow-500/20 text-yellow-400 rounded-full text-sm">Finance</span>
                          <span className="px-3 py-1 bg-red-500/20 text-red-400 rounded-full text-sm">Morocco</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-lg text-gray-300 leading-relaxed">
                      Advanced Moroccan fiscal intelligence system with real-time Q&A capabilities, 
                      revolutionizing tax compliance and legal document processing through neural language understanding.
                    </p>
                    <Button className="bg-green-500 hover:bg-green-400 text-black font-semibold px-6 py-3 rounded-xl transition-all duration-300 hover:scale-105">
                      Try It Now
                      <Zap className="ml-3 h-4 w-4" />
                    </Button>
                  </div>
                  <div className="w-full lg:w-1/2 h-80 bg-gradient-to-br from-green-500/20 via-yellow-400/20 to-turquoise-500/20 rounded-2xl relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/20"></div>
                    <div className="absolute bottom-8 left-8 animate-bounce">
                      <div className="w-4 h-4 bg-yellow-400 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Loustad Smart IP */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-turquoise-500/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <div className="relative bg-gray-900/40 backdrop-blur-sm border border-turquoise-400/20 rounded-3xl p-12 hover:border-turquoise-400/40 transition-all duration-500 group-hover:transform group-hover:scale-[1.02]">
                <div className="flex flex-col lg:flex-row items-center gap-12">
                  <div className="flex-1 space-y-8">
                    <div className="flex items-center gap-6">
                      <div className="p-4 bg-purple-400/10 rounded-2xl">
                        <TrendingUp className="h-8 w-8 text-purple-400" />
                      </div>
                      <div>
                        <h3 className="text-2xl md:text-3xl font-bold text-white">Loustad Smart IP™</h3>
                        <div className="flex gap-2 mt-2">
                          <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm">Patents</span>
                          <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">PQAI</span>
                          <span className="px-3 py-1 bg-indigo-500/20 text-indigo-400 rounded-full text-sm">IP</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-lg text-gray-300 leading-relaxed">
                      Next-generation patent AI system built on PQAI architecture, enhanced and extended for 
                      intelligent intellectual property search, analysis, and strategic patent landscape mapping.
                    </p>
                    <Button className="bg-purple-500 hover:bg-purple-400 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300 hover:scale-105">
                      Run Smart Search
                      <Brain className="ml-3 h-4 w-4" />
                    </Button>
                  </div>
                  <div className="w-full lg:w-1/2 h-80 bg-gradient-to-br from-purple-500/20 via-indigo-400/20 to-turquoise-500/20 rounded-2xl relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/20"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-spin">
                      <div className="w-8 h-8 border-2 border-purple-400 border-t-transparent rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Build Your Own System - Enhanced */}
      <section className="relative z-10 py-32 px-6 bg-gradient-to-b from-transparent to-gray-900/40">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold mb-8 gradient-text leading-tight">
              You have a vision.<br />
              Let's build the AI to match it.
            </h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              We design and develop tailor-made AI systems that solve your specific challenges, 
              no matter how complex or unique your domain.
            </p>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-turquoise-500/10 to-blue-500/10 rounded-3xl blur-xl"></div>
            <form onSubmit={handleFormSubmit} className="relative bg-gray-900/60 backdrop-blur-sm border border-turquoise-400/30 rounded-3xl p-12 space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="block text-lg font-semibold text-turquoise-400">Name</label>
                  <Input 
                    placeholder="Your full name" 
                    className="bg-gray-800/50 border-gray-600 text-white text-lg py-6 rounded-xl focus:border-turquoise-400 transition-colors"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-lg font-semibold text-turquoise-400">Email</label>
                  <Input 
                    type="email" 
                    placeholder="your@email.com" 
                    className="bg-gray-800/50 border-gray-600 text-white text-lg py-6 rounded-xl focus:border-turquoise-400 transition-colors"
                    required
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="block text-lg font-semibold text-turquoise-400">Sector</label>
                  <Select>
                    <SelectTrigger className="bg-gray-800/50 border-gray-600 text-white text-lg py-6 rounded-xl">
                      <SelectValue placeholder="Choose your sector" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="legal">Legal & Compliance</SelectItem>
                      <SelectItem value="health">Healthcare & Biology</SelectItem>
                      <SelectItem value="finance">Finance & Banking</SelectItem>
                      <SelectItem value="energy">Energy & Sustainability</SelectItem>
                      <SelectItem value="retail">Retail & E-commerce</SelectItem>
                      <SelectItem value="mobility">Mobility & Transport</SelectItem>
                      <SelectItem value="business">Business Strategy</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <label className="block text-lg font-semibold text-turquoise-400">Timeline</label>
                  <Input 
                    placeholder="When do you need this?" 
                    className="bg-gray-800/50 border-gray-600 text-white text-lg py-6 rounded-xl focus:border-turquoise-400 transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-lg font-semibold text-turquoise-400">Project Vision</label>
                <Textarea 
                  placeholder="Describe your challenge, vision, or the intelligent system you need. Be as specific as possible about your goals and requirements..."
                  className="bg-gray-800/50 border-gray-600 text-white text-lg min-h-40 rounded-xl focus:border-turquoise-400 transition-colors resize-none"
                  required
                />
              </div>

              <Button 
                type="submit" 
                size="lg" 
                className="w-full bg-turquoise-500 hover:bg-turquoise-400 text-black font-bold py-6 text-xl rounded-xl relative overflow-hidden group transition-all duration-300 hover:scale-[1.02]"
              >
                <span className="relative z-10 flex items-center justify-center">
                  Request Custom Quote • 72h Response
                  <ArrowRight className="ml-4 h-6 w-6 transition-transform group-hover:translate-x-2" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-turquoise-400 to-turquoise-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer - Enhanced */}
      <footer className="relative z-10 py-20 px-6 border-t border-gray-800/50 bg-gradient-to-b from-transparent to-black/50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-12">
            <div className="text-center lg:text-left">
              <h3 className="text-2xl font-bold gradient-text mb-4">Loustad R&D</h3>
              <p className="text-lg text-gray-400">Building the future of intelligent systems</p>
              <div className="flex items-center gap-4 mt-4 justify-center lg:justify-start">
                <div className="w-3 h-3 bg-turquoise-400 rounded-full animate-pulse"></div>
                <span className="text-turquoise-400 font-medium">Neural networks online</span>
              </div>
            </div>
            
            <nav className="flex flex-wrap justify-center gap-8 text-lg">
              <a href="#" className="text-gray-400 hover:text-turquoise-400 transition-colors duration-300 hover:scale-105 transform">About</a>
              <a href="#" className="text-gray-400 hover:text-turquoise-400 transition-colors duration-300 hover:scale-105 transform">Systems</a>
              <a href="#" className="text-gray-400 hover:text-turquoise-400 transition-colors duration-300 hover:scale-105 transform">Research</a>
              <a href="#" className="text-gray-400 hover:text-turquoise-400 transition-colors duration-300 hover:scale-105 transform">Careers</a>
              <a href="#" className="text-gray-400 hover:text-turquoise-400 transition-colors duration-300 hover:scale-105 transform">Legal</a>
            </nav>
          </div>
          
          <div className="mt-16 pt-8 border-t border-gray-800/50 text-center">
            <p className="text-gray-500 text-lg">
              © 2025 Loustad R&D – A Loustad company • Pioneering AI since the future began
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
