import { Heart, Calendar, MapPin } from 'lucide-react';
import heroImage from '@/assets/hero-couple.jpg';

const HeroSection = () => {
  return (
    <section id="our-story" className="min-h-screen flex items-center justify-center hero-gradient relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5"></div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left fade-in">
            <h1 className="text-6xl md:text-8xl font-bold text-primary mb-4">
              Our Story
            </h1>
            <h2 className="text-4xl md:text-6xl font-light text-foreground mb-8">
              Disha & Shrey
            </h2>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center justify-center lg:justify-start space-x-3">
                <Calendar className="text-primary" size={24} />
                <span className="text-xl text-muted-foreground">June 15, 2024</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start space-x-3">
                <MapPin className="text-primary" size={24} />
                <span className="text-xl text-muted-foreground">Garden Vista Resort, Napa Valley</span>
              </div>
            </div>

            <div className="prose prose-lg text-muted-foreground mb-8">
              <p className="leading-relaxed">
                Two hearts, one story. From chance encounters to chosen forever, 
                Disha and Shrey's love story began with a shared laugh and blossomed 
                into a beautiful journey of companionship, adventure, and endless joy.
              </p>
              <p className="leading-relaxed">
                Join us as we celebrate the beginning of our new chapter together, 
                surrounded by the love and warmth of our family and friends.
              </p>
            </div>

            <button className="wedding-button inline-flex items-center space-x-2">
              <Heart size={20} />
              <span>Our Journey Begins</span>
            </button>
          </div>

          <div className="relative fade-in floating">
            <div className="romantic-glow rounded-2xl overflow-hidden">
              <img 
                src={heroImage} 
                alt="Disha and Shrey" 
                className="w-full h-[600px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-accent/10 rounded-full blur-xl"></div>
    </section>
  );
};

export default HeroSection;