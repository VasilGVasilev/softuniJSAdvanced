const section = document.getElementById('homePage');

export function showHome(context){
    context.showSection(section);
} //dep Injection -> modules doesnt import anything, it awaits context to come as an argument from where the showHome function is called;