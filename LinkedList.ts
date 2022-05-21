class node<T> {
	data: T
	next: node<T> | null = null

	constructor(data: T | null) {
		this.data = data
	}
}

class LinkedList<T> {
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
	}
}
