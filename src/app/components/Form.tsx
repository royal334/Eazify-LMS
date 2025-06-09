import { useEffect } from "react";
import { useForm } from "react-hook-form"
import Swal from 'sweetalert2'
import { easeIn, motion } from "motion/react"
//import { toast } from "react-toastify";

type FormDataTypes = {
     course:string
     firstname: string;
     lastname: string;
     email: string;
     phoneNum: string;
}

type PropTypes = {
     course:string
     setCourse: (course: string) => void
}

function Form(props: PropTypes) {

     const {register, handleSubmit, formState, setValue} = useForm<FormDataTypes>({
     mode: 'onChange',
     defaultValues: {
          course:  "Select course",
          firstname: '',
          lastname: '',
          email: '',
          phoneNum: ''
     }
     })

     const {errors, isValid} = formState

     useEffect(() => {
          setValue('course', props.course)
     }, [props.course, setValue])



     async function onSubmit(data: FormDataTypes) {
          
          const formData = new FormData();
          
          formData.append("access_key", '458bb391-b838-4101-867c-d960cb047497');
          formData.append("course", data.course);
          formData.append("firstname", data.firstname);
          formData.append("lastname", data.lastname);
          formData.append("email", data.email);
          formData.append("phoneNum", data.phoneNum);
          
          
          try{
          const res = await fetch("https://api.web3forms.com/submit", {
               method: "POST",
               body: formData,
          }).then((res) => res.json());
      
          if (res.success) {
               console.log('Success', res)
               // Reset form values after successful submission
               setValue('course', 'Select course')
               setValue('firstname', '')
               setValue('lastname', '')
               setValue('email', '')
               setValue('phoneNum', '')
               props.setCourse("Select course");

               Swal.fire({
                    title: "Good Job!",
                    text: "Your form has been submitted successfully!",
                    icon: "success"
                  });

          }
     } catch(error){
          Swal.fire({
               title: "Oops!",
               text: "There was an error submitting your form. Please try again.",
               icon: "warning"
             });
     }
        };


  return (
     <section id="form" className="px-4 md:px-0">
          <div className='container px-4  py-8 mx-auto '>
               <form className="flex flex-col gap-4 " onSubmit={handleSubmit(onSubmit)} noValidate >
                    <h2 className="text-2xl md:text-4xl font-semibold text-charcoal-black">Register for Eazify Innovations Cohort 2.0</h2>
                    <div className="flex flex-col">
                              <label htmlFor="course" className="text-sky-blue">Select Course</label>
                              < motion.select initial={{opacity:0, y:-100}} whileInView={{opacity:1, y:0}} transition={{duration:1, ease:easeIn}} viewport={{once:true, amount:1}} className="p-2 border rounded text-bright-blue" id="course" {...register('course', {required: 'Course selection is required'})} value={props.course} onChange={(e) => props.setCourse(e.target.value)} aria-invalid={errors.course ? "true" : "false"}>
                                   <option value="" disabled selected>Select course</option>
                                   <option value="Frontend Development">Frontend Development</option>
                                   <option value="Cybersecurity">Cybersecurity</option>
                                   <option value="AI Development">AI Development</option>
                                   <option value="Blockchain Development">Blockchain Development</option>
                              </motion.select>
                              <span className="text-red-500">{errors.course?.message}</span>
                         </div>
                    <div className="flex flex-col md:flex-row gap-4">
                         <div className="flex flex-col md:w-1/2">
                              <label htmlFor="firstname" className="text-sky-blue">First name</label>
                              <motion.input
                              initial={{opacity:0, y:-100}} whileInView={{opacity:1, y:0}} transition={{duration:1}} viewport={{once:true, amount:1}}
                              id="firstname"
                              type="text"
                              placeholder="e.g. Stephen"
                              {...register('firstname', {required: 'First name is required'})}
                              className="p-2 border border-charcoal-black rounded text-bright-blue"
                              aria-invalid={errors.firstname ? "true" : "false"}
                              />
                              <span className="text-red-500">{errors.firstname?.message}</span>
                         </div>
                         <div className="flex flex-col md:w-1/2">
                              <label htmlFor="lastname" className="text-sky-blue">Last name</label>
                              <motion.input
                              initial={{opacity:0, y:-100}} whileInView={{opacity:1, y:0}} transition={{duration:1}} viewport={{once:true, amount:1}}
                              id="lastname"
                              type="text"
                              placeholder="e.g. King"
                              {...register('lastname', {required: 'Last name is required'})}
                              className="p-2 border rounded text-bright-blue  border-charcoal-black"
                              aria-invalid={errors.lastname ? "true" : "false"}
                              />
                              <span className="text-red-500">{errors.lastname?.message}</span>
                         </div>
                    </div>
               <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex flex-col md:w-1/2">
                         <label htmlFor="email" className="text-sky-blue">Email Address</label>
                         <motion.input
                         initial={{opacity:0, y:-100}} whileInView={{opacity:1, y:0}} transition={{duration:1}} viewport={{once:true, amount:1}}
                    type="email"
                    placeholder="e.g. stephenking@lorem.com"
                    className="p-2 border rounded text-bright-blue  border-charcoal-black"
                    {...register('email', {required: 'Email is required',
                         pattern: {
                         value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                         message: 'Email is not valid'
                         }
                    })}
                    aria-invalid={errors.email ? "true" : "false"}
                    />
                    <span className="text-red-500">{errors.email?.message}</span>
               </div>
               
               <div className="flex flex-col md:w-1/2">
                    <label htmlFor="phoneNum" className="text-sky-blue">Phone Number</label>
                    <motion.input
                    initial={{opacity:0, y:-100}} whileInView={{opacity:1, y:0}} transition={{duration:1}} viewport={{once:true, amount:1}}
                    id="phoneNum"
                    type="tel"
                    placeholder="e.g. +1 234 567 890"
                    className="p-2 border rounded text-bright-blue  border-charcoal-black"
                    {...register('phoneNum', {required: 'Phone number is required'})}
                    aria-invalid={errors.phoneNum ? "true" : "false"}
                    />
                    <span className="text-red-500">{errors.phoneNum?.message}</span>
                    </div>
               </div>
                 
                 <button disabled={!isValid} type="submit"  className="bg-bright-blue disabled:bg-sky-blue disabled:cursor-not-allowed text-white p-2 rounded font-semibold cursor-pointer w-full">Register</button>
             </form>
          </div>
     </section>
  )
}

export default Form