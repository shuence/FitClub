import React, { useRef } from 'react'
import './Join.css'
import emailjs from "@emailjs/browser";

const Join = () => {
  const form = useRef();

    const handleJoin = (e)=> {
        e.preventDefault()
        emailjs.sendForm(
            'service_jqn5flv',
            'template_5fbt3fr',
            form.current,
            'ddYcz13MvW01UFF5u'
        )
        .then((result)=>{
            console.log('done')
        },
        (error)=>{
            console.log(error)
        }
        )
    }
  return (
   <><div className="Join" id='join-us'>
          <div className="left-j">
              <hr />
              <div><span className='stroke-text'>Ready to</span><span>Level up</span></div>
              <div><span>your body</span><span className='stroke-text'>with us?</span></div>
          </div>
          <div className="right-j">
              <form className="email-container" netlify ref={form} onSubmit={handleJoin}>
                  <input netlify type="email" name='user_email' placeholder='Enter Email Address' />
                  <button type='submit' className="btn btn-j">Join now</button>
              </form>
          </div>
      </div>
    
    </>    
  )
}

export default Join