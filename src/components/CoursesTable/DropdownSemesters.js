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

const DropdownSemesters = ({totalSemesters, selectedSemester, handleSemesterClick}) => {
  const options = getOptions(totalSemesters)
  const defaultValue = selectedSemester || options[0].value

  return (
    <Dropdown
      fluid
      selection
      defaultValue={defaultValue}
      options={options}
      onChange={handleSemesterClick}
    />
  )
}

export default DropdownSemesters
