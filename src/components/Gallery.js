import React from 'react'

function Gallery(props) {
  return (
    <div className="gallery">
        <div className="gallery-wrapper">
          {props.content.map((index) => 
          <div className="info-card">
            <div className="imagewrap">
              <img src={index.image}/>
            </div>
            <div className="infocard-label">
              <h2>{index.name}</h2>
            </div>
            <div className="infocard-desc">
              <p>
              {index.desc}
              </p>
            </div>
          </div>
          )}
        </div>
    </div>
  )
}

export default Gallery
