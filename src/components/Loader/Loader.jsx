import { RevolvingDot } from 'react-loader-spinner';

import React from 'react';
import { LoaderBackdrop } from './Loader.styled';

export const Loader = () => {
  return (
    <LoaderBackdrop>
      <RevolvingDot
        height="100"
        width="100"
        radius="6"
        color="#FD5523"
        secondaryColor="#FFFBE6"
        ariaLabel="revolving-dot-loading"
        wrapperStyle={{ position: 'absolute', top: '45%', left: '45%' }}
        wrapperClass="revolving-dot-wrapper"
        visible={true}
      />
    </LoaderBackdrop>
  );
};
