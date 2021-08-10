import React from "react" 

const Menu = (props) => {
    return (
        <section className='section' id='menus'>
        <div className="container">
            <div className="columns is-centered">
                <div className="column is-10 content">
                    <h2 className="title">Menu</h2>
                    <p>{props.menuParagraph}</p>
                    <p>{props.menuParagraph2}</p>
                    <a>Breakfast</a>
              <a>Brunch</a>
              <a>All Day</a>
                </div>
            </div>
        </div>        
            </section>
    )
}
export default Menu