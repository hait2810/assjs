import { data } from "autoprefixer";
import axios from "axios";
import { get } from "../api/cate"
import { update } from "../api/cate";
import Header from "../components/header";
const EditC = {
  async render(id) {
        const { data }  = await get(id);
 
        return /* html */ `
        ${await Header.render()}
        <div class="form-product w-[1600px]">
        <div class="input w-[1170px] mx-auto my-[20px]">
          <h2 class="font-bold text-[30px] text-green-800">Sửa danh mục</h2>
          <form id="form-edit">
              <table  >
             
                  <tr class="h-[40px]">
                    <td ><label class="font-bold text-[20px] text-green-800" for="">Tên danh mục : </label></td>
                    <td > <input type="text"  class="border-[1px]" value="${data.name}" name="" id="name-cate"></td>
                  </tr>
               
               
         
            
                <tr class="h-[50px]">
                  
                  <td> <button class="bg-green-500 p-[8px] rounded-[8px] text-white">Lưu</button> </td>
                </tr>
              
              </table>
            </form>
            <h2 id="ketqua"> </h2>
        </div>
      </div>
        `;
    },
    afterRender (id) {
        const formedit = document.querySelector("#form-edit");
        formedit.addEventListener("submit", (e) => {
            e.preventDefault();
            update({
                name: document.querySelector("#name-cate").value,
                id: id,
            }).then(()=> {
                document.querySelector("#ketqua").innerHTML = "Thành công";
            }).catch((error) => {
                document.querySelector("#ketqua").innerHTML = error;
            })
        })
    }
};
export default EditC;