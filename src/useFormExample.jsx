import { useEffect, useState } from 'react'

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
    // tools: ''
  })

  const [formResultsOnSubmit, setFormResultsOnSubmit] = useState()
  const [formResultsOnChage, setFormResultsOnChage] = useState()

  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setForm({
      fullName: {
        name: 'fullName',
        label: 'Full Name',
        validations: {
          required: {
            value: true
          },
          minLength: {
            value: 2
          }
        },
        render: true,
        disabled: false
      },
      message: {
        name: 'message',
        label: 'Message',
        validations: {
          required: {
            value: true
          },
          maxLength: {
            value: 50
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
        validations: {
          required: {
            value: true
          }
        },
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
        validations: {
          required: {
            value: true
          }
        },
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
        validations: {
          required: {
            value: true
          }
        },
        options: [
          { value: 'react', label: 'React' },
          { value: 'tsx', label: 'TSX' },
          { value: 'hexagonal', label: 'Hexagonal Architecture' }
        ],
        render: true,
        disabled: false
      },
      photo: {
        name: 'photo',
        label: 'Photo',
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
        loading
      }
    })
  }, [loading])

  const onSubmit = (data) => {
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
    onChange
  }
}
