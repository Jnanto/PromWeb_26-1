import { useState, useEffect } from 'react'
import './App.css'
import { doc, getDoc, getFirestore, collection, getDocs } from "firebase/firestore";
import { db } from './Firebase/config.js';

function App() {
  const [data, setData] = useState(null);
  const [collectionData, setCollectionData] = useState([]);

  useEffect(() => {
    // Traer un solo documento
    const getData = async () => {
      const docRef = doc(db, "Estudiantes", "id1");
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setData(docSnap.data());
        console.log("Documento individual:", docSnap.data());
      } else {
        console.log("No se encontró el documento!");
      }
    }

    // Traer toda la colección
    const getCollectionData = async () => {
      const querySnapshot = await getDocs(collection(db, "Estudiantes"));
      const docs = [];
      querySnapshot.forEach((doc) => {
        // Combinamos el ID con los datos del documento
        docs.push({ ...doc.data(), id: doc.id });
      });
      setCollectionData(docs);
      console.log("Colección completa:", docs);
    }

    getData();
    getCollectionData();
  }, [])


  return (
    <>
      <h1>Firebase Data</h1>
      
      <section>
        <h2>Documento Individual (id1)</h2>
        {data ? (
          <div className="card">
            <p>Nombre: {data.Nombre}</p>
            <p>Edad: {data.Edad}</p>
            <p>Promedio: {data.Promedio}</p>
            <p>Sexo: {data.Sexo ? "Masculino" : "Femenino"}</p>
          </div>
        ) : <p>Cargando documento...</p>}
      </section>

      <hr />

      <section>
        <h2>Colección Estudiantes</h2>
        <div className="grid">
          {collectionData.length > 0 ? (
            collectionData.map((estudiante) => (
              <div key={estudiante.id} className="card">
                <h3>{estudiante.Nombre}</h3>
                <p>Edad: {estudiante.Edad}</p>
                <p>Promedio: {estudiante.Promedio}</p>
                <p>Sexo: {estudiante.Sexo ? "Masculino" : "Femenino"}</p>
                <small>ID: {estudiante.id}</small>
              </div>
            ))
          ) : <p>Cargando colección...</p>}
        </div>
      </section>
    </>
  )
}

export default App

