import React, { useState, Component } from 'react';
import logo from './logo.svg';
import useArray from './hooks/useArray';
// import './App.css';
import ProgressBar from './components/ProgressBar';
import firebase from './firebase';
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, ModalBody, ModalHeader, ModalFooter } from 'reactstrap';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import  parse from 'html-react-parser';

function App() {
  const [text, setText] = useState('')
  return (
    <div className="">
      <div className="editor">
        <CKEditor
          editor={ClassicEditor}
          data={text}
          onChange={(event, editor) => {
            const data = editor.getData()
            setText(data)
          }
          }
        />
      </div>
      <div>
      <h2>Contenido</h2>
      <p>{parse(text)}</p>
      </div>

    </div>
  );
}
export default App;

// class App extends Component {

//   render() {
//     return (
//       <>
//         <div className="App">
//           <h1>Hola mundo</h1>
//         </div>
//       </>
//     )
//   }
// }
// export default App;

  // state = {
  //   data: [],
  //   modalInsertar: false,
  //   modalEditar: false,
  //   form:{
  //     canal: '',
  //     idioma: '',
  //     pais: '',
  //     suscriptores: ''
  //   },
  //   id: 0
  // };

  // peticionGet = () => {
  //   firebase.child("canales").on("value", (canal) => {
  //     if (canal.val() !== null) {
  //       this.setState({ ...this.state.data, data: canal.val() });
  //     } else {
  //       this.setState({ data: [] });
  //     }
  //   });
  // };

  // peticionPost=()=>{
  //   firebase.child("canales").push(this.state.form,
  //     error=>{
  //       if(error)console.log(error)
  //     });
  //     this.setState({modalInsertar: false});
  // }

  // peticionPut=()=>{
  //   firebase.child(`canales/${this.state.id}`).set(
  //     this.state.form,
  //     error=>{
  //       if(error)console.log(error)
  //     });
  //     this.setState({modalEditar: false});
  // }

  // peticionDelete=()=>{
  //   if(window.confirm(`Estás seguro que deseas eliminar el canal ${this.state.form && this.state.form.canal}?`))
  //   {
  //   firebase.child(`canales/${this.state.id}`).remove(
  //     error=>{
  //       if(error)console.log(error)
  //     });
  //   }
  // }

  // handleChange=e=>{
  //   this.setState({form:{
  //     ...this.state.form,
  //     [e.target.name]: e.target.value
  //   }})
  //   console.log(this.state.form);
  // }

  // seleccionarCanal=async(canal, id, caso)=>{

  //   await this.setState({form: canal, id: id});

  //   (caso==="Editar")?this.setState({modalEditar: true}):
  //   this.peticionDelete()

  // }

  // componentDidMount() {
  //   this.peticionGet();
  // }

