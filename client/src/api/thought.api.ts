import { axiosInstance } from "../service/axios.service.ts";
import { AxiosResponse } from "axios";
import { IThought, IThoughts } from "../interface/thought.interface.ts";

export const thoughtApi = {

   getAll: async ( limit: number ): Promise<AxiosResponse<IThoughts>> => {
      return axiosInstance.get<IThoughts>( "/thoughts", {
         params: {
            limit
         }
      } );
   },

   create: async ( content: string ): Promise<AxiosResponse<IThought>> => {
      return axiosInstance.post<IThought>( "/thoughts", { content } );
   },

   delete: async ( thoughtId: number, limit: number ): Promise<AxiosResponse<IThoughts>> => {
      return axiosInstance.delete<IThoughts>( `/thoughts/${ thoughtId }`, {
         params: {
            limit
         }
      } );
   }

};