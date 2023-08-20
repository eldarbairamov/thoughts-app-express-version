import { axiosInstance } from "../service/axios.service.ts";
import { AxiosResponse } from "axios";
import { IThought } from "../interface/thought.interface.ts";

export const thoughtApi = {

   getAll: async (): Promise<AxiosResponse<IThought[]>> => {
      return axiosInstance.get<IThought[]>( "/thoughts" );
   },

   create: async ( content: string ): Promise<AxiosResponse<IThought>> => {
      return axiosInstance.post<IThought>( "/thoughts", { content } );
   },

   delete: async ( thoughtId: number ) => {
      await axiosInstance.delete( `/thoughts/${thoughtId}`);
   }

};