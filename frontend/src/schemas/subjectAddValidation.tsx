import * as z from "zod";

const subjectAddValidation = z.object({
  subject: z
    .string()
    .min(1, { message: "konu başlığı  gereklidir" })
    .max(255, { message: "255 karakterden fazla giremezsiniz." }),

  content: z
    .string()
    .min(1, { message: "mesaj alanı gereklidir" })
    .max(255, { message: "255 karakterden fazla giremezsiniz." }),
});

export default subjectAddValidation;
