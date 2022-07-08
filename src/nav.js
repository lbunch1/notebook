
export default function navigation(){
    const nav = document.querySelector(".autolink");
    const itemAnchor = document.querySelectorAll(".item");
    const toTop = document.querySelector(".to_top");

    const createItemLink = (id, text) => {
        const listItem = document.createElement('li');
        const link = document.createElement('a');
        link.setAttribute("href", `#${id}`);
        link.innerText = text;
        listItem.appendChild(link);
        nav.appendChild(listItem);
    };

    itemAnchor.forEach((item) => {
        createItemLink(item.id, item.innerText)
    });

    window.addEventListener('scroll', ()=> {
        if (window.scrollY > 10) {
            toTop.style.bottom = '20px';
        } else {
            toTop.style.bottom = '-80px';
        }
    })
}

