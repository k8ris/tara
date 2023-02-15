import React from 'react';
import { Link } from 'react-router-dom';

export default function PastExibitions ({images}) {
  const filterByType =  images.filter((img) => img.type === 'past-exibition');
    return( 
    <div>
      {filterByType.slice(0,filterByType.length).map(image => (
      <div key={image.id} className="container">
      <Link to={image.year}><img src={image.location} alt='' className='img-fluid mx-auto d-block'/></Link>
      <div className='row-fluid text-center'>
      {image.title}{image.year}
      </div>
      </div>
      ))
      }
    </div>
  )
}