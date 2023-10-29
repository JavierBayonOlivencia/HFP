if (window.location.href.indexOf("index") > -1 || window.location.href.indexOf("/HFP") > -1) {
    const navIcons = document.querySelector(".icons");
    const menu = document.getElementById("bars");
    const close = document.getElementById("xmark");
    const linkList = document.querySelector(".link-list")
    const links = document.querySelectorAll(".link");
    const sections = document.querySelectorAll("section");

    menu.classList.add("active")

    navIcons.addEventListener("click", () => {
        navToggle();
    })

    function navToggle() {
        if (menu.classList[3]) {
            menu.classList.remove("active");
            close.classList.add("active");
            linkList.classList.add("show-list");
        } else {
            menu.classList.add("active");
            close.classList.remove("active");
            linkList.classList.remove("show-list");
        }
    }


    window.onscroll = () => {
        sections.forEach(section => {
            let top = window.scrollY;
            let offset = section.offsetTop - 150;
            let height = section.offsetHeight;
            let id = section.getAttribute("id");

            if (top >= offset && top < offset + height) {
                links.forEach(link => {
                    link.classList.remove("active-page")
                    document.querySelector(".link-list li a[href*=" + id + "]").classList.add("active-page");
                })
            }
        })
    }
}

if (window.location.href.indexOf("pull") > -1 || window.location.href.indexOf("push") > -1 || window.location.href.indexOf("leg") > -1) {
    const cards = document.querySelectorAll(".info-cards");
    const cardDetails = document.querySelectorAll("img");
    const contentInfo = document.querySelector(".content-info");
    
    cards.forEach(card => {
        card.addEventListener("mouseover", () => {
            const id = card.dataset.id;

            cardDetails.forEach(cardDetail => {
                const detailID = cardDetail.dataset.id;

                contentInfo.addEventListener("mouseout", () => {
                    cardDetail.classList.remove("scale-img")
                })
                if (id === detailID) {
                    cardDetail.classList.add("scale-img")
                } else {
                    cardDetail.classList.remove("scale-img")
                }
            })
        })
    })
}
