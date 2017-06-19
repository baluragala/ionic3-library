import {UUID} from "angular2-uuid";
import firebase from 'firebase';
import {User} from "../models/user.interface";

export class AuthService {

  firebaseAuth;
  firebaseDatabase;
  private isLoggedIn: boolean = false;

  set IsLoggedIn(value: boolean) {
    this.isLoggedIn = value;
  }

  get IsLoggedIn(): boolean {
    return this.isLoggedIn;
  }

  constructor() {
    this.firebaseAuth = firebase.auth();
    this.firebaseDatabase = firebase.database();
  }

  register(user: User) {
    console.log('Creating user', user);
    let uuid = UUID.UUID();
    return this.firebaseAuth
      .createUserWithEmailAndPassword(user.email, user.password)
  }

  login(email: string, password: string) {
    return this.firebaseAuth
      .signInWithEmailAndPassword(email, password)

  }

  logout() {
    this.firebaseAuth.signOut().then(user => {
      console.log(user);
      this.IsLoggedIn = false;
    });
  }


}
