import { MapPin, Plane, Car, Bed, Navigation } from 'lucide-react';

const TravelSection = () => {
  const hotels = [
    {
      name: "Garden Vista Resort",
      description: "Our wedding venue - book here for the ultimate convenience!",
      distance: "0 miles from venue",
      price: "$280/night",
      amenities: ["Free WiFi", "Pool", "Spa", "Restaurant"],
      phone: "(707) 555-0123"
    },
    {
      name: "Napa Valley Lodge",
      description: "Charming boutique hotel in the heart of wine country",
      distance: "2 miles from venue",
      price: "$220/night",
      amenities: ["Free WiFi", "Pool", "Wine Bar", "Fitness Center"],
      phone: "(707) 555-0456"
    },
    {
      name: "Vineyard Inn & Suites",
      description: "Family-friendly hotel with spacious rooms and great amenities",
      distance: "5 miles from venue",
      price: "$180/night",
      amenities: ["Free WiFi", "Pool", "Free Breakfast", "Parking"],
      phone: "(707) 555-0789"
    }
  ];

  return (
    <section id="travel" className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-16 fade-in">
          <Plane className="mx-auto text-primary mb-4" size={48} />
          <h2 className="text-5xl font-bold text-primary mb-6">Travel & Stay</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about getting here and where to stay
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Getting There */}
          <div className="fade-in">
            <h3 className="text-3xl font-bold text-primary mb-8 flex items-center">
              <Navigation className="mr-3" size={32} />
              Getting There
            </h3>
            
            <div className="space-y-6">
              <div className="wedding-card">
                <div className="flex items-start space-x-4">
                  <Plane className="text-primary mt-1" size={24} />
                  <div>
                    <h4 className="text-xl font-semibold mb-2">By Air</h4>
                    <p className="text-muted-foreground mb-2">
                      <strong>San Francisco International (SFO)</strong> - 90 minutes drive
                    </p>
                    <p className="text-muted-foreground mb-2">
                      <strong>Oakland International (OAK)</strong> - 80 minutes drive
                    </p>
                    <p className="text-muted-foreground">
                      <strong>Sacramento International (SMF)</strong> - 60 minutes drive
                    </p>
                  </div>
                </div>
              </div>

              <div className="wedding-card">
                <div className="flex items-start space-x-4">
                  <Car className="text-primary mt-1" size={24} />
                  <div>
                    <h4 className="text-xl font-semibold mb-2">By Car</h4>
                    <p className="text-muted-foreground mb-2">
                      <strong>From San Francisco:</strong> Take US-101 North to Highway 37 West, then Highway 121 North
                    </p>
                    <p className="text-muted-foreground mb-4">
                      <strong>From Sacramento:</strong> Take I-80 West to Highway 12 West
                    </p>
                    <div className="bg-secondary p-4 rounded-lg">
                      <p className="font-semibold text-foreground">Garden Vista Resort</p>
                      <p className="text-muted-foreground">123 Vineyard Lane</p>
                      <p className="text-muted-foreground">Napa Valley, CA 94558</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Accommodations */}
          <div className="fade-in">
            <h3 className="text-3xl font-bold text-primary mb-8 flex items-center">
              <Bed className="mr-3" size={32} />
              Where to Stay
            </h3>
            
            <div className="space-y-6">
              {hotels.map((hotel, index) => (
                <div key={index} className="wedding-card hover:bg-accent/20 transition-all duration-300">
                  <div className="flex justify-between items-start mb-4">
                    <h4 className="text-xl font-semibold text-foreground">{hotel.name}</h4>
                    <span className="text-lg font-semibold text-primary">{hotel.price}</span>
                  </div>
                  
                  <p className="text-muted-foreground mb-3">{hotel.description}</p>
                  
                  <div className="flex items-center space-x-2 mb-3">
                    <MapPin className="text-primary" size={16} />
                    <span className="text-sm text-muted-foreground">{hotel.distance}</span>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {hotel.amenities.map((amenity, i) => (
                      <span key={i} className="bg-secondary text-secondary-foreground px-2 py-1 rounded-full text-sm">
                        {amenity}
                      </span>
                    ))}
                  </div>
                  
                  <button className="wedding-button text-sm px-4 py-2">
                    Call {hotel.phone}
                  </button>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-accent/20 rounded-lg">
              <h4 className="text-lg font-semibold text-accent-foreground mb-2">
                Room Block Information
              </h4>
              <p className="text-muted-foreground text-sm">
                We have reserved room blocks at Garden Vista Resort and Napa Valley Lodge. 
                Mention "Disha & Shrey Wedding" when booking to receive our special group rate. 
                Book by May 1st to guarantee availability.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TravelSection;