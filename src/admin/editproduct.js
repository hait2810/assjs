import { data } from "autoprefixer";
import axios from "axios";
import { get } from "../api/products"
import { update } from "../api/products";
import Header from "../components/header";
const EditP = {
  async render(id) {
        const { data }  = await get(id);
        console.log(data);
        return /* html */ `
        ${await Header.render()}
        <div class="form-product w-[1600px]">
        <div class="input w-[1170px] mx-auto my-[20px]">
          <h2 class="font-bold text-[30px] text-green-800">Sửa sản phẩm</h2>
          <form id="form-edit">
              <table  >
             
                  <tr class="h-[40px]">
                    <td ><label class="font-bold text-[20px] text-green-800" for="">Tên Sản Phẩm : </label></td>
                    <td > <input type="text"  class="border-[1px]" value="${data.name}" name="" id="name-product"></td>
                  </tr>
               
            
                <tr class="h-[40px]">
                  <td><label class="font-bold text-[20px] text-green-800" for="">Giá : </label></td>
                  <td> <input type="text"  class="border-[1px]" value="${data.price}" name="" id="price-product"></td>
                </tr>
               
              
                <tr class="h-[40px]">
                  <td><label class="font-bold text-[20px] text-green-800" for="">Ảnh : </label></td>
                  <td> <input type="file"  class="border-[1px]" name="" id="img-product"></td>
                  
                  <td> <img src="http://thelongfortgroup.com/public/img/default/no-image-icon.jpg" id="preview" class="w-[80px] translate-y-[10px]" alt="Anh xem truoc"> </img> </td>
                </tr>
               
              
                <tr class="h-[50px]">
                  <td><label class="font-bold text-[20px] text-green-800" for="">Mô tả : </label></td>
                  <td> <textarea name="" class="border-[1px]" id="des-product" cols="38" rows="2">${data.des}</textarea> </td>
                </tr>
                <tr class="h-[50px]">
                  <td><label class="font-bold text-[20px] text-green-800" for="">Danh mục : </label></td>
                  <td> <select class="font-bold text-[20px] text-green-800 border-[2px] border-solid border-green" name="" id="category">
                  
                  </select> </td>
                </tr>
                <tr class="h-[50px]">
                  
                  <td> <button class="bg-green-500 p-[8px] rounded-[8px] text-white">Lưu</button> </td>
                </tr>
              
              </table>
            </form>
        </div>
      </div>
        `;
    },
    afterRender(id) {
      var opt = {
        url: 'http://localhost:3001/categorys',
        responseTyoe: 'JSON'
      }
      axios(opt)
      .then(function(data){
       
        var showcate = "";
        data.data.forEach(function(cate){
          showcate += `
          <option value="${cate.id}">${cate.name}</option>
          `;
        })
        document.querySelector("#category").innerHTML = showcate;

      })
      
      const formadd = document.querySelector("#form-edit");
      const imgproduct = document.querySelector("#img-product");
      
      const preview = document.querySelector("#preview");
      const CLOUDINARY_API = "https://api.cloudinary.com/v1_1/hait-10/image/upload";
      const CLOUDINARY_PRESET = "assjshihi";
      let imgLink = "";
      imgproduct.addEventListener("change", async (e) => {
         preview.src = URL.createObjectURL(e.target.files[0]);
        
      });
     
      formadd.addEventListener('submit', async (e) => {
       
        e.preventDefault();
        const file = imgproduct.files[0];
        if(file){
                 const formData = new FormData();
                   formData.append('file',file);
                   formData.append('upload_preset', CLOUDINARY_PRESET);
                   const {data} = await axios.post(CLOUDINARY_API,formData,{
                     headers: {
                       "Content-Type": "application/form-data"
                     }
                   });
                  imgLink = data.url;
        }
        
                update({
          
          img: imgLink ? imgLink : "",
            name: document.querySelector("#name-product").value,
            price: document.querySelector("#price-product").value,
            des: document.querySelector("#des-product").value,
            categoryId: document.querySelector("#category").value,
            id: id,
           
        });
      })


     
   
     
     
    },
};
export default EditP;