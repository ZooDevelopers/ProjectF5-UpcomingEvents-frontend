export default class Events {

    title
    date
    maxparticipants
    description
    imgUrl
    is_featured
    location
    time

    constructor(title, date, maxparticipants, description, imgUrl, is_featured, location, time){
     this.title = title
     this.date= date
     this.maxparticipants= maxparticipants
     this.description= description
     this.imgUrl= imgUrl
     this.is_featured= is_featured
     this.location= location
     this.time = time
    }

    getTitle(){
        return this.title
    }

    getDate(){
        return this.date
    }

    getMaxparticipants(){
        return this.maxparticipants
    }

    getDescription(){
        return this.description
    }

    getImgUrl(){
        return this.imgUrl
    }
    getIs_Featured(){
        return this.is_featured
    }

    getLocation(){
        return this.location
    }

    getTime(){
        return this.time
    }
}