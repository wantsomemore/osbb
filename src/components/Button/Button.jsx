import { Button as AntdButton } from 'antd'

const Button = ({ children, onClick, className, role, disabled }) => {
  return (
    <AntdButton onClick={onClick} className={className} role={role} disabled={disabled}>
      {children}
    </AntdButton>
  )
}

export default Button
