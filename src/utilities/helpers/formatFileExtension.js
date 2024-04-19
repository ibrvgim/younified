import { fileExtensions } from '../../constants/fileExtensions';

export function formatFileExtension(fileName) {
  const file = fileExtensions.find((item) => {
    const regExPattern = new RegExp(item.extension, 'gi');
    return regExPattern.test(fileName);
  });

  if (!file)
    return require('../../../assets/fileExtensionsIcon/no-extension.png');
  else return file.icon;
}
