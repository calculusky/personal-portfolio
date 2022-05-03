import { collection, getFirestore, onSnapshot } from 'firebase/firestore';
import { useEffect, useState } from 'react';




export const useGetProject = () => {

    const [projects, setProjects] = useState([]);
    const db = getFirestore();

    useEffect(() => {
        onSnapshot(collection(db, 'projects'), (snapshot) => {
            const data = snapshot.docs.map(doc => doc.data());
            setProjects(data);
            // console.log(data, '*****************************_______________')
        })
    }, [db]);

    return [projects]

}