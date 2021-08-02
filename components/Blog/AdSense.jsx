import { useEffect } from 'react';

const AdSense = () => {
  useEffect(() => {
    try {
      (window.adsbygoogle = window?.adsbygoogle || []).push({});
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div style={{ width: '100%' }}>
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-format="fluid"
        data-ad-layout-key="-fb+5w+4e-db+86"
        data-ad-client="ca-pub-1997678564066014"
        data-ad-slot="2779657459"
      />
    </div>
  );
};

export default AdSense;
