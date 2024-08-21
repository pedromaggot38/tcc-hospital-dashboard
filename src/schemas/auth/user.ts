import * as z from 'zod'

export const LoginSchema = z.object({
    username: z.string().min(6, {
        message: "Usuário deve conter ao menos 6 caracteres"
    }).regex(/^\S*$/, {
            message: "Usuário não pode conter espaços"
        }),
    password: z.string().min(6, {
        message: "Senha deve conter ao menos 6 caracteres"
    }),
})

export const RegisterSchema = z.object({
    username: z.string().min(6, {
        message: "Nome de usuário é obrigatório"
    }).regex(/^\S*$/, {
        message: "Usuário não pode conter espaços"
    }),
    password: z.string().min(6, {
        message: "Mínimo de 6 caracteres"
    }),
    role: z.enum(['root', 'admin', 'journalist']),
    isBlocked: z.enum(['true', 'false']),
    name: z.string().min(6, {
        message: "Mínimo de 6 caracteres"
    }).optional(),
    phone: z.string().max(12).min(8, {
        message: "Mínimo de 8 caracteres"
    }).optional(),
    email: z.string().email({
        message: "Digite um e-mail válido"
    }).optional(), // Torna o campo opcional
    image: z.string().optional(), // Torna o campo opcional
});
