const wrapper = document.querySelector('.wrapper');
const checkbox = document.querySelector('#checkbox');
const first = document.querySelector('.first');
asdasds
const observer = new ResizeObserver(entries => {
    entries.forEach(entry => {
        const { height: containerHeight } = entry.contentRect;
        const { borderTop: containerTopBorder, borderBottom: containerBottomBorder } = getComputedStyle(entry.target);
        let { height: childHeight, marginTop: childTopMargin, marginBottom: childBottomMargin } = getComputedStyle(first);
        childHeight = getWithoutPxSuffix(childHeight);

        console.log(`Container height: ${containerHeight}\nChild height: ${childHeight}`);
        if(containerHeight > childHeight)
            wrapper.classList.add('flex-centered');
        else
            wrapper.classList.remove('flex-centered');
    })
})

const mobs = new MutationObserver(mutations => {
    mutations.forEach(m => {
        console.log(`Element got it's ${m.attributeName} attribute changed from '${m.oldValue}' to '${m.target.getAttribute(m.attributeName)}'.`);
    })
})

observer.observe(wrapper, { box: 'border-box' });
mobs.observe(first, { attributeFilter: ['class'], attributeOldValue: true });

function getWithoutPxSuffix(value){
    return value.substring(0, value.length - 2);
}

function changeToGreen(){
    first.classList.remove('blue');
    first.classList.add('green');
}
function changeToBlue(){
    first.classList.remove('green');
    first.classList.add('blue');
}