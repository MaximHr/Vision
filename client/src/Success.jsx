import React from 'react';
import { useWindowSize } from "@uidotdev/usehooks";
import Confetti from 'react-confetti';
import {Link} from 'react-router-dom';

const Success = () => {
  const { width, height } = useWindowSize()
  return (
    <div className='section-space container success-page'>
      <Confetti
        width={width}
        confettiSource={{x: 100, y: 100}}
        numberOfPieces={200}
        recycle={false}
        height={height}
      />
      <Confetti
        width={width}
        confettiSource={{x: width - 100, y: 100}}
        numberOfPieces={200}
        recycle={false}
        height={height}
      />
      <h1 className="title">Плащането беше успешно!</h1>
      <p className="text">Изпратихме Вашите билети по имейл. Благодарим за направената покупката! </p>
      <Link to='/events' className="btn btn-hero" style={{padding: '1rem 2rem'}}>Към събития</Link>
    </div>
  )
}

export default Success;