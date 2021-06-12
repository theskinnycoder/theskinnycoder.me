import { formatDistanceToNow } from 'date-fns';
import readingTime from 'reading-time';

const DateAndTimeTaken = ({ publishedAt, content }) => {
  return (
    <>
      <p className='text-tuna-100 md:text-lg my-4 text-base font-semibold'>
        Published{' '}
        {formatDistanceToNow(new Date(publishedAt.split('-')), {
          addSuffix: true,
          includeSeconds: true,
        })}
        {' . '}
        {readingTime(content).text}
      </p>
    </>
  );
};

export default DateAndTimeTaken;
