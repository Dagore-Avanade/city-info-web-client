interface Props {
  icon: string
  handleClick?: () => void
}
export default function ActionIcon (props: Props): JSX.Element {
  return (
    <span
      onClick={props.handleClick}
      className='cursor-pointer m-2'
    >
      {props.icon}
    </span>
  )
}
