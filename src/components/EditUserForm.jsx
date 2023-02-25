import React, {useEffect} from 'react'
import { useForm } from "react-hook-form";



function EditUserForm({currentUser, updateUser}) {
    console.log(currentUser)

  const { register, setValue, handleSubmit, formState: { errors } } = useForm({
    defaultValues: currentUser
  });


  useEffect(() => {
    setValue('username', currentUser.username);
    setValue('name', currentUser.name);
  }, [currentUser, setValue]);

  
  const onSubmit = (data, e) => {
    console.log(data);
    updateUser(currentUser.id, data)
    e.target.reset();
  };
     


  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Name</label>
      <input type="text" name="name" {...register('name', {
        required: true,
        minLength: 2
      })} />
      
      <div>
        {errors.name?.type === 'required' && <span>El campo es requerido</span>}
        {errors.name?.type === 'minLength' && <span>El minimo de letras son 2</span>}
      </div>


      <label>Username</label>
      <input type="text" name="username" {...register('username', {
        required: true,
        minLength: 2
      })} />
      <div>
        {errors.username?.type === 'required' && <span>El campo es requerido</span>}
        {errors.username?.type === 'minLength' && <span>El minimo de letras son 2</span>}
      </div>

      <button>Edit new user</button>
    </form>
  )
}


export default EditUserForm
