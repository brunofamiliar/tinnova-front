export const formatCPF = (cpf) => {
  const numericString = cpf.replace(/\D/g, "");

  if (/^\d{11}$/.test(numericString)) {
    const match = numericString.match(/^(\d{3})(\d{3})(\d{3})(\d{2})$/);

    return `${match[1]}.${match[2]}.${match[3]}-${match[4]}`;
  } else {
    return cpf;
  }
};
