import { Accordion, AccordionDetails, AccordionSummary, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
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
      sx={{ width: '100%' }}
      expandIcon={<ExpandMoreIcon />}
      aria-controls="panel1bh-content"
      id="panel1bh-header"
    >
      <Typography sx={{ width: '33%', flexShrink: 0 }}>{categoryParentId2?.name}</Typography>
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
              servicesMen && servicesMen.map(men =>
                <MenServicesCard men={men} categoryParentId2={categoryParentId2} key={men.id} />
              )}
           </TableBody>
          </Table>
        </TableContainer>
      </AccordionDetails>
    </Accordion>
  );
}

export default MenServices;
