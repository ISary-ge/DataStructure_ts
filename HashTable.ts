import LinkedList from './LinkedList'

interface IHashTable<T> {
	hash(key: string): number
	insert(key: string, data: T)
}

export default class HashTable<T> implements IHashTable<T> {
	private size: number = 0
	private table: LinkedList<{ key: string; data: T }>[] = []

	constructor(size: number) {
		this.size = size
		this.table = []
	}

	hash(key: string): number {
		const sum = key
			.split('')
			.reduce((acc: number, char: string) => acc + char.charCodeAt(0), 0)

		return sum % this.size
	}

	insert(key: string, data: T): void {
		const index = this.hash(key)

		if (!this.table[index]) {
			this.table[index] = new LinkedList<{ key: string; data: T }>()
		}
		this.table[index].append({ key, data })
	}

	find(key: string): T | null {
		const index = this.hash(key)

		if (!this.table[index]) {
			return null
		}

		return this.table[index].search({ key }) // доработать список, чтобы можно было искать по ключу
	}
}
