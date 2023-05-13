import React from 'react'

import { ErrorMessages } from './ErrorMessages'

export const Input = ({ register, name, label, render, errors, ...rest }) => {

  return (
    <>
      {
        render && (
          <div>
            <input 
              {...register(name)}
              className='w-full border outline-none bg-slate-950 text-white'
              {...rest}
            />

            

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
