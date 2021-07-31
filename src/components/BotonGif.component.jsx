import React from 'react';
import { GrAdd, GrLinkDown } from 'react-icons/gr';
import '../assets/styles/components/BotonGif.styles.scss';

const BotonGif = ({ verMasIcono = true, btnDia = true }) => {
  const obtenerTipoBoton = verMasIcono ? 'verMas' : 'descarga';
  const obtenerTipoColor = btnDia ? 'dia' : 'noche';
  console.log(obtenerTipoBoton);
  return (
    <button
      label={`boton de ${obtenerTipoBoton}`}
      title={`Botón de ${obtenerTipoBoton}`}
      className={`botonGif__estilo--global botonGif__${obtenerTipoBoton}--${obtenerTipoColor}`}
    >
      {verMasIcono ? (
        <GrAdd className={`colorIcono--${obtenerTipoColor}`} />
      ) : (
        <GrLinkDown className={`colorIcono--${obtenerTipoColor}`} />
      )}
    </button>
  );
};

export default BotonGif;
