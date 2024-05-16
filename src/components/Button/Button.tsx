import classNames from 'classnames'
import { useSelector } from 'react-redux'
import styles from './Button.module.scss'
import { ButtonProps, RootState } from '../../models/models'
function Button(props: ButtonProps) {
  const dark_mode = useSelector((state: RootState) => state.navbar.darkMode)
  const buttonStyles = classNames({
    [styles.purple_button]: props.purpleButton,
    [styles.cyan_button]: props.cyanButton,
    [styles.transparent_Button]: props.transparentButton,
    [styles.light_text]: (props.transparentButton && dark_mode),
    [styles.purple_button_big]: props.purpleButtonBig,
  })
  return (
    <button className={buttonStyles} onClick={(event) => props.onClick(event, props.id)}>
      {props.label}
    </button>
  )
}

export default Button