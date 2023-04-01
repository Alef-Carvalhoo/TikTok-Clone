import React from "react";
import "./VideoFooter.css";
import MusicNoteIcon from '@mui/icons-material/MusicNote';

function VideoFooter() {
  return (
    <div className="VideoFooter">
      <div className="VideoFooter__text">
        <h3>@Alef_Carvalho</h3>
        <p>Descrição do Video</p>
        <div className="VideoFooter__music">
          <MusicNoteIcon className="VideoFooter__icon"/> 
          <div className="VideoFooterMusic__text">
          <p>Titulo da musica</p>
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
