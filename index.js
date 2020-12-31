class Person extends HTMLElement {
    constructor() {
      super();
      this._shadowDom = this.attachShadow({mode: 'open'});
      this.name = this.getAttribute('name');
      this.job = this.getAttribute('job');
      this.age = this.getAttribute('age');
      this.id = this.getAttribute('id');
      this.img = this.getAttribute('img');
      this._shadowDom.innerHTML = `
      
      <style>
      *{
        padding:0;
        margin:0;
        box-sizing: border-box;
      }
      #container {
        width: 356px;
        border:3px solid black;
        margin: 0 10px 10px;
      }
      #container img {
        width:350px;
        height: 250px;
        
      }
      #over{
          font-size:22px
      }
      #under{
          font-size: 25px;
          font-family: Georgia, 'Times New Roman', Times, serif;
      }
    </style>
      
      <div id="container">
        <div>
          <img src="${this.img}" alt="">
        </div>
        <div id = "over">
          <h2>${this.name}</h2>
        </div>
        <div id = "under">
          <p>Age: ${this.age}</p>
          <p>Job: ${this.job}</p>
          <p>Id: ${this.id}</p>
        
        </div>
    </div>`;
      
      
    }
    
  }
  
  window.customElements.define('info-people', Person);