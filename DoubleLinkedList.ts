class Node<T> {
	data: T
	prev: node<T> | null = null
	next: node<T> | null = null

	constructor(data: T | null) {
		this.data = data
	}
}

interface DoubleLinkedList<T> {
	insertInBegin(data: T): Node<T>
	insertAtEnd(data: T): Node<T>
	deleteNode(node: Node<T>): void
	traverse(): T[]
	size(): number
	search(comparator: (data: T) => boolean): Node<T> | null
}

class DoubleLinkedList<T> implements DoubleLinkedList<T> {}
