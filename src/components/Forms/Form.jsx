import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

export const Form = ({
  defaultValues,
  children,
  onSubmit,
  onChange,
  schema,
  ...rest
}) => {
  const {
    handleSubmit,
    getValues,
    register,
    formState: { errors },
    control,
    setValue,
    watch
  } = useForm({ 
    defaultValues, 
    criteriaMode: 'all',
    resolver: yupResolver(schema)
  })

  const handleOnChange = () => {
    const { submit, ...values } = getValues()
    onChange(values)
  }

  return (
    <form 
      onSubmit={handleSubmit(({submit, ...values}) => onSubmit(values))}
      onChange={handleOnChange}
      {...rest}
    >
      {Array.isArray(children)
        ? children.map((child) => {
          return child.props.name
            ? React.createElement(child.type, {
              ...{
                ...child.props,
                register,
                errors,
                control,
                setValue,
                watch,
                handleOnChange,
                key: child.props.name
              }
            })
            : child
        })
        : children.props.name
          ? React.createElement(children.type, {
            ...{
              ...children.props,
              register,
              errors,
              control,
              setValue,
              watch,
              handleOnChange,
              key: children.props.name
            }
          })
          : children
      }
    </form>
  )
}
