import React from 'react'

import { ErrorMessages } from './ErrorMessages'

export const Input = ({ register, name, label, validations, render, errors, ...rest }) => {

  return (
    <>
      {
        render && (
          <div>
            <input 
              {...register(name, validations)}
              className='border outline-none bg-slate-950 text-white'
              {...rest}
            />

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
