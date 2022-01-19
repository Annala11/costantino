import { Checkbox, ListItem } from '@mui/material';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
// import Checkbox from '@mui/material/Checkbox';
import Avatar from '@mui/material/Avatar';
import Switch from '@mui/material/Switch';
import { Link } from 'react-router-dom';


function SpecialistsList() {

  const specialists = useSelector(state => state.specialists.specialists)


  const [specialistId, setSpecialistId] = useState(0);

  const handleToggle = (event) => {
    console.log(event.target.value);
    if (event.target.value === 'off') {
      setSpecialistId(-1)
    } else {
      let newId = event.target.dataset.specid;
      setSpecialistId(newId);
    }
  };

  return (
    <>
      <List dense sx={{ width: '100%', maxWidth: '80%', bgcolor: 'background.paper', textAlign: 'center' }}>
        {specialists.length && specialists.map(specialist =>


          <ListItem sx={{ marginTop: '50px' }}
            key={specialist.id}
            secondaryAction={
              <Checkbox
                control={<Switch defaultChecked />} label="Label"
                edge="end"
                onChange={handleToggle}
                data-specid={specialist.id}
                checked={+specialist.id === +specialistId}
                inputProps={{ 'data-specid': specialist.id }}
              />
            }
            disablePadding
          >
            <ListItemButton>
              <ListItemAvatar>
                <Avatar
                  // alt={`Avatar n°${value + 1}`}
                  src={`/specialists/spec${specialist.id}.jpg`}
                />
              </ListItemAvatar>
              <ListItemText id={`checkbox-list-secondary-label-${specialist.id}`} primary={specialist.name} />
            </ListItemButton>
          </ListItem>

        )
        }
      </List>
      
      <button className='specialistButton'>
        <Link className='specialistButtonLink' to='/neworder'> Выбрать  специалиста </Link>
      </button>
    </>
  )
}
export default SpecialistsList;
