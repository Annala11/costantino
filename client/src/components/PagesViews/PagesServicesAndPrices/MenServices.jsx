import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import React from 'react';
import MenServicesCard from './MenServicesCard';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function MenServices({ servicesMen, categoryParentId2 }) {

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
        <Typography sx={{ width: '33%', flexShrink: 0 }}>{categoryParentId2?.name}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          {
            servicesMen && servicesMen.map(men =>
              <MenServicesCard men={men} categoryParentId2={categoryParentId2} key={men.id} />
            )}
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
}

export default MenServices;
