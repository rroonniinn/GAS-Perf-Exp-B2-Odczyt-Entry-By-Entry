/* eslint-disable max-lines */
/* eslint-disable max-lines-per-function */
/* eslint-disable max-lines */
/* eslint-disable max-params */

/**
 * @typedef {import('./../../../../00. My Library/v02/experiments/types').ExpSheet} ExpSheet
 * @typedef {import('./../../../../00. My Library/v02/experiments/types').ExpTasks} ExpTasks
 * @typedef {import('./../../../../00. My Library/v02/gas/styleSheet').RangeOptions} RangeOptions
 */

import { setMenu } from '../../../../00. My Library/v02/gas/setMenu';
import { getProperSheet } from '../../../../00. My Library/v02/experiments/getProperSheet';
import { runRandom } from '../../../../00. My Library/v02/experiments/runRandom';
import { buildStructure } from '../../../../00. My Library/v02/experiments/buildStructure';
import { randomIntegersArray } from '../../../../00. My Library/v02/arr/randomIntegersArray';
import {
	setEveryMin,
	stopTimeTriggers,
} from '../../../../00. My Library/v01/gas/timeTriggers';

import { EXP_SETUP } from './config';

/**
 * * Helper
 * Funkcja oczekująca tablicy funkcji z których będzie losowała te, które
 * mają właśnie się odpalić. Załadowany jest już do niej plik configu
 * @type {(arr: [string, function, string][]) => void}
 */

const go = runRandom(EXP_SETUP);

/* ******************************* ZADANIA ******************************** */

/**
 * Pobiera określoną liczbę wpisów ze wskazanego arkusza
 * @param {'ext'|'loc'|'hub'} geo Strukura danych do pobrania
 * @param {number} quant Liczba modyfikacji
 * @param {boolean} [sort] Czy sortować indeksy
 * @return {(target: ExpSheet) => any} target Np. target1 czy target2
 */

const getEntries = (geo, quant, sort = false) => target => {
	const sheet = getProperSheet(geo, target, EXP_SETUP);

	const maxIdx = target.size - 1;
	const idxs = randomIntegersArray(quant, 0, maxIdx, true, false, sort);

	idxs.forEach(idx => {
		const vals = sheet.getRange(`A${idx + 1}:O${idx + 1}`).getValues();
		console.log(
			`Type: ${geo.toUpperCase()}. Get from: '${
				target.printName
			}'. Rows nr: ${idx + 1}. Total rows: '${quant}'. First cell: ${
				vals[0][0]
			}`
		);
	});
};

/* **************************** SETUP EXPERYMENTU ************************ */

// @ts-ignore
global.exp = {
	// Sety funkcji do losowania
	loc: go([
		['loc', getEntries('loc', 1), 'a'],
		['loc', getEntries('loc', 5), 'b'],
		['loc', getEntries('loc', 10), 'c'],
		['loc', getEntries('loc', 25), 'd'],
		['loc', getEntries('loc', 50), 'e'],
		['loc', getEntries('loc', 100), 'f'],
	]),
	hub: go([
		['hub', getEntries('hub', 1), 'a'],
		['hub', getEntries('hub', 5), 'b'],
		['hub', getEntries('hub', 10), 'c'],
		['hub', getEntries('hub', 25), 'd'],
		['hub', getEntries('hub', 50), 'e'],
		['hub', getEntries('hub', 100), 'f'],
	]),
	ext: go([
		['ext', getEntries('ext', 1), 'a'],
		['ext', getEntries('ext', 5), 'b'],
		['ext', getEntries('ext', 10), 'c'],
		['ext', getEntries('ext', 25), 'd'],
		['ext', getEntries('ext', 50), 'e'],
		['ext', getEntries('ext', 100), 'f'],
	]),
};

// @ts-ignore
global.utils = {
	buildStructure: () => buildStructure(EXP_SETUP),
	triggersFire: () => {
		setEveryMin('exp.loc', 1);
		setEveryMin('exp.hub', 1);
		setEveryMin('exp.ext', 1);
	},
	triggersStop: stopTimeTriggers,
};

const menuElements = [
	['Zbuduj / zresetuj strukturę plików', 'utils.buildStructure'],
	[
		'Przetestuj funkcje',
		['Local', 'exp.loc'],
		['Hub', 'exp.hub'],
		['External', 'exp.ext'],
	],
	'-------------------',
	['Uruchom eksperyment', 'utils.triggersFire'],
	['Zatrzymaj eksperyment', 'utils.triggersStop'],
	'-------------------',
	['Update menu', 'onOpen'],
];

// @ts-ignore
global.onOpen = () => {
	setMenu(menuElements, 'ICON', true);
};

export { getEntries };
