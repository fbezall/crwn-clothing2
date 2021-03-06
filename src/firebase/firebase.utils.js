import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    
        apiKey: "AIzaSyAfTvY6rdqUUM0MOwgbk5IGYeQGQIN8jUI",
        authDomain: "crwn-db-4ca47.firebaseapp.com",
        projectId: "crwn-db-4ca47",
        storageBucket: "crwn-db-4ca47.appspot.com",
        messagingSenderId: "366187718046",
        appId: "1:366187718046:web:0d15b9abc54a0ea328628f",
        measurementId: "G-HKY5J438D3"

    };

    export const createUserProfileDocument = async (userAuth, additionalData) => {
        if(!userAuth) return;

        const userRef = firestore.doc(`users/${userAuth.uid}`)
        const snapShot = await userRef.get();
        
        if(!snapShot.exists) {
            const {displayName, email} = userAuth;
            const createdAt = new Date();

            try {
                await userRef.set({
                    displayName,
                    email,
                    createdAt,
                    ...additionalData
                })
            } catch (error) {
                console.log('error creating user', error.message)
            }
        }
        return userRef;
    }

    

    firebase.initializeApp(config);

    export const auth = firebase.auth();
    export const firestore = firebase.firestore();

    const provider = new firebase.auth.GoogleAuthProvider();
    provider.setCustomParameters({promp: 'select_account'});
    export const signInWithGoogle = () => auth.signInWithPopup(provider);

    export default firebase;