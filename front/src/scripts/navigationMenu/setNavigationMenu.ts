import {HTML_SELECTORS} from "../HTML_SELECTORS"
import {addScrollEventListener} from "../addScrollEventListener"

export function setNavigationMenu() {
    setLevelNavOne()
}

function setLevelNavOne() {
    const CURRENT_SECTION_CLASSNAME = "active"

    const LEVEL_ON_NAVIGATION_ELEMENTS = document.querySelectorAll(`${HTML_SELECTORS.NAVIGATION_MENU} > li > a`)

    const currentTitlePage = document.querySelector("h1")

    if(currentTitlePage !== null){
        for(const level1MenuNavigationElement of LEVEL_ON_NAVIGATION_ELEMENTS) {
            if(level1MenuNavigationElement.innerHTML === currentTitlePage.innerHTML) {
                level1MenuNavigationElement.classList.add(CURRENT_SECTION_CLASSNAME)
            }
        }
    }
}
