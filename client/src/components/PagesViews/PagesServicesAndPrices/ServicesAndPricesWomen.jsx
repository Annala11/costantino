import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import React from 'react';
import ServicesAndPricesItem from './ServicesAndPricesItem';

function ServicesAndPricesWomen({ categoryParentId1, servicesWomen }) {

  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
console.log(categoryParentId1, 'categoryParentId1');
console.log(servicesWomen, 'servicesWomen1принимает');  
  return (
    <div>
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')} onClick={console.log(categoryParentId1?.id)}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>{categoryParentId1?.name}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            
           {/* { `${servicesWomen}${categoryParentId1?.id}.name` } */}
           { servicesWomen && servicesWomen.map(women => <ServicesAndPricesItem women={women} categoryParentId1={categoryParentId1} key={women.id} />) }
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default ServicesAndPricesWomen;
