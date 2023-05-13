import React from 'react'

import { ErrorMessages } from './ErrorMessages'

export const Radio = ({ register, name, label, render, errors, options, control, ...rest }) => {

  return (
    <>
      {
        render && (
          <div>
            {
              options.map((option, index) => (
                <div key={index} className='w-full border outline-none bg-slate-950 text-white'>
                  <input
                    {...register(name)}
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
              name={name} 
              label={label} 
            />

          </div>
        )
      }
    </>
  )
}
