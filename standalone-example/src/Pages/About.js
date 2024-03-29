import React from 'react'

class About extends React.PureComponent {
    constructor() {
        super();

    }

    render() {
        return (
            <section class="panel spotlight left">
                <div class="content span-5">
                    <h2 class="major">Magna amet tempus</h2>
                    <p>Mauris a cursus velit. Nunc lacinia sollicitudin egestas bibendum, magna dui bibendum ex, sagittis commodo enim risus sed magna nulla. Vestibulum ut consequat velit. Curabitur vitae libero lorem. Quisque iaculis porttitor blandit. Nullam quis sagittis maximus. Sed vel nibh libero. Mauris et lorem pharetra massa lorem turpis congue pulvinar.</p>
                </div>
                <div class="image filtered tinted" data-position="top right">
                    <img src="images/pic03.jpg" alt="" />
                </div>
            </section>
        )
    }
}

export default About;