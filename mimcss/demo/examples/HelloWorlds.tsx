import * as mim from "mimbl";
import * as css from "mimcss"


// Define styles for our component
class MyStyles extends css.StyleDefinition
{
    hello = css.$class({
        // 20px - "px" is the default unit for integer length values
        fontSize: 20,

        // "bold" is one of the keywords for the font-weight property
        fontWeight: "bold",

        // 0.75em - "em" is the default unit for floating number length values
        padding: 0.75,

        // css.Color object has properties for all built in colors
        color: css.Colors.dodgerblue,

        // tuple is used for the border property. Color can be provided as a keyword.
        border: [2, "inset", "darkblue"],

        // 8px
        borderRadius: 8,
    })
}




// Define component that displays "Hello World!"
class HelloWorld extends mim.Component
{
    // activated styles
    private styles: MyStyles;

    public willMount()
    {
        // activate our styles - that is insert them into the DOM
        this.styles = css.activate( MyStyles);
    }

    public willUnmount()
    {
        // deactivate our styles - that is remove them from the DOM
        css.deactivate( this.styles);
    }

    // Render our component's HTML content
	public render()
	{
		return <div class={this.styles.hello}>
            Hellow World!
        </div>
	}
}



// Mount our component under the body element.
mim.mount( new HelloWorld());


