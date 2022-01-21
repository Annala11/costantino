import { Avatar } from '@mui/material';
import React from 'react';

function NewOrderSpec({ spec }) {
  return (
    <>
    <div style={{textAlign:'center'}}>{spec?.name}</div>
    <div >
      <Avatar style={{height:'200px',width:'150px',marginLeft:'37%'}} src={`/specialists/spec${spec?.id}.jpg`} />
    </div>
    </>
  );
}

export default NewOrderSpec;
