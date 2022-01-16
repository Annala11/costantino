import React from 'react';

function KidServicesCard({ kid, categoryParentId3 }) {
  return (
    <>
      {kid.category_id === categoryParentId3.id && kid.name}
    </>
  );
}

export default KidServicesCard;
