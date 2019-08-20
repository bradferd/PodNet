import React, { Component } from 'react'

export default class Landing extends Component {
	render() {
		return (
			<div style={{ marginTop: '30px' }}>
				<div className='ui middle aligned stackable grid container'>
					<div className='row'>
						<div className='eight wide column'>
							<h3 className='ui huge header'>Do you like podcasts?</h3>
							<p>
								Cupcake ipsum dolor sit amet dessert lollipop cupcake. Bear claw
								topping jelly-o cookie pie. Liquorice lemon drops gingerbread
								chupa chups carrot cake. Tiramisu pie bonbon candy canes. Candy
								canes gingerbread dragée chupa chups chocolate bar. Gummies
								jelly-o chocolate tootsie roll fruitcake biscuit dessert ice
								cream candy.
							</p>
							<h3 className='ui huge header'>
								Search podcasts without subscribing!
							</h3>
							<p>
								Powder chupa chups tiramisu bonbon sweet roll gummies chupa
								chups. Tootsie roll soufflé cupcake. Toffee chupa chups cake
								chupa chups toffee. Candy marzipan chocolate. Soufflé ice cream
								macaroon marshmallow croissant gummi bears sesame snaps.
							</p>
						</div>
						<div className='eight wide right floated column'>
							<img
								src='https://images.unsplash.com/photo-1559526324-c1f275fbfa32?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&'
								alt='podcasting'
								className='ui large centered fluid image'
							/>
						</div>
					</div>
					<div className='row'>
						<div className='eight wide column'>
							<img
								src='https://images.unsplash.com/photo-1559523161-0fc0d8b38a7a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2558&q=80'
								alt='podcasters'
								className='ui large centered fluid image'
							/>
						</div>
						<div className='eight wide right floated column'>
							<h3 className='ui huge header'>
								Find Something new to listen to!
							</h3>
							<p>
								Pie caramels muffin ice cream cake oat cake oat cake biscuit.
								Chupa chups donut bonbon gingerbread marshmallow. Tiramisu
								chocolate bar macaroon sweet macaroon tiramisu candy canes
								danish jelly.
							</p>
							<h3 className='ui huge header'>
								Find something worth listening to!
							</h3>
							<p>
								Dessert chocolate bar toffee wafer tiramisu dessert muffin
								wafer. Gummi bears danish bear claw sugar plum muffin fruitcake.
								Dragée bonbon donut jelly-o tiramisu lollipop ice cream cupcake.
								Dessert gummi bears chocolate cake jelly-o halvah brownie
								topping gummi bears lemon drops.{' '}
							</p>
						</div>
					</div>
				</div>

				<div className='spacer' />
			</div>
		)
	}
}
