const pTitle = document.getElementById("p-title")
const pBrief = document.getElementById("p-brief")
const pLink = document.getElementById("p-link")
const pImg = document.getElementById("p-img")
const prvBtn = document.querySelector(".prev-btn")
const nextBtn = document.querySelector(".next-btn")

const project = [
    {
        imgLink: '/imgs/p1.jpeg',
        title: 'Fintech App',
        brief: 'A Ui design that push the cores of the brand',
        link: 'https://dribbble.com/shots/17236464-Neobank-Landingpage-Hero/attachments/12341718?mode=media'
    },

    {
        imgLink: '/imgs/p4.png',
        title: 'Drag and drop gallery App',
        brief: 'Allowing users to rearrange images and drap&drop',
        link: 'https://dribbble.com/shots/17236464-Neobank-Landingpage-Hero/attachments/12341718?mode=media'
    }
]

let currentIndex = 0;

const swipeThrough = (btn) => {
    if(btn === 'next') {
        currentIndex++
        if(currentIndex >= project.length) return
    } else if(btn === 'prev') {
        currentIndex--
        if(currentIndex <= 0) return
    }
    
    pTitle.textContent = project[currentIndex].title
    pBrief.textContent = project[currentIndex].brief
    pImg.src = project[currentIndex].imgLink
}

swipeThrough('next')

prvBtn.addEventListener("click", () => {
    console.log("prv")
    swipeThrough('prev')
})
nextBtn.addEventListener("click", () => swipeThrough('next'))
