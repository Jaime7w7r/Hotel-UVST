import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, signInWithPopup, GoogleAuthProvider} from '@angular/fire/auth';
@Injectable()
export class UserService {

constructor(private auth:Auth) { }

    register({email, password}:any){
        return createUserWithEmailAndPassword(this.auth,email,password);
    }

    logIn({email, password}:any){
        return signInWithEmailAndPassword(this.auth,email,password);
    }

    logout(){
        return signOut(this.auth);
    }

    loginWithGoogle(){
        return signInWithPopup(this.auth, new GoogleAuthProvider());
    }

}
