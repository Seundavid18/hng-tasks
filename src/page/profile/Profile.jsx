import React from 'react'
import './profile.css'
import slackImg from '../../images/SDDw7CnuoUGax6x9mTo7dd.jpg'
import gitImg from '../../images/Icon.png'
import { RiShareForwardLine } from 'react-icons/ri'


const Profile = () => {
  return (
    <div className='container mt-5'>

        <div id='share'>
            <div id='shareIcon' title='Share'>
                <RiShareForwardLine size={18} />
            </div>
        </div>

        <div className='d-flex justify-content-center align-items-center flex-column'>

           <div id='profile_img'></div>
            
            <h5 id='twitter'>iam_seundavid</h5>

            <h5 id='slack'>seundavid</h5>

            <a href='https://twitter.com/iam_seundavid' id='twitter-link' data-title='Click to check my twiiter page' className='link'>Twitter Link</a>

            <a href='https://training.zuri.team/' id='btn_zuri' className='link'>Zuri Team</a>

            <a href='http://books.zuri.team' id='books' data-title='Click to find books on designs and coding' className='link'>Zuri Design and Coding Books</a>

            <a href='https://books.zuri.team/python-for-beginners?ref_id=seundavid' id='book__python' data-title='Check out python books for beginners' className='link'>Python Books</a>

            <a href='https://background.zuri.team' id='pitch' data-title='Carry out a background check on desirable coders to access their hands-on experience and skills' className='link'>Background Check for Coders</a>

            <a href='https://books.zuri.team/design-rules' id='book__design' data-title='Get the Zuri free design book' className='link'>Design Books</a>
        
            <div id='logoImg'>
                <span>
                    <img src={slackImg} alt="" id='slackImg' />
                </span>
                <span>
                    <img src={gitImg} alt="" id='gitImg'/>
                </span>
            </div>
        
        </div>
    </div>
 
  )
}

export default Profile
