//test if prop.value exist
//test if h3 DOM elt exist, if prop.value != ''
//test render to h3.text and prop.value are eq
import React from 'react';
import { shallow } from 'enzyme';
import ErrorMsg from './ErrorMsg';

it('test if prop.value exist', () => {
  const wrapper = shallow(<ErrorMsg value='test' />);
  expect(wrapper.props().children).toBe('test');
});
it('h3 element exist if value is non-empty str', () => {
  const wrapper = shallow(<ErrorMsg value='test' />);
  expect(wrapper.find('h3.error-message')).toHaveLength(1);
});
it('test render to h3.text and prop.value are eq', () => {
  const wrapper = shallow(<ErrorMsg value='test' />);
  expect(wrapper.props().children).toEqual(wrapper.find('h3.error-message').text());
});
