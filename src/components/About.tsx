
import { Card, CardContent } from "@/components/ui/card";
import { Award, Users, Clock, ThumbsUp } from "lucide-react";

const About = () => {
  const stats = [
    { icon: Award, number: "15+", label: "Years Experience" },
    { icon: Users, number: "2000+", label: "Happy Customers" },
    { icon: Clock, number: "24/7", label: "Emergency Service" },
    { icon: ThumbsUp, number: "99%", label: "Success Rate" }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                About AquaShield Pro
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                With over 15 years of experience in the waterproofing industry, AquaShield Pro 
                has become the most trusted name for water damage protection solutions. We specialize 
                in residential and commercial waterproofing services across the region.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900">Our Mission</h3>
              <p className="text-gray-600">
                To provide superior waterproofing solutions that protect properties and give our 
                clients peace of mind. We use cutting-edge technology and proven methods to ensure 
                your property stays dry and secure for years to come.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900">Why Choose Us?</h3>
              <ul className="space-y-2">
                {[
                  "Licensed and fully insured professionals",
                  "State-of-the-art waterproofing technology",
                  "Comprehensive warranty on all services",
                  "Free inspections and detailed assessments",
                  "Eco-friendly and safe materials",
                  "Competitive pricing with no hidden costs"
                ].map((item, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 flex-shrink-0"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Content - Stats */}
          <div className="space-y-8">
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <Card key={index} className="text-center p-6 border-0 bg-gradient-to-br from-blue-50 to-white hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-0">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <stat.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="text-3xl font-bold text-blue-600 mb-2">{stat.number}</div>
                    <div className="text-gray-700 font-medium">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Testimonial */}
            <Card className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6">
              <CardContent className="p-0">
                <blockquote className="text-lg mb-4">
                  "AquaShield Pro saved our home from serious water damage. Their team was 
                  professional, efficient, and the results exceeded our expectations. Highly recommended!"
                </blockquote>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4">
                    <Users className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="font-semibold">Sarah Johnson</div>
                    <div className="text-blue-200 text-sm">Homeowner, Downtown</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
