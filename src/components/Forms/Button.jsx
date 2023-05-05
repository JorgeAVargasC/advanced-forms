// import LoadingSVG from '@/components/LoadingSVG'

export const Button = ({ register, name, label, render=true, loading, ...rest }) => {
  return (
    <>
      {
        render && (
          <div>
            <button
              {...register(name)}
              className='border outline-none'
              {...rest}
            >
              {label}
            </button>
          </div>
        )
      }
    </>
  )
}
