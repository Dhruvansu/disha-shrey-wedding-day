import { Wine, Camera, Trees, MapPin } from 'lucide-react';

const ThingsToDoSection = () => {
  const activities = [
    {
      icon: Wine,
      title: "Wine Tasting",
      description: "Explore world-class wineries and vineyards",
      recommendations: [
        "Castello di Amorosa - Medieval castle winery",
        "Schramsberg Vineyards - Historic sparkling wine producer", 
        "Inglenook - Beautiful estate with rich history"
      ]
    },
    {
      icon: Trees,
      title: "Outdoor Activities",
      description: "Enjoy the beautiful Napa Valley landscape",
      recommendations: [
        "Hot air balloon rides over the valley",
        "Hiking at Bothe-Napa Valley State Park",
        "Cycling through vineyard country roads"
      ]
    },
    {
      icon: Camera,
      title: "Sightseeing",
      description: "Discover the charm of wine country",
      recommendations: [
        "Oxbow Public Market - Local artisans and food vendors",
        "Calistoga Hot Springs - Relaxing natural mineral baths",
        "Napa Valley Wine Train - Scenic railway dining experience"
      ]
    }
  ];


  return (
    <section id="things-to-do" className="section-padding bg-secondary/30">
      <div className="container mx-auto">
        <div className="text-center mb-16 fade-in">
          <MapPin className="mx-auto text-primary mb-4" size={48} />
          <h2 className="text-5xl font-bold text-primary mb-6">Things to Do</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Make the most of your time in beautiful Napa Valley
          </p>
        </div>

        {/* Activities */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center text-primary mb-12 fade-in">Activities & Attractions</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {activities.map((activity, index) => (
              <div key={index} className="wedding-card fade-in hover:bg-accent/20 transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <activity.icon className="text-primary" size={32} />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-2xl font-bold text-foreground mb-2">{activity.title}</h4>
                    <p className="text-muted-foreground mb-4">{activity.description}</p>
                    <ul className="space-y-2">
                      {activity.recommendations.map((rec, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-start">
                          <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          {rec}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default ThingsToDoSection;