import React from 'react';

export default function ExVirtuelna({images}) {
  const filterByType =  images.filter((img) => img.type === 'virtuelna');

  return( 
        <div>
          {filterByType.map(image => (
          <div  className='container'>
            <div key={image.id}>
            <img src={image.location} alt='' className='img-fluid mx-auto d-block'/>
            <div className='row-fluid text-center'>
              {image.title}{image.year}{image.technique} 
            </div>
            </div>
          </div>    
          ))
          }        
        </div>
  )
}