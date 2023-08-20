import { OAuthModel } from "../../model";

export const logoutService = async ( accessToken: string ): Promise<void> => {
   await OAuthModel.deleteOne( { accessToken } );
};