import React from 'react';
import { shallow } from 'enzyme';
import App from '../../src/containers/App';

describe('<App />', () => {
  const wrapper = shallow(<App />);

  it('renders as a headline', () => {
    expect(wrapper.type()).to.eql('h1');
  });

  it('has a light background', () => {
    const expectedStyles = {
      background: '#eee'
    }
    expect(wrapper.prop('style')).to.contain(expectedStyles);
  });

  it('has a meaningful headline', () => {
    expect(wrapper.text()).to.contain('TDD with React');
  });
});
