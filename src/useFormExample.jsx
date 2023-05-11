import { useEffect, useState } from 'react'
import * as yup from 'yup';

export const useFormExample = () => {
  const [form, setForm] = useState()

  const [formDefaultValues] = useState({
    fullName: 'Jhon Doe',
    message: 'Any random message',
    // cellPhone: 'cellPhone Default',
    email: 'jhon.doe@email.com',
    // password: 'password Default',
    city: 'BOG',
    dificulty: 0.5,
    tools: ['react', 'tsx'],
    photos: []
  })

  const schema = yup.object().shape({
    fullName: yup.string().required().min(2),
    message: yup.string().required().min(4).max(50),
    // cellPhone: yup.string().required().min(4).max(12).matches(/^[0-9]*$/, 'Only numbers'),
    email: yup.string().required().email().matches(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/),
    // password: yup.string().required(),
    city: yup.string().required(),
    dificulty: yup.number().required(),
    tools: yup.array().required(),
    photos: yup.array().required().min(1)
  })

  const [formResultsOnSubmit, setFormResultsOnSubmit] = useState()
  const [formResultsOnChage, setFormResultsOnChage] = useState()

  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setForm({
      fullName: {
        name: 'fullName',
        label: 'Full Name',
        render: true,
        disabled: false
      },
      message: {
        name: 'message',
        label: 'Message',
        render: true,
        disabled: false
      },
      cellPhone: {
        name: 'cellPhone',
        label: 'Cell Phone',
        render: true,
        disabled: false
      },
      email: {
        name: 'email',
        label: 'Email',
        render: true,
        disabled: false
      },
      password: {
        name: 'password',
        label: 'Password',
        render: true,
        disabled: false
      },
      city: {
        name: 'city',
        label: 'City',
        options: [
          { value: '', label: 'Select a city' },
          { value: 'BOG', label: 'Bogota' },
          { value: 'MED', label: 'Medellin' },
          { value: 'CAL', label: 'Cali' }
        ],
        render: true,
        disabled: false
      },
      dificulty: {
        name: 'dificulty',
        label: 'dificulty',
        options: [
          { value: 0, label: 'Easy' },
          { value: 0.5, label: 'Medium' },
          { value: 1, label: 'Hard' }
        ],
        render: true,
        disabled: false
      },
      tools: {
        name: 'tools',
        label: 'Tools',
        options: [
          { value: 'react', label: 'React' },
          { value: 'tsx', label: 'TSX' },
          { value: 'hexagonal', label: 'Hexagonal Architecture' }
        ],
        render: true,
        disabled: false
      },
      photos: {
        name: 'photos',
        label: 'Photos',
        multiple: true,
        render: true,
        disabled: false
      },
      submit: {
        name: 'submit',
        label: 'Submit',
        loading
      }
    })
  }, [loading])

  const onSubmit = (data) => {
    console.log(data)
    setLoading(true)
    setTimeout(() => {
      setFormResultsOnSubmit(data)
      setLoading(false)
    }, 1000)
  }

  const onChange = (data) => {
    setFormResultsOnChage(data)
    console.log(data)
  }

  return {
    form,
    formResultsOnSubmit,
    formResultsOnChage,
    formDefaultValues,
    onSubmit,
    onChange,
    schema
  }
}
