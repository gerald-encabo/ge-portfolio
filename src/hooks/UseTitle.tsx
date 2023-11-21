import { useTitleTypes } from '@/types/TypesList';
import '@/styles/use-title.scss';

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