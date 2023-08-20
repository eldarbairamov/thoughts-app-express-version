import { axiosInstance } from "../service/axios.service.ts";
import { ILogin, IRegistration, ITokenPair } from "../interface/auth.interface.ts";
import { AxiosResponse } from "axios";

export const authApi = {

   registration: async ( data: IRegistration ): Promise<void> => {
      return axiosInstance.post( "/auth/registration", data );
   },

   login: async ( data: ILogin ): Promise<AxiosResponse<ITokenPair>> => {
      return axiosInstance.post<ITokenPair>( "/auth/login", data );
   },

   logout: async (): Promise<void> => {
      return axiosInstance.delete( "/auth/logout" );
   },

   refresh: async ( refreshToken: string ): Promise<AxiosResponse<Omit<ITokenPair, "username">>> => {
      return axiosInstance.post<Omit<ITokenPair, "username">>( "/auth/refresh", { refreshToken } );
   },

};