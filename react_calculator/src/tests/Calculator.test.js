import React from 'react';
import Calculator from '../containers/Calculator';
import {mount, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

describe('Calculator', () => {
  let container;
  beforeEach(() => {
    container = mount(<Calculator/>)
  })

  it('should change running total on number enter', () => {
    const button4 = container.find('#number4');
    const runningTotal = container.find('#running-total');
    button4.simulate('click');
    expect(runningTotal.text()).toEqual('4');
  })

  it('should be able to add numbers and find the total', () => {
    const button1 = container.find('#number1')
    const button4 = container.find('#number4')
    const buttonAdd = container.find("#operator_add")
    const buttonEquals = container.find("#operator-equals")
    button1.simulate("click")
    buttonAdd.simulate("click")
    button4.simulate("click")
    buttonEquals.simulate("click")
    const runningTotal = container.find('#running-total')
    expect(runningTotal.text()).toEqual('5');
  })

  it('should be able to subtract one number from another and find the total', () => {
    const button7 = container.find('#number7')
    const button4 = container.find('#number4')
    const buttonSubtract = container.find("#operator-subtract")
    const buttonEquals = container.find("#operator-equals")
    button7.simulate("click")
    buttonSubtract.simulate("click")
    button4.simulate("click")
    buttonEquals.simulate("click")
    const runningTotal = container.find('#running-total')
    expect(runningTotal.text()).toEqual('3');
  })

  it('should be able to multiply numbers and find the total', () => {
    const button3 = container.find('#number3')
    const button5 = container.find('#number5')
    const buttonmultiply = container.find("#operator-multiply")
    const buttonEquals = container.find("#operator-equals")
    button3.simulate("click")
    buttonmultiply.simulate("click")
    button5.simulate("click")
    buttonEquals.simulate("click")
    const runningTotal = container.find('#running-total')
    expect(runningTotal.text()).toEqual('15');
  })

  it('should be able to divide numbers and find the total', () => {
    const button2 = container.find('#number2')
    const button1 = container.find('#number1')
    const button7 = container.find('#number7')
    const buttondivide = container.find("#operator-divide")
    const buttonEquals = container.find("#operator-equals")
    button2.simulate("click")
    button1.simulate("click")
    buttondivide.simulate("click")
    button7.simulate("click")
    buttonEquals.simulate("click")
    const runningTotal = container.find('#running-total')
    expect(runningTotal.text()).toEqual('3');
  })

  it('can concatonate numbers', () => {
    const button2 = container.find('#number2')
    const button1 = container.find('#number1')
    button2.simulate("click")
    button1.simulate("click")
    const runningTotal = container.find('#running-total')
    expect(runningTotal.text()).toEqual('21');
  })

  it('can chain operations', () => {
    const button2 = container.find('#number2')
    const button1 = container.find('#number1')
    const buttonmultiply = container.find("#operator-multiply")
    const buttonEquals = container.find("#operator-equals")
    button2.simulate("click")
    buttonmultiply.simulate("click")
    button1.simulate("click")
    buttonmultiply.simulate("click")
    button2.simulate("click")
    buttonEquals.simulate("click")
    const runningTotal = container.find('#running-total')
    expect(runningTotal.text()).toEqual('4');
  })

  it('returns orginal number if you use subtract or add and then clear before hitting equals', () => {
    const button2 = container.find('#number2')
    const button1 = container.find('#number1')
    const buttonAdd = container.find("#operator_add")
    const buttonEquals = container.find("#operator-equals")
    const buttonClear = container.find("#clear")
    button1.simulate("click")
    buttonAdd.simulate("click")
    button2.simulate("click")
    buttonClear.simulate("click")
    buttonEquals.simulate("click")
    const runningTotal = container.find('#running-total')
    expect(runningTotal.text()).toEqual('1');
  })

  
})
