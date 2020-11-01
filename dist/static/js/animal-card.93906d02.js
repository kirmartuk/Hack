(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["animal-card"],{"0059":function(e,t,a){},"1e8e":function(e,t,a){},3835:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));a("277d");function l(e){if(Array.isArray(e))return e}a("a4d3"),a("e01a"),a("d28b"),a("d3b7"),a("3ca3"),a("ddb0");function i(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var a=[],l=!0,i=!1,r=void 0;try{for(var o,n=e[Symbol.iterator]();!(l=(o=n.next()).done);l=!0)if(a.push(o.value),t&&a.length===t)break}catch(s){i=!0,r=s}finally{try{l||null==n["return"]||n["return"]()}finally{if(i)throw r}}return a}}var r=a("06c5");function o(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function n(e,t){return l(e)||i(e,t)||Object(r["a"])(e,t)||o()}},"43a6":function(e,t,a){"use strict";var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-dialog",{staticClass:"animal-card-edit",attrs:{title:e.isEdit?"Редактирование карточки животного":"Создание карточки животного",visible:e.localVisible,"append-to-body":"",width:"50%"},on:{"update:visible":function(t){e.localVisible=t}}},[a("el-form",{ref:"form",attrs:{model:e.form,"label-width":"200px",size:"mini"}},[a("el-form-item",{attrs:{label:"Вид животного"}},[a("el-select",{attrs:{placeholder:"Выберите вид"},model:{value:e.form.type,callback:function(t){e.$set(e.form,"type",t)},expression:"form.type"}},e._l(e.params.animalTypes,(function(e){return a("el-option",{key:e.key,attrs:{label:e.value,value:e.key}})})),1)],1),a("el-form-item",{attrs:{label:"Приют"}},[a("el-select",{attrs:{placeholder:"Выберите приют"},model:{value:e.form.shelter,callback:function(t){e.$set(e.form,"shelter",t)},expression:"form.shelter"}},e._l(e.shelterOptions,(function(e,t){return a("el-option",{key:t,attrs:{label:e.name,value:e.id}})})),1)],1),a("el-form-item",{attrs:{label:"Дата поступления в приют"}},[a("el-date-picker",{attrs:{type:"date",placeholder:"Укажите дату","picker-options":e.datePickerOptions},model:{value:e.form.arrivalDate,callback:function(t){e.$set(e.form,"arrivalDate",t)},expression:"form.arrivalDate"}})],1),a("el-form-item",{attrs:{label:"Пол"}},[a("el-select",{attrs:{placeholder:"Укажите пол"},model:{value:e.form.sex,callback:function(t){e.$set(e.form,"sex",t)},expression:"form.sex"}},e._l(e.params.animalSex,(function(e,t){return a("el-option",{key:t,attrs:{label:e,value:e}})})),1)],1),a("el-form-item",{attrs:{label:"Порода"}},[a("el-select",{attrs:{placeholder:"Укажите породу"},model:{value:e.form.breed,callback:function(t){e.$set(e.form,"breed",t)},expression:"form.breed"}},e._l(e.filteredBreeds,(function(e,t){return a("el-option",{key:t,attrs:{label:e,value:e}})})),1)],1),a("el-form-item",{attrs:{label:"Окрас"}},[a("el-select",{attrs:{placeholder:"Укажите окрас"},model:{value:e.form.color,callback:function(t){e.$set(e.form,"color",t)},expression:"form.color"}},e._l(e.filteredColors,(function(e,t){return a("el-option",{key:t,attrs:{label:e,value:e}})})),1)],1),a("el-form-item",{attrs:{label:"Тип шерсти"}},[a("el-select",{attrs:{placeholder:"Укажите тип шерсти"},model:{value:e.form.wool,callback:function(t){e.$set(e.form,"wool",t)},expression:"form.wool"}},e._l(e.filteredWools,(function(e,t){return a("el-option",{key:t,attrs:{label:e,value:e}})})),1)],1),a("el-form-item",{attrs:{label:"Тип ушей"}},[a("el-select",{attrs:{placeholder:"Укажите тип ушей"},model:{value:e.form.ears,callback:function(t){e.$set(e.form,"ears",t)},expression:"form.ears"}},e._l(e.params.earType,(function(e,t){return a("el-option",{key:t,attrs:{label:e,value:e}})})),1)],1),a("el-form-item",{attrs:{label:"Тип хвоста"}},[a("el-select",{attrs:{placeholder:"Укажите тип хвоста"},model:{value:e.form.tail,callback:function(t){e.$set(e.form,"tail",t)},expression:"form.tail"}},e._l(e.params.tailType,(function(e,t){return a("el-option",{key:t,attrs:{label:e,value:e}})})),1)],1),a("el-form-item",{attrs:{label:"Возраст (примерный)"}},[a("el-input",{attrs:{placeholder:"Укажите возраст",type:"number",min:"0"},model:{value:e.form.age,callback:function(t){e.$set(e.form,"age",t)},expression:"form.age"}})],1),a("el-form-item",{attrs:{label:"Особые приметы"}},[a("el-input",{attrs:{placeholder:"Опишите особые приметы",rows:2,type:"textarea"},model:{value:e.form.specialSigns,callback:function(t){e.$set(e.form,"specialSigns",t)},expression:"form.specialSigns"}})],1),a("el-form-item",{attrs:{label:"Характер"}},[a("el-input",{attrs:{placeholder:"Укажите характер"},model:{value:e.form.character,callback:function(t){e.$set(e.form,"character",t)},expression:"form.character"}})],1),a("el-form-item",{attrs:{label:"Кличка"}},[a("el-input",{attrs:{placeholder:"Укажите кличку"},model:{value:e.form.nickname,callback:function(t){e.$set(e.form,"nickname",t)},expression:"form.nickname"}})],1),a("el-form-item",{attrs:{label:"Вес"}},[a("el-input",{attrs:{placeholder:"Укажите вес",type:"number",min:"0"},model:{value:e.form.weight,callback:function(t){e.$set(e.form,"weight",t)},expression:"form.weight"}})],1),a("el-form-item",{attrs:{label:"Стерилизовано"}},[a("el-switch",{model:{value:e.form.sterilized,callback:function(t){e.$set(e.form,"sterilized",t)},expression:"form.sterilized"}})],1),a("el-form-item",{attrs:{label:"ФИО Ветеринара"}},[a("el-input",{attrs:{placeholder:"Укажите ФИО ветеринара"},model:{value:e.form.veterinarian,callback:function(t){e.$set(e.form,"veterinarian",t)},expression:"form.veterinarian"}})],1),a("el-form-item",{attrs:{label:"Клетка"}},[a("el-input",{attrs:{placeholder:"Укажите клетку",type:"number",min:"0"},model:{value:e.form.cell,callback:function(t){e.$set(e.form,"cell",t)},expression:"form.cell"}})],1),a("el-form-item",{attrs:{label:"Идентификационная метка"}},[a("el-input",{attrs:{placeholder:"Укажите при наличии"},model:{value:e.form.idMarker,callback:function(t){e.$set(e.form,"idMarker",t)},expression:"form.idMarker"}})],1),a("el-form-item",{attrs:{label:"Готово к социализации"}},[a("el-switch",{model:{value:e.form.readyToPickUp,callback:function(t){e.$set(e.form,"readyToPickUp",t)},expression:"form.readyToPickUp"}})],1),a("el-form-item",{attrs:{label:"Фотографии"}},[a("el-upload",{ref:"photosUpload",staticClass:"animal-card-edit__photo-upload",attrs:{action:"https://jsonplaceholder.typicode.com/posts/","list-type":"picture-card","auto-upload":!1,accept:"image/*"}},[a("i",{staticClass:"el-icon-plus"})])],1)],1),a("div",{attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.localVisible=!1}}},[e._v("Отмена")]),a("el-button",{attrs:{type:"primary"},on:{click:e.create}},[e._v(e._s(e.isEdit?"Обновить":"Добавить"))])],1)],1)},i=[],r=(a("4160"),a("6eba"),a("0d03"),a("4fad"),a("159b"),a("3835")),o=a("5530"),n=a("c631"),s=a("d1d5"),c={name:"VAnimalCardEdit",props:{visible:{type:Boolean,required:!0},isEdit:{type:Boolean,default:!1},initialValues:{type:Object,default:function(){return{}}}},data:function(){return{localVisible:!1,datePickerOptions:{disabledDate:function(e){return e.getTime()>Date.now()}},form:{type:null,shelter:null,arrivalDate:null,sex:null,breed:null,color:null,wool:null,tail:null,ears:null,cardId:null,size:null,age:null,specialSigns:"",nickname:"",weight:null,readyToPickUp:!1,idMarker:null,character:null,veterinarian:null,cell:null,sterilized:!1}}},computed:{shelterOptions:function(){return this.$store.state[n["a"]].list},params:function(){return this.$store.state[s["d"]].model},filteredBreeds:function(){var e=this.form.type||"dog";return this.params.breed?this.params.breed[e]:[]},filteredColors:function(){var e=this.form.type||"dog";return this.params.color?this.params.color[e]:[]},filteredWools:function(){var e=this.form.type||"dog";return this.params.woolTypes?this.params.woolTypes[e]:[]}},watch:{visible:{handler:function(e){this.localVisible=e,this.setInitialValues()},immediate:!0},localVisible:{handler:function(e){this.$emit("update:visible",e)}}},methods:{create:function(){this.$emit("done",Object(o["a"])(Object(o["a"])({},this.form),{},{photos:this.$refs.photosUpload.uploadFiles}))},setInitialValues:function(){var e=this,t=Object(o["a"])({},this.initialValues),a={animal_type:"type",male:"sex",ready:"readyToPickUp",animal_breed:"breed"};Object.entries(this.initialValues).forEach((function(l){var i=Object(r["a"])(l,2),o=i[0],n=i[1],s=a[o],c=n;"ready"===o&&(c=n?"Да":"Нет"),"male"===o&&(c=n?"Мальчик":"Девочка"),"animal_type"===o&&(c=1===n?"Кошка":"Собака"),"animal_breed"===o&&(c=e.params.breed[n-800]),t[s]=c})),this.form=Object(o["a"])(Object(o["a"])({},this.form),t)}}},d=c,u=(a("d12e"),a("2877")),m=Object(u["a"])(d,l,i,!1,null,null,null);t["a"]=m.exports},"4b57":function(e,t,a){"use strict";a("1e8e")},"5e9c":function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"animal-card"},[a("el-page-header",{attrs:{content:"Карточка животного",title:"Назад"},on:{back:e.goBack}}),a("div",{staticClass:"animal-card__body"},[a("el-row",{attrs:{type:"flex",justify:"end"}},[a("el-col",{attrs:{span:4}},[a("el-button",{attrs:{icon:"el-icon-edit-outline"},on:{click:function(t){e.editAnimalVisible=!0}}},[e._v("Редактировать")])],1),a("el-col",{attrs:{span:4}},[a("el-button",{attrs:{icon:"el-icon-download"},on:{click:e.exportDoc}},[e._v("Выгрузить в .docx")])],1)],1),a("div",{directives:[{name:"loading",rawName:"v-loading",value:e.localLoading,expression:"localLoading"}]},[a("el-image",{staticClass:"image animal-card__image",attrs:{src:e.src}},[a("div",{staticClass:"image-slot",attrs:{slot:"error"},slot:"error"},[a("i",{staticClass:"el-icon-picture-outline"})])]),e._l(e.animalFields,(function(t,l){return a("div",{key:l,staticClass:"animal-card__field"},[a("div",{staticClass:"animal-card__key"},[e._v(e._s(t.key)+":")]),a("div",{staticClass:"animal-card__value"},[e._v(e._s(t.value))])])}))],2)],1),a("div",{staticClass:"animal-card__history-wrapper"},[a("el-row",{attrs:{type:"flex",justify:"space-between"}},[a("el-col",{attrs:{span:10}},[a("h4",[e._v("История животного")])]),a("el-col",{attrs:{span:4}},[a("el-button",{attrs:{icon:"el-icon-plus"},on:{click:function(t){e.uploadDocumentVisible=!0}}},[e._v("Добавить событие")])],1)],1),a("el-timeline",{directives:[{name:"loading",rawName:"v-loading",value:e.actsLoading,expression:"actsLoading"}],staticClass:"animal-card__history"},e._l(e.acts,(function(t,l){return a("el-timeline-item",{key:l,attrs:{timestamp:t.date,placement:"top"}},[a("p",[a("span",{staticClass:"animal-card__history-title"},[e._v(" "+e._s(t.title)+" "+e._s(t.body?" - "+t.body:"")+" ")]),t.link?a("span",{staticClass:"animal-card__history-link"},[a("el-link",{attrs:{type:"primary",underline:!1},on:{click:function(a){return e.downloadFile(t)}}},[e._v("Скачать документ")])],1):e._e()])])})),1)],1),a("v-animal-card-edit",{attrs:{visible:e.editAnimalVisible,"initial-values":e.animal,"is-edit":""},on:{"update:visible":function(t){e.editAnimalVisible=t},done:e.updateAnimal}}),a("el-dialog",{staticClass:"animal-card__upload-dialog",attrs:{title:"Добавление документа",visible:e.uploadDocumentVisible,"append-to-body":"",width:"40%"},on:{"update:visible":function(t){e.uploadDocumentVisible=t}}},[a("el-form",{attrs:{"label-width":"120px",model:e.newDocumentForm}},[a("el-form-item",{attrs:{label:"Тип документа"}},[a("el-autocomplete",{attrs:{"fetch-suggestions":e.autocompleteTypes,placeholder:"Введите мероприятие"},model:{value:e.newDocumentForm.type,callback:function(t){e.$set(e.newDocumentForm,"type",t)},expression:"newDocumentForm.type"}})],1),a("el-form-item",{attrs:{label:"Дата"}},[a("el-date-picker",{attrs:{type:"date",placeholder:"Укажите дату","picker-options":e.datePickerOptions},model:{value:e.newDocumentForm.date,callback:function(t){e.$set(e.newDocumentForm,"date",t)},expression:"newDocumentForm.date"}})],1),a("el-form-item",{attrs:{label:"Комментарий"}},[a("el-input",{attrs:{placeholder:"Дополнительная информация"},model:{value:e.newDocumentForm.body,callback:function(t){e.$set(e.newDocumentForm,"body",t)},expression:"newDocumentForm.body"}})],1),a("el-form-item",{attrs:{label:"Файл"}},[a("el-upload",{ref:"uploadForm",attrs:{action:"https://jsonplaceholder.typicode.com/posts/","auto-upload":!1,limit:1}},[a("el-button",{attrs:{slot:"trigger",type:"primary"},slot:"trigger"},[e._v("Выбрать файл")])],1)],1)],1),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.uploadDocumentVisible=!1}}},[e._v("Отмена")]),a("el-button",{attrs:{type:"primary"},on:{click:e.addDocument}},[e._v("Прикрепить")])],1)],1)],1)},i=[],r=(a("4de4"),a("4160"),a("c975"),a("6eba"),a("0d03"),a("a9e3"),a("4fad"),a("159b"),a("4795"),a("3835")),o=a("5530"),n=a("43a6"),s=a("ebcc"),c=a("b374"),d=a("8744"),u=a("b8d8"),m={name:"AnimalCard",components:{VAnimalCardEdit:n["a"]},props:{id:{type:[String,Number],required:!0}},data:function(){return{editAnimalVisible:!1,uploadDocumentVisible:!1,datePickerOptions:{disabledDate:function(e){return e.getTime()>Date.now()}},newDocumentForm:{type:null,date:null,file:null,body:null},localAnimal:null,localLoading:!1,src:"/photos/1.jpg"}},computed:{animal:function(){return Object(o["a"])(Object(o["a"])({},this.$store.state[c["f"]].model),this.localAnimal)},loading:function(){return this.$store.state[c["f"]].loading},acts:function(){return this.$store.state[d["b"]].model.acts},actsLoading:function(){return this.$store.state[d["b"]].loading},typeOptions:function(){return u.documentTypes},animalFields:function(){var e={animal_type:"Тип",shelter:"Приют",arrivalDate:"Дата поступления",male:"Пол",animal_breed:"Порода",color:"Окрас",fur:"Шерсть",tail:"Хвост",ears:"Уши",idcard:"ID карточки",size:"Размер",age:"Возраст",special_signs:"Специальные отметки",nickname:"Кличка",weight:"Вес",ready:"Готовность к социализации",idmark:"Идентификационная метка",character:"Характер",veterinarian:"ФИО Ветеринара",cell:"Клетка",sterilized:"Стерелизовано"},t=[];return Object.entries(this.animal).forEach((function(a){var l=Object(r["a"])(a,2),i=l[0],o=l[1],n=e[i];if(n){var s=o;"ready"===i&&(s=o?"Да":"Нет"),"male"===i&&(s=o?"Мальчик":"Девочка"),"animal_type"===i&&(s=1===o?"Кошка":"Собака"),t.push({key:n,value:s})}})),t}},created:function(){this.$store.dispatch(c["d"],this.id),this.$store.commit(s["f"],{name:d["b"],model:{}}),this.$store.dispatch(d["a"],this.id)},methods:{downloadFile:function(e){console.log("downloading",e)},addDocument:function(){var e=this;this.uploadDocumentVisible=!1;var t=this.newDocumentForm,a=t.type,l=t.date,i=t.body;this.$store.dispatch(c["a"],{animalId:this.id,title:a,date:l,doc:"file.txt",body:i}).then((function(){e.$store.dispatch(d["a"],e.id)}))},goBack:function(){this.$router.push({name:"AnimalsDashboard"})},exportDoc:function(){this.$store.dispatch(c["c"],this.id)},updateAnimal:function(e){var t=this;this.localLoading=!0,this.editAnimalVisible=!1,setTimeout((function(){t.localAnimal=Object(o["a"])({},e),t.$notify({title:"Карточка обновлена",message:"Данные карточки успешно изменены",type:"success"}),t.localLoading=!1}),1e3)},createFilter:function(e){return function(t){return 0===t.value.toLowerCase().indexOf(e.toLowerCase())}},autocompleteTypes:function(e,t){var a=u.eventTypes,l=e?a.filter(this.createFilter(e)):a;t(l)}}},f=m,p=(a("4b57"),a("2877")),b=Object(p["a"])(f,l,i,!1,null,null,null);t["default"]=b.exports},"6eba":function(e,t,a){var l=a("23e7");l({target:"Date",stat:!0},{now:function(){return(new Date).getTime()}})},7156:function(e,t,a){var l=a("861d"),i=a("d2bb");e.exports=function(e,t,a){var r,o;return i&&"function"==typeof(r=t.constructor)&&r!==a&&l(o=r.prototype)&&o!==a.prototype&&i(e,o),e}},a9e3:function(e,t,a){"use strict";var l=a("83ab"),i=a("da84"),r=a("94ca"),o=a("6eeb"),n=a("5135"),s=a("c6b6"),c=a("7156"),d=a("c04e"),u=a("d039"),m=a("7c73"),f=a("241c").f,p=a("06cf").f,b=a("9bf2").f,h=a("58a8").trim,v="Number",y=i[v],_=y.prototype,g=s(m(_))==v,k=function(e){var t,a,l,i,r,o,n,s,c=d(e,!1);if("string"==typeof c&&c.length>2)if(c=h(c),t=c.charCodeAt(0),43===t||45===t){if(a=c.charCodeAt(2),88===a||120===a)return NaN}else if(48===t){switch(c.charCodeAt(1)){case 66:case 98:l=2,i=49;break;case 79:case 111:l=8,i=55;break;default:return+c}for(r=c.slice(2),o=r.length,n=0;n<o;n++)if(s=r.charCodeAt(n),s<48||s>i)return NaN;return parseInt(r,l)}return+c};if(r(v,!y(" 0o1")||!y("0b1")||y("+0x1"))){for(var w,x=function(e){var t=arguments.length<1?0:e,a=this;return a instanceof x&&(g?u((function(){_.valueOf.call(a)})):s(a)!=v)?c(new y(k(t)),a,x):k(t)},$=l?f(y):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),O=0;$.length>O;O++)n(y,w=$[O])&&!n(x,w)&&b(x,w,p(y,w));x.prototype=_,_.constructor=x,o(i,v,x)}},b8d8:function(e){e.exports=JSON.parse('{"documentTypes":[{"label":"Акт отлова","value":"1"},{"label":"Акт осмотра","value":"2"},{"label":"Акт приема-передачи","value":"3"}],"animalCategories":[{"value":1,"label":"Собака"},{"value":2,"label":"Кошка"}],"sexOptions":[{"value":"male","label":"Мальчик","icon":"el-icon-male"},{"value":"female","label":"Девочка","icon":"el-icon-female"}],"ageOptions":[{"value":1,"label":"Молодые ( < 2 лет )"},{"value":2,"label":"Взрослые ( 2-7 лет )"},{"value":3,"label":"Пожелые ( > 7 лет )"}],"sizeOptions":[{"value":"small","label":"Малый"},{"value":"medium","label":"Средний"},{"value":"large","label":"Крупный"}],"requestStatuses":[{"value":"new","label":"Новая"},{"value":"pending","label":"В рассмотрении"},{"value":"approved","label":"Одобрена"},{"value":"canceled","label":"Отклонено"}],"eventTypes":[{"value":"Вакцинация"},{"value":"Чипирование"},{"value":"Обработка от эндопаразитов"},{"value":"Обработка от эктопаразитов"},{"value":"Стерилизация"},{"value":"Акт осмотра"},{"value":"Акт отлова"},{"value":"Акт приема-передачи"}],"exitTypes":["Передача владельцам","Смерть"],"shelters":[{"id":1,"global_id":1699129,"name":"Приют для бродячих животных № 1","adm_area":"Восточный административный округ","district":"район Вешняки","address":"город Москва, Рассветная аллея, дом 10","phone":"(909) 918-59-23","chief_name":"Дружинин Алексей Михайлович"},{"id":2,"global_id":1699130,"name":"Приют для бродячих животных № 4","adm_area":"Зеленоградский административный округ","district":"район Матушкино","address":"город Москва, город Зеленоград, Фирсановское шоссе, владение 5А","phone":"(909) 918-59-24","chief_name":"Игнатов Алексей Васильевич"},{"id":3,"global_id":61896897,"name":"Приют для безнадзорных животных","adm_area":"Западный административный округ","district":"район Солнцево","address":"город Москва, Родниковая улица, дом 22, строение 1","phone":"(495) 783-26-04","chief_name":"Архипова Е П"},{"id":4,"global_id":167604457,"name":"Приют для содержания безнадзорных и бесхозяйных животных № 12 Юго-Восточного административного округа","adm_area":"Юго-Восточный административный округ","district":"район Некрасовка","address":"город Москва, 2-я Вольская улица, дом 17А, строение 3","phone":"(909) 918-59-23","chief_name":"Тушов Денис Владимирович"},{"id":5,"global_id":1699129,"name":"Приют для бродячих животных № 1","adm_area":"Восточный административный округ","district":"район Вешняки","address":"город Москва, Рассветная аллея, дом 10","phone":"(909) 918-59-23","chief_name":"Дружинин Алексей Михайлович"},{"id":6,"global_id":1699130,"name":"Приют для бродячих животных № 4","adm_area":"Зеленоградский административный округ","district":"район Матушкино","address":"город Москва, город Зеленоград, Фирсановское шоссе, владение 5А","phone":"(909) 918-59-24","chief_name":"Игнатов Алексей Васильевич"},{"id":7,"global_id":61896897,"name":"Приют для безнадзорных животных","adm_area":"Западный административный округ","district":"район Солнцево","address":"город Москва, Родниковая улица, дом 22, строение 1","phone":"(495) 783-26-04","chief_name":"Архипова Е П"},{"id":8,"global_id":167604457,"name":"Приют для содержания безнадзорных и бесхозяйных животных № 12 Юго-Восточного административного округа","adm_area":"Юго-Восточный административный округ","district":"район Некрасовка","address":"город Москва, 2-я Вольская улица, дом 17А, строение 3","phone":"(909) 918-59-23","chief_name":"Тушов Денис Владимирович"}]}')},c975:function(e,t,a){"use strict";var l=a("23e7"),i=a("4d64").indexOf,r=a("a640"),o=a("ae40"),n=[].indexOf,s=!!n&&1/[1].indexOf(1,-0)<0,c=r("indexOf"),d=o("indexOf",{ACCESSORS:!0,1:0});l({target:"Array",proto:!0,forced:s||!c||!d},{indexOf:function(e){return s?n.apply(this,arguments)||0:i(this,e,arguments.length>1?arguments[1]:void 0)}})},d12e:function(e,t,a){"use strict";a("0059")}}]);
//# sourceMappingURL=animal-card.93906d02.js.map