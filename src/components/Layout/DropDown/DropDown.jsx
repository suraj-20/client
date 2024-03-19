import React from 'react'
import { Dropdown } from 'flowbite-react';

const DropDown = () => {
  return (
    <Dropdown label="Dropdown button" dismissOnClick={false}>
      <Dropdown.Item>Class</Dropdown.Item>
      <Dropdown.Item>Economy Class</Dropdown.Item>
      <Dropdown.Item>Business Class</Dropdown.Item>
      <Dropdown.Item>First Class</Dropdown.Item>
    </Dropdown>
  )
}

export default DropDown