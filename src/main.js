import Navigo from 'navigo';
import HomePage from './pages/home';


const router = new Navigo("/", { linksSelector: "a" });
const print = (content) => {
   document.getElementById("app").innerHTML = content;
};

router.on({
   "/": () => {
      print(HomePage.render());
   }
});
router.notFound(() => print("Page Not Found"));

router.resolve();