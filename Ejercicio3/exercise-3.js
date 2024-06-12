//1.1 Basandote en el array siguiente, crea una lista ul > li dinámicamente en el html que imprima cada uno de los paises.
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela']

const ul = document.createElement('ul')

for (const country of countries) {
  const li = document.createElement('li')
  li.textContent = country
  ul.appendChild(li)
}

document.body.appendChild(ul)

//1.2 Elimina el elemento que tenga la clase .fn-remove-me.
const eliminar = document.querySelector('.fn-remove-me')
eliminar.remove()

//1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos en el div de html con el atributo data-function="printHere".
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola']
const listCars = document.createElement('ul')

for (const car of cars) {
  const li = document.createElement('li')
  li.textContent = car
  li.setAttribute('data-function', 'printHere')
  listCars.appendChild(li)
}

document.body.appendChild(listCars)

//1.4 Crea dinamicamente en el html una serie de divs que contenga un elemento h4 para el titulo y otro elemento img para la imagen.
const places = [
  {
    title: 'Photo of the Day #1',
    imgUrl: 'https://picsum.photos/300/200?random=1'
  },
  {
    title: 'Photo of the Day #2',
    imgUrl: 'https://picsum.photos/300/200?random=2'
  },
  {
    title: 'Photo of the Day #3',
    imgUrl: 'https://picsum.photos/300/200?random=3'
  },
  {
    title: 'Photo of the Day #4',
    imgUrl: 'https://picsum.photos/300/200?random=4'
  },
  {
    title: 'Photo of the Day #5',
    imgUrl: 'https://picsum.photos/300/200?random=5'
  }
]
for (const place of places) {
  const div = document.createElement('div')
  const title = document.createElement('h4')
  const img = document.createElement('img')

  title.textContent = place.title
  img.src = place.imgUrl

  div.appendChild(title)
  div.appendChild(img)
  document.body.appendChild(div)
}

//1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último elemento de la serie de divs.
const buttonDelete = document.createElement('button')
buttonDelete.textContent = 'DELETE LAST'

function eliminarFN() {
  const allDivsToRemove = document.querySelectorAll('div')
  allDivsToRemove[allDivsToRemove.length - 1].remove()
}

buttonDelete.addEventListener('click', eliminarFN)
document.body.appendChild(buttonDelete)

//1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los divs que elimine ese mismo elemento del html.
const allDivsToBeDeleted = document.querySelectorAll('div')

for (const div of allDivsToBeDeleted) {
  const button = document.createElement('button')
  button.textContent = 'DELETE'
  button.addEventListener('click', (e) => e.target.parentElement.remove())
  div.appendChild(button)
}
