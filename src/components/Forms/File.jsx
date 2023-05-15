import { useEffect, useState } from 'react'

import { ErrorMessages } from './ErrorMessages'

export const File = ({ 
  register,
  name, 
  label,
  render,
  errors, 
  control,
  multiple,
  flatStyle = true,
  setValue,
  watch,
  handleOnChange,
  ...rest
}) => {

  const [dragging, setDragging] = useState(false)
  const [files, setFiles] = useState([])
  const [newInput, setNewInput] = useState(false) //* to solve the problem of the input type file, that does not allow to upload the same file twice

  const { onChange, ...restRegister} = register(name)

  const fileValue = watch(name)

  useEffect(() => {
    handleOnChange()
  }, [fileValue])

  const handleDragEnter = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setDragging(true)
  }

  const handleDragLeave = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setDragging(false)
  }

  const handleDragOver = (e) => {
    e.preventDefault()
    e.stopPropagation()
  }

  const handleDrop = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setDragging(false)
    const newFiles = Array.from(e.dataTransfer.files)
    setFiles([...files, ...newFiles])
    setValue(name, [...files, ...newFiles])
  }

  const handleFileRemove = (indexToRemove) => {
    const newFiles = files.filter((_, index) => index !== indexToRemove)
    setFiles(newFiles)
    setValue(name, newFiles)
    setNewInput(!newInput)
  }

  const handleFileAdd = (e) => {
    onChange(e)
    const newFiles = Array.from(e.target.files)
    if (multiple) {
      setFiles([...files, ...newFiles])
      setValue(name, [...files, ...newFiles])
    } else {
      setFiles([...newFiles])
      setValue(name, [...newFiles])
    }
    setNewInput(!newInput)
  }

  return (
    <>
      {
        render && (
          <div
            onDragEnter={handleDragEnter}
            onDragLeave={handleDragLeave}
            onDragOver={handleDragOver}
            onDrop={handleDrop}
          >
            
            <div className='grid gap-4'>
              <label
                className={`flex w-full border-2 border-dotted hover:cursor-pointer ${flatStyle ? 'h-auto flex-row' : 'h-48 flex-col'}`}
                htmlFor={name}
              >
                {
                  dragging
                    ? (
                      <span className='text-white'>Drop here</span>
                    ) : (
                      <span className=''>{label}</span>
                    )
                }
              </label>

              {
                newInput && (
                  <input 
                    {...restRegister}
                    onChange={handleFileAdd}
                    multiple={multiple}
                    id={name}
                    type='file'
                    className='sr-only'
                    {...rest}
                  />
                )
              }

              {
                !newInput && (
                  <input 
                    {...restRegister}
                    onChange={handleFileAdd}
                    multiple={multiple}
                    id={name}
                    type='file'
                    className='sr-only'
                    {...rest}
                  />
                )
              }

              {
                files.length > 0 && (
                  <div className='flex flex-col gap-4'>
                    {
                      files.map((file, index) => (
                        <div key={index} className='border flex items-center justify-between'>
                          <p className='max-w-[180px] truncate border text-ellipsis '>
                            {file.name}
                          </p>
                         

                          {/* File size in KB or MB */}
                          <div className='h-full flex gap-3 justify-self-end'>
                            {
                              file.size < 1024000
                                ? (
                                  <span>
                                    {`${(file.size / 1024).toFixed(1)} KB`}
                                  </span>
                                )
                                : (
                                  <span>
                                    {`${(file.size / 1024000).toFixed(1)} MB`}
                                  </span>
                                )
                            }

                            <span
                              onClick={() => handleFileRemove(index)}
                              className='grid place-items-center border hover:cursor-pointer'>
                              x
                            </span>
                          </div>

                        </div>
                      ))
                    }
                  </div>
                )
              }

              <ErrorMessages 
                errors={errors} 
                name={name} 
                label={label} 
              />
            </div>
          </div>
        )
      }
    </>
  )
}
