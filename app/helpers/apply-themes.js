import { helper } from '@ember/component/helper';

export function applyThemes([baseClass, themes]) {
  let themeClasses = themes.split(' ').map(theme => `${baseClass}-${theme}`).join(' ');
  return `${baseClass} ${themeClasses}`;
}

export default helper(applyThemes);