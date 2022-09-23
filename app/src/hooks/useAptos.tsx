import { useMemo } from "react";

export function useAptos(window: any) {
  const aptos = window.aptos;

  return useMemo(() => {
    return aptos;
  }, [aptos]);
}
