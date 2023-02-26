import mongoose from 'mongoose';
import {Schema, model} from 'mongoose';

const bankDetailSchema = new Schema({
    bankName: {type: String},
    accountHolderName: {type: String},
    accountNo: {type: String},
    IFSCcode: {type: String}
});

const bankDetail = model('DeveloperBankDetail', bankDetailSchema);
export default bankDetail