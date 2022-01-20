import React from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Accordion, AccordionDetails, AccordionSummary, Avatar, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material';
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
    <Accordion style={{ backgroundColor: 'gray' }} expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
      <AccordionSummary
        sx={{ width: '100%' }}
        onChange={handleChange('panel1')}
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1bh-content"
        id="panel1bh-header"
      >
        <Typography style={{ color: 'black', fontWeight: 'bold', fontSize: '20px', marginLeft: "30px", minHeight: "40px", flexShrink: 0 }}>{order.date}</Typography>
      </AccordionSummary>
      <AccordionDetails >
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Cindy Baker" src={newSpec[0]?.photo} />
          </ListItemAvatar>
          <ListItemText
            primary={newSpec[0]?.name}
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: 'inline' }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >

                </Typography>
                {order.Services[0]?.name}
              </React.Fragment>
            }
          />
        </ListItem>
      </AccordionDetails>
    </Accordion>
  );
}

export default MyOrdersCars;
