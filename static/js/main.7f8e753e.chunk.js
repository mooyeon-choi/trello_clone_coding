(this.webpackJsonptodolist=this.webpackJsonptodolist||[]).push([[0],{15:function(t,e,a){},16:function(t,e,a){},21:function(t,e,a){"use strict";a.r(e);var n=a(0),s=a(1),r=a.n(s),i=a(9),d=a.n(i),c=(a(15),a(6)),l=a(2),o=a(3),h=a(5),p=a(4),u=(a(16),function(t){Object(h.a)(a,t);var e=Object(p.a)(a);function a(){var t;Object(l.a)(this,a);for(var n=arguments.length,s=new Array(n),i=0;i<n;i++)s[i]=arguments[i];return(t=e.call.apply(e,[this].concat(s))).formRef=r.a.createRef(),t.inputRef=r.a.createRef(),t.onSubmit=function(e){e.preventDefault();var a=t.inputRef.current.value;a&&t.props.onAddList(a),t.formRef.current.reset(),t.props.onCancel()},t.handleCancel=function(){t.formRef.current.reset(),t.props.onCancel()},t}return Object(o.a)(a,[{key:"render",value:function(){return Object(n.jsxs)("form",{ref:this.formRef,className:"add-list-form",onSubmit:this.onSubmit,children:[Object(n.jsx)("input",{ref:this.inputRef,type:"text",className:"add-list-input",placeholder:"Enter a title for this list..."}),Object(n.jsxs)("div",{children:[Object(n.jsx)("button",{className:"add-card-button",children:"Add List"}),Object(n.jsx)("button",{className:"add-card-cancel-button",type:"button",onClick:this.handleCancel,children:Object(n.jsx)("i",{className:"cancel-icon fas fa-times"})})]})]})}}]),a}(s.Component)),f=function(t){Object(h.a)(a,t);var e=Object(p.a)(a);function a(){var t;Object(l.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(t=e.call.apply(e,[this].concat(s))).handleChangeCheckAddList=function(){t.props.onChangeCheckAddList()},t.handleCancel=function(){t.props.onChangeCheckAddList()},t.handleAddList=function(e){t.props.onAddList(e)},t}return Object(o.a)(a,[{key:"render",value:function(){return Object(n.jsx)(n.Fragment,{children:this.props.checkAddList?Object(n.jsx)(u,{onAddList:this.handleAddList,onCancel:this.handleCancel}):Object(n.jsxs)("div",{className:"add-list",onClick:this.handleChangeCheckAddList,children:[Object(n.jsx)("i",{className:"add-icon fas fa-plus"}),"Add another list"]})})}}]),a}(s.Component),b=function(t){Object(h.a)(a,t);var e=Object(p.a)(a);function a(){var t;Object(l.a)(this,a);for(var n=arguments.length,s=new Array(n),i=0;i<n;i++)s[i]=arguments[i];return(t=e.call.apply(e,[this].concat(s))).formRef=r.a.createRef(),t.inputRef=r.a.createRef(),t.onSubmit=function(e){e.preventDefault();var a=t.inputRef.current.value;a&&t.props.onAddCard(t.props.boardId,a),t.formRef.current.reset()},t.handleCancel=function(){t.formRef.current.reset(),t.props.onCancel()},t}return Object(o.a)(a,[{key:"render",value:function(){return Object(n.jsxs)("form",{ref:this.formRef,className:"add-card-form",onSubmit:this.onSubmit,children:[Object(n.jsx)("textarea",{ref:this.inputRef,type:"text",className:"add-card-input",placeholder:"Enter a title for this card..."}),Object(n.jsxs)("div",{children:[Object(n.jsx)("button",{className:"add-card-button",children:"Add Card"}),Object(n.jsx)("button",{className:"add-card-cancel-button",type:"button",onClick:this.handleCancel,children:Object(n.jsx)("i",{className:"cancel-icon fas fa-times"})})]})]})}}]),a}(s.Component),g=function(t){Object(h.a)(a,t);var e=Object(p.a)(a);function a(){var t;Object(l.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(t=e.call.apply(e,[this].concat(s))).handleAdd=function(){t.props.onAdd()},t.handleAddCard=function(e,a){t.props.onAddCard(e,a)},t}return Object(o.a)(a,[{key:"render",value:function(){return Object(n.jsx)("div",{className:"add-another-card",children:this.props.checkAddCard?Object(n.jsx)(b,{onAddCard:this.handleAddCard,boardId:this.props.boardId,onCancel:this.props.onAdd}):Object(n.jsxs)("section",{className:"add-another-card-button",onClick:this.handleAdd,children:[Object(n.jsx)("i",{className:"add-icon fas fa-plus"}),"Add another card"]})})}}]),a}(s.Component),j=function(t){Object(h.a)(a,t);var e=Object(p.a)(a);function a(){var t;Object(l.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(t=e.call.apply(e,[this].concat(s))).handleDragStart=function(){t.props.onDragStart(t.props.card)},t.handleDragOver=function(t){t.preventDefault()},t}return Object(o.a)(a,[{key:"render",value:function(){return Object(n.jsx)("div",{id:this.props.id,className:"card",draggable:this.props.draggable,onDragStart:this.handleDragStart,onDragOver:this.handleDragOver,children:this.props.card.text})}}]),a}(s.Component),m=function(t){Object(h.a)(a,t);var e=Object(p.a)(a);function a(){var t;Object(l.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(t=e.call.apply(e,[this].concat(s))).blockTransmission=function(t){t.preventDefault(),t.stopPropagation()},t.handleDeleteList=function(){t.props.onDeleteList(t.props.boardId)},t.handleOnListDraggable=function(){t.props.onListDraggable()},t.handleChangeListName=function(){t.props.onChangeListName()},t.handleDeleteAllCardInList=function(){t.props.onDeleteAllCardInList(t.props.boardId),t.props.onCloseSetting()},t}return Object(o.a)(a,[{key:"render",value:function(){return Object(n.jsxs)("div",{onClick:this.handleOnListDraggable,children:[Object(n.jsxs)("ul",{className:"list-setting-items",onClick:this.blockTransmission,children:[Object(n.jsx)("li",{className:"list-setting-title",children:"List Actions"}),Object(n.jsx)("hr",{}),Object(n.jsx)("li",{className:"list-setting-item",onClick:this.handleChangeListName,children:"Change List Name..."}),Object(n.jsx)("li",{className:"list-setting-item",onClick:this.handleDeleteList,children:"Delete List"}),this.props.cards.length>0&&Object(n.jsx)("hr",{}),this.props.cards.length>0&&Object(n.jsx)("li",{className:"list-setting-item",onClick:this.handleDeleteAllCardInList,children:"Delete All Card in This List..."})]}),Object(n.jsx)("div",{className:"list-setting-background"})]})}}]),a}(s.Component),O=function(t){Object(h.a)(a,t);var e=Object(p.a)(a);function a(){var t;Object(l.a)(this,a);for(var n=arguments.length,s=new Array(n),i=0;i<n;i++)s[i]=arguments[i];return(t=e.call.apply(e,[this].concat(s))).state={value:t.props.listName},t.handleValueChange=function(e){t.setState({value:e.target.value})},t.formRef=r.a.createRef(),t.inputRef=r.a.createRef(),t.onSubmit=function(e){e.preventDefault();var a=t.inputRef.current.value;a&&t.props.onListNameUpdate(t.props.boardId,a),t.props.onCloseSetting()},t}return Object(o.a)(a,[{key:"render",value:function(){return Object(n.jsx)("form",{className:"update-list-form",ref:this.formRef,onSubmit:this.onSubmit,children:Object(n.jsx)("input",{className:"add-list-input",ref:this.inputRef,type:"text",value:this.state.value,onChange:this.handleValueChange})})}}]),a}(s.Component),C=function(t){Object(h.a)(a,t);var e=Object(p.a)(a);function a(){var t;Object(l.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(t=e.call.apply(e,[this].concat(s))).state={checkAddCard:!1,checkAddList:!1,openSetting:!1,onListDraggable:!0},t.handleDragOver=function(t){t.preventDefault()},t.handleDragEnter=function(e){t.props.onDragEnter(e)},t.handleDragStart=function(e){t.props.onDragStart(e)},t.handleListDragStart=function(){t.props.onDragStart(t.props.list)},t.handleAdd=function(){var e=!t.state.checkAddCard;t.setState({checkAddCard:e})},t.handleAddCard=function(e,a){t.props.onAddCard(e,a)},t.handleChangeCheckAddList=function(){var e=!t.state.checkAddList;t.setState({checkAddList:e})},t.handleAddList=function(e){t.props.onAddList(e)},t.handleSetting=function(){var e=!t.state.openSetting;t.setState({openSetting:e})},t.handleDeleteList=function(e){t.props.onDeleteList(e)},t.closeListDraggable=function(){t.setState({onListDraggable:"false"})},t.handleOnListDraggable=function(){t.setState({onListDraggable:"true"})},t.handleChangeListName=function(){t.props.onChangeListName(t.props.list.name)},t.handleListNameUpdate=function(e,a){t.props.onListNameUpdate(e,a)},t.handleCloseSetting=function(){t.setState({openSetting:!1})},t.handleDeleteAllCardInList=function(e){t.props.onDeleteAllCardInList(e)},t}return Object(o.a)(a,[{key:"render",value:function(){var t=this;return Object(n.jsx)("div",{id:this.props.id,className:this.props.className,onDragOver:this.handleDragOver,onDragEnter:this.handleDragEnter,children:this.props.list?Object(n.jsxs)("div",{className:"list",children:[this.props.onUpdateListName===this.props.list.name?Object(n.jsx)(O,{listName:this.props.list.name,boardId:this.props.id,onListNameUpdate:this.handleListNameUpdate,onCloseSetting:this.handleCloseSetting}):Object(n.jsxs)("section",{className:"list-name-space",children:[Object(n.jsx)("section",{className:"list-name",onDragStart:this.handleListDragStart,draggable:this.state.onListDraggable,onClick:this.handleChangeListName,children:this.props.list.name}),Object(n.jsxs)("div",{onMouseLeave:this.handleOnListDraggable,onMouseOver:this.closeListDraggable,className:"list-setting",onClick:this.handleSetting,children:[Object(n.jsx)("i",{className:"fas fa-ellipsis-h"}),this.state.openSetting&&Object(n.jsx)(m,{boardId:this.props.id,cards:this.props.list.cards,onDeleteList:this.handleDeleteList,onListDraggable:this.handleOnListDraggable,onChangeListName:this.handleChangeListName,onDeleteAllCardInList:this.handleDeleteAllCardInList,onCloseSetting:this.handleCloseSetting})]})]}),this.props.list.cards.map((function(e){return Object(n.jsx)(j,{card:e,beforeBoard:t.props.id,onDragStart:t.handleDragStart,draggable:"true"},e.id)})),Object(n.jsx)(g,{checkAddCard:this.state.checkAddCard,onAdd:this.handleAdd,onAddCard:this.handleAddCard,boardId:this.props.id})]}):Object(n.jsx)(f,{onAddList:this.handleAddList,onChangeCheckAddList:this.handleChangeCheckAddList,checkAddList:this.state.checkAddList})})}}]),a}(s.Component),v=function(t){Object(h.a)(a,t);var e=Object(p.a)(a);function a(){return Object(l.a)(this,a),e.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return Object(n.jsx)("nav",{className:"navbar",children:Object(n.jsx)("img",{src:"https://github.com/mooyeon-choi/trello_clone_coding/blob/master/public/images/navbar_logo.png?raw=true",alt:"logo",className:"navbar-logo"})})}}]),a}(s.Component),L=function(t){Object(h.a)(a,t);var e=Object(p.a)(a);function a(){var t;Object(l.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(t=e.call.apply(e,[this].concat(s))).state={boards:[{id:"0",list:{name:"To Do",type:"list",cards:[{id:"card_1",type:"card",text:"React \uacf5\ubd80"}]}},{id:"1",list:{name:"Doing",type:"list",cards:[{id:"card_2",type:"card",text:"JavaScript \uacf5\ubd80"}]}},{id:"2",list:{name:"Done",type:"list",cards:[{id:"card_3",type:"card",text:"\uc544\uce68 \uc6b4\ub3d9"}]}},{id:"3",list:null}],item:null,clickFrame:null,updateListName:null},t.handleDragEnter=function(e){e.preventDefault();var a=e.target;if(console.log(a.id.length),a.id.length>0&&t.state.boards.find((function(t){return t.id===a.id})).list){var n=t.state.boards;if("card"===t.state.item.type){for(var s=function(e){var s=n[e],r=t.state.item;s.id.toString()===a.id?s.list.cards=[].concat(Object(c.a)(s.list.cards.filter((function(t){return t.id!==r.id}))),[r]):s.list.cards=Object(c.a)(s.list.cards.filter((function(t){return t.id!==r.id})))},r=0;r<n.length-1;r++)s(r);t.setState({boards:n})}else if("list"===t.state.item.type){for(var i=[],d=t.state.item,l=0;l<n.length-1;l++)n[l].list!==d&&i.push(n[l].list);for(var o=0,h=0;h<n.length-1;h++)n[h].id!==a.id?(n[h].list=i[o],o++):n[h].list=d}t.setState({boards:n})}},t.handleDragStart=function(e){console.log(e),t.setState({item:e})},t.handleAddCard=function(e,a){var n=t.state.boards;n.find((function(t){return t.id===e})).list.cards=[].concat(Object(c.a)(n.find((function(t){return t.id===e})).list.cards),[{id:Date.now().toString(),type:"card",text:a}]),t.setState({boards:n})},t.handleAddList=function(e){var a=t.state.boards,n=[].concat(Object(c.a)(a.slice(0,a.length-1)),[{id:Date.now().toString(),list:{name:e,type:"list",cards:[]}},a[a.length-1]]);console.log(n),t.setState({boards:n})},t.handleDeleteList=function(e){var a=t.state.boards.filter((function(t){return t.id!==e}));t.setState({boards:a})},t.checkClickFrame=function(e){"add-list-input"!==e.target.className&&"list-name"!==e.target.className&&t.setState({onUpdateListName:null})},t.handleChangeListName=function(e){var a=e;t.setState({onUpdateListName:a})},t.handleUpdateListName=function(e,a){for(var n=t.state.boards,s=0;s<n.length-1;s++)n[s].id===e&&(n[s].list.name=a);t.setState({boards:n})},t.handleDeleteAllCardInList=function(e){for(var a=t.state.boards,n=0;n<a.length-1;n++)a[n].id===e&&(a[n].list.cards=[]);t.setState({boards:a})},t}return Object(o.a)(a,[{key:"render",value:function(){var t=this;return Object(n.jsxs)("div",{onClick:this.checkClickFrame,children:[Object(n.jsx)(v,{}),Object(n.jsx)("div",{className:"flexbox",children:this.state.boards.map((function(e){return Object(n.jsx)(C,{id:e.id,list:e.list,board:e,className:"board",onDragEnter:t.handleDragEnter,onDragStart:t.handleDragStart,onAddCard:t.handleAddCard,onAddList:t.handleAddList,onDeleteList:t.handleDeleteList,onClickFrame:t.checkClickFrame,onUpdateListName:t.state.onUpdateListName,onChangeListName:t.handleChangeListName,onListNameUpdate:t.handleUpdateListName,onDeleteAllCardInList:t.handleDeleteAllCardInList},e.id)}))})]})}}]),a}(s.Component),D=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,22)).then((function(e){var a=e.getCLS,n=e.getFID,s=e.getFCP,r=e.getLCP,i=e.getTTFB;a(t),n(t),s(t),r(t),i(t)}))};a(17);d.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(L,{})}),document.getElementById("root")),D()}},[[21,1,2]]]);
//# sourceMappingURL=main.7f8e753e.chunk.js.map