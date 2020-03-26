/* eslint-disable max-lines-per-function */



import {
	randomExternal,
	randomLocal,
	randomHub,
} from './experiments';

import { deleteOldDate } from './tasks';
import { startTimeTrigger, cancelTimeTriggers } from './triggers';

// Funkcja do trigerów co minutę
// @ts-ignore
global.randomExternal = () => {
	randomExternal();
};
// @ts-ignore
global.randomLocal = () => {
	randomLocal();
};
// @ts-ignore
global.randomHub = () => {
	randomHub();
};

// @ts-ignore
global.menu = {
	test: () => console.log('hello'),
	deleteOldDate,
	triggers: {
		ext: () => startTimeTrigger('randomExternal'),
		loc: () => startTimeTrigger('randomLocal'),
		hub: () => startTimeTrigger('randomHub'),
		stop: cancelTimeTriggers,
	},
};

const menu = () => {
	const ui = SpreadsheetApp.getUi();
	ui.createMenu('ICON')
	// .addItem('randomLocal','randomLocal')
	// .addItem('randomExternal','randomExternal')
	// .addItem('randomHub','randomHub')
	// .addSeparator()
		// .addItem(
		// 	'Usuń stare dane',
		// 	'menu.deleteOldDate'
		// )
		.addItem(
			'Uruchom Trigger dla Random External',
			'menu.triggers.ext'
		)
		.addItem('Uruchom Trigger dla Random Local', 'menu.triggers.loc')
		.addItem('Uruchom Trigger dla Random Hub', 'menu.triggers.hub')
		.addSeparator()
		.addItem('Zatrzymaj triggery', 'menu.triggers.stop')
		.addSeparator()
		.addItem('Test', 'menu.test')
		.addSeparator()
		.addItem('Update menu', 'onOpen')
		.addToUi();
};


export { menu };
