import React ,{useEffect} from "react";
import "./ProfilePage.css";

import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { findStudent } from "../../../actions/admin";
import { useParams } from "react-router-dom";

import Moment from 'moment';
function ProfilePage() {



  let {id} =useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    try {
      dispatch(findStudent(id));
     
    } catch (err) {
      console.log(err);
    }
  },[]);
 
  const user = useSelector((state) => state.student);
  console.log(user);

  let name =[]
  if(user.student !== undefined ){
    console.log(user.student.fullName)
    name = user.student.fullName.split(' '); 
  }

let photo , fullName="" , MatricNumber , passport , hometown , address , faculty , major = ""
let birth , issue= null

if(user.student !== undefined){
  photo = 'http://localhost:5000/'+user.student.photo.replace(/\\/g, "/")
  fullName = user.student.fullName
  MatricNumber = user.student.matric
  passport = user.student.passport
  hometown = user.student.HomeTown
  address = user.student.address
  faculty = user.student.faculty
  major = user.student.major
  birth = Moment(user.student.DateOfBirth).format('DD-MM-YYYY')
  issue = Moment(user.student.DateOfIssue).format('DD-MM-YYYY')
}



console.log(fullName)


  return (
    <React.Fragment>

      <div class="card-container">
        <img
          class="round"
          src={photo}
          alt="user"
        />
        <h3>{name[0]} {name.at(-1)}</h3>
        <h6>{hometown}</h6>
        <p>
          {faculty}
          <br /> {major}
        </p>
        <div class="buttons">
          <div class="primary">date of issue</div>
          <div class="primary ghost">{issue}</div>
        </div>
        <div class="skills">
          <h6 style= {{textAlign: 'center'}}>Full Information </h6>
          <div className ="Con_dt">
            <dl>
              <dt>Full name</dt>
              <dd>{fullName}</dd>
              <dt>Matric Number</dt>
              <dd>{MatricNumber}</dd>
              <dt>Passport Numbver</dt>
              <dd>{passport}</dd>
              <dt>Date of birth</dt>
              <dd> {birth}</dd>
              <dt>Hometown</dt>
              <dd>{hometown}</dd>
              <dt>Address</dt>
              <dd>{address}</dd>
            
           
            </dl>
          </div>
        </div>
		<button className ="back_home">
			<Link to = "/dashboard" style ={{textDecoration :"None" ,color : "#1F1A36"}}>Home</Link>
		</button>
      </div>
    </React.Fragment>
  );
}

export default ProfilePage;
