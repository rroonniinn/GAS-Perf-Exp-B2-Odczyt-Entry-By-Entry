/* *********************** PLIKI Z DANYMI ******************* */

/**
 * URLe z danymi dla Huba
 * @type {string} HUB_URL
 */

const HUB_URL =
	'https://docs.google.com/spreadsheets/d/1TbgI8EqdKKtAqRSYGPJaEjMXr34vwv3C7hyYzmz5d0U';

/**
 * URLe zewnętrznych arkuszy z których pobieramy dane
 * @type {Object<string, string>} EXT_SHEET_URL
 */
const EXT_SHEET_URL = {
	l100:
		'https://docs.google.com/spreadsheets/d/128u6Tz2rzPneTuasGB7Jr0DdSczlRNcaV6mDU0XU1Rw',
	l200:
		'https://docs.google.com/spreadsheets/d/1eRLa9w8L21JeK63bBzLyIZOnI0dJ6fnK4exkwnhNyIo',
	l500:
		'https://docs.google.com/spreadsheets/d/1S6b5z7rBw71fnaUmW-U88-acOnr4iWIZXg0W8oXi8yY',
	l1000:
		'https://docs.google.com/spreadsheets/d/1c4WvpIdRhxswgD7uljmRzoJBWMvTy25_9u9my_ar-Nk',
	l2000:
		'https://docs.google.com/spreadsheets/d/1I3iQ0FFwMf64qlUTNx96iCRmQOl1UNZyOHjQ6JHXzaU',
	l4000:
		'https://docs.google.com/spreadsheets/d/1MZ_IldJn63MaYj3iFI8Xo2to5cBMjwVQEvNvCIjXlFo',
	l8000:
		'https://docs.google.com/spreadsheets/d/1sH93S3yDztlHkD_7xu0Wr0MAIk-toGjSOVlBFSVp-hg',
	l16000:
		'https://docs.google.com/spreadsheets/d/1c75nhBQSQSXMSRHSHGaelNcpxrpV6OUcH_Pc4x31ujo',
};

/**
 * Nazwa arkusza w zewnętrznym pliku, w którym znajdują się losowe dane
 * @type {string} EXT_SHEET_NAME
 */
const EXT_SHEET_NAME = 'res';

/**
 * Opis zadania wykorzysytwany w singlu
 * @type {Object<string, string>}
 */

const SHORT_DSC = {
	l100: 'Arr 1: 100',
	l200: 'Arr 2: 200',
	l500: 'Arr 3: 500',
	l1000: 'Arr 4: 1000',
	l2000: 'Arr 5: 2000',
	l4000: 'Arr 6: 4000',
	l8000: 'Arr 7: 8000',
	l16000: 'Arr 8: 16000',
};

/**
 * Dłuższy opis wykorzystywany w singlu
 * @type {Object<string, string>}
 */

const LONG_DESC = {
	ext1: 'EbE 1: 1 row - Ext',
	ext5: 'EbE 2: 5 rows - Ext',
	ext10: 'EbE 3: 10 rows - Ext',
	ext25: 'EbE 4: 25 rows - Ext',
	ext50: 'EbE 5: 50 rows - Ext',
	ext100: 'EbE 6: 100 rows - Ext',

	loc1: 'EbE 1: 1 row - Loc',
	loc5: 'EbE 2: 5 rows - Loc',
	loc10: 'EbE 3: 10 rows - Loc',
	loc25: 'EbE 4: 25 rows - Loc',
	loc50: 'EbE 5: 50 rows - Loc',
	loc100: 'EbE 6: 100 rows - Loc',

	hub1: 'EbE 1: 1 row - Hub',
	hub5: 'EbE 2: 5 rows - Hub',
	hub10: 'EbE 3: 10 rows - Hub',
	hub25: 'EbE 4: 25 rows - Hub',
	hub50: 'EbE 5: 50 rows - Hub',
	hub100: 'EbE 6: 100 rows - Hub',
};

/**
 * Gdzie wkleić wyniki ekspetymentów
 * @type {Object}
 */

/**
 * @typedef {Object} PRINT_DEST
 * @property {Object<string, string>} geo URLe plików do których wkleić dane z czasami egzekucji
 * @property {Object<string, string>} entries Kody arkuszy do których wkleić dane z czasami
 */
/**
 * @type {PRINT_DEST} obj
 */

const WHERE_TO_PRINT = {
	geo: {
		loc:
			'https://docs.google.com/spreadsheets/d/17b7wnpgB-WRTSSscHl6NoK4IIe4RfF5Gpa6OfUPXCVM',
		hub:
			'https://docs.google.com/spreadsheets/d/1eg_tJFHzue08t-UycGXE7Gj4SNiAeKlGGX4FZz4qICs',
		ext:
			'https://docs.google.com/spreadsheets/d/1EsvH17ViVMMrCBTAhX_FwdpslwxQnDzWT0Dci8_HcHE',
	},
	entries: {
		e1: 'T: 1',
		e5: 'T: 5',
		e10: 'T: 10',
		e25: 'T: 25',
		e50: 'T: 50',
		e100: 'T: 100',
	},
};

export {
	EXT_SHEET_URL,
	EXT_SHEET_NAME,
	SHORT_DSC,
	LONG_DESC,
	WHERE_TO_PRINT,
	HUB_URL,
};
