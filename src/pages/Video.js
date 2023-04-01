import React, { useRef, useState } from 'react';
import VideoFooter from './components/footer/VideoFooter';
import VideoSidebar from './components/sidebar/VideoSidebar';
import "./video.css";


function Video() {

   const videoRef = useRef(null) 
    const [play, setPlay] = useState(false)
    function handdlestart(){

        if(play){
            videoRef.current.pause()
            setPlay(false)

        } else{
            videoRef.current.play()
            setPlay(true)
        }
        

       
    }

  return (
    <div className='video'>
        <video 
            className='video__player'
            ref={videoRef}
            onClick={handdlestart}
            loop
            src="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/brecker2.mp4"
        ></video>
        <VideoSidebar /> 
        <VideoFooter />
    </div>
  )
}

export default Video