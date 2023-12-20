import React from 'react'

const SelectComponent = ({ list, name, onChange }) => {
  const handleSelectChange = (event) => {
    onChange({
      value: event.target.value,
      name: event.target.selectedOptions[0].text,
    })
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
      <select
        style={{
          borderColor: '#730dd3',
          marginBottom: '10px',
          width: '60vw',
          height: '30px',
          backgroundColor: 'white',
          borderRadius: '5px',
          color: 'black',
        }}
        onChange={handleSelectChange}
      >
        {Array.isArray(list) && list.length > 0 ? (
          list.map((item) => (
            <option key={item.factor} value={item.factor}>
              {item.tipo}
            </option>
          ))
        ) : (
          <option value="">No options available</option>
        )}
      </select>
    </div>
  )
}

export default SelectComponent
