import React from 'react';
import { useForm } from 'react-hook-form';

export function Form({ defaultValues, children, onSubmit, ...rest }) {
  const { handleSubmit, register } = useForm({ defaultValues });

  return (
    <form onSubmit={handleSubmit(onSubmit)} {...rest}>
      {Array.isArray(children)
        ? children.map((child) => {
          return child.props.name
            ? React.createElement(child.type, {
              ...{
                ...child.props,
                register,
                key: child.props.name
              }
            })
            : child;
        })
        : children}
    </form>
  );
}

export function Input({ register, name, ...rest }) {
  return (
    <div>
      <input {...register(name)} {...rest} className='bg-slate-900' />
    </div>
  );
}

export function Select({ register, options, name, ...rest }) {
  return (
    <select {...register(name)} {...rest}>
      {options.map((value, index) => (
        <option key={index} value={value}>{value}</option>
      ))}
    </select>
  );
}
