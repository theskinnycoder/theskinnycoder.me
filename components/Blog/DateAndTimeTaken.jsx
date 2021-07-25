import { formatDistanceToNow } from 'date-fns';
import readingTime from 'reading-time';

export default function DateAndTimeTaken({ updatedAt, content }) {
  return (
    <span className="md:text-md inline-block text-sm font-medium text-gray-500">
      Published{' '}
      {formatDistanceToNow(new Date(updatedAt), {
        addSuffix: true,
        includeSeconds: true,
      })}
      {' . '}
      {readingTime(content).text}
    </span>
  );
}
