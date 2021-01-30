import React from 'react'
import { useHistory } from 'react-router-dom';
import './Video.css';
function Video() {
    const history = useHistory()
    return (
        <section className="video-container">
            <video  src="/videos/discover.mp4" type="video/mp4" loop  autoPlay={true} muted >
              


            </video>
            
            <h1>WELCOME</h1>
        <button onClick={()=>history.push('/news')} >GET STARTED &nbsp;
        <i className="fa fa-angle-double-right fa-2x" aria-hidden="true"></i>
        </button>
        </section>
    )
}

export default Video
