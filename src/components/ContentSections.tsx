import React from "react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { motion } from "framer-motion";
import {
  CheckCircle,
  BarChart2,
  Clock,
  Shield,
  Users,
  Zap,
  X,
  Smartphone,
  Code,
  Box as Cube,
  PenTool,
  Film,
  Plus,
  Laptop,
  Search,
  Lightbulb,
  Layers,
  Rocket,
} from "lucide-react";

const ContentSections = () => {
  return (
    <div className="w-full bg-rovex-black text-white">
      {/* Trusted By Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-rovex-gray">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <p className="text-sm uppercase tracking-wider text-gray-400 mb-1">
              Trusted By
            </p>
            <h2 className="text-xl font-bold text-white mb-2">Teams At</h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16"
          >
            {/* Client logos - using placeholder grayscale logos */}
            {["Logopium", "Logopium", "Logopium", "Logopium", "Logopium"].map(
              (company, index) => (
                <div
                  key={index}
                  className="grayscale opacity-50 hover:opacity-70 transition-opacity duration-300"
                >
                  <div className="h-12 w-32 bg-rovex-lightgray rounded flex items-center justify-center">
                    <span className="text-gray-300 font-semibold">
                      {company}
                    </span>
                  </div>
                </div>
              ),
            )}
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-rovex-black">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-rovex-yellow mb-3">
                Our innovative services
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Button className="border-2 border-rovex-yellow bg-transparent hover:bg-rovex-yellow hover:text-rovex-black text-white rounded-md font-medium transition-colors mt-4 md:mt-0">
                View All Services
              </Button>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
            {/* Services List */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {[
                {
                  number: "01",
                  title: "UI/UX Design",
                  icon: <PenTool />,
                  highlighted: true,
                },
                { number: "02", title: "Web Development", icon: <Code /> },
                { number: "03", title: "3D Designs", icon: <Cube /> },
                {
                  number: "04",
                  title: "Digital Marketing Design",
                  icon: <BarChart2 />,
                },
                { number: "05", title: "Motion Graphics", icon: <Film /> },
              ].map((service, index) => (
                <div
                  key={index}
                  className={`flex items-center space-x-4 p-4 rounded-lg transition-colors ${service.highlighted ? "bg-rovex-gray" : "hover:bg-rovex-gray"}`}
                >
                  <span
                    className={`text-sm font-mono ${service.highlighted ? "text-rovex-yellow" : "text-gray-400"}`}
                  >
                    {service.number}.
                  </span>
                  <span
                    className={`font-medium text-lg ${service.highlighted ? "text-rovex-yellow" : "text-white"}`}
                  >
                    {service.title}
                  </span>
                  <div className="flex-grow"></div>
                  <X className="h-4 w-4 text-gray-400" />
                </div>
              ))}
            </motion.div>

            {/* Featured Service */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-rovex-gray rounded-lg overflow-hidden"
            >
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-bold text-rovex-yellow">
                    UI/UX Design
                  </h3>
                  <X className="h-4 w-4 text-gray-400" />
                </div>
                <p className="text-gray-300 mb-6">
                  We create intuitive and engaging user interfaces that enhance
                  user experience and drive conversions.
                </p>
                <Button className="bg-rovex-black hover:bg-rovex-lightgray text-white rounded-md font-medium transition-colors">
                  Read More
                </Button>
              </div>
              <div className="relative h-64 mt-4">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="grid grid-cols-2 gap-4 p-4">
                    <div className="bg-purple-500 rounded-lg h-40 w-24 mx-auto"></div>
                    <div className="bg-blue-500 rounded-lg h-40 w-24 mx-auto"></div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-rovex-gray">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-rovex-yellow mb-3">
                Our design masterpieces
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Button className="border-2 border-rovex-yellow bg-transparent hover:bg-rovex-yellow hover:text-rovex-black text-white rounded-md font-medium transition-colors mt-4 md:mt-0">
                View All Portfolio
              </Button>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Green Tech Solutions",
                image:
                  "https://images.unsplash.com/photo-1556656793-08538906a9f8?w=800&q=80",
                description: "Smartphone app with green interface",
              },
              {
                title: "Green Wave Foods",
                image:
                  "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?w=800&q=80",
                description: "Website design for organic food brand",
              },
              {
                title: "Horizon Real Estate",
                image:
                  "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&q=80",
                description: "Branding and website for luxury properties",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-lg shadow-lg bg-rovex-black"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-rovex-black to-transparent opacity-70"></div>
                </div>
                <div className="p-6 relative">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-xl font-bold text-rovex-yellow">
                      {item.title}
                    </h3>
                    <X className="h-4 w-4 text-gray-400" />
                  </div>
                  <p className="text-gray-300">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Toolbox Section */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-rovex-black">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-rovex-yellow mb-3">
                Our toolbox for innovation
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Button className="border-2 border-rovex-yellow bg-transparent hover:bg-rovex-yellow hover:text-rovex-black text-white rounded-md font-medium transition-colors mt-4 md:mt-0">
                Let's Get Started!
              </Button>
            </motion.div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 md:gap-8">
            {[
              {
                name: "Figma",
                icon: "https://api.dicebear.com/7.x/avataaars/svg?seed=figma",
              },
              {
                name: "Frame Design Tool",
                icon: "https://api.dicebear.com/7.x/avataaars/svg?seed=frame",
              },
              {
                name: "Illustrator",
                icon: "https://api.dicebear.com/7.x/avataaars/svg?seed=illustrator",
              },
              {
                name: "Adobe Xd",
                icon: "https://api.dicebear.com/7.x/avataaars/svg?seed=adobexd",
              },
              {
                name: "InDesign",
                icon: "https://api.dicebear.com/7.x/avataaars/svg?seed=indesign",
              },
              {
                name: "Photoshop",
                icon: "https://api.dicebear.com/7.x/avataaars/svg?seed=photoshop",
              },
              {
                name: "Lightroom",
                icon: "https://api.dicebear.com/7.x/avataaars/svg?seed=lightroom",
              },
              {
                name: "InCopy",
                icon: "https://api.dicebear.com/7.x/avataaars/svg?seed=incopy",
              },
            ].map((tool, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.05 * index }}
                viewport={{ once: true }}
                className="flex flex-col items-center p-4 bg-rovex-gray rounded-lg hover:bg-rovex-lightgray transition-colors duration-300"
              >
                <div className="w-16 h-16 mb-3 bg-rovex-lightgray rounded-full overflow-hidden flex items-center justify-center">
                  <img
                    src={tool.icon}
                    alt={tool.name}
                    className="w-12 h-12 object-contain"
                  />
                </div>
                <span className="text-sm font-medium text-white text-center">
                  {tool.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-rovex-gray">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-rovex-yellow mb-6">
              Our methodology for success
            </h2>
          </motion.div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            {/* Central Graphic */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="md:w-1/2 relative"
            >
              <div className="relative w-full max-w-md mx-auto">
                {/* Central Circle with Laptop */}
                <div className="w-48 h-48 bg-rovex-black rounded-full mx-auto flex items-center justify-center border-4 border-rovex-yellow">
                  <Laptop className="w-20 h-20 text-rovex-yellow" />
                </div>

                {/* Orbiting Icons */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-rovex-black rounded-full flex items-center justify-center border-2 border-rovex-yellow">
                  <Search className="w-8 h-8 text-rovex-yellow" />
                </div>

                <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-rovex-black rounded-full flex items-center justify-center border-2 border-rovex-yellow">
                  <Lightbulb className="w-8 h-8 text-rovex-yellow" />
                </div>

                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-16 h-16 bg-rovex-black rounded-full flex items-center justify-center border-2 border-rovex-yellow">
                  <Layers className="w-8 h-8 text-rovex-yellow" />
                </div>

                <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-rovex-black rounded-full flex items-center justify-center border-2 border-rovex-yellow">
                  <Rocket className="w-8 h-8 text-rovex-yellow" />
                </div>
              </div>
            </motion.div>

            {/* Steps List */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="md:w-1/2 space-y-6"
            >
              {[
                {
                  title: "Discovery & Strategy",
                  description:
                    "We begin by understanding your goals, audience, and market position to develop a strategic roadmap.",
                  icon: <Search className="h-5 w-5 text-rovex-yellow" />,
                },
                {
                  title: "Concept Development",
                  description:
                    "Our creative team brainstorms innovative ideas and concepts that align with your brand identity and objectives.",
                  icon: <Lightbulb className="h-5 w-5 text-rovex-yellow" />,
                },
                {
                  title: "Design & Iteration",
                  description:
                    "We craft detailed designs and prototypes, refining them through collaborative feedback and iteration.",
                  icon: <Layers className="h-5 w-5 text-rovex-yellow" />,
                },
                {
                  title: "Development & Execution",
                  description:
                    "Our technical experts bring designs to life with precision coding and development, ensuring optimal performance.",
                  icon: <Rocket className="h-5 w-5 text-rovex-yellow" />,
                },
              ].map((step, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 p-4 bg-rovex-black rounded-lg hover:bg-rovex-lightgray transition-colors duration-300"
                >
                  <div className="mt-1">{step.icon}</div>
                  <div>
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-bold text-rovex-yellow mb-2">
                        {step.title}
                      </h3>
                      <X className="h-4 w-4 text-gray-400" />
                    </div>
                    <p className="text-gray-300">{step.description}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Placeholder for other sections that will be implemented later */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-rovex-black text-center">
        <p className="text-gray-400">More sections coming soon...</p>
      </section>
    </div>
  );
};

export default ContentSections;
