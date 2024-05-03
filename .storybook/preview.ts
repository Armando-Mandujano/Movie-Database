import '!style-loader!css-loader!postcss-loader!../src/index.css';
import '../src/index.css';
import type { Preview } from "@storybook/react";
import React from 'react';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;