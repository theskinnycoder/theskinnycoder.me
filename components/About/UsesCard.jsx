import { motion } from 'framer-motion';

const UsesCard = ({ usesSection }) => {
  return (
    <div className="dark:bg-black dark:ring-2 dark:ring-light bg-light flex flex-col items-center justify-start h-full p-2 space-y-2 divide-y divide-pink-300 rounded-sm shadow-2xl">
      <h4 className="md:text-lg text-md p-2 font-medium text-pink-600 uppercase">
        {usesSection.category}
      </h4>
      <div className="flex-col p-2 space-y-2">
        {usesSection?.items?.map((item, idx) => (
          <motion.a
            key={idx}
            variants={{
              hidden: (idx) => ({ y: -50 * idx, opacity: 0 }),
              visible: (idx) => ({
                opacity: 1,
                y: 0,
                transition: { delay: idx * 0.14 },
              }),
            }}
            custom={idx}
            initial="hidden"
            animate="visible"
            href={item.href}
            target="_blank"
            className="hover:bg-black dark:hover:bg-light dark:hover:text-black hover:text-light group text-md flex items-center p-1 font-semibold rounded"
            rel="noreferrer"
          >
            {item.icon} {item.name}
          </motion.a>
        ))}
      </div>
    </div>
  );
};

export default UsesCard;
