import React, { useContext, useState } from 'react'
import cn from 'classnames'

import Button from '../button'

import styles from './button-group.module.css'

import { Col, Row, Checkbox, Select, Switch, Space } from 'antd'
import { AuthContext } from '../../store/auth'

const ButtonGroup = ({
  buttons,
  selected,
  isFilter = true,
  setSelected,
  borderBottom = false,
  yourComunity,
  checked,
  setChecked
}) => {
  const [showFilter, setShowFilter] = useState(false)
  const [options, setOptions] = useState([])
  const { isAuthenticated } = useContext(AuthContext)
  console.log(isAuthenticated)
  return (
    <div>
      {/* {isAuthenticated() && (
        <Space style={{ marginLeft: '20px' }}>
          <h2 style={{ fontWeight: 'bold', fontSize: '15px' }}>
            Join Comuinity:{' '}
          </h2>
          <Switch
            unCheckedChildren="Comuinity"
            checkedChildren={yourComunity}
            defaultChecked
            checked={checked}
            onChange={(e) => {
              setChecked(e)
            }}
          />
        </Space>
      )} */}
      <div
        className={cn(styles.container, borderBottom && styles.borderBottom)}
      >
        {buttons.map((button) => (
          <Button
            key={button}
            className={selected === button && styles.active}
            onClick={() => setSelected(button)}
          >
            {button}
          </Button>
        ))}
      </div>
    </div>
  )
}

export default ButtonGroup
