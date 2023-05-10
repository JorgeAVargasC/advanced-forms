import { useRef } from 'react'

import { ErrorMessages } from './ErrorMessages'

export const TextArea = ({ register, name, label, validations, render, errors, ...rest }) => {

  const textAreaRef = useRef(null)
  const { ref, ...restRegister } = register(name, validations)

  const handleAutoResize = () => {
    const textarea = textAreaRef.current;
    textarea.style.height = `auto`; // Set the height to the calculated scroll height
    textarea.style.height = `${textarea.scrollHeight }px`; // Set the height to the calculated scroll height
  }

  return (

    <>
      {
        render && (
          <div>
            <textarea
              {...restRegister}
              ref={(e) => { ref(e); textAreaRef.current = e }}
              rows={1}
              onChange={handleAutoResize}
              className={`w-full border outline-none bg-slate-950 text-white overflow-hidden resize-none`}
              {...rest}
            />

            <ErrorMessages 
              errors={errors} 
              validations={validations}
              name={name} 
              label={label} 
            />

          </div>
        )
      }
    </>
  )
}
