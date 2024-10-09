import * as z from "zod";

const registerSchema = z
  .object({
    name: z
      .string()
      .min(1, { message: "İsim alanı gereklidir" })
      .max(255, { message: "255 karakterden fazla giremezsiniz." }),

    lastname: z
      .string()
      .min(1, { message: "Soyisim alanı gereklidir" })
      .max(255, { message: "255 karakterden fazla giremezsiniz." }),

    email: z
      .string()
      .min(1, { message: "Email alanı gereklidir." })
      .email({ message: "Geçerli bir email adresi girin." }),

    password: z
      .string()
      .min(6, { message: "Şifre en az 6 karakter olmalıdır." })
      .max(255, { message: "255 karakterden fazla olamaz." }),

    confirmPassword: z
      .string()
      .min(6, { message: "Şifre en az 6 karakter olmalıdır." })
      .max(255, { message: "255 karakterden fazla olamaz." }),

    role: z
      .string()
      .min(1, { message: "Rol alanı gereklidir." })
      .max(255, { message: "255 karakterden fazla olamaz." }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Şifreler uyuşmuyor.",
    path: ["confirmPassword"],
  });

export default registerSchema;
