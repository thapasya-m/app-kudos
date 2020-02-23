//check if props contains value
//check if compt contains header elt on passign value {username}
//check if compt contains logout btn
import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

let wrapper = {}
beforeAll(() => {
  wrapper = shallow(<Header value={{ username: 'seinfeld', kudos:3 }} />);
});

it('header & btn DOM elts exist', () => {
  expect(wrapper.find('header')).toHaveLength(1);
  expect(wrapper.find('button').text()).toEqual('Log out');
})