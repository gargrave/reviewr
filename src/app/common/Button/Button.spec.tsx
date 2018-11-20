import * as React from 'react';
import { shallow } from 'enzyme';

import Button, { ButtonNativeType, ButtonColor } from './Button';

const defaultProps = {
  children: 'Hello',
  onClick: jest.fn(),
};

describe('Button', () => {
  describe('Props', () => {
    it('sets default props correctly', () => {
      const component = shallow(<Button {...defaultProps} />);
      const props = component.props();

      expect(props.color).toBe(ButtonColor.Primary);
    });
  });
});
