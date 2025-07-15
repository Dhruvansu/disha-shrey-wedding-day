import { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Wedding date: June 15, 2024 at 4:00 PM
    const weddingDate = new Date('2024-06-15T16:00:00').getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = weddingDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-40 romantic-glow">
      <div className="wedding-card bg-background/95 backdrop-blur-sm border-2 border-primary/20">
        <div className="flex items-center space-x-3 mb-3">
          <Clock className="text-primary" size={24} />
          <h3 className="text-lg font-semibold text-foreground">Until "I Do"</h3>
        </div>
        
        <div className="grid grid-cols-4 gap-3 text-center">
          <div>
            <div className="text-2xl font-bold text-primary">{timeLeft.days}</div>
            <div className="text-xs text-muted-foreground uppercase tracking-wide">Days</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-primary">{timeLeft.hours}</div>
            <div className="text-xs text-muted-foreground uppercase tracking-wide">Hours</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-primary">{timeLeft.minutes}</div>
            <div className="text-xs text-muted-foreground uppercase tracking-wide">Min</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-primary">{timeLeft.seconds}</div>
            <div className="text-xs text-muted-foreground uppercase tracking-wide">Sec</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;