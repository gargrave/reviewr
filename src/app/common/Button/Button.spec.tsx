import * as React from 'react'
import { shallow } from 'enzyme'

import {
  ButtonNativeType,
  ButtonColor,
  IButtonProps,
  UnwrappedButton as Button,
} from './Button'

const defaultProps: IButtonProps = {
  children: 'Hello',
  onClick: jest.fn(),
}

describe('Button', () => {
  describe('Props', () => {
    it('sets default props correctly', () => {
      const component = shallow(<Button {...defaultProps} />)
      const props = component.props()

      expect(props.color).toBe(ButtonColor.Primary)
      expect(props.type).toBe(ButtonNativeType.Button)
    })
  })
})
