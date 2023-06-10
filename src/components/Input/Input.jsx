import React from 'react'
import { Input as AntInput } from 'antd'

const Input = ({
  type,
  value,
  onChange,
  disabled,
  name,
  placeholder,
  suffix,
  prefix,
  className
}) => {
  return (
    <AntInput
      role="input"
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      disabled={disabled}
      placeholder={placeholder}
      suffix={suffix}
      prefix={prefix}
      className={className}
    />
  )
}

export default Input
