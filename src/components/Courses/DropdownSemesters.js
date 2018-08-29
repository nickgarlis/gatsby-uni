import React from 'react'
import { Dropdown } from 'semantic-ui-react'

const getOptions = (totalSemesters) => {
  const options = []
  for (let i = 1; i < totalSemesters + 1; i++) {
    options.push({
      'text': `Semester ${i}`,
      'value': i
    })
  }
  return options
}

const DropdownSemesters = ({totalSemesters, handleSemesterClick}) => (
  <Dropdown
    placeholder='Select Semester'
    fluid
    selection
    options={getOptions(totalSemesters)}
    onChange={handleSemesterClick}
  />
)

export default DropdownSemesters
