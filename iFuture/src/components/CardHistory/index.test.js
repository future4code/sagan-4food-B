import React from 'react'
import { shallow } from 'enzyme'
import { CardHistory } from './index'
import { Order } from './styles'

describe('Component CardHistory', () => {

    let component
    let order
    let mockedOrder
    beforeEach( () => {
        mockedOrder = {
            totalPrice: []
        }
        component = shallow(<CardHistory order={mockedOrder}/>)
        order = component.find(Order)
    })

    it('the component CardHistory exists', () => {
        expect(order).toHaveLength(1)
    })

})