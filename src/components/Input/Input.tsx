import classNames from 'classnames'
import styles from './Input.module.scss'
import { InputProps } from '../../models/models'
function Input(props:InputProps) {
  const inputStyles = classNames({
    [styles.blog_title]: props.blogTitle,
    [styles.blog_details]: props.blogDetail,
    [styles.search]: props.search
  });
  return (
    <input className={inputStyles} type={props.type} placeholder={props.placeholder} onChange={(event)=> props.onChange(event.target.value)} value={props.value}/>
  )
}

export default Input