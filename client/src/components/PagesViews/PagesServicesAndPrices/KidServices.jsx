import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import React from 'react';
import KidServicesCard from './KidServicesCard';

function KidServices({ categoryParentId3, servicesKid }) {

  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1bh-content"
        id="panel1bh-header"
      >
        <Typography sx={{ width: '33%', flexShrink: 0 }}>{categoryParentId3?.name}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          {
            servicesKid && servicesKid.map(kid =>
              <KidServicesCard kid={kid} categoryParentId3={categoryParentId3} key={kid.id} />
            )}
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
}

export default KidServices;
