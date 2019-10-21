var React = require('react');

class Register extends React.Component {
  render() {
    console.log("register");
    return (
      <html>
        <head>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous"></link>
        <link href="https://fonts.googleapis.com/css?family=Montserrat&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css?family=Libre+Baskerville&display=swap" rel="stylesheet"></link>
        </head>
        <body>
         <h2 class="text-center" style={{margin: '100px auto', width: '500px', fontFamily: 'Montserrat'}}>Create User Account: </h2>
         <main class="form-row" style={{ margin: '50px auto',  width: '500px', fontFamily: 'Montserrat'}} >
            <form method="POST" action="/register" style={{width: '300px', display: 'block', margin: '0 auto'}}>
             Username: <input type="name" name="name" class="text-center" placeholder="Create Username:" style={{width: '300px', display: 'block', margin: '0 auto'}}/>
             Email: <input type="email" name="email" class="text-center" placeholder="Your Email:" style={{width: '300px', display: 'block', margin: '0 auto'}}/>
             Password: <input name="password" class="text-center" placeholder="Create password" style={{width: '300px', display: 'block', margin: '0 auto'}}/>
             <input type="submit" value="submit" class="btn btn-primary btn-block" style={{width: '300px', display: 'block', margin: '10px auto'}}/>
            </form>
        </main>
          </body>
      </html>
    );
  }
}

module.exports = Register;