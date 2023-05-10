// import LoadingSVG from '@/components/LoadingSVG'

export const Button = ({ register, name, label, render=true, loading=false, ...rest }) => {
  return (
    <>
      {
        render && (
          <div>
            <button
              {...register(name)}
              className='w-full border outline-none'
              disabled={loading}
              {...rest}
            >
              {(loading && 'Loading') || label}
            </button>
          </div>
        )
      }
    </>
  )
}
