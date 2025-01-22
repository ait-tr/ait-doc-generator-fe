import { ReactNode } from "react"

export interface LayoutProps {
  children: ReactNode
}

export enum PagesPaths {
  HOME = "/home",
  HOWITWORKING = "/how-it-working",
  LOGIN = "/login",
  REGISTRATION = "/registration",
}
