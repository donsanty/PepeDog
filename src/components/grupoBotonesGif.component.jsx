import React from 'react';
import BotonGif from '../components/BotonGif.component';
import '../assets/styles/components/GrupoBotonesGif.styles.scss';

const GrupoBotonesGif = () => {
  return (
    <div className="grupoBotones__contenedor">
      <BotonGif verMasIcono={true} btnDia={true} />
      <BotonGif verMasIcono={false} btnDia={true} />
    </div>
  );
};

export default GrupoBotonesGif;
