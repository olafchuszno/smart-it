export default function isPhoneMatchingUser(usersPhone: string, inputPhone: string) {
  if (usersPhone.includes(inputPhone)) {
    return true;
  }

  const parsedUserNumber = usersPhone.split('').map((char) => {
    if (!Number.isNaN(+char)) {
      return char;
    } else {
      // eslint-disable-next-line array-callback-return
      return;
    }
  }).join('');

  return parsedUserNumber.includes(inputPhone);
}