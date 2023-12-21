export class Router{
  routes = {} 
  add(rota, endereco){
    this.routes[rota] = endereco
    console.log(this.routes)
  }
   route(event){
    event = event || window.event
    event.preventDefault()

    window.history.pushState({}, "", event.target.href)
    
    this.handle()
  }

   handle(){
    const {pathname} = window.location
    const route = this.routes[pathname]
    console.log(route)
    if (route == '/pages/home.html') {
      document.querySelector('html').removeAttribute('class');
      document.querySelector('html').classList.add("img-home")
    }else if(route == '/pages/universo.html'){
      document.querySelector('html').removeAttribute('class');
      document.querySelector('html').classList.add("img-universo")
    }else if(route == '/pages/exploracao.html'){
      document.querySelector('html').removeAttribute('class');
      document.querySelector('html').classList.add("img-exploracao")
    }
    fetch(route)
    .then(data => data.text())
    .then(html =>{
      document.querySelector('#app').innerHTML = html
    })


    
  }
}


