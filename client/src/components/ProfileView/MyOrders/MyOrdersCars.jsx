import React from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';


function MyOrdersCars({ order }) {
  
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
      <Typography sx={{ width: '33%', flexShrink: 0 }}>{order.date}</Typography>
    </AccordionSummary>
    <AccordionDetails>
      <Typography>
        тут будет описание
      </Typography>
    </AccordionDetails>
  </Accordion>
  );
}

export default MyOrdersCars;
