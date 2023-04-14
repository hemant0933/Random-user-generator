
// import {image1} from "C:\Users\loki\Desktop\randomuser\random-user\public\logo192.png"
import {FcCellPhone} from 'react-icons/fc';
import {GoLocation} from 'react-icons/go';
import {FiMail} from 'react-icons/fi';

const UserCard = ({details}) => {
    // 
  function generateColor(){
    var letters = 'BCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * letters.length)];
    }
    return color;
   }

  return (
    <div className='wrapper' style={{background:generateColor()}}>
        <div className='container'>
            <div className='row'>
                <div className='col-md-8 col-lg-12'>
                    <card className="d-flex flex-column justify-content-center align-items-center p-5">
                        <img src={details.picture?.large}  width={"50px"} className='card-img-top rounded-circle image-wrapper' alt=""/>
                        <div className='card-body d-flex flex-column justify-content-center align-items-center'>
                            <h6 className='name-title card-title mt-4'>{details.name?.title}. {details.name?.first} {details.name?.last}</h6>
                            <p class="card-text"><FcCellPhone style={{fontSize:"25px"}}/> {details.cell}</p>
                            <p class="card-text"><FiMail style={{fontSize:"25px"}}/> {details.email}</p>
                        </div>
                    </card>
                </div>
            </div>
        </div>
    </div>
   
     
   
   
   )
}

export default UserCard;
