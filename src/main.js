import Navigo from 'navigo';
import HomePage from './pages/home';
import SignIn from './pages/signin';
import SignUp from './pages/signup';
import News from './admin/news';
import DashBoard from './admin/dashboard';
import AddProduct from './admin/addproduct';
import detailnew from './pages/detail';
import EditP from './admin/editproduct';
import AddCate from './admin/addcate';
import showCate from './admin/showcate';
import EditC from './admin/editcate';
import Cart from './pages/cart';
import showCart from './admin/showcart';
import spCate from './pages/category';
import searchU from './pages/serach';
const router = new Navigo("/", { linksSelector: "a", hash:true });
const print = async (content, id) => {
   document.getElementById("app").innerHTML = await content.render(id);
   if(content.afterRender) content.afterRender(id);
};


router.on("/admin/*", () => {}, {
   before(done, match) {
     // do something
     if(localStorage.getItem('user')){
       const userId = JSON.parse(localStorage.getItem('user')).email;
       if(userId === "haibravex@gmail.com"){
           done();  
       } else {
           document.location.href="/";
       }
     } else{
         document.location.href="/";
     }

   }
 })
router.on({
   "/": () => {
      print(HomePage);
   },
   "/signin": () => {
      print(SignIn);
   },
   "/cart": () => {
      print(Cart);
   }, 
   "/signup": () => {
      print(SignUp);
   },
   "/admin/dashboard": () => {
      print(DashBoard);
   },
   "/admin/news": () => {
      print(News);
   },
   "/admin/news/add": () => {
      print(AddProduct);
   },
   "/news/:id": ({data}) => {
      print(detailnew, data.id);
   },
   "/admin/news/:id/edit": ({data}) => {
      print(EditP, data.id);
   },
   "/admin/addcate": () => {
      print(AddCate);
   },
   "/admin/showcate": () => {
      print(showCate);
   },
   "/admin/showcate/:id/edit" : ( {data} ) => {
      print(EditC, data.id)
   },
   "/admin/showcart": () => {
      print(showCart);
   },
   "/category/:id": ({data}) => {
      print(spCate, data.id);
   },
   "/search/:input": ({data}) => {
      print(searchU, data.input);
   }
  
});
router.notFound(() => print("Page Not Found"));

router.resolve();