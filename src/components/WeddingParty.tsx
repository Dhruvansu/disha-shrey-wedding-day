import { Users } from 'lucide-react';

const WeddingParty = () => {
  const brideParty = [
    {
      name: "Priya Sharma",
      role: "Maid of Honor",
      description: "Disha's best friend since college, always there with a smile and endless support.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b9ff?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Anita Patel",
      role: "Bridesmaid",
      description: "Disha's sister and partner in all life's adventures, bringing joy wherever she goes.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Kavya Reddy",
      role: "Bridesmaid",
      description: "College roommate turned lifelong friend, always ready for fun and laughter.",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop&crop=face"
    }
  ];

  const groomParty = [
    {
      name: "Rohan Gupta",
      role: "Best Man",
      description: "Shrey's brother and best friend, the one who knows all his secrets and keeps them safe.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Arjun Singh",
      role: "Groomsman",
      description: "College buddy and adventure companion, always up for a good time and great stories.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Vikram Joshi",
      role: "Groomsman",
      description: "Work colleague turned close friend, bringing wisdom and humor to every gathering.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face"
    }
  ];

  const PartyCard = ({ member }: { member: typeof brideParty[0] }) => (
    <div className="wedding-card text-center group hover:bg-accent/20 transition-all duration-300">
      <div className="mb-6 relative">
        <img
          src={member.image}
          alt={member.name}
          className="w-32 h-32 rounded-full mx-auto object-cover romantic-glow group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <h3 className="text-2xl font-bold text-primary mb-2">{member.name}</h3>
      <p className="text-lg font-medium text-accent-foreground mb-4">{member.role}</p>
      <p className="text-muted-foreground leading-relaxed">{member.description}</p>
    </div>
  );

  return (
    <section id="wedding-party" className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-16 fade-in">
          <Users className="mx-auto text-primary mb-4" size={48} />
          <h2 className="text-5xl font-bold text-primary mb-6">Wedding Party</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            The amazing people who will stand by our side as we say "I do"
          </p>
        </div>

        <div className="space-y-16">
          {/* Bride's Party */}
          <div className="fade-in">
            <h3 className="text-3xl font-bold text-center text-primary mb-12">Bride's Party</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {brideParty.map((member, index) => (
                <PartyCard key={index} member={member} />
              ))}
            </div>
          </div>

          {/* Groom's Party */}
          <div className="fade-in">
            <h3 className="text-3xl font-bold text-center text-primary mb-12">Groom's Party</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {groomParty.map((member, index) => (
                <PartyCard key={index} member={member} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeddingParty;