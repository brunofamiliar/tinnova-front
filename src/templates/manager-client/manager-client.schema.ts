import { z } from "zod";
import validator from "validator";

export const formClientSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Campo obrigatório" })
    .email("Informe um e-mail válido"),
  name: z
    .string()
    .min(3, { message: "Campo deve conter 3 caracteres ou mais" }),
  cpf: z
    .string()
    .min(1, { message: "Campo obrigatório" })
    .refine((value) => /^\d{11}$/.test(value), "Informe um CPF válido"),
  phone: z
    .string()
    .refine(validator.isMobilePhone, { message: "Informe um telefone válido" }),
});
