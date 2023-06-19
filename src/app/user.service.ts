import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, signInWithPopup, GoogleAuthProvider} from '@angular/fire/auth';
@Injectable()
export class UserService {

constructor(private auth:Auth) { }
    isAdmin=false;
    
    register({email, password}:any){
        return createUserWithEmailAndPassword(this.auth,email,password);
    }
    Admin(){
        const user = this.auth.currentUser;
        var isAdmin=false;
        if (user !== null) {
            console.log(user.email);
            // Verificar si el usuario es administrador
            if (user.email === 'f3rnand032127@gmail.com') {
              // Realizar acciones específicas para el usuario administrador
              console.log('El usuario es un administrador');
              isAdmin=true;
            }
        }

        return isAdmin;
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
    
    public isAuthenticated(): boolean {
        return !!this.auth.currentUser;
      }

}
