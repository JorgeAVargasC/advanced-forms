import { Button, Form, Input, TextArea } from '@/components/Forms'

import { useFormExample } from './useFormExample'

function App() {

  const {
    form,
    formResults,
    formDefaultValues,
    onSubmit,
    onChange
  } = useFormExample()

  return (
    <div className='bg-slate-950 min-h-screen w-full grid place-items-center text-white md:grid-cols-2'>
      <div>
        {
          form && (
            <Form 
              onSubmit={onSubmit}
              onChange={onChange}
              defaultValues={formDefaultValues}
              className='flex flex-col gap-4'
            >
              <Input {...form.fullName} />
              <Input {...form.email} />
              <TextArea {...form.message} />

              <Button  {...form.submit} />
            </Form>
          )
        }
      </div>

      
      {
        formResults && (
          <div className='flex flex-col'>
            {
              Object.keys(formResults).map((key, index) => {
                return (
                  <div key={index} className='grid grid-cols-2 gap-4'>
                    <span className='border'>{key}</span>
                    <span className='border'>{formResults[key]}</span>
                  </div>
                )
              })
            }
          </div>
        )
      }
      
      
      
    </div>
  )
}

export default App
