let blur_reg = document.getElementById("reg");
let blur_login = document.getElementById("login");
let blur_reg1 = document.getElementById("reg1");
let blur_login1= document.getElementById("login1");
let login_ism = document.getElementById("ism");
let login_parol = document.getElementById("parol");
let id_save = 0;
let list_reg = document.getElementsByClassName("list_reg")[0];
let nav_name = document.getElementById("name");

let new_ism = document.getElementById('new_ism');
let new_fam = document.getElementById('new_fam');
let new_parol = document.getElementById('new_parol');
let new_manzil = document.getElementById('we');
let new_tel = document.getElementById('new_tel');
let new_hisob = document.getElementById('new_hisob');
let new_balans = document.getElementById('new_balans');


// main.js bu javascript
// index.html bosh sahifa
// style.css bu dizaynini otadi







function regis () {
   blur_reg.display = "none";
   blur_reg1.display = "none";
   blur_login.style.zIndex = "5";
   blur_reg.style.zIndex = "-5";

   
}

function yuqol() {
   blur_login.display = "none";
   blur_login1.display = "none";
   blur_reg.display = "none";
   blur_reg1.display = "none";
   blur_login.style.zIndex = "-11";
   blur_reg.style.zIndex = "-11";
   blur_login1.style.zIndex = "-10";
   blur_reg1.style.zIndex = "-10";
}



function login () {
   blur_login.display = "none";
   blur_login1.display = "none";
   blur_login.style.zIndex = "-5";
   blur_reg.style.zIndex = "5";
   
}

function kir() {
   state.posts.forEach((post, index) => {
   if (post.ism == login_ism.value  &&  parseInt(post.parol) == login_parol.value) {
      yuqol();
      nav_name.innerHTML = `${post.ism + " " + post.familiya}ning ma'lumotlari`;
      malumot(post);
   }
   }
   );
}

let heyt = document.getElementsByClassName("heyt");

function malumot(post) {
   heyt[0].innerHTML = `Ism: ${post.ism}`;
   heyt[1].innerHTML = `Familiya: ${post.familiya}`;
   heyt[2].innerHTML = `Manzil: ${post.manzil}`;
   heyt[3].innerHTML = `Tel: ${post.tel}`;
   heyt[4].innerHTML = `Hisob Raqami: ${post.hisob_raqam}`;
   heyt[5].innerHTML = `Balans: ${post.balans}`;
   heyt[6].innerHTML = `Istemolchi Turi: ${post.joy}`;
   list_reg.innerHTML = '';
   let sum = '';
   state.posts.forEach((post1, index) => {
         sum += `<p>${index+1}.${post1.ism} ${post1.familiya}</p>`;
   })
   list_reg.innerHTML = sum;
   
}


async function reg2() {
      let new_joy = document.querySelector( 'input[name="res"]:checked');
      state.newPost.balans = new_balans.value;
      state.newPost.familiya = new_fam.value;
      state.newPost.hisob_raqam = new_hisob.value;
      state.newPost.ism = new_ism.value;
      state.newPost.manzil = new_manzil.value;
      state.newPost.joy = new_joy.value;
      state.newPost.parol = new_parol.value;
      state.newPost.tel = new_tel.value;
      
      await createPostRequest();
      regis(); 
      cleanData();


}






const state = {
      posts: [],
      newPost: {

         familiya: "",
         hisob_raqam: "",
         ism: "",
         joy: "",
         manzil: "",
         parol: "",
         tel: "",
         balans: ""
      }
      
   }

function createPostRequest() {
   return fetch('https://63735b41348e9472990a19e3.mockapi.io/api/v1/spis', {
      method: 'POST',
      body: JSON.stringify(state.newPost),
      headers: {
         "Content-type": "application/json; charset=UTF-8"
      }
   })
   .then((res) => res.json())
   .then((post) => state.posts.push(post))
}



function getPostsRequest() {
      return fetch('https://63735b41348e9472990a19e3.mockapi.io/api/v1/spis', {
         method: 'GET',
         headers: {
            "Content-type": "application/json; charset=UTF-8"
         }
      })
      .then((res) => res.json())
      .then((posts) => state.posts = state.posts.concat(posts))
   }


const cleanData = () => {
   state.newPost.balans = '';   
   state.newPost.familiya = '';
   state.newPost.hisob_raqam = '';
   state.newPost.ism = '';
   state.newPost.joy = '';
   state.newPost.manzil = '';
   state.newPost.parol = '';
   state.newPost.tel = '';
}





