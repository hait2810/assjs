
import Header from "../components/header";
import axios from 'axios';
import { search } from "../api/seach";

const searchU = {
  async render(input) {
    
    const {data} = await search(input)
    return /* html */ `
    ${await Header.render()}
       <section class="banner w-[1600px]">
       <img src="./images/banner/-FreshFood -.jpg" class="w-[100%]" alt="" />
     </section>
  <div class="main bg-[#80b435] w-[1600px]">
       <h1
         class="title uppercase text-center text-white text-[20px] pt-[10px] font-normal"
       >
        thực phẩm mới nhất
       </h1>
      
       <p class="text-center text-[25px] text-white">
         <i class="fab fa-pagelines"></i>
       </p>
       <div class="products w-[1170px] mx-auto flex flex-row flex-wrap">
         <!-- start product -->
        
          
          ${data.map((post)=> `
          <div
   class="product w-[272px] h-[416px] bg-white mr-[20px] inline-block mt-[38px] mb-[40px]"
        >
          <div class="logo">
            <a href="/?#/news/${post.id}" > <img class="w-[100%] h-[250px] pb-[50px]" src="${post.img}" alt="" /> </a>
          </div>

          <div
            class="content-product text-center py-[10px] border-solid border-[#b7b7b7] border-t-2"
         >
            <h1 class="title font-bold text-[20px]">${post.name}</h1>
           <p class="price text-[15px]">${post.price} VNĐ</p>
           <form action="">
         <button type="button" class="text-[14px]">
               Thêm vào giỏ hàng
              </button>
            </form>
          </div>
        </div>
          `).join("")}
          
         <!-- end product -->
       </div>
     </div>
    `;
  },
  afterRender(){
    Header.afterRender();
  }
}

export default searchU;