import {createFormEntity} from './form-helpers.js';

async function homeViewHandler(){

  this.partials = {
    header: await this.load('./templates/common/header.hbs'),
    footer: await this.load('./templates/common/footer.hbs')
  };
  
  this.partial('./templates/home/home.hbs');
}

async function aboutViewHandler(){

  this.partials = {
    header: await this.load('./templates/common/header.hbs'),
    footer: await this.load('./templates/common/footer.hbs')
  };
  
  this.partial('./templates/about/about.hbs');
}

async function loginHandler(){

  this.partials = {
    header: await this.load('./templates/common/header.hbs'),
    footer: await this.load('./templates/common/footer.hbs'),
    loginForm: await this.load('./templates/login/loginForm.hbs')
  };
  
   await this.partial('./templates/login/loginPage.hbs');

};

async function registerViewHandler(){

  this.partials = {
    header: await this.load('./templates/common/header.hbs'),
    footer: await this.load('./templates/common/footer.hbs'),
    registerForm: await this.load('./templates/register/registerForm.hbs')
  };
  
   await this.partial('./templates/register/registerPage.hbs');
   let formRef = document.querySelector('#register-form');

   let form = createFormEntity(formRef, ['username', 'password', 'repeatPassword']);

   formRef.addEventListener('submit', (e) => {

     e.preventDefault();

     let formValue = form.getValue();

     if (formValue.password !== formValue.repeatPassword) {
       return;
     }
     
     firebase.auth().createUserWithEmailAndPassword(formValue.username, formValue.password)
     .then(response => {

       firebase.auth().currentUser.getIdToken().then(token => {
         sessionStorage.setItem('token', token);
         sessionStorage.setItem('username', response.user.email);
       });
     });

     console.log(form.getValue()); 
  })

};

var app = Sammy('#main', function () {
  // include a plugin
  this.use('Handlebars', 'hbs');

  // define a 'route'
  this.get('#/', homeViewHandler);
  this.get('#/home', homeViewHandler);
  this.get('#/about', aboutViewHandler);
  this.get('#/login', loginHandler);
  this.get('#/register', registerViewHandler);
  this.post('#/register', () => false);

});

// start the application


(() => {
  app.run('#/');
})()          