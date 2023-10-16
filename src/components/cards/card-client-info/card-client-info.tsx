import { Avatar } from "@/components/avatar/avatar";
import style from "../../../../styles/card-client-info.module.scss";
import { ClienteDataType } from "@/context/types";
import { formatPhoneNumber } from "@/utils/formatPhoneNumber";
import { formatCPF } from "@/utils/formatCPF";
import { Button } from "@/components/buttons/button";
import { Icon } from "@iconify/react";
import { useClient } from "@/hooks/useClient";
import { useRouter } from "next/router";
import { Card } from "../card";
import { useState } from "react";

type CardClientInfoProps = {
  client: ClienteDataType;
};

export const CardClientInfo = ({ client }: CardClientInfoProps) => {
  const router = useRouter();
  const { clientSelect, clientDelete } = useClient();
  const [visibilityButtonDelete, setVisibilityButtonDelete] = useState(false);

  const onEditingClient = (cpf: string) => {
    clientSelect(cpf);
    router.push(`client/${cpf}`);
  };

  const toggleVisibilityButtonDelete = () => {
    setVisibilityButtonDelete((state) => !state);
  };

  return (
    <Card
      onMouseEnter={toggleVisibilityButtonDelete}
      onMouseLeave={toggleVisibilityButtonDelete}
    >
      {visibilityButtonDelete && (
        <button
          onClick={() => clientDelete(client.cpf)}
          className={style["button-delete"]}
        >
          <Icon width={16} icon="ph:trash" />
        </button>
      )}
      <div className={style["card-header"]}>
        <Avatar label={client.name} />
        <p className={style["card-header-title"]}>{client.name}</p>
      </div>
      <div className={style["card-body"]}>
        <p className={style["card-body-title"]}>Detalhes</p>
        <ul className={style["card-body-options"]}>
          <li>
            <p>
              <span>Email:</span> {client.email}
            </p>
          </li>
          <li>
            <p>
              <span>CPF:</span> {formatCPF(client.cpf)}
            </p>
          </li>
          <li>
            <p>
              <span>Telefone:</span> {formatPhoneNumber(client.phone)}
            </p>
          </li>
        </ul>
      </div>
      <Button
        startContent={
          <Icon
            className={style["icon-note-pencil-bold"]}
            width={16}
            icon="ph:note-pencil-bold"
          />
        }
        onClick={() => onEditingClient(client.cpf)}
      >
        Editar
      </Button>
    </Card>
  );
};
