import React from 'react'

const InputComponent = ({ name, onChange }) => {
  const handleSelectChange = (event) => {
    const newValue = parseFloat(event.target.value)
    onChange(newValue)
  }

  return (
    <div style={{ marginTop: '10px' }}>
      <h4
        style={{
          color: 'black',
          textAlign: 'center',
          margin: '0',
        }}
      >
        {name}
      </h4>
      <input
        type="number"
        placeholder="Ingrese numero de m2"
        style={{
          marginBottom: '10px',
          width: '58.7vw',
          height: '25px',
          borderRadius: '5px',
          border: '1px solid  #730dd3',
          backgroundColor: 'white',
          color: 'black',
          paddingLeft: '10px',
        }}
        onChange={handleSelectChange}
      />
    </div>
  )
}

export default InputComponent
