import { add } from "../api/cate";
const AddCate = {
    render() {
        return `
        <div class="form-product w-[1600px]">
        <div class="input w-[1170px] mx-auto my-[20px]">
          <h2 class="font-bold text-[30px] text-green-800">THÊM DANH MỤC</h2>
          <form action="" id="form-add-cate">
              <table border="1" >
             
                  <tr class="h-[40px]">
                    <td ><label class="font-bold text-[20px] text-green-800" for="">Tên danh mục : </label></td>
                    <td > <input type="text"  class="border-[1px]" name="" id="name-cate"></td>
                    <td> <span id="result" class="text-red"> </span> </td>
                  </tr>
                <tr class="h-[50px]">
                  
                  <td><button class="bg-green-500 p-[8px] rounded-[8px] text-white">Thêm sản phẩm</button></td>
                </tr>
              
              </table>
            </form>
        </div>
      </div>
        `;
    },
    afterRender(){
        const formcate = document.querySelector("#form-add-cate");
        formcate.addEventListener("submit", (e) => {
            e.preventDefault();
            add({
                name: document.querySelector("#name-cate").value
            }).then(() => {
                document.querySelector("#result").innerHTML = "Thành công";
            }).catch(() => {
                document.querySelector("#result").innerHTML = "Thất bại";
            })
        })
    }
}
export default AddCate;