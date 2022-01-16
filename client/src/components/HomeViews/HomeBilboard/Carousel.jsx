import React, { useEffect, useState, Children, cloneElement } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

import './Carousel.css'

function Carousel({ children }) {

  const PAGE_WIDHT = 450;

  const [pages, setPages] = useState([]);
  const [offset, setOffset] = useState(0);

  const handleLeftArrowClick = () => {
    setOffset(currentOffset => {
      const newOffset = currentOffset + PAGE_WIDHT;
      return Math.min(newOffset, 0);
    })
  };

  const handleRightArrowClick = () => {
    setOffset((currentOffset) => {
      const newOffset = currentOffset - PAGE_WIDHT;
      const maxOffset = -(PAGE_WIDHT * (pages.length - 1));
      return Math.max(newOffset, maxOffset);
    })
  };

  useEffect(() => {
    setPages(

      Children.map(children, child => {
        return cloneElement(child, {
          style: {
            height: '100%',
            minWidht: `${PAGE_WIDHT}px`,
            maxWidht: '${PAGE_WIDHT}px',
          }
        })
      })

    )
  }, []);

  return (
    <div className='main-container'>
      <FaChevronLeft className='arrow' onClick={handleLeftArrowClick} />
      <div className='window'>
        <div className='all-pages-container'

          style={{
            transform: `translateX(${offset}px)`,
          }}
        >
          {pages}
        </div>
        <FaChevronRight className='arrow' onClick={handleRightArrowClick} />
      </div>
    </div>
  );
}
export default Carousel;
