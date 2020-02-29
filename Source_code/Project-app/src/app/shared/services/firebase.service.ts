import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(public db: AngularFirestore) {}

  getAvatars(){
      return this.db.collection('/avatar').valueChanges()
  }

  getUser(userKey){
    return this.db.collection('group').doc(userKey).snapshotChanges();
  }
  getUserByEmail(userKey){
    return this.db.collection('group').doc(userKey).snapshotChanges();
  }

  updateUser(userKey, value){
    value.nameToSearch = value.name.toLowerCase();
    return this.db.collection('group').doc(userKey).set(value);
  }

  deleteUser(userKey){
    return this.db.collection('group').doc(userKey).delete();
  }

  getUsers(){
    return this.db.collection('group').snapshotChanges();
  }

  searchUsers(searchValue){
    return this.db.collection('group',ref => ref.where('nameToSearch', '>=', searchValue)
      .where('nameToSearch', '<=', searchValue + '\uf8ff'))
      .snapshotChanges()
  }

  searchUsersByAge(value){
    return this.db.collection('group',ref => ref.orderBy('age').startAt(value)).snapshotChanges();
  }


  createUser(value, avatar){
    return this.db.collection('group').add({
      name: value.name,
      nameToSearch: value.name.toLowerCase(),
      surname: value.surname,
      email:value.email,
      age: parseInt(value.age),
      role:value.role,
      avatar: avatar
    });
  }
}
