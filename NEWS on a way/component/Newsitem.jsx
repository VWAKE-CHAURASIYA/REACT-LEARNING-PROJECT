/* eslint-disable react/prop-types */
import image from '../assets/newslogo.png'

// destructing the the data

const Newsitem = ({title, description, src, url}) => {
  return (
    <div className="card text-light bg-dark mb-3 d-inline-block mx-3" style={{maxWidth:"345px"}}>

  <img src={src ? src:image} style={{height: "200px", width:"340px"}} className="card-img-top  " alt="..."/>
  <div className="card-body">
  <h5 className="card-title">{title ?title.slice(0, 50) : "Breaking news"}</h5>
     <p className="card-text">{description ? description.slice(0, 100) : "Updates: What is going on today, Check out here."}</p>
    <a href={url} className="btn btn-primary">Read More</a>
  </div>
</div> 
  )
}

export default Newsitem;

