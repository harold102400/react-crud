import React from 'react'
import { useForm } from "react-hook-form";



function AddUserForm(props) {

  const { register, handleSubmit, formState: { errors } } = useForm();

  const isValidInput = (value) => {
    return /^\s*$/.test(value) === false;
  };

  const onSubmit = (data, e) => {
    console.log(data);
    props.addUser(data)
    e.target.reset();
  };
     


  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Name</label>
      <input type="text" name="name" {...register('name', {
        required: true,
        minLength: 2,
        validate: {
          isNotEmpty: value => isValidInput(value)
        }
      })} />
      
      <div>
        {errors.name?.type === 'required' && <span>El campo es requerido</span>}
        {errors.name?.type === 'minLength' && <span>El minimo de letras son 2</span>}
        {errors.name?.type === 'isNotEmpty' && (
            <span className="error-alert">
              Este campo no puede estar vacío o contener solo espacios en blanco
            </span>
          )}
      </div>


      <label>Username</label>
      <input type="text" name="username" {...register('username', {
        required: true,
        minLength: 2,
        validate: {
          isNotEmpty: value => isValidInput(value)
        }
      })} />
      <div>
        {errors.username?.type === 'required' && <span>El campo es requerido</span>}
        {errors.username?.type === 'minLength' && <span>El minimo de letras son 2</span>}
        {errors.username?.type === 'isNotEmpty' && (
            <span className="error-alert">
              Este campo no puede estar vacío o contener solo espacios en blanco
            </span>
          )}
      </div>

      <button>Add new user</button>
    </form>
  )
}


export default AddUserForm
