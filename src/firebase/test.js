import { firestore } from "./firebase.utils";

import { doc, getDoc, setDoc } from "firebase/firestore"; 



export const createUserData = async (userAuth, additionalData) => {

    if(!userAuth){
        console.log('no user')   
        return
    };

    const userRef = doc(firestore, `users`, userAuth.uid);

    const userSnap = await getDoc(userRef)

    if(!userSnap.exists()){
        const {displayName, email} = userAuth


        try{
            await setDoc(userRef, {
                createdAt: new Date(),
                name: displayName,
                email: email,
                ...additionalData
            });

            console.log('succesfully added')
        }
        catch(err){
            console.log(`error setting item :  ${err}`)
        }
        
    }

    return userRef;
}







