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
    register,
    formState: { errors },
    control
  } = useForm({ defaultValues, criteriaMode: 'all' })

  

  return (
    <form onSubmit={handleSubmit(onSubmit)} onChange={onChange} {...rest}>
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
