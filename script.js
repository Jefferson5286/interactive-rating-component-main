const buttons = []

for (let i = 1; i <= 5; i++) {
    buttons.push(document.querySelector(`#button${i}`))
}

const submit_button = document.querySelector('#submit-button')

submit_button.addEventListener('mouseover', () => {
    submit_button.style.backgroundColor = 'hsl(24,100%,59%)'
})
submit_button.addEventListener('mouseout', () => {
    submit_button.style.backgroundColor = 'hsl(25, 97%, 53%)'
})
submit_button.addEventListener('mousedown', () => {
    submit_button.style.backgroundColor = 'hsl(26,80%,37%)'
})
submit_button.addEventListener('mouseup', () => {
    submit_button.style.backgroundColor = 'hsl(25, 97%, 53%)'
})

for (let button in buttons) {
    buttons[button].addEventListener('mouseover', () => {
        buttons[button]
            .style.height = buttons[button]
            .style.width = '50px'
    })
    buttons[button].addEventListener('mouseout', () => {
        buttons[button]
            .style.height = buttons[button]
            .style.width = '40px'
    })
    buttons[button].addEventListener('click', () => {
        let enable = buttons.slice(0, parseInt(button) + 1)
        let disable = buttons.slice(parseInt(button) + 1, 5)

        for (let b in enable) enable[b].style.backgroundColor = '#405664'
        for (let b in disable) disable[b].style.backgroundColor = '#262F38'
    })
}