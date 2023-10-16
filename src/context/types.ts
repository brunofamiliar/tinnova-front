export type ClienteDataType = {
  name: string;
  cpf: string;
  phone: string;
  email: string;
};

export type ClienteDefaultProviderType = {
  clients: ClienteDataType[] | null;
  loading: boolean;
  clientSelected: ClienteDataType | null;
  clientSelect: (cpf: string) => void;
  clientEdit: (clientUpdated: ClienteDataType) => void;
  clientAdd: (clientUpdated: ClienteDataType) => void;
  clientDelete: (cpf: string) => void;
  clearClientSelected: () => void;
};
