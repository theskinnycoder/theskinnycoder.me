import { formatDistanceToNow } from 'date-fns';
import readingTime from 'reading-time';

const DateAndTimeTaken = ({ updatedAt, content }) => {
  return (
    <>
      <p className='md:text-md my-4 text-sm font-medium text-gray-600'>
        Published{' '}
        {formatDistanceToNow(new Date(updatedAt), {
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
