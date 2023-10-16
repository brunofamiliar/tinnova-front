import style from "../../styles/default-layout.module.scss";

export default function DefaultLayout({ children }) {
  return (
    <>
      <header className={style.header}>
        <div className="container">Gerenciamento de Clientes - Tinnova</div>
      </header>
      <main>{children}</main>
    </>
  );
}
