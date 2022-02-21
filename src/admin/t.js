import { update } from '../../../api/posts';
import { get } from '../../../api/posts';

const AdminEditPost = {
    async render(id) {
        const { data } = await get(id);
        return `
            <form id="form-edit-post">
                <input type="text" value="${data.title}" id="title-post"/>
                <button>Cap nhat</button>
            </form>
        `
    },
    afterRender(id){
        const formEdit = document.querySelector('#form-edit-post');
        formEdit.addEventListener('submit', (e) => {
            e.preventDefault();
            update({
                id, 
                title: document.querySelector('#title-post').value,
            })
            .then((result) => console.log(result.data))
            .catch((error) => console.log(error))
        })
    }
};
export default AdminEditPost;