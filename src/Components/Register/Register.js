import React from 'react'; 
// import './SignIn.css';

const Register = ({onRouteChange}) => {
    return (
        <div className='pa1'>
        <hr />
            <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center spp">
        <main className="pa5 black-80 ">
        <form className="measure ">
          <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <legend className= "f2  fw6 ph0 mh0 underline"><strong>Register</strong></legend>
            <div className="mt3">
              <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
              <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="email-address"  id="name" />
            </div>
            <div className="mt3">
              <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
              <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address" />
            </div>
            <div className="mv3">
              <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
              <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password" />
            </div>
          </fieldset>
          <div className="">
            <input
            onClick={() => onRouteChange('home')}
            className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib radius" type="submit" value="Sign in" />
          </div>
          {/* <div className="lh-copy mt3">
            <a href="#0" className="f6 link dim black db">Register!!</a>
            </div> */}
        </form>
      </main> 
     </article> 
     <hr />
     <footer><strong>This is a website made using <a href="https://www.clarifai.com/">Clarifai</a> 's API and with ❤️️.</strong></footer>
    </div>
    );
}

export default Register;   