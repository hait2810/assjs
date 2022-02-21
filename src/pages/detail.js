
import Header from "../components/header";
import { get } from "../api/products";
import { $ } from "../utils/selector";
import { addToCart } from "../utils/cart";
import toastr from "toastr";
import "toastr/build/toastr.min.css";

const detailnew = {
    
   async render(id){
        const { data } = await get(id);
        return `
        ${await Header.render()}
        <div class="content w-[1600px]">
          <div class="detail w-[1170px] mx-auto my-[30px]">
                <div class="product_detail flex justify-between">
                  <div class="logo_product w-[436px] h-[450px] rounded-[2%] border-[1px] border-green-500 border-solid ">
                    <img class="mx-auto w-[100%] h-[100%] p-[30px] rounded-[15%]" src="${data.img}" alt="">
                  </div>
                  <div class="heading w-[322px] ">
                    <div class="icon text-yellow-300 mb-[15px]">
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                    </div>
                    <h2 class="title font-bold text-[20px] mb-[5px]">
                      Cá hồi bắc âu
                    </h2>
                    <span class="id_product text-[11px] mb-[5px] block text-green-600">
                      Mã sản phẩm : HTI00${data.id}
                    </span>
                    <h3 class="price font-bold text-[16px] mb-[15px]">
                      ${data.price} VNĐ
                    </h3>
                    <p class="description border-[1px] border-green border-dashed text-justify p-[3px] text-[14px] mb-[15px] text-green-600">
                     ${data.des}
                    </p>
                    <form id="order"> 
                    <input class="border-[1px] border-solid border-green-300 p-[5px] mb-[10px]" type="number" id="quantity" placeholder="Số lượng"/>
                    <button id="btnAddToCart" class="bg-[#55a007] p-[10px] text-white">THÊM VÀO GIỎ HÀNG</button>
                    </form>
                  </div>
                  <div class="ships w-[328px]">
                      <div class="ship  border-[1px] border-solid border-green-500 p-[5px] text-justify mb-[10px]">
                        <p><i class="far fa-thumbs-up"></i> Cam kết giá tốt nhất Chúng tôi cam kết tới khách hàng những sản phẩm tốt nhất với mức thấp nhất</p>
                      </div>
                      <div class="ship border-[1px] border-solid border-green-500 p-[5px] text-justify mb-[10px]">
                        <p><i class="fas fa-shipping-fast"></i> Giao hàng toàn quốc Giao hàng tới 64 tỉnh thành với giá cước hợp lý nhất. Đảm bảo thời gian tốt nhất.</p>
                      </div>
                      <div class="ship border-[1px] border-solid border-green-500 p-[5px] text-justify mb-[10px]">
                        <p><i class="fas fa-clock"></i> Phục vụ 24/24 Giao hàng tới 64 tỉnh thành với giá cước hợp lý nhất. Thời gian đối với chúng tôi là vàng.</p>
                      </div>
                  </div>
                </div>
          </div>
      </div>
        `;
    },
    afterRender(id){
      $('#btnAddToCart').addEventListener('click', async function(){
        const {data} = await get(id);
        addToCart({...data, quantity: +$("#quantity").value}, () => {
          toastr.success("Thêm thành công");
          document.location.href="/?#/cart";
          
        })
      })

    }
}
export default detailnew;