import { reRender } from "../utils/reRender";
import { getAll } from "../api/cate";
const Header = {
  
async render() {
    const {data} = await getAll();
        return `
        <div class="bgxanh bg-[#80b435] w-[1600px]">
        <div class="header w-[1170px] mx-auto flex flex-row justify-between">
          <div class="logo my-[10px]">
            <img src="/images/logo/logo.png" alt="" />
          </div>
          <nav class="menu leading-[75px]">
            <ul>
              <li class="inline mx-[15px]">
                <a
                  class="uppercase text-white hover:border-b-2 border-solid border-white-600"
                  href="/"
                  >Trang chủ</a
                >
              </li>
              <li class="inline mx-[15px]">
                <a
                  class="uppercase text-white hover:border-b-2 border-solid border-white-600"
                  href="/#/signin"
                  >Đăng nhập</a
                >
              </li>
              <li class="inline mx-[15px] relative">
                <a
                  class="uppercase text-white hover:border-b-2 border-solid border-white-600"
                  href=""
                  >danh mục</a
                >
                <ul class="subnav  top-[235%] left-0 min-w-[100px] bg-green-100 shadow-2xl absolute">
                 ${data.map((cate) => `
                 <li class="leading-[30px] hover:bg-red-200"><a class="p-[10px]" href="/#/category/${cate.id}">${cate.name}</a></li>
     
                 `).join("")}
                </ul>
              </li>
              <li class="inline mx-[15px]">
                <a
                  class="uppercase text-white hover:border-b-2 border-solid border-white-600"
                  href=""
                  >liên hệ</a
                >
              </li>
              <li class="inline mx-[15px]">
                <a
                  class="uppercase text-white hover:border-b-2 border-solid border-white-600"
                  href=""
                  >Tin tức</a
                >
              </li>
            </ul>
          </nav>
          <div class="search py-[25px]">
            <form action="">
              <input
                type="text"
                class="rounded-[3px]"
                name=""
                placeholder="Bạn muốn tìm gì?"
                id=""
              />
              <button type="button">
                <i
                  class="fas fa-search rounded-[3px] bg-white translate-x-[-8px] pb-[3px] pt-[4.8px]"
                ></i>
              </button>
            </form>
           <div id="loga" class="accounts mt-[10px]"> 
           <span id="account" class="text-white"> </span>
          ${localStorage.getItem('user') ? ' <button id="logout" class="text-white"> Đăng xuất </button>' : ''}
           </div>
  
          </div>
        </div>
       
      </div>
        `;
    },
    afterRender(){
       const acc = document.querySelector("#account");
       const btnlogout = document.querySelector("#logout");
       acc.innerHTML = JSON.parse(localStorage.getItem('user')).email;
       btnlogout.addEventListener("click", function(){
         localStorage.removeItem('user');
         alert("Bạn đã đăng xuất thành công");
         document.location.href="/"
         reRender(Header,"#app")
       })

    }
}
export default Header;