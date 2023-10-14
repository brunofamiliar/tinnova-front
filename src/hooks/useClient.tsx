import { ClientContext } from "@/context/ClientContext";
import { useContext } from "react";

export const useClient = () => useContext(ClientContext);
