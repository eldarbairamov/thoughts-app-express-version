import { AxiosError, AxiosRequestConfig, AxiosRequestHeaders } from "axios";

export interface AxiosConfig extends AxiosRequestConfig {
   headers: AxiosRequestHeaders;
}

export type AxiosApiError = AxiosError<{ message: string, status: number }>
