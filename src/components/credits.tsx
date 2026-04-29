'use client';

import { Text } from 'opub-ui';

import { handleRedirect } from '../utils';

export function Credits() {
  return (
    <div className="text-center md:text-right">
      <Text variant="headingSmSpaced" color="onBgDefault">
        <strong>
          made with <span className="text-baseRedSolid11">&#10084; </span> in
          india️
        </strong>
      </Text>
      <Text
        variant="bodySm"
        color="onBgDefault"
        className="mt-2 block md:mt-3"
      >
        A DataSpace product by{' '}
        <a
          className="text-baseIndigoSolid1 underline"
          onClick={(event) =>
            handleRedirect(event, 'https://civicdatalab.in/')
          }
        >
          CivicDataLab
        </a>
      </Text>
    </div>
  );
}
