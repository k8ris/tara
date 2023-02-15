import React from 'react';

export default function Bio ({images}) {
//   const locationBioImage= images.filter((image) => image.type === 'bio-image' ? image : '')[0].location;
  return (
    <div className='container'>
       <div className="row">
         <div className="col-md-6 col-sm-12">
         Rođena u Beogradu 1984. godine.
         Diplomirala na Fakultetu primenjenih umetnosti u Beogradu 2012. godine na odseku zidno slikarstvo.
         Danas radi i stvara u Beogradu iz oblasti slikarstva.
         <br/>
         <br/>
         tinolinaradulovic@gmail.com<br/>
         {/* <SocialFollow /> */}
         +381621803862
         <br/>
         <br/>
         </div>
         <div className="col-md-6 col-sm-12">
           {/* <img src ={locationBioImage} alt="slika" className='img-fluid mx-auto d-block'/> */}
         </div>  
       </div>
     </div>
  )
}