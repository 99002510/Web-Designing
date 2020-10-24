let student=function(id,stdname,semester,date,branch){
    this.reg=id;
    this.stdname=name;
    this.mylist=semester;
    this.stddob=date;
    this.brnch=branch;

    this.display=function(){
        console.log("The ID "+ this.reg)
        console.log("The Name "+ this.stdname)
        console.log("The Semester "+ this.mylist)
        console.log("The Date of Birth "+ this.stddob)
        console.log("The Branch "+ this.brnch)
    }
}
let std1=new Student(123,"Sapthasagar","4th","06-12-1998","Computer Science and Engineering")
let std2=new Student(123,"Pradeep","5th","04-11-1998","Mechanical Engineering")
let std3=new Student(123,"Sapthasagar","8th","26-07-1998","Civil Engineering")


std1.display();
std2.display();
std3.display();
