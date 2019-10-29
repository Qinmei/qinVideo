import { Application } from 'egg';
import frontend from './router/frontend';
import backend from './router/backend';

export default (app: Application) => {
	frontend(app);
	backend(app);
};
