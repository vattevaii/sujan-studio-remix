type Props = {
  src:string,
  className:string,
  alt:string,
  priority: boolean,
  width?:number,
  height?:number,
  id?:string,
}

export default function SvgIcon({ src, className, alt,priority, ...props }: Props) {
  return (
    <img src={src} className={className} alt={alt} {...props} />
  )
}