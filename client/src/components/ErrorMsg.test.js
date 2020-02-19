//test if prop.value exist
//test if h3 DOM elt exist, if prop.value != ''
//test render to h3.text and prop.value are eq
import React from 'react';
import { shallow } from 'enzyme';
import ErrorMsg from './ErrorMsg';

let wrapper = {};
beforeAll(() => {
  wrapper = shallow(<ErrorMsg value='test' />);
})
it('test if prop.value exist', () => {
  expect(wrapper.props().children).toBe('test');
});
it('h3 element exist if value is non-empty str', () => {
  expect(wrapper.find('h3.error-message')).toHaveLength(1);
});
it('test render to h3.text and prop.value are eq', () => {
  expect(wrapper.props().children).toEqual(wrapper.find('h3.error-message').text());
});
