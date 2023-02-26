import mongoose from 'mongoose';
import {Schema, model} from 'mongoose';

const experienceSchema = new Schema({
    companyName: {type: String},
    designation: {type: String},
    startDate: {type: Date},
    endDate: {type: Date},
    location: {type: String},
    jobType: {type: String},
    description: {type: String},

    licenseName: {type: String},
    issuingOrg: {type: String},
    startDateLicense: {type: Date},
    endDateLicense: {type: Date},
    credentialID: {type: String},

    projectName: {type: String},
    projectURL: {type: String},
    startDateProject: {type: Date},
    endDateProject: {type: Date},
    projectDescription: {type: String},
});

const experience = model('DeveloperExperience', experienceSchema);
export default experience