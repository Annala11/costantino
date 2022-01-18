import { Accordion, AccordionDetails, AccordionSummary, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
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
        sx={{ width: '100%' }}
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1bh-content"
        id="panel1bh-header"
      >
        <Typography sx={{ width: '33%', flexShrink: 0 }}>{categoryParentId1?.name}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <TableContainer component={Paper}>
          <Table sx={{ width: "100%" }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Услуга</TableCell>
                <TableCell align="right">Цена</TableCell>
                <TableCell align="right">Время(минут)</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {
                servicesWomen && servicesWomen.map(women =>
                  <WomenServicesCard women={women} categoryParentId1={categoryParentId1} key={women.id} />
                )}
            </TableBody>
          </Table>
        </TableContainer>
      </AccordionDetails>
    </Accordion>
  );
}

export default WomenServices;

