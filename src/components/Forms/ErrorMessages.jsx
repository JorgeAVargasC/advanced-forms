import { InfoTags } from '@/components'

export const ErrorMessages = ({errors, name, label}) => {

  const error = errors[name]
  const errorMessages = Object.values(error?.types || {})

  return (
    <>
      {
        errorMessages.map((errorMessage, index) => (
          <InfoTags type={'error'} message={errorMessage.replaceAll(name,label)} key={index} />
        ))
      }
    </>
  )
}
