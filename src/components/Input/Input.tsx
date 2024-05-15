import classNames from 'classnames'
import styles from './Input.module.scss'
import { InputProps, RootState } from '../../models/models'
import { useSelector } from 'react-redux';
function Input(props: InputProps) {
  const darkMode = useSelector((state: RootState) => state.navbar.darkMode)
  const inputStyles = classNames({
    [styles.blog_title]: props.blogTitle,
    [styles.blog_details]: props.blogDetail,
    [styles.search]: props.search,
    [styles.light_text]: darkMode,
    [styles.input_dark]: props.search && darkMode
  });
  return (
    <input className={inputStyles} type={props.type} placeholder={props.placeholder} onChange={(event) => props.onChange(event.target.value)} value={props.value} />
  )
}

export default Input