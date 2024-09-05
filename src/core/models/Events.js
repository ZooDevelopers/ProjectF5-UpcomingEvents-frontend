export default class Events {

    title
    date
    maxparticipants
    description
    imgUrl
    isFeatured
    location
    time

    constructor(title, date, maxparticipants, description, imgUrl, isFeatured, location, time){
     this.title = title
     this.date= date
     this.maxparticipants= maxparticipants
     this.description= description
     this.imgUrl= imgUrl
     this.isFeatured= isFeatured
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
    getIsFeatured(){
        return this.isFeatured
    }

    getLocation(){
        return this.location
    }

    getTime(){
        return this.time
    }
}