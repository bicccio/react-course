### Corso React - Giorno 1

---

#### Programma - Giorno 1

* Introduzione
* Raw React
* JSX, Babel, Es6
* Componenti
* Props & State
* Lyfecycle methods

---

#### Cos'è React

E' una libreria javascript creata da Facebook ed Instagram per la costruzione di interfacce web.

E' stata presentata per la prima volta da Facebook nel 2012 in una newsfeed.

Nello stesso anno è stata utilizzata per realizzare Instagram.com e FacebookAds.

E' stata opensourced alla JSConf US nel maggio 2013.

---

#### Trend

Chi usa React: Facebook, Instagram, Airbnb, Netflix, Uber, etc.

![Trend](/images/trend.png)

---

#### Differenze con Angular

Angular è un Framework completo che definisce la struttura di tutta l'applicazione.

React si occupa solo della UI e necessità di componenti di terze parti per le altre funzionalità (Routing, State manager, Ajax)

---

#### Come e perchè

**f(data) => UI** - Componenti come funzioni pure dei parametri di ingresso. Un ingresso una uscita.

Prevedibilità del comportamento, facilità nel management dello stato dell'applicazione.

**Virtual DOM** - Rappresentazione virtuale del DOM.

Semplificare le iterazioni con il DOM e migliorare le prestazioni.

---

#### Virtual DOM

Problema: aumento della dimensione del DOM e della dinamicità delle applicazioni web (SPA, Ajax). Lentezza delle operazioni DOM (traverse and change)

Soluzione: rappresentazione interna del DOM, indipendente dal browser, che astrae e semplifica le iterazioni con il DOM reale, permettendo il render selettivo dei soli componenti interessati da mutazioni dello stato dell'applicazione (eventi).

---

#### ReactElements

Rappresentazione interna, immutabile e stateless interna al VirtualDom di un elemento DOM. Il metodo render lo trasforma in un normale elemento del DOM. (esempio Raw React)

```
var root = React.createElement('div');
ReactDOM.render(root, document.getElementById('example'));
```

---

#### ReactComponents

I componenti sono stateful e vengono renderizzati ad ogni cambiamento dello stato.

```
var CommentBox = React.createClass({
  render: function() {
    return (
      <div className="commentBox">
        Hello, world! I am a CommentBox.
      </div>
    );
  }
});
```
