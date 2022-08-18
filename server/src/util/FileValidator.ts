export const imageFileFilter = (req:any, file:any, callback:any )=>{
    if(!file.originalname.match(/\.(jpg|jpeg|png)$/)){
     req.fileValidationError = 'only img files allowed'
     return callback(null, false)
    } 
    file.filename = file.originalname;
    callback(null,  file.fieldname + '-' + Date.now());
 }