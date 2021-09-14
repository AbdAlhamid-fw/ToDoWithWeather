/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { createContext, useContext, useEffect, useState } from "react";
import { useCookies } from "react-cookie";
//import useSound from "use-sound";
interface IAuthContext {
  loading: boolean;
  authenticated: boolean;
  cookies?: any;
  actions: {
    login: (data: any) => void;
    logout: () => void;
  };
}

const initialContextState: IAuthContext = {
  loading: false,
  authenticated: false,
  actions: {
    login: () => {},
    logout: () => {}
  },
};

export const AuthContext = createContext(initialContextState);

export const AuthContextProvider: React.FC = (props) => {
  const [loading, setLoading] = useState(false);
  const [auth, setAuth] = useState(false);
  const [cookies, setCookie, removeCookie] = useCookies();
  const [connection, setConnection] = useState<any>();

  const token = encodeURIComponent(cookies.KEY_ENC_TOKEN);

//   useEffect(() => {
//     if (user) {
//       const newConnection = new HubConnectionBuilder()
//         .withUrl(
//           `${process.env.REACT_APP_BASE_SIGNALR_URL}?enc_auth_token=${token}`
//         )
//         .withAutomaticReconnect()
//         .build();
//       setConnection(newConnection);
//     }
//   }, [user]);

//   useEffect(() => {
//     if (connection) {
//       connection
//         .start()
//         .then((result: any) => {
//           connection.on("getNotification", function (userNotification: any) {
//             notify(
//               "success",
//               userNotification.notification.notificationName,
//               userNotification.notification.data.properties["arMessage"]
//             );
//           });
//         })
//         .catch((e: any) => console.log("Connection failed: ", e));
//     }
//   }, [connection]);

//   useEffect((): void => {
//     if (user && auth) {
//       const newConnection = new HubConnectionBuilder()
//         .withUrl(
//           `${process.env.REACT_APP_BASE_SIGNALR_URL}?enc_auth_token=${token}`
//         )
//         .withAutomaticReconnect()
//         .build();
//       setConnection(newConnection);
//       setTimeout(() => {
//         const isAdmin = user.roleNames.find((role: string) => role === "ADMIN");
//         const isDrugStoreManger = user.roleNames.find(
//           (role: string) => role === "DrugStoreManager"
//         );
//         isAdmin
//           ? pushTo("/admin/home")
//           : isDrugStoreManger
//           ? pushTo("/pharmacy/home")
//           : pushTo("/home");
//       }, 800);
//     }
//   }, [user, auth]); 

//   useEffect(() => {
//     user && permissions && intl.setNavContent(permissions, user.roleNames);
//   }, [user, permissions]);
 
 
  const login = async (data: any) => {
    setLoading(true);
  //  const result = await tokenAuthService.authenticate(data);
    setLoading(false);
    // if (isError(result)) {
    //   notify("danger", "error", "error", result.details);
    // } else {
    //   // Persist token and profile
    //   setCookie("KEY_TOKEN", result.accessToken, {
    //     maxAge: parseInt(
    //       process.env.USER_LOGIN_TIME_OUT_IN_SECS ?? "180000000"
    //     ),
    //     path: "/",
    //   });
    //   setCookie("KEY_ENC_TOKEN", result.encryptedAccessToken);
    //   setCookie("KEY_USER", JSON.stringify(result.userId), {
    //     maxAge: parseInt(
    //       process.env.USER_LOGIN_TIME_OUT_IN_SECS ?? "180000000"
    //     ),
    //     path: "/",
    //   });
    //   setAuth(true);
    // }
    setLoading(false);
  };


  const logout = async () => {
    removeCookie("KEY_TOKEN");
    removeCookie("KEY_ENC_TOKEN");
    removeCookie("KEY_USER");
    document.cookie.split(";").forEach(function (c) {
      document.cookie = c
        .replace(/^ +/, "")
        .replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
    });
    // setUser(undefined);
    // setPermissions(undefined);
    // pushTo("/auth");
  };
  return (
    <AuthContext.Provider
      value={{
        loading,
        authenticated: auth,
        cookies,
        actions: {
          login,
          logout,
        },
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
