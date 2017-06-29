import { Joi } from 'express-joi'

const customer = {
        name: Joi.types.String().required(),
        mobile: Joi.types.String().required(),
        company: Joi.types.String(),
        messAmount: Joi.types.Number().required(),
        messType: {
            breakfast: Joi.types.Boolean(),
            lunch: Joi.types.Boolean(),
            dinner: Joi.types.Boolean(),
        }
}

export {
    customer
}