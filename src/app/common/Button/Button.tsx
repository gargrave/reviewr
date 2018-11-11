import * as React from 'react';

import { Button as ButtonBS } from 'reactstrap';

type ButtonColor =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'info'
  | 'warning'
  | 'danger'
  | 'link';

type Props = {
  /** The content of the button. Can be any valid React child, including simple text. */
  children: React.ReactNode;
  /** The pre-defined color value to use (maps directly to Bootstrap's colors). */
  color?: ButtonColor;
  /** The Button's click handler. You know the drill here. */
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
};

/**
 * A basic Button.
 *
 * This is mostly a wrapper for the [Reactstrap Button](https://reactstrap.github.io/components/buttons) with some additional styles/props added.
 */
const Button: React.SFC<Props> = ({ children, ...passThruProps }: Props) => (
  <ButtonBS {...passThruProps}>{children}</ButtonBS>
);

Button.defaultProps = {
  color: 'primary',
};

export default Button;
