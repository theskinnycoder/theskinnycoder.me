import { GraphQLClient } from 'graphql-request';

const graphcms = new GraphQLClient(
  'https://api-eu-central-1.graphcms.com/v2/ckq6frt2kcdgb01z00tned1ty/master',
  {
    headers: {
      authorization: `Bearer ${process.env.GRAPHCMS_KEY}`,
    },
  },
);

export default graphcms;
