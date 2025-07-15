import { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const QASection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What time does the ceremony start?",
      answer: "The ceremony will begin at 4:00 PM sharp. We recommend arriving 30 minutes early to find your seats and enjoy the pre-ceremony music."
    },
    {
      question: "What should I wear?",
      answer: "We're having a semi-formal outdoor wedding. For men, we suggest dress pants with a button-down shirt or blazer. For women, sundresses, cocktail dresses, or dress pants with a nice top work perfectly. Please avoid stilettos as the ceremony will be on grass."
    },
    {
      question: "Is the wedding indoors or outdoors?",
      answer: "Our ceremony will be held outdoors in the beautiful garden at Garden Vista Resort. The reception will be in a lovely pavilion that's partially covered. We have backup indoor options in case of rain."
    },
    {
      question: "Will there be parking available?",
      answer: "Yes! Garden Vista Resort has ample free parking available for all guests. Valet service will also be provided at no charge."
    },
    {
      question: "Can I bring a plus-one?",
      answer: "Plus-ones are welcome for married couples and long-term partners. If you're unsure whether your invitation includes a plus-one, please check your RSVP or contact us directly."
    },
    {
      question: "What time will the reception end?",
      answer: "The reception will run until 11:00 PM. We'll have dancing, dinner, and lots of celebration throughout the evening!"
    },
    {
      question: "Are children welcome?",
      answer: "We love children! Kids are absolutely welcome at our celebration. The venue has a beautiful garden area where little ones can play safely."
    },
    {
      question: "Will there be vegetarian/vegan options?",
      answer: "Absolutely! We'll have delicious vegetarian and vegan options available. Please let us know about any dietary restrictions when you RSVP."
    },
    {
      question: "What's the best way to get to the venue?",
      answer: "Garden Vista Resort is easily accessible by car and ride-share services. We recommend using GPS with the address: 123 Vineyard Lane, Napa Valley, CA. Detailed directions are in the Travel section."
    },
    {
      question: "Is there a gift registry?",
      answer: "Your presence is the greatest gift! If you'd like to give something, we've registered at Target and Williams Sonoma. Links can be found in your invitation or by contacting us directly."
    }
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="qa" className="section-padding bg-secondary/30">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16 fade-in">
          <HelpCircle className="mx-auto text-primary mb-4" size={48} />
          <h2 className="text-5xl font-bold text-primary mb-6">Questions & Answers</h2>
          <p className="text-xl text-muted-foreground">
            Everything you need to know about our special day
          </p>
        </div>

        <div className="space-y-4 fade-in">
          {faqs.map((faq, index) => (
            <div key={index} className="wedding-card">
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full flex justify-between items-center text-left"
              >
                <h3 className="text-lg font-semibold text-foreground pr-4">
                  {faq.question}
                </h3>
                {openIndex === index ? (
                  <ChevronUp className="text-primary flex-shrink-0" size={24} />
                ) : (
                  <ChevronDown className="text-primary flex-shrink-0" size={24} />
                )}
              </button>
              
              {openIndex === index && (
                <div className="mt-4 pt-4 border-t border-border animate-accordion-down">
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12 fade-in">
          <p className="text-muted-foreground mb-4">
            Have a question that's not answered here?
          </p>
          <button className="wedding-button">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default QASection;