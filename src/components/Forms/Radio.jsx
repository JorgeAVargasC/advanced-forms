import React from 'react'
import { useController } from 'react-hook-form'

import { ErrorMessages } from './ErrorMessages'

export const Radio = ({ register, name, label, validations, render, errors, options, control, ...rest }) => {

  return (
    <>
      {
        render && (
          <div>
            {
              options.map((option, index) => (
                <div key={index} className='w-full border outline-none bg-slate-950 text-white'>
                  <input
                    {...register(name, validations)}
                    className=''
                    type='radio'
                    value={option.value}
                    defaultChecked={control._formValues[name] === option.value}
                    id={option.value}
                    {...rest}
                  />
                  <label htmlFor={option.value}>{option.label}</label>
                </div>
              ))
            }

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