const tabs = document.getElementById('tabs');
const content = document.querySelectorAll('.content');

console.log(tabs.children);

function changeClass (el, tab_obj){
   for (let i = 0; i < tab_obj.children.length;i++) {
    tab_obj.children[i].classList.remove('active'); 
   }
   el.classList.add('active');
}

function submitTag (e,tab_obj,content_obj) {
  const currTab = e.target.dataset.btn; // data-btn="1"
  changeClass(e.target,tab_obj);
  for (let i = 0; i < content_obj.length;i++){
    content_obj[i].classList.remove('active');

     if (content_obj[i].dataset.content === currTab) {
      content_obj[i].classList.add('active');
     }
  }
}

tabs.addEventListener('click', (e) => submitTag(e,tabs,content))

const subTabs = document.getElementById('tabs-content-3');
const subContent = document.querySelectorAll('.content-3');

console.log(subTabs.children);

subTabs.addEventListener('click',(e) => submitTag(e,subTabs,subContent))