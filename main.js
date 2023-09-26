const pTitle = document.getElementById("p-title")
const pBrief = document.getElementById("p-brief")
const pLink = document.getElementById("p-link")
const pImg = document.getElementById("p-img")
const prvBtn = document.querySelector(".prev-btn")
const nextBtn = document.querySelector(".next-btn")
const frontendStacksBtn = document.querySelector(".frontend")
const uiUxBtn = document.querySelector(".ui-ux")
const stack = document.querySelector(".stack")
const design = document.querySelector(".design")


const project = [
    {
        imgLink: '/imgs/p4.png',
        title: 'Drag and drop gallery App',
        brief: 'Allowing users to rearrange images and drap&drop',
        link: 'https://dribbble.com/shots/17236464-Neobank-Landingpage-Hero/attachments/12341718?mode=media'
    },
    
    {
        imgLink: '/imgs/p1.jpeg',
        title: 'Fintech App',
        brief: 'A Ui design that push the cores of the brand',
        link: 'https://dribbble.com/shots/17236464-Neobank-Landingpage-Hero/attachments/12341718?mode=media'
    },

    
]

let currentIndex = 0;

const swipeThrough = (btn) => {
    if(btn === 'next') {
        if(currentIndex >= project.length) return
        currentIndex++
    } else if(btn === 'prev') {
        if(currentIndex <= 0) return
        currentIndex--
    }

    console.log(currentIndex)
    
    pTitle.textContent = project[currentIndex].title
    pBrief.textContent = project[currentIndex].brief
    pImg.src = project[currentIndex].imgLink
}


prvBtn.addEventListener("click", () => {
    console.log("prv")
    swipeThrough('prev')
})
nextBtn.addEventListener("click", () => swipeThrough('next'))

const frontendUiux = (type) => {
    const dom = (aBtn, aDetails, dBtn, dDetails) => {
        aBtn.classList.add("current")
        dBtn.classList.remove("current")

        aDetails.classList.remove("display")
        dDetails.classList.add("display")
    }

    if(type === "stack") {
        dom(frontendStacksBtn, stack, uiUxBtn, design)
    } else {
        dom(uiUxBtn, design, frontendStacksBtn, stack)
    }
}

frontendStacksBtn.addEventListener("click", () => frontendUiux("stack"))
uiUxBtn.addEventListener("click", () => frontendUiux("design"))
