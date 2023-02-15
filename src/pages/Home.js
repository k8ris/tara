export default function Home ({images}){
    const homeImg = images.filter((img) => img.type === 'home')[0].location
    return (
        <div className="container"> 
            <img src ={homeImg} alt="slika" className='img-fluid mx-auto d-block'/>
        </div>
    )
}