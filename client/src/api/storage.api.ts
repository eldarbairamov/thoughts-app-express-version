export const storageApi = {

   setTokens: ( accessToken: string, refreshToken: string ) => {
      localStorage.setItem( "accessToken", accessToken );
      localStorage.setItem( "refreshToken", refreshToken );
   },

   setUsername: ( username: string ) => {
      localStorage.setItem( "username", username );
   },

   removeTokens: () => {
      localStorage.removeItem( "accessToken" );
      localStorage.removeItem( "refreshToken" );
   },

   getAccessToken: () => localStorage.getItem( "accessToken" ),
   getRefreshToken: () => localStorage.getItem( "refreshToken" ),

   getUsername: () => localStorage.getItem( "username" ),

   getTheme: () => localStorage.getItem('theme'),
   setTheme: (theme: string) => localStorage.setItem('theme', theme)

};