import * as React from 'react'

import { Button as ButtonBS } from 'reactstrap'

export enum ButtonColor {
  Danger = 'danger',
  Info = 'info',
  Link = 'link',
  Primary = 'primary',
  Secondary = 'secondary',
  Success = 'success',
  Warning = 'warning',
}

export enum ButtonNativeType {
  Button = 'button',
  Submit = 'submit',
  Reset = 'reset',
}

interface IProps {
  /** The content of the button. Can be any valid React child, including simple text. */
  children: React.ReactNode
  /**
   * The pre-defined color value to use (maps directly to Bootstrap's colors).
   *
   * Use the exported `ButtonColor` enum for this value.
   */
  color?: ButtonColor
  /** The Button's click handler. You know the drill here. */
  onClick?: (event: React.MouseEvent<HTMLElement>) => void
  /**
   * The native HTML 'type' attribute to apply (default: 'button').
   *
   * Use the exported `ButtonNativeType` enum for this value.
   */
  type?: ButtonNativeType
}

/**
 * A basic Button.
 *
 * This is mostly a wrapper for the [Reactstrap Button](https://reactstrap.github.io/components/buttons)
 * with some additional styles/props added.
 */
const Button: React.SFC<IProps> = ({
  color,
  children,
  onClick,
  type,
}: IProps) => (
  <ButtonBS color={color} onClick={onClick} type={type}>
    {children}
  </ButtonBS>
)

Button.defaultProps = {
  color: ButtonColor.Primary,
  type: ButtonNativeType.Button,
}

export default Button
