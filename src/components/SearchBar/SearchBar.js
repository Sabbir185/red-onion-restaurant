import React from 'react';
import { useForm } from "react-hook-form";
import bg from "../../images/bannerbackground.png"
import './SearchBar.css'

const SearchBar = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    const styleShit = {
        height:'250px',
        backgroundImage: `url(${bg})`,
        backgroundSize: 'cover',

    }

    return (
        <div style={styleShit} className='d-flex justify-content-center align-items-center'>

            <form onSubmit={handleSubmit(onSubmit)} >
                <div className='d-flex justify-content-center align-items-center'>
                    <input {...register("name", { required: true })} className='input-st' />
                    <input type="submit" className='btn btn-success ml-2'/>
                </div>
                {errors.name && <span className='d-block text-danger'>Food Name is required</span>}
            </form>

        </div>
    );
};

export default SearchBar;