/*} render() {
   return (
     <div className="App">
       <br />
       <button className="btn btn-success" onClick={()=>this.setState({modalInsertar: true})}>Insertar</button>
       <br />
       <br />

       <table className="table table-bordered">
         <thead>
           <tr>
             <th>Canal</th>
             <th>Idioma</th>
             <th>País</th>
             <th>Suscriptores (en millones)</th>
             <th>Acciones</th>
           </tr>
         </thead>
         <tbody>
           {Object.keys(this.state.data).map(i=>{
            // console.log(i);
             return <tr key={i}>
               <td>{this.state.data[i].canal}</td>
               <td>{this.state.data[i].idioma}</td>
               <td>{this.state.data[i].pais}</td>
               <td>{this.state.data[i].suscriptores}</td>
               <td>
                 <button className="btn btn-primary" onClick={()=>this.seleccionarCanal(this.state.data[i], i, 'Editar')}>Editar</button> {"   "}
                 <button className="btn btn-danger" onClick={()=>this.seleccionarCanal(this.state.data[i], i, 'Eliminar')}>Eliminar</button>
               </td>

             </tr>
           })}
         </tbody>
       </table>


       <Modal isOpen={this.state.modalInsertar}>
     <ModalHeader>Insertar Registro</ModalHeader>
     <ModalBody>
       <div className="form-group">
         <label>Canal: </label>
         <br />
         <input type="text" className="form-control" name="canal" onChange={this.handleChange}/>
         <br />
         <label>País: </label>
         <br />
         <input type="text" className="form-control" name="pais" onChange={this.handleChange}/>
         <br />
         <label>Idioma: </label>
         <br />
         <input type="text" className="form-control" name="idioma" onChange={this.handleChange}/>
         <br />
         <label>Cantidad de Suscriptores (millones): </label>
         <br />
         <input type="text" className="form-control" name="suscriptores" onChange={this.handleChange}/>
       </div>
     </ModalBody>
     <ModalFooter>
       <button className="btn btn-primary" onClick={()=>this.peticionPost()}>Insertar</button>{"   "}
       <button className="btn btn-danger" onClick={()=>this.setState({modalInsertar: false})}>Cancelar</button>
     </ModalFooter>
   </Modal>



   <Modal isOpen={this.state.modalEditar}>
     <ModalHeader>Editar Registro</ModalHeader>
     <ModalBody>
       <div className="form-group">
         <label>Canal: </label>
         <br />
         <input type="text" className="form-control" name="canal" onChange={this.handleChange} value={this.state.form && this.state.form.canal}/>
         <br />
         <label>País: </label>
         <br />
         <input type="text" className="form-control" name="pais" onChange={this.handleChange} value={this.state.form && this.state.form.pais}/>
         <br />
         <label>Idioma: </label>
         <br />
         <input type="text" className="form-control" name="idioma" onChange={this.handleChange} value={this.state.form && this.state.form.idioma}/>
         <br />
         <label>Cantidad de Suscriptores (millones): </label>
         <br />
         <input type="text" className="form-control" name="suscriptores" onChange={this.handleChange} value={this.state.form && this.state.form.suscriptores}/>
       </div>
     </ModalBody>
     <ModalFooter>
       <button className="btn btn-primary" onClick={()=>this.peticionPut()}>Editar</button>{"   "}
       <button className="btn btn-danger" onClick={()=>this.setState({modalEditar: false})}>Cancelar</button>
     </ModalFooter>
   </Modal>
     </div>
   );
 }
}

export default App;*/

// function App() {
//   const lessons = useArray([
//     { id: 1, lesson: 'State', completed: false },
//     { id: 2, lesson: 'UseRef', completed: false },
//     { id: 3, lesson: 'Hooks personalizados', completed: false },
//     { id: 4, lesson: 'Eventos', completed: false },
//     { id: 5, lesson: 'Pulir aplicación', completed: false },
//   ]);
// //   const [lessons, setCompleted] = useState(lessonsList);

//   const lessonsCompleted = lessons.data.filter(l => l.completed).length;
//   const percentage = (100 * lessonsCompleted) / lessons.data.length;

// //   const [showAllComplete, setShowAllComplete]= useState(true);

// //   const onCompleted = (id, completed) => {
// //     const updatedList = lessons.map(lesson => {
// //       if (lesson.id === id) {
// //         lesson.completed = !completed;
// //       }
// //       return lesson
// //     });
// //     setCompleted(updatedList);
// //   }
// //   const completeAll = (showAllComplete) => {
// //     const completeAllLessons = lessons.map(lesson => {
// //       return ({ ...lesson, completed: showAllComplete })
// //     });
// //     setCompleted(completeAllLessons);
// //   }

//   return (
//     <div className="App">
//       <div className="App-wrapper">
//         <img src={logo} className="App-logo" alt="logo" />
//         <h3 className="Title">
//           Mis lecciones React
//         </h3>
//         <div className="LessonCheck">
//           {
//             lessons.data.map(({ lesson, id, completed }) => (
//               <label key={id}>
//                 <input
//                   type="checkbox"
//                   onChange={() => lessons.completed(id)}
//                   checked={completed}
//                 />
//                 <span />
//                 {lesson}
//               </label>
//             ))
//           }
//         </div>
//         <ProgressBar percentage={percentage}
//           style={{ width: '50%', marginTop: 15 }}
//         />
//        <div className="Footer">
//           <span onClick={() => {
//             lessons.setShowAllComplete(!lessons.showAllComplete);
//             lessons.completeAll(lessons.showAllComplete);
//            }}>
//           {
//             lessons.showAllComplete  ? 'Completar Todas':'Limpiar Todas'
//           }
//         </span>
//         </div>
//         </div>
//     </div>
//   );
// }

