import { useState } from 'react';
import { Heart, Send, CheckCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const RSVPSection = () => {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    guestName: '',
    phoneNumber: '',
    attendees: '1',
    attending: 'yes',
    songRequest: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.guestName || !formData.phoneNumber) {
      toast({
        title: "Please fill in required fields",
        description: "Name and phone number are required to RSVP.",
        variant: "destructive"
      });
      return;
    }

    // Phone number validation (basic)
    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
    if (!phoneRegex.test(formData.phoneNumber.replace(/[-\s\(\)]/g, ''))) {
      toast({
        title: "Invalid phone number",
        description: "Please enter a valid phone number.",
        variant: "destructive"
      });
      return;
    }

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(true);
      toast({
        title: "RSVP Submitted Successfully!",
        description: "Thank you for responding. We can't wait to celebrate with you!",
      });
    }, 1000);
  };

  if (isSubmitted) {
    return (
      <section id="rsvp" className="section-padding bg-secondary/30">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center fade-in">
            <CheckCircle className="mx-auto text-primary mb-6" size={80} />
            <h2 className="text-5xl font-bold text-primary mb-6">Thank You!</h2>
            <div className="wedding-card">
              <p className="text-xl text-muted-foreground mb-6">
                Your RSVP has been received successfully. We're so excited to celebrate with you!
              </p>
              <p className="text-muted-foreground">
                You should receive a confirmation email shortly. If you need to make any changes, 
                please contact us directly.
              </p>
              <div className="mt-8">
                <Heart className="mx-auto text-primary" size={48} />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="rsvp" className="section-padding bg-secondary/30">
      <div className="container mx-auto max-w-2xl">
        <div className="text-center mb-16 fade-in">
          <Heart className="mx-auto text-primary mb-4" size={48} />
          <h2 className="text-5xl font-bold text-primary mb-6">RSVP</h2>
          <p className="text-xl text-muted-foreground">
            Please let us know if you'll be joining us for our special day
          </p>
        </div>

        <form onSubmit={handleSubmit} className="wedding-card fade-in">
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="guestName" className="block text-sm font-medium text-foreground mb-2">
                Full Name *
              </label>
              <input
                type="text"
                id="guestName"
                name="guestName"
                value={formData.guestName}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary bg-background"
                placeholder="Enter your full name"
              />
            </div>

            <div>
              <label htmlFor="phoneNumber" className="block text-sm font-medium text-foreground mb-2">
                Phone Number *
              </label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary bg-background"
                placeholder="Enter your phone number"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="attending" className="block text-sm font-medium text-foreground mb-2">
                Will you be attending?
              </label>
              <select
                id="attending"
                name="attending"
                value={formData.attending}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary bg-background"
              >
                <option value="yes">Yes, I'll be there!</option>
                <option value="no">Sorry, can't make it</option>
              </select>
            </div>

            <div>
              <label htmlFor="attendees" className="block text-sm font-medium text-foreground mb-2">
                Number of Guests
              </label>
              <select
                id="attendees"
                name="attendees"
                value={formData.attendees}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary bg-background"
              >
                <option value="1">1 Guest</option>
                <option value="2">2 Guests</option>
                <option value="3">3 Guests</option>
                <option value="4">4 Guests</option>
              </select>
            </div>
          </div>


          <div className="mb-6">
            <label htmlFor="songRequest" className="block text-sm font-medium text-foreground mb-2">
              Song Request for Reception
            </label>
            <input
              type="text"
              id="songRequest"
              name="songRequest"
              value={formData.songRequest}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary bg-background"
              placeholder="Any song you'd love to hear at the party?"
            />
          </div>

          <div className="mb-8">
            <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
              Special Message for the Couple
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              rows={4}
              className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary bg-background resize-none"
              placeholder="Share your wishes or any special thoughts..."
            />
          </div>

          <div className="text-center">
            <button type="submit" className="wedding-button inline-flex items-center space-x-2">
              <Send size={20} />
              <span>Submit RSVP</span>
            </button>
          </div>

          <p className="text-sm text-muted-foreground text-center mt-4">
            Please RSVP by May 1st, 2024
          </p>
        </form>
      </div>
    </section>
  );
};

export default RSVPSection;