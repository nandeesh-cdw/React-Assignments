import styles from './Navlink.module.scss'
import { NavLink } from 'react-router-dom'
function Navlink(props:any) {
  return (
    <NavLink to={props.path} className={({isActive}) => isActive ? (`${styles.active_link} ${styles.links}`): styles.links }>
            {props.label}
    </NavLink>
  )
}

export default Navlink