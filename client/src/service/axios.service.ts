import axios, { InternalAxiosRequestConfig } from "axios";
import { AxiosApiError, AxiosConfig } from "../interface/axios.interface.ts";
import { storageApi } from "../api/storage.api.ts";
import { authApi } from "../api/auth.api.ts";
import { UnauthorizedRouter } from "../router/Unauthorized.router.tsx";

export const axiosInstance = axios.create( { baseURL: "http://localhost:5300" } );

axiosInstance.interceptors.request.use(
    ( config: AxiosConfig ) => {
       const accessToken = storageApi.getAccessToken();

       if ( accessToken ) config.headers.setAuthorization( `Bearer ${ accessToken }` );

       return config;
    },
);

axiosInstance.interceptors.response.use(
    ( config ) => {
       return config;
    },
    async ( error ) => {
       const axiosError = error as AxiosApiError;
       const refreshToken = storageApi.getRefreshToken();
       const originalRequest = axiosError.config as InternalAxiosRequestConfig<any> & { _isRetry: boolean };

       if ( axiosError.response?.status === 401 && refreshToken && !originalRequest._isRetry ) {
          originalRequest._isRetry = true;

          try {
             const { data } = await authApi.refresh( refreshToken );
             storageApi.setTokens( data.accessToken, data.refreshToken );
          }
          catch ( e ) {
             storageApi.removeTokens();
             await UnauthorizedRouter.navigate( "/login" );
          }

          originalRequest._isRetry = false;
          return axiosInstance( originalRequest );
       }

       return Promise.reject( error );
    }
);