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

	it('when click a square, shows an "X" mark if is the first move', () => {
		const square = boardChilds.at(0)
		let valueBeforeClick = null
		let valueAfterClick = null

		square.find('button').trigger('click')

		valueAfterClick = square.find('button').text()

		expect(valueBeforeClick).to.equal(null)
		expect(valueAfterClick).to.equal('X')
	})

	it('when the last click shows an "X" mark, a new click should shows a "O" mark', () => {
		const xSquare = boardChilds.at(0)
		let xSquareValue = null
		const oSquare = boardChilds.at(1)
		let oSquareValue = null
		
		xSquare.find('button').trigger('click')
		xSquareValue = xSquare.find('button').text()

		oSquare.find('button').trigger('click')
		oSquareValue = oSquare.find('button').text()

		expect(xSquareValue).to.equal('X')
		expect(oSquareValue).to.equal('O')
	})
})