import './style.scss'
import Slider from '@/app/components/slider/slider.tsx'
import MenuOfLocations from '@/app/components/menu-of-locations/page.tsx'
export default function Home(){
    return (
        <>
        <div className="search-card">
            <div className="search-header">Find place next to you</div>
                <button className="button-blue">Find place</button>
                <Slider />
            <div className="filter-label">Place</div>
            <MenuOfLocations />
            <div className="search-options">
                <label className="open-now-checkbox">Open now</label>
                <div className="toggle-container">
                    <input type="checkbox" className="toggle-input" id="toggle" />
                    <label className="toggle-slider" for="toggle"/>
                </div>
            </div>
            <div className="buttons">
                <button className="search-button">Search</button>
                <button className="reset-button">Reset</button>
            </div>
        </div>
    </>
    )
}