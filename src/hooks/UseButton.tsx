import '@/styles/use-button.scss'
import { Link } from 'react-router-dom'
import { useButtonTypes } from '@/types/TypesList'

const useButton = (
  {
    to, text, onClick, key, target, rel
  } : useButtonTypes) => {

    return (
      <Link
        to={to}
        onClick={onClick}
        key={key}
        target={target}
        rel={rel}
        className={`global-btn`}
      >
        {text}
      </Link>
    )
}

export default useButton