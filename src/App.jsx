import {
  Button,
  Checkbox,
  File,
  Form,
  Input,
  Radio,
  Select,
  TextArea,
} from '@/components/Forms'

import { useFormExample } from './useFormExample'

function App() {
  const {
    form,
    formResultsOnSubmit,
    formResultsOnChage,
    formDefaultValues,
    onSubmit,
    onChange,
    schema,
  } = useFormExample()

  return (
    <div className='bg-slate-950 min-h-screen w-full text-white grid place-items-center'>
      <div className='grid md:grid-cols-3 w-11/12 gap-8'>
        <div className='border border-slate-700 p-4 flex flex-col gap-4 rounded-lg'>
          <h2 className='text-2xl font-bold'>React Hook Form</h2>
          <hr className='border border-slate-700' />
          {form && (
            <Form
              onSubmit={onSubmit}
              onChange={onChange}
              defaultValues={formDefaultValues}
              className='flex flex-col gap-4'
              schema={schema}
            >
              <Input {...form.fullName} />
              <Input {...form.email} />
              <TextArea {...form.message} />
              <Select {...form.city} />
              <Radio {...form.dificulty} />
              <Checkbox {...form.tools} />
              <File {...form.photos} />
              <Button {...form.submit} />
            </Form>
          )}
        </div>

        <div className='border border-slate-700 p-4 flex flex-col gap-4 rounded-lg'>
          <h2 className='text-2xl font-bold'>On Change</h2>
          <hr className='border border-slate-700' />
          {formResultsOnChage && (
            <div className='flex flex-col'>
              {Object.keys(formResultsOnChage).map((key, index) => (
                <div key={index} className='grid grid-cols-2 gap-4'>
                  <span className='border'>{key}</span>
                  <span className='border break-all'>{`${formResultsOnChage[key]}`}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className='border border-slate-700 p-4 flex flex-col gap-4 rounded-lg'>
          <h2 className='text-2xl font-bold'>On Submit</h2>
          <hr className='border border-slate-700' />
          {formResultsOnSubmit && (
            <div className='flex flex-col'>
              {Object.keys(formResultsOnSubmit).map((key, index) => {
                return (
                  <div key={index} className='grid grid-cols-2 gap-4'>
                    <span className='border'>{key}</span>
                    <span className='border break-all'>{`${formResultsOnSubmit[key]}`}</span>
                  </div>
                )
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default App
