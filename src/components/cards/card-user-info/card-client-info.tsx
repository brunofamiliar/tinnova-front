import { Avatar } from "@/components/avatar/avatar";
import style from "../../../../styles/card-client-info.module.scss";
import { ClienteDataType } from "@/context/types";
import { formatPhoneNumber } from "@/utils/formatPhoneNumber";
import { formatCPF } from "@/utils/formatCPF";
import { Button } from "@/components/buttons/button";
import { Icon } from "@iconify/react";

type CardClientInfoProps = {
  client: ClienteDataType;
};

export const CardClientInfo = ({ client }: CardClientInfoProps) => {
  return (
    <aside className={style["card-container"]}>
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
      >
        Editar
      </Button>
    </aside>
  );
};
