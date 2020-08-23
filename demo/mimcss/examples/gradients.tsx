﻿import * as mim from "mimbl";
import * as css from "mimcss"


class MyStyles extends css.StyleDefinition
{
    // example of linear gradient
	linearGradient = css.$class({
		width: 200,
		height: 200,
        backgroundImage: css.gradient.repeatingLinear.to(15)( css.Colors.lightcyan,
            css.Colors.orange, [30], [css.Colors.lightcyan, 50])
	})

    // example of radial gradient
	radialGradient = css.$class({
		width: 200,
		height: 200,
		backgroundImage: css.gradient.repeatingRadial.circle().extent("farthest-corner").at([5.5,3.3])(
						css.Colors.lightcyan, css.Colors.orange, [30], [css.Colors.lightcyan, 50])
	})

    // example of conic gradient
	conic = css.$class({
		width: 200,
		height: 200,
		backgroundImage: css.gradient.conic.from(45).at("70%")( css.Colors.red, css.Colors.orange,
			css.Colors.yellow, css.Colors.green, css.Colors.lightblue, css.Colors.blue, css.Colors.violet, css.Colors.red)
    })

    // another example of conic gradient
	checkerboard = css.$class({
		width: 200,
		height: 200,
		background: {
            image: css.gradient.conic( ["white", 0.25], ["black", 0.25, 0.5], ["white", 0.5, 0.75], ["black", 0.75]),
            position: ["top", "left"],
            size: ["25%", "25%"],
            repeat: "repeat"
		},
		border: [1, "solid"]
    })

    // helper class for layout
	hbox = css.$class({
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 16,
	})
}

// activate our styles
let styles = css.activate( MyStyles);



class MyComponent extends mim.Component
{
	public render()
	{
		return <div>
			<div class={styles.hbox}>
				<div class={styles.linearGradient} />
				<div class={styles.radialGradient} />
				<div class={styles.conic} />
				<div class={styles.checkerboard} />
			</div>
		</div>
	}
}



// mount our component under the body element.
mim.mount( new MyComponent());


