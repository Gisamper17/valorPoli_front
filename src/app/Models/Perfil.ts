import {Deserializable} from "./Deserializable";
export class Usuarios{
    id: number;
    name: string;
    username: string;
    email: String;
    address: string;
    phone: string;
    companyname: string;
    website: string;
}

export class Misesion{
    id: number;
    name: string;
    username: string;
    email: String;
    address: string;
    phone: string;
    companyname: string;
    website: string;

}
export interface Misesionn{
    id: number;
    name: string;
    username: string;
    email: String;
    address: string;
    phone: string;
    companyname: string;
}
export interface Persona{
    id: number;
    name: string;
    username: string;
    email: String;
    address: string;
    phone: string;
    companyname: string;

}

export interface Todos{
    id: number;
    title: String;
}
