const { z } = require('zod')

exports.UserValidationSchema = z.object({
  fullName: z.string().trim().nonempty(),
  userName: z.string().trim().nonempty(),
  email: z.string().trim().nonempty().email(),
  phone: z
    .string()
    .trim()
    .nonempty()
    .regex(/^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/),
  profileImageUrl: z.string().trim().nonempty().url(),
  gender: z.enum(['male', 'female']),
})

exports.CreateUserSchema = z.object({
  body: this.UserValidationSchema,
})
