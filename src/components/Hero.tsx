
import { Button } from "@/components/ui/button";
import { Shield, CheckCircle, Phone } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="pt-16 bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
                <Shield className="h-4 w-4" />
                <span>Professional Waterproofing Services</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                Protect Your
                <span className="text-blue-600 block">Property Forever</span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                Expert waterproofing solutions for homes and buildings. We provide comprehensive 
                protection against water damage with guaranteed results and lifetime support.
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "10+ Years Experience",
                "Licensed & Insured",
                "100% Satisfaction Guarantee",
                "24/7 Emergency Service"
              ].map((feature, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700 font-medium">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg">
                Get Free Inspection
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg"
              >
                <Phone className="h-5 w-5 mr-2" />
                Call Now: (555) 123-4567
              </Button>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="relative">
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 text-white">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold">Why Choose AquaShield Pro?</h3>
                <div className="space-y-4">
                  {[
                    { title: "Advanced Technology", desc: "Latest waterproofing materials and techniques" },
                    { title: "Expert Team", desc: "Certified professionals with years of experience" },
                    { title: "Warranty", desc: "Up to 15-year warranty on all services" }
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-semibold">{item.title}</h4>
                        <p className="text-blue-100 text-sm">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg">
              <Shield className="h-12 w-12 text-white" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
