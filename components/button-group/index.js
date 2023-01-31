import React, { useState } from 'react'
import cn from 'classnames'

import Button from '../button'

import styles from './button-group.module.css'

import { Col, Row, Checkbox, Select } from 'antd';


const ButtonGroup = ({
  buttons,
  selected,
  isFilter=true,
  setSelected,
  borderBottom = false
}) => {
  const [showFilter, setShowFilter] = useState(false)
  const [options, setOptions] = useState([])

  return (
    <>
    <div className={cn(styles.container, borderBottom && styles.borderBottom)}>
      {buttons.map((button) => (
        <Button
          key={button}
          className={selected === button && styles.active}
          onClick={() => setSelected(button)}
        >
          {button}
        </Button>
      ))}
      {isFilter && <Button style={{marginLeft:20,  borderRadius: 3}} onClick={() => setShowFilter(true)}>Filter</Button>}
    </div>
    {showFilter && 
      <Row >
        <Col span={12}></Col>
        <Col span={12} style={{ backgroundColor:"#ACBFD0", paddingLeft: 30}}>
            <div className='left-option'>
              <span>Sorted by: </span>
               <Checkbox.Group style={{display:"block"}}>
                <Checkbox>Newest</Checkbox>
                <Checkbox>Oldest</Checkbox>
                <Checkbox>Highest votes</Checkbox>
                <Checkbox>Highest views</Checkbox>
              </Checkbox.Group>
            </div>
           <div className='right-option'>
            <span>Tag: </span>
              <Select
                mode="tags"
                style={{ width: '100%' }}
                onChange={(value) => console.log(value)}
                tokenSeparators={[',']}
                options={options}
                notFoundContent={false}
              />
           </div>     
        <Button style={{borderRadius: 3}} primary={true} onClick={() => setShowFilter(false)}>Search</Button>
        <Button style={{marginLeft:20,  borderRadius: 3}} secondary={true} onClick={() => setShowFilter(false)}>Cancel</Button></Col>
      </Row>
}
    </>
  )
}

export default ButtonGroup
