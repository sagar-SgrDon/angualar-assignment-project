import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  addUser: boolean = false;
  editUser: boolean = false;

  constructor() {}
}
