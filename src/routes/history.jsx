export default function History() {
  const dataStorage = JSON.parse(localStorage.getItem('history'))

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
          <h1 style={{ margin: '0', marginLeft: '130px' }}>Ver Historial</h1>
        </div>
        <a
          href={`/`}
          style={{
            backgroundColor: 'white',
            marginLeft: '30px',
            padding: '10px 15px',
          }}
        >
          VOLVER
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
        <table
          style={{
            color: 'black',
            textAlign: 'center',
            width: '80vw',
          }}
        >
          <thead>
            <tr>
              <th>Fecha</th>
              <th>Propiedad</th>
              <th>Ubicación</th>
              <th>Metros</th>
              <th>Precio</th>
            </tr>
          </thead>
          <tbody>
            {dataStorage &&
              dataStorage.map((item, index) => (
                <tr key={index}>
                  <td>{item.fecha}</td>
                  <td>{item.propiedad}</td>
                  <td>{item.ubicacion}</td>
                  <td>{item.metros} m2</td>
                  <td>$ {item.precio}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  )
}
