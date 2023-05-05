import React, { useEffect } from 'react'

import { InfoTags } from '@/components'

export const Input = ({ register, name, label, validations, render, errors, ...rest }) => {

  const error = errors[name]

  const errorMessage = error?.message

  const errorRequired = !!(error?.types?.required)
  const errorMinLength = !!(error?.types?.minLength)
  const errorMaxLength = !!(error?.types?.maxLength)
  const errorPattern = !!(error?.types?.pattern)
  const errorMax = !!(error?.types?.max)
  const errorMin = !!(error?.types?.min)

  useEffect(() => {
    console.log(error)
    console.table({
      errorRequired,
      errorMinLength,
      errorMaxLength,
      errorPattern,
      errorMax,
      errorMin,
    })
  }, [errorRequired, errorMinLength, errorMaxLength, errorPattern, errorMax, errorMin])

  return (
    <>
      {
        render && (
          <div>
            <input 
              {...register(name, validations)}
              className='border outline-none'
              {...rest}
            />

            {errorRequired && <InfoTags type={'error'} message={`${errorMessage || `${label} is required` }`} />}
            {errorMaxLength && <InfoTags type={'error'} message={`${errorMessage || `Max length ${validations.maxLength.value} exceeded`}`} />}
            {errorMinLength && <InfoTags type={'error'} message={`${errorMessage || `Min length ${validations.minLength.value} exceeded`}`} />}
            {errorMax && <InfoTags type={'error'} message={`${errorMessage || `Max value ${validations.max.value} exceeded`}`} />}
            {errorMin && <InfoTags type={'error'} message={`${errorMessage || `Min value ${validations.min.value} exceeded`}`} />}
            {errorPattern && <InfoTags type={'error'} message={`${errorMessage || `Invalid ${label} pattern`}`} />}
          </div>
        )
      }
    </>
  )
}
