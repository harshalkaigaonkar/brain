import React from 'react';
import './FaceRecgnition.css';

const FaceRecognition = ({ imageUrl , dist}) => {
    // const {top_row , right_col , left_col , bottom_row} = box
    return (
          <div className='center ma'>
             <div className='absolute mt2'>
                 <img className='grow' id='inputimage' alt='' src={imageUrl} width='500px' height='auto'/>
                 <div className='bounding-box' style={{top: dist.topRow , right: dist.rightCol , left: dist.leftCol , bottom: dist.bottomRow}}></div>
                 {/* {console.log} */}
            </div>
          </div>
    );
}

export default FaceRecognition;