import { Module } from '@yuanjs/core';
import { zh } from './locale';

export const CommonModule: Module = {
  locale: [
    {
      type: 'zh',
      content: zh,
    },
  ],
};
