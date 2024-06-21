import Joi from "joi";

export const userValidationSchema = Joi.object({
  username: Joi.string().min(3).max(30).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(8).required(),
});

export const loginValidationSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(8).required(),
});

export const opportunityValidationSchema = Joi.object({
  id: Joi.number().required(),
  title: Joi.string().required(),
  employment_type: Joi.string().required(),
  application_status_message: Joi.object({
    to_show: Joi.boolean().required(),
    message: Joi.string().required(),
    type: Joi.string().required(),
  }).required(),
  job_title: Joi.string().allow(null),
  work_from_home: Joi.boolean().required(),
  segment: Joi.string().allow(null),
  company_name: Joi.string().required(),
  company_url: Joi.string().required(),
  is_premium: Joi.boolean().required(),
  employer_name: Joi.string().required(),
  company_logo: Joi.string().required(),
  type: Joi.string().required(),
  url: Joi.string().required(),
  is_active: Joi.boolean().required(),
  expires_at: Joi.date().required(),
  profile_name: Joi.string().required(),
  part_time: Joi.boolean().required(),
  start_date: Joi.string().required(),
  duration: Joi.string().required(),
  stipend: Joi.object({
    salary: Joi.string().required(),
    tooltip: Joi.string().allow(null),
    salaryValue1: Joi.number().required(),
    salaryValue2: Joi.number().allow(null),
    salaryType: Joi.string().required(),
    currency: Joi.string().required(),
    scale: Joi.string().required(),
    large_stipend_text: Joi.boolean(),
  }).required(),
  posted_on: Joi.string().required(),
  application_deadline: Joi.string().required(),
  location_names: Joi.array().items(Joi.string()).required(),
  locations: Joi.array()
    .items(
      Joi.object({
        string: Joi.string().required(),
        link: Joi.string().required(),
        country: Joi.string().required(),
        region: Joi.string().allow(null),
        locationName: Joi.string().required(),
      })
    )
    .required(),
});
