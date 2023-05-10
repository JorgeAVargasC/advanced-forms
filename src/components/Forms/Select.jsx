import React from 'react'

import { ErrorMessages } from './ErrorMessages'

export const Select = ({ register, name, label, validations, render, errors, options, ...rest }) => {

  return (
    <>
      {
        render && (
          <div>
            <select 
              {...register(name, validations)}
              className='w-full border outline-none bg-slate-950 text-white'
              {...rest}
            >
              {
                options.map((option, index) => (
                  <option 
                    key={index} 
                    value={option.value}
                  >
                    {option.label}
                  </option>
                ))
              }
            </select>

            <ErrorMessages 
              errors={errors} 
              validations={validations}
              name={name} 
              label={label} 
            />

          </div>
        )
      }
    </>
  )
}
