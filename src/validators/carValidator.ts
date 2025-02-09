import Joi from "joi";

export const carValidator = Joi.object({
    brand: Joi.string().pattern(/[a-zA-Zа-яА-яёЁіІїЇєЄҐґ]{1,20}/).required().messages({
        'string.min': 'Brand must be at least 1 character long',
        'string.max': 'Brand can`t be greater than 20 characters',
        'string.pattern.base': 'Only letters are allowed'
    }),
    price: Joi.number().min(0).max(1000000).required().messages({
        'number.min': 'password must be at least 3 chars',
        'number.max': 'password can`t be grater than 20 chars'
    }),
    year: Joi.number().min(1990).max(2024).required().messages({
        'number.min': 'min year is 1990',
        'number.max': 'max year is 2024',
    }),
})