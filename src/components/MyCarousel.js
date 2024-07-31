import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './MyCarousel.css';

// Importando as imagens diretamente
import pitaImage from '../assets/pita.webp';
import paozimImage from '../assets/paozim.jpg';
import paoSirioImage from '../assets/pao-sirio.jpg';

const MyCarousel = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 3
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const items = [
    { name: "Item 1", description: "Descrição do Item 1", price: "R$ 10,00", img: pitaImage },
    { name: "Item 2", description: "Descrição do Item 2", price: "R$ 20,00", img: pitaImage },
    { name: "Item 3", description: "Descrição do Item 3", price: "R$ 30,00", img: pitaImage },
    { name: "Item 4", description: "Descrição do Item 4", price: "R$ 40,00", img: pitaImage },
    { name: "Item 5", description: "Descrição do Item 5", price: "R$ 50,00", img: pitaImage }
  ];

  return (
    <div className="carousel-container">
      <Carousel
        swipeable={true}
        draggable={true}
        showDots={true}
        responsive={responsive}
        ssr={true}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}
        keyBoardControl={true}
        customTransition="transform 300ms ease-in-out"
        transitionDuration={500}
        containerClass="carousel-container"
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {items.map((item, index) => (
          <div className="carousel-item" key={index}>
            <img src={item.img} alt={item.name} className="carousel-item-image"/>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <p>{item.price}</p>
            <button className="buy-button">Comprar</button>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default MyCarousel;
