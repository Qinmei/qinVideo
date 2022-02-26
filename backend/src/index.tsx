import ReactDOM from 'react-dom';

import { createFactory } from '@yuanjs/core';
import { renderConfig, renderLocale, renderModel, renderRouter } from '@yuanjs/plugins';

import { AppModule } from './modules';

const App = createFactory(AppModule, {
  middleware: [renderConfig, renderLocale, renderModel, renderRouter],
});

ReactDOM.render(App, document.getElementById('root'));
