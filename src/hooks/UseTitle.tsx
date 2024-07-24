import { useTitleTypes } from '@/types/TypesList';

const Title = ({heading}: useTitleTypes) => {
  return (
    <section className='flex overflow-hidden relative items-center'>
      <h1 className='text-[34px] pr-8 z-10 font-title text-darkColor'>
        {heading}.
      </h1>
      <span className="w-full h-[3px] content-[''] bg-darkColor"></span>
    </section>
  )
}

export default Title