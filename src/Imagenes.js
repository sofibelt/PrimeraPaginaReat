import 'bootstrap/dist/css/bootstrap.min.css';

function Imagenes(){
  return(
    <div class="offset-2">
      <div class="row ">
        <div  class="col-2 ">
          <img src={require('./img/kioto.jpg')} width="300px" />
        </div>
        <div class="col-10 ">
          <div class="row offset-2">
              <div id="imagenes" class="col-2 ">
                <img  src={require('./img/kioto.jpg')} width="100px" />
              </div>
              <div id="imagenes" class="col-2">
                <img  src={require('./img/kioto.jpg')} width="100px" />
              </div>
              <div id="imagenes" class="col-2">
                <img  src={require('./img/kioto.jpg')} width="100px" />
              </div>
            </div>
            <div class="row offset-2">
                <div  id="imagenes" class="col-2 ">
                  <img  src={require('./img/kioto.jpg')} width="100px" />
                </div>
                <div id="imagenes" class="col-2">
                  <img  src={require('./img/kioto.jpg')} width="100px" />
                </div>
                <div id="imagenes" class="col-2">
                  <img  src={require('./img/kioto.jpg')} width="100px" />
                </div>
              </div>
        </div>
      </div>

      <div class="row ">
        <div  class="col-6 ">
          <div>
            <img id="imagenes" src={require('./img/calle.jpg')} width="200px" />
            <img id="imagenes" class="offset-2" src={require('./img/calle.jpg')} width="200px" />
          </div>
          <div>
            <img id="imagenes" class="offset-3" src={require('./img/calle.jpg')} width="200px" />
          </div>
          <div>
            <img id="imagenes" src={require('./img/calle.jpg')} width="200px" />
            <img id="imagenes" class="offset-2" src={require('./img/calle.jpg')} width="200px" />
          </div>
        </div>
        <div  class="col-2 ">
          <img src={require('./img/montana.jfif')}  />
        </div>
      </div>
    </div>
  );
}

export default Imagenes;
