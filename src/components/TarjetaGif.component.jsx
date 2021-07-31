import React from 'react';
import GrupoBotonesGif from './grupoBotonesGif.component';
import '../assets/styles/components/TarjetaGift.styles.scss';

const TarjetaGift = ({ tipoTarjeta = true }) => {
  const obtenerTipoTarjeta = tipoTarjeta ? 'dia' : 'noche';
  return (
    <div className={`tarjetaGift__contenedor tarjeta--${obtenerTipoTarjeta}`}>
      <GrupoBotonesGif />
    </div>
  );
};

export default TarjetaGift;
