import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import React from 'react';
import WomenServicesCard from './WomenServicesCard';

function WomenServices({ categoryParentId1, servicesWomen }) {

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
        <Typography sx={{ width: '33%', flexShrink: 0 }}>{categoryParentId1?.name}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          {
            servicesWomen && servicesWomen.map(women =>
              <WomenServicesCard women={women} categoryParentId1={categoryParentId1} key={women.id} />
            )}
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
}

export default WomenServices;

