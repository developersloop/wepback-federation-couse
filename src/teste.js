import { saudacao } from "./saudacao";
//import '../src/index.css'
import '../src/index.scss'
import Screen from './image'
import $ from 'jquery'
import Element from '../src/template.html'
import people from './people.json'
import 'bootstrap'
let img = document.createElement('img')
img.src =  Screen
img.width = 500
img.height = 500


document.body.appendChild(img)
document.body.innerHTML = Element

const array = [1,3,4,5]
console.log([...array])
console.log(saudacao("vitor"))
console.log(people)
console.log(VERSION)
console.log(process.env.HOST)
console.log($('body'))
