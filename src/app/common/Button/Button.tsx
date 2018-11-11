import * as React from 'react'

import { Button as ButtonBS } from 'reactstrap'

type ButtonColor =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'info'
  | 'warning'
  | 'danger'
  | 'link'

type Props = {
  children: React.ReactNode
  color?: ButtonColor
  onClick?: (event: React.MouseEvent<HTMLElement>) => void
}

const Button: React.SFC<Props> = ({ children, ...passThruProps }: Props) => (
  <ButtonBS {...passThruProps}>{children}</ButtonBS>
)

Button.defaultProps = {
  color: 'primary',
}

export default Button
