import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  users: any;
  sectionsCollection: any;
  profileuser: any;

  constructor(public db: AngularFirestore) {}

  getAvatars(){
      return this.db.collection('/avatar').valueChanges()
  }

  getUser(userKey){
    return this.db.collection('group').doc(userKey).snapshotChanges();
  }
  getSection(secKey){
    return this.db.collection('section').doc(secKey).snapshotChanges();
  }
  getUserByEmail(userKey){
    return this.db.collection('group').doc(userKey).snapshotChanges();
  }

  updateUser(userKey, value){
    value.nameToSearch = value.Username.toLowerCase();
    this.profileuser=JSON.parse(localStorage.getItem("user"));
    value.avatar=this.profileuser.photoURL;
    return this.db.collection('group').doc(userKey).set(value);
  }
  updateSectionValue(secKey, value){
    return this.db.collection('section').doc(secKey).set(value);
  }

  deleteUser(userKey){
    return this.db.collection('group').doc(userKey).delete();
  }
  
  deleteAlert(alert){
    return this.db.collection('alerts').doc(alert.payload.doc.id).delete();
  }
 editAlert(alert){
   console.log("alert.payload.doc.data()",alert.description);
   var alert1={description:alert.description};
 return this.db.collection('alerts').doc(alert.payload.doc.id).set(alert1);
  }
  deleteSection(Key){
    return this.db.collection('section').doc(Key).delete();
  }

  getLearnings(){
    return this.db.collection('learnings').snapshotChanges();
  }







 deleteMessages(key) {
  return this.db.collection('messages').doc(key).delete();

 

}




  getUsers(){
    return this.db.collection('group').snapshotChanges();
  }
  getMessages(){
    return this.db.collection('messages').snapshotChanges();
  }
  getSections(){
    return this.db.collection('section').snapshotChanges();
  }
  searchUsers(searchValue){
    return this.db.collection('group',ref => ref.where('nameToSearch', '>=', searchValue)
      .where('nameToSearch', '<=', searchValue + '\uf8ff'))
      .snapshotChanges()
  }

  searchUsersByAge(value){
    return this.db.collection('group',ref => ref.orderBy('age').startAt(value)).snapshotChanges();
  }

  searchUsersSection(value){
    return this.db.collection('/group', ref => ref.where('Section', '==', value)).snapshotChanges();
    
  }
  getModules(value){
    return this.db.collection('modules', ref => ref.where('Subject', '==', value)).snapshotChanges();
    
  }
  getAssignments(value){
    return this.db.collection('Assignments', ref => ref.where('Subject', '==', value.name)).snapshotChanges();
    
  }
  getAllAssignments(){
    return this.db.collection('Assignments').snapshotChanges();
    
  }

  createUser(value, avatar){
    this.profileuser=JSON.parse(localStorage.getItem("user"));
    return this.db.collection('group').add({
      Username: value.Username,
      nameToSearch: value.Username.toLowerCase(),
      email: value.email,
      FirstName:value.FirstName,
      LastName:value.LastName,
      Address:value.Address,
      City:value.City,
      Country: value.Country,
      PostalCode:value.PostalCode,
      Role:value.Role,
      Section:value.Section,
      Company:value.Company,
      avatar:this.profileuser.photoURL
    });
  }

  createMessage(value){
    return this.db.collection('messages').add({
      from:value.from,
      content: value.content,
      time: value.time,
      timeFormat:value.timeFormat
    });
  }


    createSection(value){
      return this.db.collection('section').add({
        no: value.no,
        sub: value.sub
      })

    
  }
  createLearnings(value){
    return this.db.collection('learnings').add({
      URL: value.URL,
      Title: value.Title
    })
  
}
createAssignments(value){
  return this.db.collection('Assignments').add({
    No: value.No,
    Max_marks: value.Max_marks,
    Subject:value.Subject,
    id:value.Subject+"_"+value.No
  })

}

createLists(value){
  return this.db.collection('Lists').add({
    No: value.No,
    Subject: value.Subject,
    description:value.description
  })

}
getList(){
  return this.db.collection('Lists').snapshotChanges();
  
}

createNotifications(value){

  return this.db.collection('notifications').add({
    title:value.title,
    description: value.description
  })


}
 

  updateSection(userKey,value){
    if(value.section==1){
      value.section=2
    }else{
      value.section=1
    }
    return this.db.collection('group').doc(userKey).set(value);
  }


  createSubject(value){
    return this.db.collection('subject').add({
      no: value.no,
      name: value.name,
      assignments:value.assignments
    })
  }
  
  getSubjects(){
    return this.db.collection('subjects').snapshotChanges();
  }
  getNotifications(){
    return this.db.collection('notifications').snapshotChanges();
  }
  
  getAlerts(){
    return this.db.collection('alerts').snapshotChanges();
  }
  createAlert(value){
    return this.db.collection('alerts').add({
      description: value
    })
  }
}
