import { useState, useEffect } from 'react'
import InputComponent from '../components/inputComponent'
import SelectComponent from '../components/selectComponent'
import { costoM2, datosPropiedad, datosUbicacion } from '../utils/data'
import Swal from 'sweetalert2'

export default function Home() {
  const [precio, setPrecio] = useState(0)
  const [propiedad, setPropiedad] = useState(0)
  const [ubicacion, setUbicacion] = useState(0)
  const [metros, setMetros] = useState(0)
  const [fecha, setFecha] = useState(0)

  const handlerDate = (date) => {
    let fecha = new Date()
    let dia = fecha.getDate()
    let mes = fecha.getMonth() + 1
    let año = fecha.getFullYear()
    let hora = fecha.getHours()
    let minutos = fecha.getMinutes()
    let segundos = fecha.getSeconds()
    let fechaFormateada = `${dia}/${mes}/${año} ${hora}:${minutos}:${segundos}`
    return fechaFormateada
  }

  const handlerClick = () => {
    if (propiedad === 0 || ubicacion === 0 || metros === 0) {
      Swal.fire({
        title: 'Error!',
        text: 'Debes completar todos los datos en pantalla..',
        icon: 'error',
        confirmButtonText: 'Aceptar',
      })
      return
    } else {
      Swal.fire({
        title: 'Exito!',
        text: 'Se ha realizado la cotización con éxito',
        icon: 'success',
        confirmButtonText: 'Aceptar',
      })
    }
    setFecha(handlerDate(new Date()))
    const precio = propiedad.value * ubicacion.value * metros * costoM2
    setPrecio(precio.toFixed(2))
  }

  const handlerSaveClick = () => {
    if (precio === 0) {
      Swal.fire({
        title: 'Error!',
        text: 'Debes realizar la cotización primero..',
        icon: 'error',
        confirmButtonText: 'Aceptar',
      })
      return
    }

    const data = {
      fecha: fecha,
      propiedad: propiedad.name,
      ubicacion: ubicacion.name,
      metros: metros,
      precio: precio,
    }
    const history = JSON.parse(localStorage.getItem('history')) || []
    history.push(data)
    localStorage.setItem('history', JSON.stringify(history))
    Swal.fire({
      title: 'Exito!',
      text: 'Se ha guardado la cotización con éxito',
      icon: 'success',
      confirmButtonText: 'Aceptar',
    })
  }

  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '0 30px',
        }}
      >
        <div style={{ flex: '1', textAlign: 'center' }}>
          <h1 style={{ margin: '0', marginLeft: '130px' }}>SEGUROS DEL HOGAR</h1>
        </div>
        <a
          href={`/history`}
          style={{
            backgroundColor: 'white',
            marginLeft: '30px',
            padding: '10px 15px',
            borderRadius: '5px',
          }}
        >
          HISTORIAL
        </a>
      </div>
      <div
        style={{
          flex: 1,
          width: '80vw',
          backgroundColor: 'white',
          borderRadius: '10px',
          margin: 'auto',
          marginTop: '30px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '30px',
          boxShadow: '26px 28px 15px -8px rgba(0,0,0,0.15)',
          borderRadius: '0.7rem', 
        }}
      >
        <h2 style={{ marginTop: '30px', color: 'black' }}>
          Completa los datos solicitados
        </h2>
        <SelectComponent
          key={1}
          list={datosPropiedad}
          name="Selecciona el tipo de propiedad"
          onChange={(value) => setPropiedad(value)}
        />
        <SelectComponent
          key={2}
          list={datosUbicacion}
          name="Selecciona su ubicación"
          onChange={(value) => setUbicacion(value)}
        />
        <InputComponent
          name="Ingresa los Metros cuadrados:"
          onChange={(value) => setMetros(value)}
        />
        <div>
          <button
            type="button"
            onClick={() => handlerClick()}
            style={{
              width: '10vw',
              backgroundColor: '#730dd3',
              padding: '10px 15px',
              borderRadius: '5px',
              marginTop: '20px',
              cursor: 'pointer',
            }}
          >
            COTIZAR
          </button>
          <button
            onClick={() => handlerSaveClick()}
            style={{
              width: '10vw',
              backgroundColor: '#730dd3',
              padding: '10px 15px',
              borderRadius: '5px',
              marginTop: '20px',
              cursor: 'pointer',
            }}
          >
            GUARDAR
          </button>
        </div>
        <h2 style={{ marginTop: '30px', color: 'black', color: '#730dd3' }}>
          Precio estimado: ${precio}
        </h2>
      </div>
    </>
  )
}
