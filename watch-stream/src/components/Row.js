import React, { useEffect, useState } from 'react'
import './Row.css'
import axios from '../axios'

function Row(props) {
    const [shows, setShows] = useState([])
    console.log('props', props)
    const title = props.title
    useEffect( () => {
      setShows(props.shows)
    }, [shows])

    function handleClick(){
        
    }

    
    const base_url = 'https://podcast-api.netlify.app/shows';

  return (
    <div className='row'>
        <h2>{title}</h2>
        <div className='row_posters'>
          {shows  
          ? shows.map(
            (show => (
            <div className='show' onClick={handleClick}>
              <img className='row_poster'src= {show.image}/>
              <h6>{show.title}</h6>
              <h6>{show.seasons}</h6>
              <h6>{new Date(show.updated).toLocaleString('en-US')}</h6>
            </div>
            )
              
          ))
        : null}
        </div>

    </div>
  )
}

export default Row