import {action, observable} from 'mobx';

class Post {

    static id = 0;
    static selectedId = 0;
    
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

export let getSelectedId = action(() => { return Post.selectedId })

export let setSelectedId = action((newId) => { Post.selectedId = newId })

const bodyExample = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In mollis sagittis sem ac porta. Sed commodo ligula vitae mollis tristique.
                    Maecenas egestas semper mauris. Duis tempus blandit ultrices. Proin elit nulla, viverra id suscipit quis, tristique a dolor. 
                    Sed dapibus, orci ac luctus tincidunt, massa erat porttitor odio, non imperdiet dui risus et elit.
                    Information overload Vivamus dictum ultrices tortor. Ut imperdiet, enim in suscipit dignissim, 
                    mauris massa pellentesque augue, quis ultricies sem tortor et velit.`

export let posts = observable(new Map([
    [Post.getId(), new Post('Elixir vs Python', 'April 5 2021', bodyExample, ['Progamming', 'py', 'ex'])],
    [Post.getId(), new Post('Golang ', 'June 15 2021', '',['Progamming', 'go'])],
    [Post.getId(), new Post('JS and React', 'April 5 2021', bodyExample,['Progamming', 'JavaScript', 'js'])],
    [Post.getId(), new Post('Flutter vs React', 'April 5 2021', bodyExample,['Progamming', 'JavaScript', 'Dart'])],
]))

export default Post;