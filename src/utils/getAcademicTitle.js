import {academicTitles} from 'SiteConfig';

const getAcademicTitle = rank => {
  return academicTitles[rank] || '';
};

export default getAcademicTitle;
