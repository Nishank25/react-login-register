export function PostData(type, userData){
    let BaseUrl = 'http://staging.php-dev.in:8844/trainingapp/api/users/'+type;
    return new Promise ((resolve, reject) => {
         fetch(BaseUrl,{
             method: 'POST',
             data: (userData)
            //  headers: { 'Content-Type': 'application/json' }
            })
            
         .then((response) => response.json())
         .then((responseJson) => {
             resolve(responseJson);
         })
         .catch((Error) => {
            reject(Error);
         });
    });
}