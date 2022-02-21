import { getAll, remove } from "../api/products";
import Header from "../components/header";
import { reRender } from "../utils/reRender";
const News = {
 async render() {
  const { data } = await getAll();
        return /* html */ `
        ${await Header.render()}
        <div class="w-[1600px] bg-pink-100">
        <div class="news w-[1170px] mx-auto">
          <table class="border-collapse w-[100%]">
            <tr class="bg-[#04AA6D]">
              <th class="border-[1px] border-solid border-[#ddd] p-[8px]">ID</th>
              <th class="border-[1px] border-solid border-[#ddd] p-[8px]">Tên sản phẩm</th>
              <th class="border-[1px] border-solid border-[#ddd] p-[8px]">Giá</th>
              <th class="border-[1px] border-solid border-[#ddd] p-[8px]">Ảnh</th>
              <th class="border-[1px] border-solid border-[#ddd] p-[8px]">Mô tả</th>
              <th class="border-[1px] border-solid border-[#ddd] p-[8px]">Sửa</th>
              <th class="border-[1px] border-solid border-[#ddd] p-[8px]">Xoá</th>
            </tr>
           
              ${data.map((post) => `
              <tr class="hover:bg-pink-600">
              <td class="border-[1px] border-solid border-[#ddd] w-[100px] p-[8px]">${post.id}</td>
              <td class="border-[1px] border-solid border-[#ddd] p-[8px] w-[100px]">${post.name}</td>
              <td class="border-[1px] border-solid border-[#ddd] w-[100px] p-[8px]">${post.price} VNĐ</td>
              <td class="border-[1px] border-solid border-[#ddd] p-[8px] w-[100px]"><img src="${post.img}" class="w-[100%] h-[50px] mx-auto" alt=""></td>
              <td class=" text-[12px] border-[1px] border-solid border-[#ddd] p-[8px]">${post.des}</td>
              <td class="border-[1px] border-solid border-[#ddd] w-[100px] p-[8px] text-center font-bold"><a href="/admin/news/${post.id}/edit">Sửa</a></td>
              <td class="border-[1px] border-solid border-[#ddd] w-[100px] p-[8px] text-center font-bold"><button data-id="${post.id}" class="btn_delete font-bold" type="submit">Xoá</button></td>
              </tr>
              `).join("")}
           
        
          </table>
        </div>
      </div>
        `;
    },
    afterRender() {
     // console.log(document.querySelector(".btn_delete"));
      const btns = document.querySelectorAll(".btn_delete");
     
      btns.forEach(ButtonElement => {
       
        const id = ButtonElement.dataset.id;
        ButtonElement.addEventListener('click',function(){
            const confirm = window.confirm("Bạn có muốn xoá hay không?");
            if(confirm){
              remove(id).then(() => console.log('Bạn đã xoá thành công'))
              .then(() => reRender(News,"#app"));
            }
          })
      });
    }
};
export default News;