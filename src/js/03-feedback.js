//добавь в проект и используй библиотеку lodash.throttle.
import { throttle } from "lodash";


const form = document.querySelector('.feedback-form');

// Пусть ключом для хранилища будет строка "feedback-form-state".
const KEY_OF_LOCALSTORAGE = "feedback-form-state";
updateHtmlDataInput();

    // Отслеживай на форме событие input
    //обновляйя хранилище не чаще чем раз в 500 миллисекунд.
form.addEventListener('input', throttle(onSaveDataInLocalStorage, 500));
form.addEventListener("submit", onDataFormSubmit);


//записывай в локальное хранилище объект с полями email и message
function onSaveDataInLocalStorage(e) {
     let storage = localStorage.getItem(KEY_OF_LOCALSTORAGE);
     storage = storage ? JSON.parse(storage) : {};
    
    storage[e.target.name] = e.target.value;
    localStorage.setItem(KEY_OF_LOCALSTORAGE, JSON.stringify(storage));
}
    

    // При загрузке страницы проверяй состояние хранилища
function updateHtmlDataInput() {

      let storage = localStorage.getItem(KEY_OF_LOCALSTORAGE);

    //если там есть сохраненные данные, заполняй ими поля формы.
  if (storage) {
      storage = JSON.parse(storage);
           
      for (const key in storage) {
         form.elements[key].value = storage[key]
      };
    };
};


    //При сабмите формы
function onDataFormSubmit(e) {
    e.preventDefault();

    // //выводи объект!!! с полями email, message и текущими их значениями в консоль.
    let isLocalStorage = localStorage.getItem(KEY_OF_LOCALSTORAGE);
    console.log(isLocalStorage = isLocalStorage ? JSON.parse(isLocalStorage) : {});
  
    // очищай поля формы
    form.reset();

    // очищай хранилище
    localStorage.removeItem(KEY_OF_LOCALSTORAGE);

};








