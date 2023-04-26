interface Props {
  text: string
  disabled: boolean
}
export default function FormSubmit (props: Props): JSX.Element {
  const { text, disabled } = props

  return (
    <button
      type='submit'
      disabled={disabled}
      className='group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 mt-10 disabled:bg-purple-300'
    >
      {text}
    </button>
  )
}
