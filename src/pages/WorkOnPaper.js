import React from 'react';

export default function Paintings ({images}) {
  const filterByType =  images.filter((img) => img.type === 'work-on-paper');

  return( 
        <div className='container'>
          <div className='row'>
            <div>
            {filterByType.map(image => (
            <div key={image.id}>
            <img src={image.location} alt='' className='img-fluid mx-auto d-block'/>
            <div className='row-fluid text-center'>
              {image.title}-{image.year}-{image.technique} 
            </div>
            </div>
            ))
            }
            </div>          
          </div>
        </div>
    )
}



