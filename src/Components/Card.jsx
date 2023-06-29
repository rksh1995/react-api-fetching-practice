import React from 'react'
import "./style.css"

const Card = (props) => {
  return (
    <>
      <div className='card-container'>
        <div className='card'>
            < img className="card-image" src={props.download_url} width={200} height={200}/>
            <h3 className='card-description'>{props.author}</h3>
            <p className='card-text'>{props.width}</p>
            <p className='card-text'>{props.height}</p>
        </div>
      </div>
    </>
  )
}

export default Card
