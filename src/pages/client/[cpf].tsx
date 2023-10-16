import { useClient } from "@/hooks/useClient";
import { ManagerClient } from "@/templates/manager-client/manager-client";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function EditClient() {
  const router = useRouter();
  const { clientSelected, clientSelect } = useClient();

  useEffect(() => {
    if (!clientSelected) {
      clientSelect(router.query.cpf as string);
    }
  }, [clientSelected, clientSelect, router.query]);

  return (
    <div className="container">
      <ManagerClient />
    </div>
  );
}
