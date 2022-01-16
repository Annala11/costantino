import React from 'react';

function MenServicesCard({ men, categoryParentId2 }) {
  return (
    <>
      {men.category_id === categoryParentId2.id && men.name}
    </>
  );
}

export default MenServicesCard;
