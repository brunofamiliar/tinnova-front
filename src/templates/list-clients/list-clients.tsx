import { CardClientInfo } from "@/components/cards/card-user-info/card-client-info";
import { useClient } from "@/hooks/useClient";
import { v4 as uuid } from "uuid";
import style from "../../../styles/list-clients.module.scss";

export const ListClients = () => {
  const { clients, loading } = useClient();

  return (
    <div className={style["container-list-clients"]}>
      {clients?.map((client) => (
        <CardClientInfo key={uuid()} client={client} />
      ))}
    </div>
  );
};
