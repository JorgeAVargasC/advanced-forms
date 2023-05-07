import React from 'react'
import { useForm } from 'react-hook-form'

export const Form = ({
  defaultValues,
  children,
  onSubmit,
  onChange,
  ...rest
}) => {
  const {
    handleSubmit,
    getValues,
    register,
    formState: { errors },
    control
  } = useForm({ defaultValues, criteriaMode: 'all' })

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
              key: children.props.name
            }
          })
          : children
      }
    </form>
  )
}
