
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: "(555) xxxxxxxx",
      subtitle: "24/7 Emergency Line"
    },
    {
      icon: Mail,
      title: "Email",
      details: "info@aquashieldpro.com",
      subtitle: "Quick Response Guaranteed"
    },
    {
      icon: MapPin,
      title: "Service Area",
      details: "Greater Metro Area",
      subtitle: "50+ Mile Radius"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: "Mon-Fri: 7AM-7PM",
      subtitle: "Sat-Sun: 8AM-5PM"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Get Your Free Quote Today
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to protect your property? Contact us for a free inspection and detailed quote. 
            Our experts are here to help you find the perfect waterproofing solution.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900">
                  Request Free Inspection
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      First Name *
                    </label>
                    <Input placeholder="Enter your first name" className="border-gray-300" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name *
                    </label>
                    <Input placeholder="Enter your last name" className="border-gray-300" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <Input placeholder="(555) 123-4567" className="border-gray-300" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <Input placeholder="your@email.com" className="border-gray-300" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Property Address *
                  </label>
                  <Input placeholder="Enter your property address" className="border-gray-300" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Service Needed
                  </label>
                  <select className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option>Select a service</option>
                    <option>Basement Waterproofing</option>
                    <option>Roof Waterproofing</option>
                    <option>Foundation Repair</option>
                    <option>Leak Detection</option>
                    <option>Commercial Waterproofing</option>
                    <option>Emergency Service</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Additional Details
                  </label>
                  <Textarea 
                    placeholder="Describe your waterproofing needs or any specific concerns..."
                    className="border-gray-300 min-h-[120px]"
                  />
                </div>

                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg">
                  Schedule Free Inspection
                </Button>

                <p className="text-sm text-gray-500 text-center">
                  * Required fields. We'll contact you within 24 hours to schedule your free inspection.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <info.icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">{info.title}</h3>
                      <p className="text-blue-600 font-medium">{info.details}</p>
                      <p className="text-sm text-gray-600">{info.subtitle}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Emergency CTA */}
            <Card className="bg-gradient-to-r from-red-500 to-red-600 text-white border-0">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold mb-2">Emergency Service?</h3>
                <p className="mb-4 text-red-100">
                  Water damage emergency? We're available 24/7 for urgent situations.
                </p>
                <Button className="bg-white text-red-600 hover:bg-gray-100 font-semibold">
                  Call Emergency Line
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
