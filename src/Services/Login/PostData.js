export async function PostData(type, userData){
try{
    let BaseUrl = 'http://staging.php-dev.in:8844/trainingapp/api/users/'+type;


    var formData = new FormData();
    if(type === 'login'){
        formData.append('email',userData.email);
        formData.append('password',userData.password);
    }else{
        formData.append('first_name',userData.firsName);
        formData.append('last_name',userData.lastName);
        formData.append('email',userData.email);
        formData.append('password',userData.password);
        formData.append('confirm_password',userData.confirmPassword);
        formData.append('gender',userData.gender);
        formData.append('phone_no',userData.phoneNo);
    }
    const settings = {
        method: 'POST',     
        body:formData
        
    };
        const result =  await fetch(BaseUrl,settings);
        const result1 = await result.json();
        localStorage.setItem('access_token', result1.data.access_token)
        return result1;
} catch(error){
    console.log(error)
}
        //  fetch(BaseUrl,{
        //         method: 'POST',
        //         headers: {  'Content-Type': 'application/x-www-form-urlencoded' },
        //         body: {
        //             'email': 'nishank.rathod@neosofttech.com',
        //             'password' : 'nishank123'
        //         }
        //     })
        //  .then((response) => response.json())
        //  .then((responseJson) => {
        //      resolve(responseJson);
        //  })
        //  .catch((Error) => {
        //     reject(Error);
        //  });
}