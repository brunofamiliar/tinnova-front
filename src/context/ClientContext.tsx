import { clientConfig } from "@/configs/client.config";
import { ClienteDataType, ClienteDefaultProviderType } from "@/context/types";
import { ReactNode, createContext, useEffect, useState } from "react";

const defaultProvider: ClienteDefaultProviderType = {
  clients: [],
  loading: true,
  clientSelected: null,
  handleEditingClient: (cpf: string) => void;
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
              window.localStorage.setItem(
                clientConfig.storageClientKeyName,
                JSON.stringify(data)
              );
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

  const handleEditingClient = (cpf: string) => {
    const clientFound = clients?.find(client => client.cpf === cpf);

    if(clientFound)
      setClientSelected(clientFound);

  };

  return (
    <ClientContext.Provider
      value={{
        clients,
        loading,
        clientSelected,
        handleEditingClient
      }}
    >
      {children}
    </ClientContext.Provider>
  );
};

export { ClientContext, ClientProvider };
