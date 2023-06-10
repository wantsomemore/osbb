import AntdIcon from '@ant-design/icons'
import './Icon.styles.css'
const Icon = ({ Component, onClick }) => {
  return <AntdIcon component={Component} onClick={onClick} className="icon" />
}

export default Icon
