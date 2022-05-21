class node<T> {
	data: T
	next: node<T> | null = null

	constructor(data: T | null) {
		this.data = data
	}
}

interface ILinkedList<T> {
	append(data: T): void
	delete(data: T): void
	search(data: T): node<T> | null
	traverse(): T[]
}

class LinkedList<T> implements ILinkedList<T> {
	head: node<T> | null = null

	constructor() {}

	append(data: T): void {
		if (this.head == null) {
			this.head = new node<T>(data)
		} else {
			let current = this.head
			while (current.next !== null) {
				current = current.next
			}
			current.next = new node<T>(data)
		}
	}

	delete(data: T): void {
		if (!this.head) return

		if (this.head.data == data) {
			return
		}

		let previous = this.head
		let current = this.head.next

		while (current) {
			if (current.data == data) {
				current == null
			} else {
				previous = current
				current = current.next
			}
		}

		previous.next = previous.next ? previous.next.next : null
	}

	search(data: T): node<T> | null {
		if (!this.head) return null
		let current = this.head

		while (current) {
			if (current.data == data) {
				return current
			}
			current = current.next
		}
		return null
	}

	traverse(): T[] {
		if (!this.head) return null
		let current = this.head
		let resArr: T[] = []

		while (current) {
			resArr.push(current.data)
			current = current.next
		}
		return null
	}
}
