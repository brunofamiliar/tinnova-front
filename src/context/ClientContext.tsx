import { clientConfig } from "@/configs/client.config";
import { ClienteDataType, ClienteDefaultProviderType } from "@/context/types";
import { ReactNode, createContext, useEffect, useState } from "react";

const defaultProvider: ClienteDefaultProviderType = {
  clients: [],
  loading: true,
  clientSelected: null,
  clientSelect: (cpf: string) => null,
  clientEdit: (clientUpdated: ClienteDataType) => null,
  clientAdd: (clientUpdated: ClienteDataType) => null,
  clientDelete: (cpf: string) => null,
  clearClientSelected: () => null,
};

const ClientContext = createContext(defaultProvider);

type Props = {
  children: ReactNode;
};

const ClientProvider = ({ children }: Props) => {
  const [clients, setClients] = useState<ClienteDataType[] | null>(
    defaultProvider.clients
  );

  const [clientSelected, setClientSelected] = useState<ClienteDataType | null>(
    defaultProvider.clientSelected
  );

  const [loading, setLoading] = useState<boolean>(defaultProvider.loading);

  const addClientDataLocalStorage = (clientData) => {
    window.localStorage.setItem(
      clientConfig.storageClientKeyName,
      JSON.stringify(clientData)
    );
  };

  const clearClientSelected = () => {
    setClientSelected(null);
  };

  useEffect(() => {
    const initClients = async () => {
      const storedClients = window.localStorage.getItem(
        clientConfig.storageClientKeyName
      );

      if (!storedClients) {
        setLoading(true);
        await fetch(process.env.NEXT_PUBLIC_TINNOVA_BASE_URL as string)
          .then(async (response) => {
            if (response.ok) {
              const data = await response.json();
              setClients(data);
              addClientDataLocalStorage(data);
            }
          })
          .catch(() => {
            window.localStorage.removeItem(clientConfig.storageClientKeyName);
            setClients(defaultProvider.clients);
          })
          .finally(() => {
            setLoading(false);
          });
      } else {
        setClients(JSON.parse(storedClients));
      }
    };

    initClients();
  }, []);

  const clientSelect = (cpf: string) => {
    const clientFound = clients?.find((client) => client.cpf === cpf);
    if (clientFound) setClientSelected(clientFound);
  };

  const clientEdit = (clientUpdated: ClienteDataType) => {
    const { cpf } = clientUpdated;
    const clientFound = clients?.find((client) => client.cpf === cpf);

    if (!clientFound) return;

    const clientsUpdated = clients?.map((client) =>
      client.cpf === clientFound.cpf ? { ...client, ...clientUpdated } : client
    );

    setClients(clientsUpdated as ClienteDataType[]);
    addClientDataLocalStorage(clientsUpdated);
  };

  const clientAdd = (newClient: ClienteDataType) => {
    const clientsUpdated = [...(clients as ClienteDataType[]), newClient];

    setClients(clientsUpdated as ClienteDataType[]);
    addClientDataLocalStorage(clientsUpdated);
  };

  const clientDelete = (cpf: string) => {
    const clientsUpdated = clients?.filter((client) => client.cpf !== cpf);
    setClients(clientsUpdated as ClienteDataType[]);
    addClientDataLocalStorage(clientsUpdated);
  };

  return (
    <ClientContext.Provider
      value={{
        clients,
        loading,
        clientSelected,
        clientSelect,
        clientEdit,
        clientAdd,
        clientDelete,
        clearClientSelected,
      }}
    >
      {children}
    </ClientContext.Provider>
  );
};

export { ClientContext, ClientProvider };
