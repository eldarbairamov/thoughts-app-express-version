import yup from 'yup'

export const thoughtValidator = yup.object().shape({
   content: yup.string().required()
})