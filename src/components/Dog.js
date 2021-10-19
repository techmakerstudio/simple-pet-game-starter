import React, { useState } from 'react'

function Dog(props) {
  return (
    <div className='col-md-4'>
      <div className="card mb-4">
        <img src="https://images.pexels.com/photos/2253275/pexels-photo-2253275.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" className="card-img-top" alt="It's a dog!" />
        <div className="card-body">
          <h5 className="card-title">Dog Name Goes Here</h5>
          <p className="card-text">Breed</p>


          <p className='mb-1'><small>HUNGER</small></p>
          <div className='row'>
            <div className='col-10'>
              <div className="progress mb-3">
                <div className="progress-bar" role="progressbar" style={{width: '25%'}}></div>
              </div>
            </div>
            <div className='col-2'>
              <a href="#" className="btn btn-info btn-sm">Feed</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dog;
