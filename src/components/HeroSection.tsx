import React from "react";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

interface HeroSectionProps {
  headline?: React.ReactNode;
  subheading?: string;
  primaryCtaText?: string;
  secondaryCtaText?: string;
  onPrimaryCtaClick?: () => void;
  onSecondaryCtaClick?: () => void;
}

const HeroSection = ({
  headline = (
    <>
      Where <span className="text-rovex-yellow">creativity</span> meets{" "}
      <span className="text-rovex-yellow">strategy</span>
    </>
  ),
  subheading = "We're a full-service design agency specializing in branding, web design, and innovative solutions that elevate businesses.",
  primaryCtaText = "View Our Portfolio",
  secondaryCtaText = "Learn More",
  onPrimaryCtaClick = () => console.log("Primary CTA clicked"),
  onSecondaryCtaClick = () => console.log("Secondary CTA clicked"),
}: HeroSectionProps) => {
  return (
    <section className="w-full pt-32 pb-16 md:pt-40 md:pb-24 bg-rovex-black relative overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0 opacity-20">
        <img
          src="https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?w=1200&q=80"
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16">
          <motion.div
            className="flex flex-col space-y-6 md:space-y-8 md:w-1/2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
              {headline}
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-lg">
              {subheading}
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button
                onClick={onPrimaryCtaClick}
                className="border-2 border-rovex-yellow bg-transparent hover:bg-rovex-yellow hover:text-rovex-black text-white px-6 py-6 h-auto rounded-md text-lg font-medium transition-colors"
              >
                {primaryCtaText}
              </Button>
              <Button
                onClick={onSecondaryCtaClick}
                variant="secondary"
                className="bg-rovex-gray hover:bg-rovex-lightgray text-white px-6 py-6 h-auto rounded-md text-lg font-medium"
              >
                {secondaryCtaText}
              </Button>
            </div>
          </motion.div>

          <motion.div
            className="md:w-1/2 flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="relative w-full max-w-md">
              <div className="absolute -inset-1 bg-rovex-yellow rounded-lg blur opacity-30"></div>
              <div className="relative bg-rovex-gray rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=800&q=80"
                  alt="Creative workspace"
                  className="w-full h-full object-cover aspect-[4/3]"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
