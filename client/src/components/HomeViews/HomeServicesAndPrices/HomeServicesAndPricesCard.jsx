import React from 'react';
import { useHistory } from 'react-router-dom';

import './HomeServicesAndPricesCard.css'

function HomeServicesAndPricesCard({ categoryParent }) {

  const history = useHistory();

  const relocationParentCategory = () => {
    history.push(`/servicesandprices/${categoryParent.id}`);
  }

  return (


    <div className='homeService'>
      <h3 onClick={relocationParentCategory} style={{ color: '#FFE4B5' }}>{categoryParent.name}</h3>

      {categoryParent.id === 1 &&
        <img onClick={relocationParentCategory} className='homeServicesImg' src="/categoryFoto/womensCategory.jpg" alt=""></img>
      }
      {categoryParent.id === 1 &&
        <p style={{ color: '#5F9EA0', margin: '15px', textShadow: '2px 2px 5px #4682B4', }}>{categoryParent.discription ? categoryParent.discription : 'ЛУЧШИЕ МАСТЕРА НАШЕГО САЛОНА ПОМОГУТ ПОДЧЕРКНУТЬ ТВОЮ ИНДИВИДУАЛЬНОСТЬ И КРАСОТУ'}</p>
      }

      {categoryParent.id === 2 &&
        <img onClick={relocationParentCategory} className='homeServicesImg' src="/categoryFoto/mensCategory.jpg" alt=""></img>
      }
      {categoryParent.id === 2 &&
        <p style={{ color: '#5F9EA0', margin: '15px', textShadow: '2px 2px 5px #4682B4' }} >{categoryParent.discription ? categoryParent.discription : 'ТВОЯ БРУТАЛЬНОСТЬ И СТИЛЬ - ИМЕННО В ЭТОМ МЫ РАЗБИРАЕМСЯ ЛУЧШЕ ВСЕГО! ТЫ НЕ ОСТАНЕШЬСЯ БЕЗ ЖЕНСКОГО ВНИМАНИЯ'}</p>
      }

      {categoryParent.id === 3 &&
        <img onClick={relocationParentCategory} className='homeServicesImg' src="/categoryFoto/childCategory.jpg" alt=""></img>
      }
      {categoryParent.id === 3 &&
        <p style={{ color: '#5F9EA0', margin: '15px', textShadow: '2px 2px 5px #4682B4' }} >{categoryParent.discription ? categoryParent.discription : 'ПОВСЕКИ И ПОДГОТОВКА ВАШЕГО РЕБЕНКА К ДЕТСКИМ, НО ВСЕ ЖЕ - СЕРЬЕЗНЫМ МЕРОПРИЯТИЯМ, МЫ С РАДОСТЬЮ И ВЕСЕЛЬЕМ ПОМОЖЕМ ВАМ'}</p>
      }
    </div>
  );
}

export default HomeServicesAndPricesCard;
