import * as React from 'react';

// Stand-in for next/image — keeps src/alt, drops Next-specific props.
const NextImage = ({ src, alt, objectFit: _o, ...rest }: any) =>
  React.createElement('img', {
    src: typeof src === 'string' ? src : '',
    alt,
    ...rest,
  });

export default NextImage;
