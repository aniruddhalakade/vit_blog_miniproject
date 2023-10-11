import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';


export default function CreatePost(){
    return(
        <form>
            <input type="title" placeholder='{Title}' />
            <input type="summary" placeholder='{Summary}' />
            <input type="file"/>
            <input type="tags" placeholder="Enter tags" />
            <ReactQuill className="quil" />
            <button style={{marginTop:'5px'}}>CreatePost</button>
        </form>
    );
}