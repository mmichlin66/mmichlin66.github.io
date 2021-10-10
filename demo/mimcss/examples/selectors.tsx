// This example demonstrates how to use methods of StyleDefinition class to define style
// rules with different selectors.

import * as mim from "mimbl";
import * as css from "mimcss"



class MyStyles extends css.StyleDefinition
{
    // all p elements will have 16px padding, 0 margin and bold font
    p = this.$tag("p", { padding: 16, margin: 0, fontWeight: "bold" })

    // all elements that have CSS class whose name is defined by the "byClass" property
    // will be white
    byClass = this.$class({ backgroundColor: "white" })

    // all <p> elements that have ID whose name is defined by the "byID" property
    // will be beige
    byID = this.$id({ backgroundColor: "beige" })

    // all <p> elements that have the title attribute will be cyan (unless overridden)
    byTitlePresence = this.$attr( "p", "title", { backgroundColor: "cyan" })

    // all <p> elements that have the title attribute with the exact value of "tooltip"
    // will be lightpink
    byTitleValue = this.$attr( "p", { title: "tooltip" }, { backgroundColor: "lightpink" })

    // all <p> elements that have the title attribute, which starts with "https://",
    // will be orange
    byTitleStart = this.$attr( "p", {
        title: { value: "https://", op: css.AttrSelectorOperation.StartsWith }
    }, { backgroundColor: "orange" })

    // all <p> elements, whcih are the last in the list of <p> elements, will be lightgreen
    lastP = this.$style( "p", {
        ":last-of-type": {backgroundColor: "lightgreen"}
    })
}



class Selectors extends mim.Component
{
    private styles: MyStyles;

    willMount()
    {
        this.styles = css.activate( MyStyles);
    }

    willUnmount()
    {
        css.deactivate( this.styles);
    }

    // Render our component's HTML content
	public render()
	{
		return <div>
            <p class={this.styles.byClass}>
                This element is selected using class selector
            </p>
            <p id={this.styles.byID}>
                This element is selected using ID selector
            </p>
            <p title="this element has a tooltip">
                This element is selected using simple attribute selector
            </p>
            <p title="tooltip">
                This element is selected using complex attribute selector
            </p>
            <p title="https://github.com">
                This element is selected using yet more complex attribute selector
            </p>
            <p title="https://github.com">
                This element is selected because it is the last element of type 'p'
            </p>
       </div>
    }
}



// Mount our component under the body element.
mim.mount( new Selectors());


