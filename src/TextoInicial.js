import 'bootstrap/dist/css/bootstrap.min.css';


function TextoInicial() {
  return (
    <div id="padre" className="col-md-12">
      <img className="img-fluid" src={require('./img/mesa.jpg')}  />
      <div class="card-title" >
        <h1 class="display-1 text-center">Hello;</h1>
        <h6 >I'm Ana. Web & Graphic Designer;</h6>
      </div>
    </div>
  );
}

export default TextoInicial;
