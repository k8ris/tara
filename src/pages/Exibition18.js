import React from 'react';

export default function Exibition18 ({images}) {
  const filterByType =  images.filter((img) => img.type === 'exibition18');

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



