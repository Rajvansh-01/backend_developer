import mongoose from 'mongoose';
import {Schema, model} from 'mongoose';

const skillsSchema = new Schema({
    skills: [{type: String}],
    languages: [{type: String}],
    socialLinks: [{type: String}]
});

const skill = model('DeveloperSkill', skillsSchema);
export default skill