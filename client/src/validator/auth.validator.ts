import * as yup from 'yup'

export const loginValidator = yup.object().shape({
   email: yup.string().email().required(),
   password: yup.string().min(8).max(20).required()
})

export const registrationValidator = yup.object().shape({
   username: yup.string().required(),
   email: yup.string().email().required(),
   password: yup.string().min(8).max(20).required()
})

