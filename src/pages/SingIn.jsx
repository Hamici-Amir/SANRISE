import { Label ,TextInput,Button,Spinner,Alert} from "flowbite-react";
import { useState } from "react";
import {Link,useNavigate} from "react-router-dom"
import {  useDispatch,useSelector } from "react-redux";
import { signInStart,signInSuccess,signInFailure } from "../redux/user/userSlice";

 function SingIn(){
    const [formData,setFormData] = useState({});
    const { loading, error: errorMessage } = useSelector((state) => state.user);
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const handlSabmit = async (e) => {
        e.preventDefault()
        if(!formData.email || !formData.password){
            return dispatch(signInFailure('Please fill all the fields'))
        }
       try {
        dispatch(signInStart());
        const res = await fetch("/api/auth/login",{
            method:"POST",
            headers:{"Content-Type" : "application/json"},
            body:JSON.stringify(formData),           
        });
        const data = await res.json();
        if(data.success == false){
        //  return  setErrorMessage(data.message)
                dispatch(signInFailure(data.message));
    }
        if(res.ok){
            dispatch(signInSuccess(data))
            localStorage.setItem("user",JSON.stringify(data));
            navigate("/")
            location.reload()            
        }
        
       } catch (error) {
       // setErrorMessage(error.message)
        dispatch(signInFailure(error.message))
    }
        
    }

return  (
    <div className='min-h-screen mt-20'>
      <div className='flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5'>
        {/* left */}
        <div className='flex-1'>
          <Link to='/' className='font-bold dark:text-white text-4xl'>
            <span className='px-2 py-1 bg-cyan-700 rounded-lg text-white'>
              شركة القاسم 
            </span>
            
          </Link>
          <p className='text-sm mt-5'>

          يمكنك تسجيل الدخول باستخدام البريد الإلكتروني وكلمة المرور الخاصة بك
            أو مع جوجل
          </p>
        </div>
        {/* right */}

        <div className='flex-1'>
          <form className='flex flex-col gap-4' onSubmit={handlSabmit}>
            <div>
              <Label value='Your email' />
              <TextInput
                type='email'
                placeholder='name@company.com'
                id='email'
                onChange={(e) => setFormData({...formData,[e.target.id]:e.target.value.trim()})}                
              />
            </div>
            <div>
              <Label value='Your password' />
              <TextInput
                type='password'
                placeholder='**********'
                id='password'
                onChange={(e) => setFormData({...formData,[e.target.id]:e.target.value.trim()})}    
              />
            </div>
            
            <Button
            outline  gradientMonochrome="info"
              type='submit'
              disabled={loading}
            > 
              {loading ? (
                <>
                  <Spinner size='sm' />
                  <span className='pl-3'>Loading...</span>
                </>
              ) : (
                'Sign In'
              )}
            </Button>
          
          </form>
          <div className='flex gap-2 text-sm mt-5'>
            <span>Dont Have an account?</span>
            <a  href='https://www.instagram.com/alkoe2020?igsh=cmJob2Nma2l5MDA=' className='text-blue-500'>
              Contact us
            </a>
          </div>
          
          {errorMessage && (
            <Alert className='mt-5' color='failure'>
              {errorMessage}
            </Alert>
          )}
       
         

        </div>
      </div>
    </div>
)
}

export default SingIn;