import { Button } from "@/components/buttons/button";
import { useClient } from "@/hooks/useClient";
import { ListClients } from "@/templates/list-clients/list-clients";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Home = () => {
  const router = useRouter();
  const { clearClientSelected } = useClient();

  useEffect(() => {
    clearClientSelected();
  }, [router]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="container">
      <Button onClick={() => router.push("/client")}>Cadastrar</Button>
      <ListClients />
    </div>
  );
};

export default Home;
