import React, { useEffect, useState } from 'react'

export const useFormExample = () => {
  const [form, setForm] = useState()
  const [formValues, setFormValues] = useState({
    fullName: 'fullName Default',
    cellPhone: 'cellPhone Default',
    email: 'email Default',
    password: 'password Default',
    city: { value: '', label: 'Select a city' },
    dificulty: '',
    tools: ''
  })

  const [formResults, setFormResults] = useState()

  useEffect(() => {
    setForm({
      fullName: {
        name: 'fullName',
        label: 'Full Name',
        defaultValue: formValues.fullName,
        validations: {
          required: {
            value: true
          },
          minLength: {
            value: 4
          }
        },
        render: true,
        disabled: false
      },
      cellPhone: {
        name: 'cellPhone',
        label: 'Cell Phone',
        defaultValue: formValues.cellPhone,
        validations: {
          required: {
            value: true
          },
          maxLength: {
            value: 12
          },
          pattern: {
            value: /^[0-9]*$/
          },
          minLength: {
            value: 4
          }
        },
        render: true,
        disabled: false
      },
      email: {
        name: 'email',
        label: 'Email',
        defaultValue: formValues.email,
        validations: {
          required: {
            value: true
          },
          maxLength: {
            value: 50
          },
          pattern: {
            value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
          }
        },
        render: true,
        disabled: false
      },
      password: {
        name: 'password',
        label: 'Password',
        defaultValue: formValues.password,
        validations: {
          required: {
            value: true
          }
        },
        render: true,
        disabled: false
      },
      city: {
        name: 'city',
        label: 'City',
        defaultValue: formValues.city,
        validations: {
          required: {
            value: true
          }
        },
        options: ['Select', 'Bogota', 'Medellin', 'Cali'],
        render: true,
        disabled: false
      },
      dificulty: {
        name: 'dificulty',
        label: 'dificulty',
        defaultValue: formValues.dificulty,
        validations: {
          required: {
            value: true
          }
        },
        options: ['Select', 'Easy', 'Medium', 'Hard'],
        render: true,
        disabled: false
      },
      tools: {
        name: 'tools',
        label: 'Tools',
        defaultValue: formValues.tools,
        validations: {
          required: {
            value: true
          }
        },
        options: ['Select', 'React', 'Vue', 'Angular'],
        render: true,
        disabled: false
      },
      photo: {
        name: 'photo',
        label: 'Photo',
        defaultValue: formValues.photo,
        validations: {
          required: {
            value: true
          }
        },
        render: true,
        disabled: false
      },
      submit: {
        name: 'submit',
        label: 'Submit',
        loading: false
      }
    })
  }, [formValues])

  const onSubmit = (data) => {
    setFormResults(data)
  }

  return {
    form,
    formValues,
    formResults,
    onSubmit
  }
}
