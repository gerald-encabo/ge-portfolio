import '@/styles/use-title.scss';
import { useTitleTypes } from '@/types/TypesList';

const Title = ({heading}: useTitleTypes) => {
  return (
    <div className='title'>
      <h1>
        {heading}.
      </h1>
      <span></span>
    </div>
  )
}

export default Title