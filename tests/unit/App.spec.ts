import { expect } from 'chai'
import { shallowMount, mount } from '@vue/test-utils'
import App from '@/App.vue'

describe('App.vue', () => {
	const wrapper = mount(App)
	const boardChilds = wrapper.findAll('.square')


	it ('renders a board', () => {
		const board = wrapper.find('.board')
		const should = require('chai').should();

		should.exist(board)
	})

	it('renders a 9 squares inside the board', () => {			
		expect(boardChilds.length).to.equal(9)
	})

	it('has a button tag inside every square', () => {
		const validSquares = boardChilds.filter(
			square => square.contains('button.btn')
		)

		expect(validSquares.length).to.equal(9)
	})

	it('when click a square, shows an "X" letter if is the first move', () => {
		const square = boardChilds.at(0)
		let valueBeforeClick = null
		let valueAfterClick = null

		square.find('button').trigger('click')

		valueAfterClick = square.find('button').text()

		expect(valueBeforeClick).to.equal(null)
		expect(valueAfterClick).to.equal('X')
	})
})