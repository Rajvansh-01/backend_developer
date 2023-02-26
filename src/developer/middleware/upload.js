import express from 'express';
import multer from 'multer';
import path from 'path';
var Storage= multer.diskStorage({
    destination:"./public/uploads/",
    filename:(req,file,cb)=>{
      cb(null,file.fieldname+"_"+Date.now()+path.extname(file.originalname));
    }
});

function fileFilter (req, file, cb) {    
    const filetypes = /jpeg|jpg|png|gif/;

    const extname =  filetypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = filetypes.test(file.mimetype);

    if(mimetype && extname){
        return cb(null,true);
    } else {
        cb('Error: Images Only!');
    }
}
  
var upload = multer({
    storage:Storage,
    limits : {fileSize : 1000000},
    fileFilter: fileFilter
}).single('image');


export default upload;
// export {upload};

// import multer from 'multer';
// import path from 'path';

// const pdfSize = 5 * 1024 * 1024; // 1MB
// const imageSize = 1 * 1024 * 1024; // 1MB
// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, '.public/uploads/');
//     },
//     filename: (req, file, cb) => {
//         cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
//     },
// });

// const fileFilter = (req, file, cb) => {
//     if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png' || file.mimetype === 'application/pdf') {
//         cb(null, true);
//     } else {
//         cb(null, false);
//     }
// };

// const upload = multer({
//     storage: storage,
//     limits: {
//         fileSize: 1024 * 1024 * 5
//     },
//     fileFilter: fileFilter
// });

// const multipleUpload = upload.fields([{ name: 'images',maxCount: 10 }]);

// export default upload;
// export { upload, multipleUpload};

