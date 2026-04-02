const filters = {
    brightness: {
        value: 100,
        min: 0,
        max: 200,
        unit: '%'
    },
    contrast: {
        value: 100,
        min: 0,
        max: 200,
        unit: '%'
    },
    saturation: {
        value: 100,
        min: 0,
        max: 200,
        unit: '%'
    },
    exposure: {
        value: 100,
        min: 0,
        max: 200,
        unit: '%'
    },
    hueRotation: {
        value: 0,
        min: 0,
        max: 360,
        unit: 'deg'
    },
    blur: {
        value: 0,
        min: 0,
        max: 20,
        unit: 'px'
    },    
    grayscale: {
        value: 0,
        min: 0,
        max: 200,
        unit: '%'
    },
    sepia: {
        value: 0,
        min: 0,
        max: 200,
        unit: '%'
    },
    invert: {
        value: 0,
        min: 0,
        max: 200,
        unit: '%'
    },
    opacity: {
        value: 100,
        min: 0,
        max: 200,
        unit: '%'
    }
}

const filtersConatiner = document.querySelector('.filters')

const imageCanvas = document.querySelector('#image-canvas')
const imageUpload = document.querySelector('#upload')
const canvasCtx = imageCanvas.getContext('2d')

function createFilterElement(name, unit = "%", value, min, max){
    const div = document.createElement('div')
    div.classList.add('filter')

    const input = document.createElement('input')
    input.type = 'range'
    input.name = name
    input.id = name
    input.min = min
    input.max = max
    input.value = value
    input.unit = unit

    const p = document.createElement('p')
    p.innerText = name

    div.appendChild(p)
    div.appendChild(input)

    return div
}

Object.keys(filters).forEach(key=> {
    const filterElement = createFilterElement(key, filters[key].unit, filters[key].value, filters[key].min, filters[key].max)
    filtersConatiner.appendChild(filterElement)  
})

imageUpload.addEventListener('change', (event)=> {

    const file = event.target.files[0]
    const imagePlaceholder = document.querySelector('.placeholder')
    imagePlaceholder.style.display = 'none'

    const img = new Image()
    img.src = URL.createObjectURL(file)

    img.onload = () => {
        imageCanvas.width = img.width
        imageCanvas.height = img.height
        canvasCtx.drawImage(img, 0, 0, imageCanvas.width, imageCanvas.height)
    }

})