import '@/styles/use-button.scss'
import { NavLink } from 'react-router-dom'
import { useButtonTypes } from '@/types/TypesList'

const useButton = (
  {
    to, text, onClick, key, target, rel
  } : useButtonTypes) => {
  return (
    <NavLink
      to={to}
      onClick={onClick}
      className='global-btn'
      key={key}
      target={target}
      rel={rel}
    >
      {text}
    </NavLink>
  )
}

export default useButton