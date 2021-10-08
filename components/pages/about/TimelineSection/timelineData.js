const timelineData = [
  {
    title: 'Started Web Development',
    period: '2014-16, High School',
    content: (
      <p className="text-lg leading-snug tracking-wide">
        Learnt HTML5, CSS3, Vanilla JS.
      </p>
    ),
  },
  {
    title: 'GVPCE(A)',
    period: '2018-22, Started College',
    content: (
      <p className="text-lg leading-snug tracking-wide">
        Currently a senior, pursuing CS. Started to build an in-campus
        social-media site.
      </p>
    ),
  },
  {
    title: 'Started YouTube Channel',
    period: 'March 2020',
    content: (
      <p className="text-lg leading-snug tracking-wide">
        My break-through, started{' '}
        <a
          href="https://youtube.com/c/TheSkinnyCoder"
          className="hover:underline font-bold"
        >
          TheSkinnyCoder
        </a>
        , my YouTube channel. I post porgramming tutorials & coding series.
      </p>
    ),
  },
  {
    title: 'Freelancing 101',
    period: '2021',
    content: (
      <p className="text-lg leading-snug tracking-wide">
        Started to build a business website for{' '}
        <a
          href="http://devaiss-site.surge.sh"
          className="hover:underline font-bold"
        >
          DevAI Solutions
        </a>
        , using ReactJS, & TailwindCSS. Check it out in the projects page!
      </p>
    ),
  },
  {
    title: 'First Internship',
    period: 'April 2021',
    content: (
      <p className="text-lg leading-snug tracking-wide">
        Started as an intern full-stack developer (ReactJS + NodeJS) for{' '}
        <a href="https://www.cea3.com/" className="hover:underline font-bold">
          Clean Energy Associates (CEA)
        </a>
        .
      </p>
    ),
  },
];

export default timelineData.reverse();
