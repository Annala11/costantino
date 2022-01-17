import React from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import { useSelector } from 'react-redux';


function MyOrdersCars({ order }) {

  const specialists = useSelector(state => state.specialists.specialists);

  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  // разные специалисты для одного ордера
  const newSpec = specialists.filter(spec => spec.id === order.specialist_id);

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
          {newSpec[0].name}
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
}

export default MyOrdersCars;
