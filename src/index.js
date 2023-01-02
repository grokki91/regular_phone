export default function validatePhone(phone) {
  const templateWithoutSpace = phone.replace(/[^+\d]/g, '');
  return templateWithoutSpace.replace(/^([8|86])/, '+7');
}
