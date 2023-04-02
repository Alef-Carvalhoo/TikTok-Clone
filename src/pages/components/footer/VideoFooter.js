import React from "react";
import "./VideoFooter.css";
import MusicNoteIcon from '@mui/icons-material/MusicNote';

function VideoFooter({name, description, music}) {
  return (
    <div className="VideoFooter">
      <div className="VideoFooter__text">
        <h3>@{name}</h3>
        <p>{description}</p>
        <div className="VideoFooter__music">
          <MusicNoteIcon className="VideoFooter__icon"/> 
          <div className="VideoFooterMusic__text">
          <p>{music}</p>
          </div>

        </div>
      </div>
      <img 
        className="VideoFooter__record"
        alt="Imagem de um vinil girando"
        src="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/vinil.png"
      />
    </div>
  );
}

export default VideoFooter;
