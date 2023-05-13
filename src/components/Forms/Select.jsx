import React from 'react'

import { ErrorMessages } from './ErrorMessages'

export const Select = ({ register, name, label, render, errors, options, ...rest }) => {

  return (
    <>
      {
        render && (
          <div>
            <select 
              {...register(name)}
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
              name={name} 
              label={label} 
            />

          </div>
        )
      }
    </>
  )
}
