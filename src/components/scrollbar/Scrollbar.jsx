import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; 
import PerformanceCard from '../PerformanceCard';
import "./scroll.css"

export function Scrollbar() {
  const images = [
    {
      src: 'https://cdn0.iconfinder.com/data/icons/most-usable-logos/120/Amazon-512.png',
      HWP: " 1.03M",
      rating: 4,
      salesData: [
        { sales: 'Target', profit: '1.38', contribution: '651.27K',Grossprofit :'8.02M'},
        { sales: '67 Crores', profit: 'Crores', contribution: '' },
      ],
    },
    {
      src: 'https://ih1.redbubble.net/image.5467165484.5660/st,small,507x507-pad,600x600,f8f8f8.jpg',
      HWP: "93K",
      rating: 3,
      salesData: [
        { sales: 'Target', profit: '1.28', contribution: '4.8K',Grossprofit :' 16.04K' },
        { sales: '45 Crores', profit: 'Crores', contribution: '' },
      ],
    },
    {
      src: 'https://cdn.brandfetch.io/idEA_W4hs4/w/800/h/800/theme/dark/icon.jpeg?k=id64Mup7ac&t=1727182221083',
      HWP: "98K",
      rating: 5,
      salesData: [
        { sales: 'Target', profit: '1.42', contribution: '33.38K' ,Grossprofit :' 945.70K'},
        { sales: '90 Crores', profit: 'Crores', contribution: '' },
      ],
    },
    {
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFwR2aKZH9j4qxAqLFwVyUQbyjhq-3SnsJyw&s',
      HWP: "112.79K",
      rating: 2,
      salesData: [
        { sales: 'Target', profit: '0.61', contribution: '44.1K',Grossprofit :'1.04M' },
        { sales: '50 Crores', profit: 'Crores', contribution: '' },
      ],
    },
    {
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5U5G-dGL9YfCejzy1sKzvGYPEdb9bWOqyeA&s',
      HWP: "154.51K",
      rating: 3,
      salesData: [
        { sales: 'Target', profit: '0.68', contribution: '16.56K',Grossprofit :'119.06K' },
        { sales: '30 Crores', profit: 'Crores', contribution: '' },
      ],
    }
  ];

  const [currentData, setCurrentData] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeImage, setActiveImage] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [autoPlay, setAutoPlay] = useState(true); // Manage autoplay with state

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  const handleImageClick = (data) => {
    if (currentData && currentData.src === data.src) {
      // Deselecting the currently active image
      setIsVisible(false);
      setCurrentData(null);
      setActiveImage(null);
      setAutoPlay(true); // Resume autoplay
    } else {
      // Selecting a new image
      setCurrentData(data);
      setIsVisible(true);
      setActiveImage(data.src);
      setAutoPlay(false); // Pause autoplay
    }
  };

  const performanceCardStyle = {
    position: 'fixed',
    top: '30%',
    left: '-2%',
    width: '150px',
    backgroundColor: '#fff',  
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
    zIndex: 1000,
    transition: 'left 0.5s ease', 
    display: 'flex',
    flexDirection: 'column', 
    opacity: isVisible ? 1 : 0,
    right: isOpen ? 'translate-x-0' : 'translate-x-full',
  };

  return (
    <div className="carousel-container mt-10 mr-2" style={{ position: 'relative' }}>
      <Carousel
        autoPlay={autoPlay} // Use state to control autoplay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        showArrows={true}
        interval={2000}
        transitionTime={500}
        stopOnHover
        dynamicHeight={false}
      >
        {images.map((image, index) => (
          <div 
            key={index} 
            onClick={() => handleImageClick(image)} 
            style={{ cursor: 'pointer', transform: activeImage === image.src ? 'scale(1)' : 'scale(1)', transition: 'transform 0.3s' }}
          >
            <img src={image.src} alt={`Carousel ${index + 1}`} className='rounded-full mb-10 mr-2' />
          </div>
        ))}
      </Carousel>

      <div style={performanceCardStyle} className='ml-10 mt-28 relative w-56' onClick={() => setIsOpen(false)}>
        {currentData && (
          <PerformanceCard  
            src={currentData.src}
            totalSales={currentData.totalSales} 
            rating={currentData.rating} 
            salesData={currentData.salesData} 
            currentData={currentData}
          />
        )}
      </div>
    </div>
  );
}
