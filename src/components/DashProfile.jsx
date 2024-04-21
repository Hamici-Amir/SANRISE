import { Alert, Button, TextInput } from "flowbite-react";
import { useEffect, useRef, useState } from "react";
import {useDispatch, useSelector} from "react-redux"
import {getStorage, uploadBytesResumable,ref,getDownloadURL} from "firebase/storage"
import { app } from "../firebase";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { updateFailure,updateStart,updateSuccess } from "../redux/user/userSlice";
import {Link} from "react-router-dom"


export const DashProfile = () => {
  const {loading} = useSelector(state => state.user);
  // const user = localStorage.getItem("user")
    const currentUser = JSON.parse(localStorage.getItem("user"))
  const [imageFile,setImageFile] = useState(null);
  const [imageFileUrl,setImageFileUrl] = useState(null);
  const [imageFileUploadProgress,setImageFileUploadProgress] = useState(null)
  const [imageFileUploadError,setImageFileUploadError] = useState(null)
  const [ImageFileUploading,setImageFileUploading] = useState(null)
  const [updateUserSuccess,setUpdateUserSuccess] = useState(null)
  const [updateUserError,setUpdateUserError] = useState(null);
  const dispatch = useDispatch();
  const filePickerRef = useRef();
  const [formData,setFormData] = useState({})

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if(file){
      setImageFile(file)
      setImageFileUrl(URL.createObjectURL(file));
    }

  }

  useEffect(() => {
    if(imageFile){
      uploadImage();
    }



  },[imageFile])

  const uploadImage = async () => {
    setImageFileUploading(true)
    setImageFileUploadError(null)
    const storage = getStorage(app);
    const fileName = new Date().getTime() + imageFile.name;
    const storageRef = ref(storage,fileName)
    const uploadTask = uploadBytesResumable(storageRef,imageFile);
    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;

        setImageFileUploadProgress(progress.toFixed(0));
      },
      (error) => {
        setImageFileUploadError(
          'Could not upload image (File must be less than 2MB)'
        );
        setImageFileUploadProgress(null);
        setImageFile(null);
        setImageFileUrl(null);
        setImageFileUploading(false);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setImageFileUrl(downloadURL);
          setFormData({ ...formData, profilePicture: downloadURL });
         setImageFileUploading(false);

        });
      }
    );


  }

  const handleChnage = (e) => {
    setFormData({...formData,[e.target.id] : e.target.value})
  }

  const handleSubmit = async (e) =>{
    e.preventDefault();
    setUpdateUserError(null)
    setUpdateUserSuccess(null)
    if(Object.keys(formData).length === 0){
      setUpdateUserError("No Change made")
      return;
    }
    if(ImageFileUploading){
      setUpdateUserError("Please wait image to upload")
      return;
    }

    try {
      dispatch(updateStart());
      const res = await fetch(`/api/user/update/${currentUser._id}`,{
        method:"PUT",
        headers:{'Content-Type':'application/json',},
        body:JSON.stringify(formData),
      })
      const data = await res.json()
      if(!res.ok){
          dispatch(updateFailure(data.message));
          setUpdateUserError(data.message)
          return;
       }else {
        dispatch(updateSuccess(data.user));
        setUpdateUserSuccess("User updated successfully")
        localStorage.setItem("user",JSON.stringify(data));
      }





    } catch (error) {
        dispatch(updateFailure(error.message))
    }



  }

  return (
    <div className="max-w-lg mx-auto p-3 w-full">

      <h1 className="my-7 text-center font-semibold text-3xl">Profile</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input type="file"  accept="image/*" 
            onChange={handleImageChange} ref={filePickerRef}
          hidden
      />
            <div className="relative w-32 h-32  self-center cursor-pointer shadow-md
            overflow-hidden rounded-full "
            onClick={() => filePickerRef.current.click()}
            >
              {imageFileUploadProgress && (
            <CircularProgressbar
              value={imageFileUploadProgress || 0}
              text={`${imageFileUploadProgress}%`}
              strokeWidth={5}
              styles={{
                root: {
                  width: '100%',
                  height: '100%',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                },
                path: {
                  stroke: `rgba(62, 152, 199, ${
                    imageFileUploadProgress / 100
                  })`,
                },
              }}
            />
          )}
          <img src={ imageFileUrl || currentUser.profilePicture} alt="user" 
          className={`rounded-full w-full h-full object-cover border-8 border-[lightgray] ${
            imageFileUploadProgress &&
            imageFileUploadProgress < 100 &&
            'opacity-60'
          }`} />
          </div>
         
          {imageFileUploadError && (
          <Alert color='failure'>{imageFileUploadError}</Alert>
        )}      

          
          <TextInput type="text" id="username" placeholder="username" 
            onChange={handleChnage}
            defaultValue={currentUser.username}/>
          <TextInput type="email" id="email" placeholder="email" 
          onChange={handleChnage}
            defaultValue={currentUser.email}/>
          <TextInput type="password" id="password"  placeholder="password"
          onChange={handleChnage} 
            defaultValue="*******"
          />

          <Button type="submit"  gradientMonochrome="cyan" outline 
            disabled={loading}
          >
            Update
          </Button>
              <Link to={'/create-post'}>
            <Button 
            type="button"
            gradientMonochrome="cyan" 
                        className="w-full"
            >
                Create a post
            </Button>
            </Link>

      </form>
          <div className="text-red-500 flex justify-between mt-5">
              <span className="curser-pointer"> Update your profile </span>
              <span className="curser-pointer"> help? </span>
          </div>
          {updateUserSuccess && (
        <Alert color='success' className='mt-5'>
          {updateUserSuccess}
        </Alert>
      )}
     {updateUserError && (
        <Alert color='failure' className='mt-5'>
          {updateUserError}
        </Alert>
      )}
    </div>
  )
}
