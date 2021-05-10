import {observable} from 'mobx';

class Post {

    static id = 0;
    
    constructor(title, date, body = '', tags = []){
        this.id = Post.id++;
        this.title = title;
        this.date = date;
        this.body = body;
        this.tags = tags;
    }

    static getId() {
        return this.id;
    }
}

export let posts = observable(new Map([
    [Post.getId(), new Post('Elixir vs Python', 'April 5 2021', '', ['Progamming', 'py', 'ex'])],
    [Post.getId(), new Post('Golang ', 'June 15 2021', '',['Progamming', 'go'])],
    [Post.getId(), new Post('JS and React', 'April 5 2021', '',['Progamming', 'JavaScript', 'js'])],
    [Post.getId(), new Post('Flutter vs React', 'April 5 2021', '',['Progamming', 'JavaScript', 'Dart'])],
]))

export default Post;