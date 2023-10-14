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
  handleEditingClient: (cpf: string) => void;
};
