// import React from 'react'
import { Controller } from 'react-hook-form'
import Select from 'react-select'

import { ErrorMessages } from './ErrorMessages'

export function Combobox({
  register,
  name,
  control,
  label,
  render,
  errors,
  options,
  ...rest
}) {
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
                  isMulti
                  options={options}
                  {...rest}
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
                  className='h-12 z-[11] peer grid w-full min-w-full'
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
