
import React, { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowRight, Brain, Dna, Scale, TrendingUp, Zap, ExternalLink } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const { toast } = useToast();
  const [particles, setParticles] = useState<Array<{id: number, left: number, top: number, delay: number}>>([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 6
    }));
    setParticles(newParticles);
  }, []);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Request Submitted",
      description: "We'll get back to you within 72 hours with a custom quote.",
    });
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Neural Background Animation */}
      <div className="fixed inset-0 z-0">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="neural-particle"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
              animationDelay: `${particle.delay}s`
            }}
          />
        ))}
        {/* Data Streams */}
        <div className="data-stream" style={{ top: '20%', animationDelay: '0s' }} />
        <div className="data-stream" style={{ top: '40%', animationDelay: '2s' }} />
        <div className="data-stream" style={{ top: '60%', animationDelay: '4s' }} />
        <div className="data-stream" style={{ top: '80%', animationDelay: '6s' }} />
      </div>

      {/* Hero Section */}
      <section className="relative z-10 min-h-screen flex items-center justify-center px-6">
        <div className="max-w-6xl mx-auto text-center animate-fade-in-up">
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 gradient-text leading-tight">
              Loustad R&D™
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-4">
              The brain behind custom intelligent systems.
            </p>
            <p className="text-lg md:text-xl text-turquoise-400 mb-12">
              From law to energy, from biology to strategy — we design the intelligence you need.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-turquoise-500 hover:bg-turquoise-600 text-black font-semibold px-8 py-4 text-lg hover-glow"
            >
              Explore Our Systems
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-turquoise-500 text-turquoise-500 hover:bg-turquoise-500 hover:text-black font-semibold px-8 py-4 text-lg hover-glow"
            >
              Design Your Own AI
              <Brain className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Why Section */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 gradient-text">
            Why Loustad R&D?
          </h2>
          <p className="text-xl text-gray-300 mb-12 leading-relaxed">
            We blend legal engineers, data scientists, bioinformaticians, and business experts 
            to create intelligent systems that transcend traditional boundaries.
          </p>
          <div className="text-2xl md:text-3xl font-semibold text-turquoise-400 animate-pulse-glow">
            "You have a challenge. We have the neurons."
          </div>
        </div>
      </section>

      {/* Featured Systems */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">
            Featured Systems
          </h2>
          
          <div className="space-y-12">
            {/* Smart Formulator */}
            <div className="glow-border rounded-xl p-8 hover-glow group">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-4">
                    <Dna className="h-8 w-8 text-turquoise-400" />
                    <h3 className="text-2xl md:text-3xl font-bold">Smart Formulator™</h3>
                  </div>
                  <p className="text-gray-300 text-lg mb-6">
                    Personalized health OS combining biology, AI, and advanced formulation engine 
                    to create tailored wellness solutions.
                  </p>
                  <Button className="bg-turquoise-500 hover:bg-turquoise-600 text-black">
                    See How It Works
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </div>
                <div className="w-full md:w-1/3 h-48 bg-gradient-to-br from-turquoise-500/20 to-blue-500/20 rounded-lg animate-float" />
              </div>
            </div>

            {/* Loustad Fintax */}
            <div className="glow-border rounded-xl p-8 hover-glow group">
              <div className="flex flex-col md:flex-row-reverse items-center gap-8">
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-4">
                    <Scale className="h-8 w-8 text-turquoise-400" />
                    <h3 className="text-2xl md:text-3xl font-bold">Loustad Fintax™</h3>
                  </div>
                  <p className="text-gray-300 text-lg mb-6">
                    Moroccan fiscal intelligence system with real-time Q&A capabilities, 
                    revolutionizing tax and legal compliance.
                  </p>
                  <Button className="bg-turquoise-500 hover:bg-turquoise-600 text-black">
                    Try It
                    <Zap className="ml-2 h-4 w-4" />
                  </Button>
                </div>
                <div className="w-full md:w-1/3 h-48 bg-gradient-to-br from-green-500/20 to-turquoise-500/20 rounded-lg animate-float" />
              </div>
            </div>

            {/* Loustad Smart IP */}
            <div className="glow-border rounded-xl p-8 hover-glow group">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-4">
                    <TrendingUp className="h-8 w-8 text-turquoise-400" />
                    <h3 className="text-2xl md:text-3xl font-bold">Loustad Smart IP™</h3>
                  </div>
                  <p className="text-gray-300 text-lg mb-6">
                    Advanced patent AI system based on PQAI, adapted and extended for 
                    intelligent intellectual property search and analysis.
                  </p>
                  <Button className="bg-turquoise-500 hover:bg-turquoise-600 text-black">
                    Run a Smart Search
                    <Brain className="ml-2 h-4 w-4" />
                  </Button>
                </div>
                <div className="w-full md:w-1/3 h-48 bg-gradient-to-br from-purple-500/20 to-turquoise-500/20 rounded-lg animate-float" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Build Your Own System */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 gradient-text">
              You have a vision. Let's build the AI to match it.
            </h2>
            <p className="text-xl text-gray-300">
              We design and develop tailor-made AI systems that solve your specific challenges, 
              no matter how complex or unique your domain.
            </p>
          </div>

          <form onSubmit={handleFormSubmit} className="glow-border rounded-xl p-8 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2 text-turquoise-400">Name</label>
                <Input 
                  placeholder="Your full name" 
                  className="bg-gray-900 border-gray-700 text-white"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-turquoise-400">Email</label>
                <Input 
                  type="email" 
                  placeholder="your@email.com" 
                  className="bg-gray-900 border-gray-700 text-white"
                  required
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2 text-turquoise-400">Sector</label>
                <Select>
                  <SelectTrigger className="bg-gray-900 border-gray-700 text-white">
                    <SelectValue placeholder="Choose your sector" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="legal">Legal</SelectItem>
                    <SelectItem value="health">Healthcare</SelectItem>
                    <SelectItem value="finance">Finance</SelectItem>
                    <SelectItem value="energy">Energy</SelectItem>
                    <SelectItem value="retail">Retail</SelectItem>
                    <SelectItem value="mobility">Mobility</SelectItem>
                    <SelectItem value="business">Business Strategy</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-turquoise-400">Deadline</label>
                <Input 
                  placeholder="When do you need this?" 
                  className="bg-gray-900 border-gray-700 text-white"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2 text-turquoise-400">Project Description</label>
              <Textarea 
                placeholder="Describe your vision, challenge, or the intelligent system you need..."
                className="bg-gray-900 border-gray-700 text-white min-h-32"
                required
              />
            </div>

            <Button 
              type="submit" 
              size="lg" 
              className="w-full bg-turquoise-500 hover:bg-turquoise-600 text-black font-semibold py-4 text-lg hover-glow"
            >
              Request a Custom Quote in 72h
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-16 px-6 border-t border-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold gradient-text mb-2">Loustad R&D™</h3>
              <p className="text-gray-400">Building the future of intelligent systems</p>
            </div>
            
            <nav className="flex flex-wrap justify-center gap-8 text-sm">
              <a href="#" className="text-gray-400 hover:text-turquoise-400 transition-colors">About</a>
              <a href="#" className="text-gray-400 hover:text-turquoise-400 transition-colors">Explore Systems</a>
              <a href="#" className="text-gray-400 hover:text-turquoise-400 transition-colors">Press</a>
              <a href="#" className="text-gray-400 hover:text-turquoise-400 transition-colors">Careers</a>
              <a href="#" className="text-gray-400 hover:text-turquoise-400 transition-colors">Legal</a>
            </nav>
          </div>
          
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
            © 2025 Loustad R&D – A Loustad company
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
