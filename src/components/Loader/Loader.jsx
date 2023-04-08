import { RevolvingDot } from 'react-loader-spinner';
import React from 'react';
import { LoaderBackdrop } from './Loader.styled';

export const Loader = () => {
  return (
    <LoaderBackdrop>
      <RevolvingDot
        height="150"
        width="150"
        radius="50"
        color="#FD5523"
        secondaryColor="#37966F"
        ariaLabel="revolving-dot-loading"
        wrapperStyle={{ position: 'absolute', top: '45%', left: '45%' }}
        wrapperClass="revolving-dot-wrapper"
        visible={true}
      />
    </LoaderBackdrop>
  );
};
