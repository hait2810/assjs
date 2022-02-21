import Header from "../components/header";
import { decreaseQty, increaseQty, removeItemInCart } from "../utils/cart";
import toastr from "toastr";
import "toastr/build/toastr.min.css";
import { add } from "../api/cart";
import { $ } from "../utils/selector";

import { reRender } from "../utils/reRender";
const Cart = {
   async render() {
       let cart = [];
       if(localStorage.getItem('cart')){
           cart = JSON.parse(localStorage.getItem('cart'));
       }
        return `
        ${await Header.render()}
        <main class="w-[1600px] mt-[30px]">
        <div class="w-[1170px] mx-auto">
            <table class="w-[100%] ">
              <tr class="bg-[#04AA6D]">
                <th class="border-[1px] border-solid border-[#ddd] p-[8px]">Tên sản phẩm</th>
                <th class="border-[1px] border-solid border-[#ddd] p-[8px]">Số lượng</th>
                <th class="border-[1px] border-solid border-[#ddd] p-[8px]">Giá</th>
                <th class="border-[1px] border-solid border-[#ddd] p-[8px]">Tăng </th>
                <th class="border-[1px] border-solid border-[#ddd] p-[8px]">Giảm</th> 
                <th class="border-[1px] border-solid border-[#ddd] p-[8px]">Xoá</th>
              </tr>
                ${cart.length > 0 ? cart.map(item => `
                <tr class="hover:bg-yellow-600">
                <td class="border-[1px] border-solid border-[#ddd] w-[100px] p-[8px]">${item.name}</td>
                <td class="border-[1px] border-solid border-[#ddd] p-[8px] w-[100px]"><input type="number" value="${item.quantity}" class="border-[1px] border-solid mb-[5px] border-gray-500 border-solid border-gray-500 mb-[5px] w-[100%] rounded-[2px] p-[3px]" name="" value="" id=""></td>
                <td class="border-[1px] border-solid border-[#ddd] w-[100px] p-[8px]"> ${(item.quantity * item.price)} VNĐ</td>
                <td class="border-[1px] border-solid border-[#ddd] w-[100px] p-[8px] text-center  bg-blue-300"><button data-id="${item.id}" class="btn btn-increase font-bold">Tăng</button></td>
                <td class="border-[1px] border-solid border-[#ddd] w-[100px] p-[8px] text-center  bg-pink-300"><button data-id="${item.id}" class="btn btn-decrease font-bold">Giảm</button></td>
                <td class="border-[1px] border-solid border-[#ddd] w-[100px] p-[8px] text-center  bg-green-300"><button data-id="${item.id}" class="btn btn-remove font-bold">Xoá</button></td>
                </tr>
                <tr >
               
                  </tr>
                `).join("") : `
                 <tr> 
                 <td colspan="4"> No record </td>
                 </tr>
                
                `}
                <form>

                <td class="border-[1px] border-solid border-[#ddd] w-[100px] p-[8px]">Thành tiền: <span class="text-[14px]" id="tongtien"> </span></td>
              <td class="border-[1px] border-solid border-[#ddd] p-[8px] w-[100px]"><input class="border-[1px] border-solid border-gray-500 mb-[5px] w-[100%] rounded-[2px] p-[3px]" type="text" name="" id="address" placeholder="Địa chỉ">
              <br>
            <input type="text" class="border-[1px] border-solid mb-[5px] border-gray-500 border-solid border-gray-500 mb-[5px] w-[100%] rounded-[2px] p-[3px]" name="" id="phone" placeholder="Số điện thoại"></td>
              <td class="border-[1px] border-solid border-[#ddd] w-[100px] p-[8px]"><button id="submitg" class="bg-blue-400 p-[5px] w-[50%] mb-[10px] rounded-[5px]">Đặt hàng</button>
                <button class=" bg-yellow-500 p-[5px] w-[100%] rounded-[5px]"><a href="/">Tiếp tục mua hàng</a></button></td>

              </form>
            </table>


        </div>
    </main>
        `;
    },
    afterRender(){
        $('.btn').forEach(btn => {
            const id = btn.dataset.id;
            btn.addEventListener('click', function(){
                console.log(id);
                if(btn.classList.contains('btn-increase')){
                    increaseQty(id, () => reRender(Cart, "#app"));
                }else if(btn.classList.contains('btn-decrease')){
                    decreaseQty(id, () => reRender(Cart, "#app"));
                }else{
                    removeItemInCart(id, () => {
                        reRender(Cart, "#app");
                        toastr.success("Bạn đã xoá thành công");
                    })
                }
            })
            
            
        })
        
        //     var pricex = [];
        //     var sum = 0;
        //  var price = JSON.parse(localStorage.getItem('cart'));
        //  price.map(function(item){    
        //     pricex.push(item.price);    
        //     var lve = pricex.map(parseFloat);
        //     sum+=lve;
        //     console.log(lve);


        //  })
        var pricex = [];
       var sum = 0;
       var price = JSON.parse(localStorage.getItem('cart'));
       for(let i = 0; i<price.length; i++){
           
           pricex.push(price[i].price)
           
           var nono = pricex.map(parseFloat);
           sum+=nono[i];
          
           
       }
       document.querySelector("#tongtien").innerHTML = sum + " VNĐ";
       
      

       var test = JSON.parse(localStorage.getItem('cart'));
       console.log(test);
        const order = document.querySelector("#submitg");
        order.addEventListener("click",  (e) => {
            e.preventDefault();
                add(
                  {
                    'hang':test,
                    address :document.querySelector("#address").value,
                    phone:document.querySelector("#phone").value
                  }
                ).then(() => {
                  alert("Thành công");
                  localStorage.removeItem('cart');
                  document.location.href="/"
                })
        })   
    }
}
export default Cart;