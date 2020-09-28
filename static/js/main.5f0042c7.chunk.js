(this["webpackJsonpodin-library-react"]=this["webpackJsonpodin-library-react"]||[]).push([[0],{11:function(e,t,a){e.exports=a(17)},16:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var o=a(0),n=a.n(o),s=a(10),r=a.n(s),i=a(6),c=a(7),l=a(2),h=a(3),d=a(1),k=a(5),p=a(4);var b=function(e){return n.a.createElement("header",null,n.a.createElement("h1",{className:"logo"},"My Library"),n.a.createElement("button",{onClick:e.onClick,className:"btn  btn-primary"},"Add New Book"))},u=a(8),m=function(e){Object(k.a)(a,e);var t=Object(p.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(h.a)(a,[{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"book-card"},n.a.createElement("h3",null,this.props.book.title),n.a.createElement("p",null,this.props.book.author),n.a.createElement("p",null,this.props.book.pages," pages"),n.a.createElement("img",{src:this.props.book.coverImage,alt:"book"}),n.a.createElement("br",null),n.a.createElement("label",null,"Mark as read :",n.a.createElement("input",{type:"checkbox",className:"read-check",name:"isRead",checked:this.props.book.isRead,onChange:function(t){e.props.changeRead(t,e.props.book)}})),n.a.createElement("br",null),n.a.createElement(u.a,{className:"icon-btn",size:"20px",color:"#31bebe",onClick:function(){e.props.editBook(e.props.book)}}),n.a.createElement(u.b,{className:"icon-btn",size:"20px",color:"#ed487f",onClick:function(){e.props.deleteBook(e.props.book)}}))}}]),a}(n.a.Component),f=function(e){Object(k.a)(a,e);var t=Object(p.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(h.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:"form-div"},n.a.createElement("form",null,n.a.createElement("input",{type:"text",placeholder:"Book Title",name:"title",value:this.props.book.title,onChange:this.props.handleChange}),n.a.createElement("input",{type:"text",placeholder:"Author",name:"author",value:this.props.book.author,onChange:this.props.handleChange}),n.a.createElement("input",{type:"text",placeholder:"ISBN",name:"isbn",value:this.props.book.isbn,onChange:this.props.handleChange}),n.a.createElement("input",{type:"text",placeholder:"No. of pages",name:"pages",value:this.props.book.pages,onChange:this.props.handleChange}),n.a.createElement("label",null,"Mark as read :",n.a.createElement("input",{type:"checkbox",name:"isRead",onChange:this.props.handleChange,checked:this.props.book.isRead,className:"form-check"})),n.a.createElement("button",{className:"btn btn-primary",onClick:"edit"===this.props.formMode?this.props.saveBook:this.props.handleClick},"edit"===this.props.formMode?"Save":"Add Book"),n.a.createElement("button",{className:"btn btn-danger",onClick:this.props.hideModal},"Cancel")))}}]),a}(n.a.Component),g=function e(t,a,o,n,s){Object(l.a)(this,e),this.title=t,this.isbn=a,this.author=o,this.pages=n,this.isRead=s,this.coverImage="http://covers.openlibrary.org/b/isbn/".concat(this.isbn,"-M.jpg")},v=new g("Man's search for meaning","080701429X","Viktor E Frankl",246,!0),B=new g("The Waste Lands","0451210867","Stephen King",608,!1),y=function(e){Object(k.a)(a,e);var t=Object(p.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).state={books:[v,B],currentBook:{title:"",author:"",isbn:"",pages:"",isRead:!1},modalState:{display:"none"},formMode:"",editBookIsbn:""},e.displayForm=e.displayForm.bind(Object(d.a)(e)),e.handleChange=e.handleChange.bind(Object(d.a)(e)),e.createBook=e.createBook.bind(Object(d.a)(e)),e.hideModal=e.hideModal.bind(Object(d.a)(e)),e.editBook=e.editBook.bind(Object(d.a)(e)),e.saveBook=e.saveBook.bind(Object(d.a)(e)),e.deleteBook=e.deleteBook.bind(Object(d.a)(e)),e.changeRead=e.changeRead.bind(Object(d.a)(e)),e}return Object(h.a)(a,[{key:"displayForm",value:function(){this.setState({currentBook:{title:"",author:"",isbn:"",pages:"",isRead:!1},modalState:{display:"block"},formMode:"new"})}},{key:"hideModal",value:function(e){e.preventDefault(),this.setState({modalState:{display:"none"}})}},{key:"handleChange",value:function(e){e.persist(),"checkbox"===e.target.type?this.setState((function(t){return{currentBook:Object(c.a)(Object(c.a)({},t.currentBook),{},Object(i.a)({},e.target.name,e.target.checked))}})):this.setState((function(t){return{currentBook:Object(c.a)(Object(c.a)({},t.currentBook),{},Object(i.a)({},e.target.name,e.target.value))}}))}},{key:"createBook",value:function(e){e.preventDefault();var t=new g(this.state.currentBook.title,this.state.currentBook.isbn,this.state.currentBook.author,this.state.currentBook.pages,this.state.currentBook.isRead);this.setState((function(e){return e.books.push(t),{books:e.books}}))}},{key:"editBook",value:function(e){this.displayForm(),this.setState({currentBook:e,formMode:"edit",editBookIsbn:e.isbn})}},{key:"deleteBook",value:function(e){this.setState((function(t){for(var a=0;a<t.books.length;a++)t.books[a].isbn===e.isbn&&t.books.splice(a,1);return{books:t.books}}))}},{key:"saveBook",value:function(e){var t=this;e.preventDefault(),this.setState((function(e){for(var a=0;a<e.books.length;a++)e.books[a].isbn===e.editBookIsbn&&e.books.splice(a,1);var o=new g(t.state.currentBook.title,t.state.currentBook.isbn,t.state.currentBook.author,t.state.currentBook.pages,t.state.currentBook.isRead);return e.books.push(o),{books:e.books}})),this.hideModal(e)}},{key:"changeRead",value:function(e,t){e.persist(),this.setState((function(a){for(var o=0;o<a.books.length;o++)a.books[o]===t&&(t.isRead=e.target.checked,a.books.splice(o,1,t));return{books:a.books}}))}},{key:"render",value:function(){var e=this,t=this.state.books.map((function(t){return n.a.createElement(m,{key:t.isbn,book:t,editBook:e.editBook,deleteBook:e.deleteBook,changeRead:e.changeRead})}));return n.a.createElement("div",{className:"container"},n.a.createElement(b,{onClick:this.displayForm}),n.a.createElement("div",{className:"modal",style:this.state.modalState},n.a.createElement(f,{book:this.state.currentBook,handleChange:this.handleChange,handleClick:this.createBook,hideModal:this.hideModal,saveBook:this.saveBook,formMode:this.state.formMode})),n.a.createElement("div",{className:"books-container"},t))}}]),a}(n.a.Component);a(16);r.a.render(n.a.createElement(y,null),document.getElementById("root"))}},[[11,1,2]]]);
//# sourceMappingURL=main.5f0042c7.chunk.js.map