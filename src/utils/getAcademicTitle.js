import {academicTitles} from '../../data/SiteConfig';

const getAcademicTitle = rank => {
  return academicTitles[rank] || '';
};

export default getAcademicTitle;
