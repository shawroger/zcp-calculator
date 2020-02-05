export class ZCP {
	public result: any = [];
	constructor(arr?: Array<number | string>) {
		if (arr) {
			this.result = this.getAllCorrectCards(arr as Array<number | string>);
		}
	}

	sum(arr: number[]): number {
		let s = 0;
		arr.forEach(v => {
			s += v;
		});
		return s;
	}

	isEqual(arr1: number[], arr2: number[]): boolean {
		return this.sum(arr1) === this.sum(arr2);
	}

	traveral(size: number, len: number): Array<number[]> {
		const arr = Array(len)
			.fill(0)
			.map((_v, i) => i);
		const cards: Array<number[]> = [];

		(function traveral(arr: number[], size: number, result: number[]) {
			const arrConcat = (arr: Array<number[]>): number[] => {
				const result: number[] = [];
				arr.forEach(e => {
					e.forEach(v => {
						result.push(v);
					});
				});
				return result;
			};

			if (size > arr.length) {
				return;
			} else if (size === arr.length) {
				cards.push(arrConcat([result, arr]));
			} else {
				for (let i = 0; i < arr.length; i++) {
					const temp = arrConcat([result]);
					temp.push(arr[i]);
					if (size === 1) {
						cards.push(temp);
					} else {
						const tempArr = arrConcat([arr]);
						tempArr.splice(0, i + 1);
						traveral(tempArr, size - 1, temp);
					}
				}
			}
		})(arr, size, []);
		return cards;
	}

	cardToNum(val: number | string): number {
		const vaildChars = {
			J: 11,
			Q: 12,
			K: 13,
			j: 11,
			q: 12,
			k: 13
		};
		const isNumber = (val: string) => {
			const regNumber = /^\d+$/;
			if (regNumber.test(val)) {
				return true;
			} else {
				return false;
			}
		};

		if (isNumber(val.toString())) {
			return Number(val);
		} else if (Object.keys(vaildChars).includes(val.toString())) {
			let returns: number = 0;
			for (let i in Object.keys(vaildChars)) {
				if (Object.keys(vaildChars)[i] === val.toString()) {
					returns = Object.values(vaildChars)[i];
					break;
				}
			}
			return returns;
		} else {
			return -1;
		}
	}

	numsToCard(val: number) {
		const strArr = [
			"A",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"8",
			"9",
			"10",
			"J",
			"Q",
			"K"
		];
		return strArr[val - 1];
	}

	cardsToNums(val: Array<number | string>): number[] {
		return val.map(e => this.cardToNum(e));
	}

	allTraveral(len: number): Array<number[]> {
		const result: Array<number[]> = [];
		for (let i = 1; i <= Math.floor(0.5 * len); i++) {
			this.traveral(i, len).forEach(e => {
				result.push(e);
			});
		}
		return result;
	}

	chooseCards(
		arr: Array<number | string>
	): [Array<number | string>, Array<number | string>][] {
		const result: [Array<number | string>, Array<number | string>][] = [];
		const allVals = Array(arr.length)
			.fill(0)
			.map((_v, i) => i);
		this.allTraveral(arr.length).forEach(e => {
			const temp1: Array<number | string> = [];
			const temp2: Array<number | string> = [];
			e.forEach(v => {
				temp1.push(arr[v]);
			});
			allVals.forEach(v => {
				if (!e.includes(v)) {
					temp2.push(arr[v]);
				}
			});
			result.push([temp1, temp2]);
		});
		return result;
	}

	getCorrectCards(
		arr: Array<number | string>
	): [Array<number | string>, Array<number | string>][] {
		const result: [Array<number | string>, Array<number | string>][] = [];
		const allParts = this.chooseCards(arr);
		allParts.forEach(e => {
			if (this.isEqual(this.cardsToNums(e[0]), this.cardsToNums(e[1]))) {
				result.push(e);
			}
		});
		return result;
	}

	getAllCorrectCards(
		arr: Array<number | string>
	): [Array<number | string>, Array<number | string>][] {
		const result = this.getCorrectCards(arr);
		const allParts = this.chooseCards(arr);
		allParts.forEach(e => {
			this.getCorrectCards(e[0]).forEach(v => {
				result.push(v);
			});
			this.getCorrectCards(e[1]).forEach(v => {
				result.push(v);
			});
		});
		return result;
	}

	when(arr: Array<number | string>) {
		return this.getAllCorrectCards(arr);
	}

	filter(
		arr: [Array<number | string>, Array<number | string>][]
	): [Array<number | string>, Array<number | string>][] {
		const isEqual = (
			m: Array<number | string>,
			n: Array<number | string>
		): boolean => {
			if(m.length !== n.length) return false;
			const M = m.sort();
			const N = n.sort();
			
			let result = true;
			M.forEach((v, k) => {
				if (v !== N[k]) {
					result =  false;
				}
			});
			return result;
		};

		const itemsIsEqual = (
			m: [Array<number | string>, Array<number | string>],
			n: [Array<number | string>, Array<number | string>]
		): boolean => {
			if (isEqual(m[0], n[0]) && isEqual(m[1], n[1])) return true;
			if (isEqual(m[0], n[1]) && isEqual(m[1], n[0])) return true;
			return false;
		};

		const arrHasItem = (
			m: [Array<number | string>, Array<number | string>],
			n: [Array<number | string>, Array<number | string>][]
		): boolean => {
			let result = false;
			n.forEach(v => {
				if (itemsIsEqual(v, m)) {
					result = true;
				}
			});
			return result;
		};

		const newArr: typeof arr = [];
		arr.forEach(v => {
			if (!arrHasItem(v, newArr)) {
				newArr.push(v);
			}
		});

		return newArr;
	}

	sort(
		arr: [Array<number | string>, Array<number | string>][]
	): [Array<number | string>, Array<number | string>][] {
		const sortByLength = (
			m: [Array<number | string>, Array<number | string>],
			n: [Array<number | string>, Array<number | string>]
		) => {
			return n[0].length + n[1].length - m[0].length - m[1].length;
		};

		const sortByFirstLength = (
			m: [Array<number | string>, Array<number | string>],
			n: [Array<number | string>, Array<number | string>]
		) => {
			return n[0].length - m[0].length;
		};
		return arr.sort(sortByFirstLength).sort(sortByLength);
	}
}
