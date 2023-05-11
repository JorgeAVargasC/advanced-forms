import React from 'react'

import { ErrorMessages } from './ErrorMessages'

export const Input = ({ register, name, label, validations, render, errors, ...rest }) => {

  // TODO: check validations with yup

  return (
    <>
      {
        render && (
          <div>
            <input 
              {...register(name, validations)}
              className='w-full border outline-none bg-slate-950 text-white'
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
