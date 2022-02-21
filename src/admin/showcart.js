import { getAll } from "../api/cart";
import Header from "../components/header";
import axios from "axios";
const showCart = {
    async render () {
        const {data} = await getAll();
        console.log(data.id);
        return `
        ${await Header.render()}
        <div class="w-[1600px] bg-pink-100">
        <div class="news w-[1170px] mx-auto">
          <table class="border-collapse w-[100%]">
            <tr class="bg-[#04AA6D]">
              <th class="border-[1px] border-solid border-[#ddd] p-[8px]">ID</th>

              <th class="border-[1px] border-solid border-[#ddd] p-[8px]">Chi tiết</th>
            </tr>
           
            
              ${data.map((item) => `
              
              <tr class="hover:bg-pink-600">
              <td class="border-[1px] border-solid border-[#ddd] w-[100px] p-[8px]">${item.id}</td>
            
              <td class="border-[1px] border-solid border-[#ddd] w-[100px] p-[8px] text-center font-bold"><a href="/admin/news/edit">Bấm vào để xem chi tiết</a></td>
              
              </tr>
              `).join("")}
              
           
        
          </table>
        </div>
      </div>
        `;
    },
    afterRender() {
        const show = document.querySelector("#hackvg");
        const opt = {
            url: 'http://localhost:3001/carts',
            responseType: "json",
        }
        axios(opt)
        .then(function(data){
            data.data.forEach(element => {
                console.log(element.hang);
            });
        })
    }
}
export default showCart;