interface Card {
	name: string;
	value: number;
}

export const cards: Card[] = [
	{ name: "A", value: 1 },
	{ name: "2", value: 2 },
	{ name: "3", value: 3 },
	{ name: "4", value: 4 },
	{ name: "5", value: 5 },
	{ name: "6", value: 6 },
	{ name: "7", value: 7 },
	{ name: "8", value: 8 },
	{ name: "9", value: 9 },
	{ name: "10", value: 10 },
	{ name: "J", value: 11 },
	{ name: "Q", value: 12 },
	{ name: "K", value: 13 },
	{ name: "CE", value: 0 },
	{ name: "BS", value: -1 },
	{ name: "=", value: -2 }
];
