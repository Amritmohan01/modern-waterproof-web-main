
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Home, Building, Droplets, Shield, Wrench, Zap } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Home,
      title: "Residential Waterproofing",
      description: "Complete home protection including basements, roofs, bathrooms, and exterior walls.",
      features: ["Basement Waterproofing", "Roof Sealing", "Bathroom Waterproofing", "Foundation Protection"]
    },
    {
      icon: Building,
      title: "Commercial Solutions",
      description: "Large-scale waterproofing for commercial buildings, warehouses, and industrial facilities.",
      features: ["Building Envelope", "Structural Waterproofing", "Industrial Coatings", "Maintenance Plans"]
    },
    {
      icon: Droplets,
      title: "Leak Detection & Repair",
      description: "Advanced leak detection technology to identify and fix water intrusion problems.",
      features: ["Thermal Imaging", "Moisture Testing", "Crack Repair", "Emergency Response"]
    },
    {
      icon: Shield,
      title: "Protective Coatings",
      description: "High-performance coatings for long-lasting protection against water and weather.",
      features: ["Elastomeric Coatings", "Acrylic Systems", "Polyurethane Films", "Membrane Installation"]
    },
    {
      icon: Wrench,
      title: "Maintenance Services",
      description: "Regular maintenance and inspection services to ensure long-term waterproof integrity.",
      features: ["Annual Inspections", "Preventive Maintenance", "System Upgrades", "Performance Testing"]
    },
    {
      icon: Zap,
      title: "Emergency Services",
      description: "24/7 emergency waterproofing and leak repair services for urgent situations.",
      features: ["Rapid Response", "Temporary Solutions", "Storm Damage Repair", "Insurance Claims Support"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Waterproofing Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive waterproofing solutions tailored to protect your property 
            from water damage with industry-leading techniques and materials.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors duration-300">
                  <service.icon className="h-8 w-8 text-blue-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">{service.title}</CardTitle>
                <CardDescription className="text-gray-600">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-blue-600 rounded-2xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-4">Need Custom Waterproofing Solution?</h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Every property is unique. Our experts will assess your specific needs and provide 
            a customized waterproofing plan that fits your budget and requirements.
          </p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
            Schedule Free Consultation
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
