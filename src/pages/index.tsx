import { ClientProvider } from "@/context/ClientContext";
import { ListClients } from "@/templates/list-clients/list-clients";
import style from "../../styles/index.module.scss";

const Home = () => {
  return (
    <ClientProvider>
      <header className={style.header}>
        <div className={style.container}>
          Gerenciamento de Clientes - Tinnova
        </div>
      </header>
      <div className={style.container}>
        <ListClients />
      </div>
    </ClientProvider>
  );
};

export default Home;
