import React, { useEffect, useState } from 'react';
// import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ReviewBlock from '../ReviewBlock/ReviewBlock.jsx';
import ReviewForm from '../ReviewForm/ReviewForm.jsx';
import { initReviewsAC } from '../../../../redux/ActionCreators/reviewsAC';
import styles from './ReviewList.module.css';
// import ReviewMessageModal from '../ReviewMessageModal/ReviewMessageModal.jsx';
import Login from '../../../ProfileView/Login/Login.jsx';

import Button from '@mui/material/Button';

function ReviewsList() {

  const [modal, setModal] = useState(false);
  const [writeReview, setWriteReview] = useState(false);

  const { user } = useSelector(state => state.users);

  const { reviews } = useSelector(state => state.reviews);
  const dispatch = useDispatch();

  // пользователь может оставить отзыв только если он авторизован
  const handleAuth = () => {
    if (user.isAuth) {
      setModal(!modal)
    } else {
      setWriteReview(!writeReview);
    }
  }

  useEffect(() => {
    fetch('/reviews')
      .then(res => res.json())
      .then(reviews => dispatch(initReviewsAC(reviews)))
  }, [dispatch])

  // TODO - get users from users table for reviews, and branch
  return (
    <div >
      <div className={styles.buttonContainer}>

        <Button
          variant="contained" onClick={handleAuth}>Оставить отзыв</Button>
      </div>
      <div className={styles.containerReview}>
        {reviews.length ? reviews.map((review) => <ReviewBlock key={review.id} review={review} />) : <div>Нет Отзывов!</div>}
        {modal && <ReviewForm isOpen={setModal} />}
        {writeReview && <Login />}
      </div>



    </div>
  );
}

export default ReviewsList;
