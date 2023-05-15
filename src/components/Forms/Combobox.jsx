// import React from 'react'
import { Controller } from 'react-hook-form'
import Select from 'react-select'
import makeAnimated from 'react-select/animated'

import { ErrorMessages } from './ErrorMessages'

const animatedComponents = makeAnimated()

export function Combobox({
  register,
  name,
  control,
  label,
  render,
  errors,
  options,
  isMulti,
  ...rest
}) {
  // TODO: check validations, onChange and OnSubmit functions
  return (
    <>
      {render && (
        <div>
          <Controller
            name={name}
            control={control}
            
            render={({ field }) => (
              <div className='relative'>
                <Select
                  {...field}
                  name={name}
                  isMulti={isMulti}
                  options={options}
                  components={animatedComponents}
                  
                  styles={{
                    control: (baseStyles, state) => ({
                      ...baseStyles,
                      fontSize: 14,
                      border: state.isSelected && 'blue',
                      boxShadow: 'none',
                    }),
                  }}
                  theme={(theme) => ({
                    ...theme,
                    borderRadius: 6,
                    colors: {
                      ...theme.colors,
                      neutral20: 'red',
                      neutral50: 'green',
                      primary: 'pink',
                      primary25: 'orange',
                      neutral80: 'yellow',
                      neutral60: 'blue',
                    },
                  })}
                  classNamePrefix='react-select'
                />
              </div>
            )}
          />

          <ErrorMessages errors={errors} name={name} label={label} />
        </div>
      )}
    </>
  )
}
