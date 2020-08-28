﻿// This example is taken from the article of Dan Wilson on the css-tricks.com Web site:
// https://css-tricks.com/making-custom-properties-css-variables-dynamic/.
// It demonstrates how CSS custom properties are defined on global level and redefined under
// lower-level elements. It also demonstrates how CSS custom property values can be directly
// set from JavaScript.


import * as mim from "mimbl";
import * as css from "mimcss"


// Define styles for our component
class MyStyles extends css.StyleDefinition
{
    // define custom properties whose value will be changed by user
    translate = css.$var( "CssLength", 0)
    scale = css.$var( "scale", 1)
    rotate = css.$var( "rotate", 0)

    // define custom properties which will be defined differently under different elements
    hue = css.$var( "CssAngle")
    duration = css.$var( "CssTime")

    mover = css.$class({
        // define propeties common for all "movers"
        width: "15vmin",
        height: "15vmin",
        borderRadius: "10%",

        // define transform using the custom properties whose values rae controled by user
        transform: [
            css.translateX( this.translate),
            css.scale( this.scale),
            css.rotate( this.rotate)
        ],

        // redefine custom properties to give each block a different color and transition duration
        ":nth-of-type": [
            [1, { "--": [ [this.hue, 120], [this.duration, 2000] ] }],
            [2, { "--": [ [this.hue, 0], [this.duration, 3000] ] }],
            [3, { "--": [ [this.hue, 40], [this.duration, 4000] ] }],
            [4, { "--": [ [this.hue, 200], [this.duration, 5000] ] }],
        ],

        // define transition using the custom property for duration
        transition: { property: "transform", duration: this.duration, func: "linear" },
        willChange: "transform",

        // define background color using the custom property for HSL's hue
        backgroundColor: css.hsl( this.hue, 90, 52),
    })

    // general styles for structure and controls
    container = css.$id({
        height: "100vh",
        overflow: "hidden",
        background: css.hsl( 220, 12, 16),
        padding: 16
    })

    controls = css.$id({
        position: "absolute",
        right: "1rem",
        bottom: "50%",
        transform: css.translateY( "50%"),
        display: "flex",
        flexDirection: "column",
    })

    // using array so that we don't have to give names to rules whose names we don't use
    structure = [
        css.$media( "screen and (orientation: portrait)",
            class extends css.StyleDefinition
            {
                controls = css.$id({
                    right: "50%",
                    bottom: 0,
                    transform: css.translateX("50%")
                })
            }
        ),

        css.$style( "input", {
            width: "12rem",
            marginBottom: "1rem"
        }),

        css.$style( "label", {
            display: "flex",
            justifyContent: "space-between",
            color: "white",
            fontSize: ".85rem",
            fontFamily: "system-ui, -apple-system, sans-serif"
        })
    ]
}

// activate our styles
let styles = css.activate( MyStyles);



// Define component
class MyComponent extends mim.Component
{
	public render()
	{
		return <div id={styles.container}>
            <div class={styles.mover}></div>
            <div class={styles.mover}></div>
            <div class={styles.mover}></div>
            <div class={styles.mover}></div>

            <div id={styles.controls}>
                <label for="tx"><span>0</span>translateX<span>80</span></label>
                <input type="range" id="tx" min="0" max="80" value="0" input={this.onTranslateChanged} />
                <label for="scale"><span>0</span>scale<span>2</span></label>
                <input type="range" id="scale" min="0" max="2" step={.05} value="1" input={this.onScaleChanged} />
                <label for="deg"><span>-360</span>rotate<span>360</span></label>
                <input type="range" id="deg" min="-360" max="360" value="0" input={this.onDegChanged} />
            </div>
        </div>
    }

    private onTranslateChanged( e: Event)
    {
        styles.translate.setValue( (e.currentTarget as HTMLInputElement).value + "vw")
    }

    private onScaleChanged( e: Event)
    {
        styles.scale.setValue( parseFloat((e.currentTarget as HTMLInputElement).value))
    }

    private onDegChanged( e: Event)
    {
        styles.rotate.setValue( (e.currentTarget as HTMLInputElement).value + "deg")
    }
}



// Mount our component under the body element.
mim.mount( new MyComponent());
