import { Card } from "@/components/cards/card";
import { z } from "zod";
import style from "../../../styles/pages/manager-client.module.scss";
import { TextField } from "@/components/inputs/text-field/text-field";
import { Button } from "@/components/buttons/button";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { formClientSchema } from "./manager-client.schema";
import { useEffect, useMemo, useState } from "react";
import { useClient } from "@/hooks/useClient";
import { useRouter } from "next/router";

type FormClientData = z.infer<typeof formClientSchema>;

export const ManagerClient = () => {
  const router = useRouter();
  const { clientSelected, clientEdit, clientAdd } = useClient();
  const [loading, setLoading] = useState(false);

  const titleManagerClient = !clientSelected
    ? "Adicionar Cliente"
    : "Editar Informações do Cliente";

  const {
    handleSubmit,
    control,
    reset,
    getValues,
    formState: { errors },
  } = useForm<FormClientData>({
    resolver: zodResolver(formClientSchema),
  });

  const watchForm = useWatch({ control });

  const formFilled = useMemo(() => {
    const formValues = getValues();

    const allValuesFilled = Object.values(formValues).every(
      (value) => value && value !== null && value !== ""
    );
    return allValuesFilled;
  }, [watchForm]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (clientSelected) {
      reset({ ...clientSelected });
    }
  }, [clientSelected, reset]);

  const delay = (milliseconds) => {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
  };

  const onSubmit = async (data) => {
    setLoading(true);
    await delay(5000);

    if (clientSelected) {
      clientEdit(data);
    } else {
      clientAdd(data);
    }

    setLoading(false);
    router.push("/");
  };

  return (
    <>
      <div className={style["button-back"]}>
        <Button
          onClick={() => {
            router.push("/");
          }}
        >
          <Icon width={20} icon={"formkit:arrowleft"} />
        </Button>
        <span>Voltar</span>
      </div>
      <Card>
        <header className={style["card-header"]}>
          <h2>{titleManagerClient}</h2>
          <p>Gerencie de forma segura as informações do seu cliente.</p>
        </header>
        <div className={style["card-body"]}>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className={style["client-form"]}
          >
            <TextField
              invalid={!!errors.name}
              errorMessage={errors.name?.message}
              label="Nome completo [sem abreviações]"
              name="name"
              control={control}
            />
            <TextField
              invalid={!!errors.email}
              errorMessage={errors.email?.message}
              label="Email"
              name="email"
              control={control}
            />
            <TextField
              invalid={!!errors.cpf}
              errorMessage={errors.cpf?.message}
              label="CPF"
              name="cpf"
              mask="999.999.999-99"
              control={control}
            />
            <TextField
              invalid={!!errors.phone}
              errorMessage={errors.phone?.message as string}
              label="Telefone"
              name="phone"
              maxLength={10}
              control={control}
            />
            <Button
              startContent={
                <Icon
                  className={style["icon-note-pencil-bold"]}
                  width={loading ? 20 : 16}
                  icon={
                    loading ? "line-md:loading-loop" : "ph:note-pencil-bold"
                  }
                />
              }
              disabled={!formFilled}
            >
              {!loading && "Salvar alterações"}
            </Button>
          </form>
        </div>
      </Card>
    </>
  );
};
