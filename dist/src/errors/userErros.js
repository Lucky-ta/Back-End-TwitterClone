"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const EMAILREQUIREDERROR = { message: 'Email is required' };
const EMAILFORMATERROR = { message: 'Email format is invalid' };
const EMAILTYPEERROR = { message: 'Email format is invalid' };
const EMAILALREADYEXIST = { message: 'E-mail já cadastrado' };
const PASSWORDREQUIREDERROR = { message: 'Password is required' };
const PASSWORDTYPEERROR = { message: 'password format is invalid' };
const PASSWORDLENGTHERROR = { message: 'Password must have 6 or more characters' };
const INVALIDPASSWORD = { message: 'Invalid Password' };
const NAMEREQUIREDERROR = { message: 'Name is required' };
const NAMETYPEERROR = { message: 'Name format is invalid' };
const NAMELENGTHERROR = { message: 'Name must have 3 or more characters' };
const USERNOTEXISTS = { message: 'Usuario não registrado' };
const INVALIDTWEET = { message: 'Digite algo antes' };
exports.default = {
    EMAILREQUIREDERROR,
    EMAILFORMATERROR,
    EMAILTYPEERROR,
    PASSWORDREQUIREDERROR,
    PASSWORDTYPEERROR,
    PASSWORDLENGTHERROR,
    NAMEREQUIREDERROR,
    NAMETYPEERROR,
    NAMELENGTHERROR,
    EMAILALREADYEXIST,
    USERNOTEXISTS,
    INVALIDPASSWORD,
    INVALIDTWEET,
};
