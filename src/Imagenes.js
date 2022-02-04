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
              <div  class="col-2 ">
                <img  src={require('./img/kioto.jpg')} width="100px" />
              </div>
              <div class="col-2">
                <img  src={require('./img/kioto.jpg')} width="100px" />
              </div>
              <div class="col-2">
                <img  src={require('./img/kioto.jpg')} width="100px" />
              </div>
            </div>
            <div class="row offset-2">
                <div  class="col-2 ">
                  <img  src={require('./img/kioto.jpg')} width="100px" />
                </div>
                <div class="col-2">
                  <img  src={require('./img/kioto.jpg')} width="100px" />
                </div>
                <div class="col-2">
                  <img  src={require('./img/kioto.jpg')} width="100px" />
                </div>
              </div>
        </div>


      </div>
    </div>
    /*
    <div>
      <div className="col-lg-2 offset-2 bg-warning">
        <img class="rounded float-left" src={require('./img/kioto.jpg')} width="100px" />
      </div>
      <div className="col-lg-2 offset-2 bg-warning">
        <img class="rounded float-left" src={require('./img/kioto.jpg')} width="100px" />
      </div>
    </div>
    */
  );
}

export default Imagenes;
