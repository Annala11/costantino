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
import { useHistory } from 'react-router-dom';


function SpecialistsList({ specs }) {
  let specialists;
  let statespecs = useSelector(state => state.specialists.specialists);
  const history = useHistory();
  if (specs) {
    specialists = specs;
  } else {
    specialists = statespecs;
  }


  const [specialistId, setSpecialistId] = useState(0);

  const handleToggle = (event) => {
    if (event.target.value === 'off') {
      setSpecialistId(-1)
    } else {
      let newId = event.target.dataset.specid;
      setSpecialistId(newId);
    }
  };

  function handleSpec(event) {
    event.preventDefault();
    const queryParams = new URLSearchParams(window.location.search);
    const serviceid = queryParams.get("serviceid");
    if(!serviceid || !specialistId){
      return;
    }
    let url = serviceid ?
      `/neworder?serviceid=${serviceid}&specid=${specialistId}` :
      `/neworder?specid=${specialistId}`;
    history.push(url);
  }

  return (
    <div className="allSpecialistsBlock">
      <List dense sx={{ width: '100%', maxWidth: '80%', bgcolor: 'background.paper', textAlign: 'center' }}>
        {specialists.length && specialists.map(specialist =>


          <ListItem className="specialistBlock"
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

      <a href="#" className='specialistButton mainButton' onClick={handleSpec}>
        ВЫБРАТЬ СПЕЦИАЛИСТА
      </a>
    </div>
  )
}
export default SpecialistsList;
