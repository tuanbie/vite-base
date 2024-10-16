import { Timestamp } from 'firebase/firestore';

export interface ICourse {
  id: string;
  id_category: string;
  idIntructor: string;
  thumb: string;
  title: string;
  author: string;
  rating: number;
  ratingCount: number;
  price: number;
  level: string;
  description: string;
  free: boolean;
  totalLecture: number;
  totalStudent: number;
  totalTimeVideo: number;
  learned: string[];
  requiments: string[];
  createdAt: Timestamp;
  updatedAt: Timestamp;
}

export interface ILecture {
  id: string;
  idCourse: string;
  name: string;
  index: number;
  lectureCount: number;
  learnedCount: number;
  createdAt: Timestamp;
  updatedAt: Timestamp;
  lectures: {
    id: string;
    idSection: string;
    description: string;
    name: string;
    index: number;
    learned: boolean;
    durationTimeVideo: any;
    createdAt: Timestamp;
    updatedAt: Timestamp;
  }[];
}

export interface IInstructor {
  id: string;
  idUser: string;
  email: string;
  name: string;
  avatar: string;
  field: string;
  rating: number;
  linkSocialMedia: string[];
  description: string;
  totalCourses: number;
  totalStudents: number;
  reviewCount: number;
  createdAt: Timestamp;
  updatedAt: Timestamp;
}
export interface IBlog {
  avatar: string;
  title: string;
  thumb: string;
  author: string;
  topic: string;
  shortDescription: string;
  createdAt: Timestamp;
  updatedAt: Timestamp;
}
export interface ICategories {
  name: string;
  submenu: string[];
  subcategories: {
    id: string;
    name: string;
    parent_ID: string;
    subcategories: {
      name: string;
      parent_ID: string;
    }[];
  }[];
}
