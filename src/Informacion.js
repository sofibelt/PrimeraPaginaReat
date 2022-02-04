import 'bootstrap/dist/css/bootstrap.min.css';


function Informacion() {
  return (
    <div id="azul">
      <form>
        <div id="campo" class="form-group col-4 offset-4">
          <input  class="form-control bg-transparent" id="exampleFormControlInput1" placeholder="Nombre"></input>
        </div>
        <div id="campo" class="form-group col-4 offset-4">
          <input type="email" class="form-control bg-transparent" id="exampleFormControlInput1" placeholder="Email"></input>
        </div>
        <div id="campo" class="form-group col-4 offset-4">
          <textarea  class="form-control bg-transparent" id="exampleFormControlInput1" placeholder="Escribe tu comentario aquí"></textarea >
        </div>
      </form>
    </div>
  );
}

export default Informacion;
