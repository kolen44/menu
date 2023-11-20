'use client'
import '@/styles/menu/style.scss'
import React,{ useState } from 'react'
import Slider from '@/app/components/slider/slider.tsx'

export default function MenuOfLocations(){
	let [styles,setStyles] = useState(false)

	return (
			<ul>
			<li><div className="submenu-link" onMouseEnter ={()=>setStyles(!styles)} onMouseLeave = {()=> setStyles(false) }>Choose a location</div>
	          <ul onMouseEnter ={()=>setStyles(!styles)} onMouseLeave = {()=> setStyles(false) } className={`submenu ${styles? 'trueActive' : 'falseActive'}`}>
	            <li><a href="">1</a></li>
	            <li><a href="">2</a></li>
	            <li><a href="">3</a></li>
	          </ul>
	        </li>
	        </ul>
	)
}