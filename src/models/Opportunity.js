import { Schema, model } from "mongoose";

const StipendSchema = new Schema({
  salary: { type: String, required: true },
  tooltip: { type: String },
  salaryValue1: { type: Number, required: true },
  salaryValue2: { type: Number },
  salaryType: { type: String, required: true },
  currency: { type: String, required: true },
  scale: { type: String, required: true },
  large_stipend_text: { type: Boolean },
});

const LocationSchema = new Schema({
  string: { type: String, required: true },
  link: { type: String, required: true },
  country: { type: String, required: true },
  region: { type: String },
  locationName: { type: String, required: true },
});

const OpportunitySchema = new Schema({
  id: { type: Number, required: true, unique: true },
  title: { type: String, required: true },
  employment_type: { type: String, required: true },
  application_status_message: {
    to_show: { type: Boolean, required: true },
    message: { type: String, required: true },
    type: { type: String, required: true },
  },
  job_title: { type: String },
  work_from_home: { type: Boolean, required: true },
  segment: { type: String },
  company_name: { type: String, required: true },
  company_url: { type: String, required: true },
  is_premium: { type: Boolean, required: true },
  employer_name: { type: String, required: true },
  company_logo: { type: String, required: true },
  type: { type: String, required: true },
  url: { type: String, required: true },
  is_active: { type: Boolean, required: true },
  expires_at: { type: Date, required: true },
  profile_name: { type: String, required: true },
  part_time: { type: Boolean, required: true },
  start_date: { type: String, required: true },
  duration: { type: String, required: true },
  stipend: { type: StipendSchema, required: true },
  posted_on: { type: String, required: true },
  application_deadline: { type: String, required: true },
  location_names: { type: [String], required: true },
  locations: { type: [LocationSchema], required: true },
});

const Opportunity = model("Opportunity", OpportunitySchema);
export default Opportunity;
