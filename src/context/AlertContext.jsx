import { useContext } from "react";
import { AlertContext } from '../provider/AlertProvider'

export function useAlerts() {
    const ctx = useContext(AlertContext);
    if (!ctx) throw new Error("useAlerts must be used within AlertProvider");
    return ctx;
}

