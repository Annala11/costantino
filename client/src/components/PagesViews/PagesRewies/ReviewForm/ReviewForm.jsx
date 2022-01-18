import React, { useRef } from 'react';
import { useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addReviewAC } from '../../../../redux/ActionCreators/reviewsAC';

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
import Rating from '@mui/material/Rating';
// import ReviewMessageModal from '../ReviewMessageModal/ReviewMessageModal';

// import Typography from '@mui/material/Typography';


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
    <DialogTitle sx={{ m: 0, p: 2, position: 'relative' }} {...other}>
      {children}
      {onClose ? (
        <IconButton style={{ position: "absolute" }}
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: '8px',
            top: '8px',
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
  const [rating, setRating] = useState(5);

  // const [messageModal, setMessageModal] = useState(false); for messager after write review

  const reviewText = useRef(null);

  // const { user } = useSelector(state => state.users);
  // console.log('in review form');
  // console.log(user);

  // TODO - remove after test
  // const user = {
  //   id: 4,
  //   phone: 999,
  //   name: 'anna'
  // };
  /////////////

  console.log('in review form');
  console.log(user);

  const dispatch = useDispatch();

  const titleText = useRef(null);

  const handleClose = () => {
    setOpen(false);
  };

  const handleSave = () => {

    fetch('/reviews/addreview', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        user_id: user.id,
        text: reviewText.current.value,
        title: 3,// TODO - remove after test
        rating: rating,
        branch_id: 1 // TODO - remove after test
      })
    })
      .then(res => res.json())
      .then(data => {
        if (data.error) {
          console.log('Что то пошло не так!');
        } else {
          dispatch(addReviewAC(data));
        }
      })

    handleClose();
    // setMessageModal(true);

  };
  // TODO - select branch useSelector(currentBranch)
  return (
    <>

      <div>
        <BootstrapDialog
          onClose={handleClose}
          aria-labelledby="customized-dialog-title"
          open={open}
        >
          <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
            Отзыв
          </BootstrapDialogTitle>
          <Box
            sx={{
              '& > legend': { mt: 2 },
            }}
          >
            <Rating sx={{
              marginLeft: 2,
            }}
              name="simple-controlled"
              value={rating}
              size="large"
              onChange={(event, newValue) => {
                setRating(newValue);
              }}
            />
          </Box>
          <DialogContent dividers>
            <Box
              sx={{
                width: 500,
                height: 200,
                maxWidth: '100%',
              }}
            >

              <TextField sx={{
                marginBottom: 2
              }}
                fullWidth label="Заголовок" id="fullWidth" inputRef={titleText} />
              <TextField sx={{
                width: '100%',
                height: '100%',
              }}
                id="outlined-multiline-static"
                label="Ваш отзыв"
                multiline
                rows={4}
                inputRef={reviewText}
              />
            </Box>
          </DialogContent>

          <DialogActions>
            <Button autoFocus onClick={handleSave}>
              Отправить
            </Button>
          </DialogActions>
        </BootstrapDialog>
      </div>
      {/* {messageModal && <ReviewMessageModal open={!messageModal} onClose={setMessageModal} />} */}
    </>
  );
}

export default ReviewForm;
