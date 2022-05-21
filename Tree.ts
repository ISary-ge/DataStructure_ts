class TreeNode<T> {
	data: T
	right: TreeNode<T> | null = null
	left: TreeNode<T> | null = null

	constructor(data: T | null) {
		this.data = data
	}
}

interface ITree<T> {
	insert(data: T): void
	search(data: T): TreeNode<T> | null
	preOrder(): T[]
}

class Tree<T> implements ITree<T> {
	head: TreeNode<T> | null = null

	constructor() {}

	insert(data: T) {
		if (!this.head) {
			this.head = new TreeNode<T>(data)
			this.head.data = data
		} else {
			const traverse = (node: TreeNode<T>) => {
				if (data > node.data) {
					if (!node.right) {
						node.right = new TreeNode<T>(data)
					} else {
						traverse(node.right)
					}
				} else if (data < node.data) {
					if (!node.left) {
						node.left = new TreeNode<T>(data)
					} else {
						traverse(node.left)
					}
				}
			}
			traverse(this.head)
		}
	}

	search(data: T): TreeNode<T> | null {
		if (!this.head) return null
		let current = this.head

		while (current) {
			if (data > current.data) {
				current = current.right
			} else if (data < current.data) {
				current = current.left
			} else {
				return current
			}
		}
		return null
	}

	preOrder(): T[] {
		if (!this.head) {
			return []
		}
		let result: T[] = []
		const preOrderTranverse = (node: TreeNode<T>) => {
			result.push(node.data)
			node.left && preOrderTranverse(node)
			node.right && preOrderTranverse(node)
		}
		preOrderTranverse(this.head)
		return result
	}
}
