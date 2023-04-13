
// import {image1} from "C:\Users\loki\Desktop\randomuser\random-user\public\logo192.png"
import {FcCellPhone} from 'react-icons/fc';
import {GoLocation} from 'react-icons/go';
import {FiMail} from 'react-icons/fi';

const UserCard = ({details}) => {
    // 



  return (
    <div className='wrapper'>
        <div className='container'>
            <div className='row'>
                <div className='col-md-8 col-lg-12'>
                    <card>
                        <img src={details.picture?.large}  width={"50px"} className='card-img-top rounded-circle' alt=""/>
                        <div className='card-body d-flex flex-column justify-content-center align-items-center'>
                            <h6 className='card-title mt-4'>{details.name?.title}. {details.name?.first} {details.name?.last}</h6>
                            {/* <p class="card-text"><GoLocation/> {details.location.city}</p> */}
                            <p class="card-text"><FcCellPhone/> {details.cell}</p>
                            <p class="card-text"><FiMail/> {details.email}</p>
                        </div>
                    </card>
                </div>
            </div>
        </div>
    </div>
   
     
   
   
   )
}

export default UserCard;
