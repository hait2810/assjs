import axios from "axios";
import { add } from "../api/products";

const AddProduct = {
  render() {
      
        return `
        <div class="form-product w-[1600px]">
        <div class="input w-[1170px] mx-auto my-[20px]">
          <h2 class="font-bold text-[30px] text-green-800">THÊM SẢN PHẨM</h2>
          <form action="" id="form-add">
              <table border="1" >
             
                  <tr class="h-[40px]">
                    <td ><label class="font-bold text-[20px] text-green-800" for="">Tên Sản Phẩm : </label></td>
                    <td > <input type="text"  class="border-[1px]" name="" id="name-product"></td>
                  </tr>
               
            
                <tr class="h-[40px]">
                  <td><label class="font-bold text-[20px] text-green-800" for="">Giá : </label></td>
                  <td> <input type="text"  class="border-[1px]" name="" id="price-product"></td>
                </tr>
               
              
                <tr class="h-[40px]">
                  <td><label class="font-bold text-[20px] text-green-800" for="">Ảnh : </label></td>
                  <td> <input type="file"  class="border-[1px]" name="" id="img-product"></td>
                  <td> <img src="http://thelongfortgroup.com/public/img/default/no-image-icon.jpg" id="preview" class="w-[80px] translate-y-[10px]" alt="Anh xem truoc"> </img> </td>
                </tr>
               
              
                <tr class="h-[50px]">
                  <td><label class="font-bold text-[20px] text-green-800" for="">Mô tả : </label></td>
                  <td> <textarea name="" class="border-[1px]" id="des-product" cols="38" rows="2"></textarea> </td>
                </tr>
                <tr class="h-[50px]">
                  <td><label class="font-bold text-[20px] text-green-800" for="">Danh mục : </label></td>
                  <td> <select class="font-bold text-[20px] text-green-800 border-[2px] border-solid border-green" name="" id="category">
                  
                  </select> </td>
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
    
    afterRender() {
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
      
      const formadd = document.querySelector("#form-add");
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
                add({
          
          img: imgLink ? imgLink : "",
            name: document.querySelector("#name-product").value,
            price: document.querySelector("#price-product").value,
            des: document.querySelector("#des-product").value,
            categoryId: document.querySelector("#category").value,
           
        });
      })
    // formadd.validate({
    //   rules: {
    //     "name-product": {
    //       required: true,
    //       minlength: 5
    //     },
    //   },
    //   messages: {
    //     "name-product": {
    //       required: "Khong duoc de trong",
    //       minlength: "Toi da 5 ki tu"
    //     },
    //   },
    //   submitHandler: function(){
    //     async function AddProduct(){
    //       const file = imgproduct.files[0];
    //       if(file){
    //         const formData = FormData();
    //          formData.append('file',file);
    //          formData.append('upload_preset', CLOUDINARY_PRESET);
    //          const {data} = await axios.post(CLOUDINARY_API,formData,{
    //            headers: {
    //              "Content-Type": "application/form-data"
    //            }
    //          });
    //          imgLink = data.url;
    //       }
    //         add({
          
    //       img: imgLink ? imgLink : "",
    //         name: document.querySelector("#name-product").value,
    //         price: document.querySelector("#price-product").value,
    //         des: document.querySelector("#des-product").value,
    //         categoryId: document.querySelector("#category").value,
           
    //     });
    //     }
    //     AddProduct();
    //   }
    // })
    },
};
export default AddProduct;