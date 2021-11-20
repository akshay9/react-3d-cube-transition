import React from 'react'

class Intro extends React.PureComponent {
    constructor() {
        super();

    }

    render() {
        return (
            <section class="panel spotlight right" id="first">
                <div class="content span-7">
                    <h2 class="major">Sed etiam aenean</h2>
                    <p>Mauris et ligula arcu. Proin dapibus convallis accumsan. Lorem maximus hendrerit orci, sit amet elementum massa hendrerit sed. Donec et ullamcorper ligula. Suspendisse amet potenti. Ut pretium libero eleifend euismod sed tristique. Quisque dictum magna risus, id ultricies justo sagittis vitae. Sed id odio tempor, porttitor elit amet, gravida hendrerit fringilla lorem ipsum dolor.</p>
                </div>
                <div class="image filtered tinted" data-position="top left">
                    <img src="images/pic02.jpg" alt="" />
                </div>
            </section>
        )
    }
}

export default Intro;