import React from 'react'

class Features extends React.PureComponent {
    constructor() {
        super();

    }

    render() {
        return (
            <section class="panel color1">
                <div class="intro joined">
                    <h2 class="major">Amet lorem</h2>
                    <p>Sed vel nibh libero. Mauris et lorem pharetra massa lorem turpis congue pulvinar. Vivamus sed feugiat finibus. Duis amet bibendum amet sed. Duis mauris ex, dapibus sed ligula tempus volutpat magna etiam.</p>
                </div>
                <div class="inner">
                    <ul class="grid-icons three connected">
                        <li><span class="icon fa-gem"><span class="label">Lorem</span></span></li>
                        <li><span class="icon solid fa-camera-retro"><span class="label">Ipsum</span></span></li>
                        <li><span class="icon solid fa-cog"><span class="label">Dolor</span></span></li>
                        <li><span class="icon solid fa-paper-plane"><span class="label">Sit</span></span></li>
                        <li><span class="icon solid fa-chart-bar"><span class="label">Amet</span></span></li>
                        <li><span class="icon solid fa-code"><span class="label">Nullam</span></span></li>
                    </ul>
                </div>
            </section>
        )
    }
}

export default Features;