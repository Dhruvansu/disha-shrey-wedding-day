import { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import engagement1 from '@/assets/engagement-1.jpg';
import engagement2 from '@/assets/engagement-2.jpg';
import heroImage from '@/assets/hero-couple.jpg';

const PhotoGallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const photos = [
    { src: engagement1, alt: 'Disha and Shrey engagement photo 1' },
    { src: engagement2, alt: 'Disha and Shrey engagement photo 2' },
    { src: heroImage, alt: 'Disha and Shrey couple portrait' },
    { src: engagement1, alt: 'Disha and Shrey engagement photo 3' },
    { src: engagement2, alt: 'Disha and Shrey engagement photo 4' },
    { src: heroImage, alt: 'Disha and Shrey engagement photo 5' },
  ];

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (selectedImage === null) return;
    
    if (direction === 'prev') {
      setSelectedImage(selectedImage === 0 ? photos.length - 1 : selectedImage - 1);
    } else {
      setSelectedImage(selectedImage === photos.length - 1 ? 0 : selectedImage + 1);
    }
  };

  return (
    <section id="photos" className="section-padding bg-secondary/30">
      <div className="container mx-auto">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-5xl font-bold text-primary mb-6">Our Photos</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Capturing the beautiful moments of our journey together
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 fade-in">
          {photos.map((photo, index) => (
            <div
              key={index}
              className="group cursor-pointer overflow-hidden rounded-lg romantic-glow transition-all duration-300 hover:scale-105"
              onClick={() => openLightbox(index)}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage !== null && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center">
            <div className="relative max-w-4xl max-h-full p-4">
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 text-white hover:text-primary transition-colors z-10"
              >
                <X size={32} />
              </button>
              
              <button
                onClick={() => navigateImage('prev')}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-primary transition-colors z-10"
              >
                <ChevronLeft size={32} />
              </button>
              
              <button
                onClick={() => navigateImage('next')}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-primary transition-colors z-10"
              >
                <ChevronRight size={32} />
              </button>

              <img
                src={photos[selectedImage].src}
                alt={photos[selectedImage].alt}
                className="max-w-full max-h-full object-contain"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default PhotoGallery;