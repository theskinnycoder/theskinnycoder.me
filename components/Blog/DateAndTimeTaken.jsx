import { formatDistanceToNow } from 'date-fns';
import readingTime from 'reading-time';

const DateAndTimeTaken = ({ updatedAt, content }) => {
  return (
    <span className='md:text-md dark:text-gray-400 my-4 text-sm font-medium text-gray-500'>
      Published{' '}
      {formatDistanceToNow(new Date(updatedAt), {
        addSuffix: true,
        includeSeconds: true,
      })}
      {' . '}
      {readingTime(content).text}
    </span>
  );
};

export default DateAndTimeTaken;
