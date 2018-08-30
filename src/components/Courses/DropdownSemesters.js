import React from 'react'
import { Dropdown } from 'semantic-ui-react'

const getOptions = (totalSemesters) => {
  const options = [{
    'text': 'All Semesters',
    'value': 'all'
  }]
  for (let i = 1; i < totalSemesters + 1; i++) {
    options.push({
      'text': `Semester ${i}`,
      'value': i
    })
  }
  return options
}

const DropdownSemesters = ({totalSemesters, handleSemesterClick}) => {
  const options = getOptions(totalSemesters)

  return (
    <Dropdown
      fluid
      selection
      defaultValue={options[0].value}
      options={options}
      onChange={handleSemesterClick}
    />
  )
}

export default DropdownSemesters
