interface Props {
  icon: string
}
export default function ActionIcon (props: Props): JSX.Element {
  return (
    <span className='cursor-pointer m-2'>
      {props.icon}
    </span>
  )
}
