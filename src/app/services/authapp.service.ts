import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthappService {

  constructor() { }

  autenticate = (userId: string, password: string): boolean => {
   var retVal = (userId === 'Vincenzo' && password === '1234') ? true : false;
   if(retVal){
      sessionStorage.setItem('Utente', userId);
    }
    return retVal;
  }

  loggedUser = (): string | null =>  sessionStorage.getItem('Utente') ? sessionStorage.getItem('Utente') : "";

  isLogged = (): boolean => sessionStorage.getItem('Utente') ? true : false;

  clearUser = (): void => sessionStorage.removeItem('Utente');

  clearAll = (): void => sessionStorage.clear();

}
