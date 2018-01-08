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
var HelloWorld = React.createClass({
  render: function() {
    return (
      <div className="helloWorld">
        Hello, world!.
      </div>
    );
  }
});
```

---

#### Components => Elements => VirtualDOM

I ReactComponent vengono convertiti in ReactElement e quindi inseriti nel VirtualDOM.

Viene eseguito un confronto con l'esistente (diffing) e solo le parti interessate vengono aggiornate (reconciliation).

Una volta che React conosce le differenze, applica le modifiche al DOM reale.

Il punto è che il processo e molto più veloce ed efficiente.

---

#### DOM Render

![Trend](/images/dom-render.png)

Reflow e Painting rallentano al crescere del DOM.

il Virtual DOM minimizza i tempi di questi due passi.

---

#### Flux e unidirectional data Flow

In flux, valori immutabili vengono passati ai componenti che in risposta ad eventi chiamano callback che agiscono su uno store centrale.

Il motto è **properties flow down, actions flow up**

---

### Differenze con Angular

In Angular il two way binding modifica la view ad ogni cambiamento del model ed il model in risposta ad eventi sulla view.

Il problema in applicazioni complesse sono gli update in cascata, una modifica ne scatena un'altra che ne scatena un'altra, etc.

Le modifiche possono divenire impredicibili.

---

### Flux Data Flow

![Trend](/images/flux.png)

---

Flux usa un approccio funzionale. La view è una funzione dello stato applicativo. In risposta a cambiamenti dello stato la view viene rirenderizzata.
Uno stato una visualizzazione. Migliore predicibilità.

---

### Flux: Actions

I cambiamenti di stato vengono attuati da Actions

Le azioni sono il solo modo di agire sullo store.

I componenti si registrano sullo store per essere notificati dei cambiamenti e vengono automaticamente rirenderizzati utilizzando i nuovi dati.
