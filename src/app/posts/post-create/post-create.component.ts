import { Component } from "@angular/core";

@Component({
    templateUrl: './post-create.component.html',
    selector: 'app-post-create',
    styleUrls:['./post-create.component.css']
})
export class PostCreatecomponent{
    newPost = '';
    enteredValue = ''
    onAddPost(){
        alert("Post added");
        this.newPost = this.enteredValue;
    }
}