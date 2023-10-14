export const formatPhoneNumber = (phoneNumber) => {
  const numericString = phoneNumber.replace(/\D/g, "");

  if (/^\d{11}$/.test(numericString)) {
    const match = numericString.match(/^(\d{2})(\d)(\d{4})(\d{4})$/);

    return `(${match[1]}) ${match[2]} ${match[3]}-${match[4]}`;
  } else if (/^\d{10}$/.test(numericString)) {
    const match = numericString.match(/^(\d{2})(\d{4})(\d{4})$/);

    return `(${match[1]}) ${match[2]}-${match[3]}`;
  }

  return phoneNumber;
};
