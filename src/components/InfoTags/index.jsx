import React from 'react'

export const InfoTags = ({ type, message }) => {
  return (
    <>
      {
        type === 'error' && (
          <span role='alert' className='text-sm block mt-2 border-l-4 pl-2 rounded border-l-red-400 bg-red-100 text-red-400'>
            {message}
          </span>
        )
      }

      {
        type === 'info' && (
          <span role='alert' className='text-sm block mt-2 border-l-4 pl-2 rounded border-l-blue-400 bg-blue-100 text-blue-400'>
            {message}
          </span>
        )
      }

      {
        type === 'success' && (
          <span role='alert' className='text-sm block mt-2 border-l-4 pl-2 rounded border-l-emerald-500 bg-emerald-100 text-emerald-500'>
            {message}
          </span>
        )
      }

      {
        type === 'warning' && (
          <span role='alert' className='text-sm block mt-2 border-l-4 pl-2 rounded border-l-orange-400 bg-orange-100 text-orange-400'>
            {message}
          </span>
        )
      }
    </>

  )
}
