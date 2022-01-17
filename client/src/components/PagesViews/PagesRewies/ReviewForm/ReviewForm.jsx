import React, { useRef } from 'react';
import { useState } from 'react';

import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

// modal window
function ReviewForm() {

  const [open, setOpen] = useState(true);

  const textField = useRef(null);

  // const handleClickOpen = () => {
  //   setOpen(true);
  // };
  const handleClose = () => {
    setOpen(false);
  };

  const handleSave = () => {
    console.log(textField?.current?.value);
    handleClose();
  };

  return (
    <>

      <div>
        {/* <Button variant="outlined" onClick={handleClickOpen}>
          Open dialog
        </Button> */}
        <BootstrapDialog
          onClose={handleClose}
          aria-labelledby="customized-dialog-title"
          open={open}
        >
          <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
            Отзыв
          </BootstrapDialogTitle>
          <DialogContent dividers>
            <Box
              sx={{
                width: 500,
                height: 500,
                maxWidth: '100%',
              }}
            >

              <TextField fullWidth label="fullWidth" id="fullWidth" inputRef={textField} />
            </Box>
          </DialogContent>
          <DialogActions>
            <Button autoFocus onClick={handleSave}>
              Сохранить
            </Button>
          </DialogActions>
        </BootstrapDialog>
      </div>
    </>
  );
}

export default ReviewForm;
