import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });
import TripPage from './Components/tripPage';

describe('Component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<TripPage />);
  });

  it('renders', () => {
    expect(wrapper).not.toBeNull();
  });

});