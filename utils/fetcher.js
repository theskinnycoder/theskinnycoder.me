const fetcher = async ({ url, query = null, variables = {} }) => {
  if (query) {
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${process.env.GRAPHCMS_KEY}`,
      },
      body: JSON.stringify({ query, variables }),
    });
    const { data } = await res.json();
    return data;
  } else {
    const res = await fetch(url);
    return res.json();
  }
};

export default fetcher;
