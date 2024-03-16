
import Card from "./Card"
import person1 from './assets/profile.jpg'
import person2 from './assets/profile2.jpg'
import person3 from './assets/profile3.jpg'
import person4 from './assets/profile4.jpg'
import person5 from './assets/profile5.jpg'
import './index.css'
const students = [
    {id: 18453722, name: "Fidel", image: person1, email:"fidel@gmail.com"},
    {id: 18453723, name: "Randall", image: person2, email:"randall@gmail.com"},
    {id: 18453724, name: "Picasso", image: person3, email:"picasso@gmail.com"},
    {id: 18453725, name: "Da Vinci", image: person4, email:"davinci@gmail.com"},
    {id: 18453726, name: "Hitler", image: person5, email:"hitler@gmail.com"},
   
  ];
export default function Student(){
        return(
            <div className="card-container">
                {students.map(student => (
                    <Card key={student.id} student={student} />
                ))}
            </div>
        );
}
