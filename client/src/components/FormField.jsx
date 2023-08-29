import React from 'react';
import PropTypes from 'prop-types';

const FormField = ({
  labelName,
  type,
  name,
  placeholder,
  value,
  handleChange,
  isSurpriseMe,
  handleSurpriseMe,
}) => {
  // Renderiza un campo de entrada y opcionalmente un botón "Surprise Me".
  // La etiqueta del campo se muestra junto con el botón "Surprise Me" (si isSurpriseMe es verdadero).
  // El campo de entrada utiliza las propiedades pasadas para configurar su comportamiento y apariencia.
  // Se utiliza handleChange para manejar los cambios en el valor del campo.
  return (
    <div>
      <div className='flex items-center gap-2 mb-2'>
        <label htmlFor={name} className='block text-sm font-medium text-gray-900'>
          {labelName}
        </label>
        {isSurpriseMe && (
          <button
            type='button'
            onClick={handleSurpriseMe}
            className='font-semibold text-xs bg-[#ECECF1] py-1 px-2 rounded-[5px] text-black'
          >
            Surprise Me
          </button>
        )}
      </div>
      <input
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        required
        className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring[#6469ff] focus:border-[#4649ff] outline-none block w-full p-3'
      />
    </div>
  );
};

// Declara las propiedades esperadas para el componente FormField utilizando PropTypes:
// labelName: Texto de la etiqueta del campo.
// type: Tipo del campo de entrada (por ejemplo, "text", "password", etc.).
// name: Nombre del campo de entrada.
// placeholder: Texto de marcador de posición en el campo de entrada.
// value: Valor actual del campo de entrada.
// handleChange: Función de manejo de cambios para el campo de entrada.
// isSurpriseMe: Un valor booleano que determina si se mostrará el botón "Surprise Me".
// handleSurpriseMe: Función que se ejecutará cuando se haga clic en el botón "Surprise Me".

FormField.propTypes = {
  labelName: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  isSurpriseMe: PropTypes.bool,
  handleSurpriseMe: PropTypes.func,
};

export default FormField;
