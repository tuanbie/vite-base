// import { Timestamp } from "firebase/firestore";

// export interface IWishList {
//     idUser: string;
//     idCourse: string;
//     // createdAt: Timestamp;
//     // updatedAt: Timestamp;
// }

export interface IUserInfo {
    uid: string;
    email: string;
    active: boolean;
    accessToken: string;
    phone: string;
    roles: string;
    full_name: string;
    // createdAt: Timestamp;
    // updatedAt: Timestamp;
}
export interface UserType {
    email: string;
    password: string;
}
