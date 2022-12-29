package NeuralCellularAutomata;

import NeuralCellularAutomata.layer.Layer;
import NeuralCellularAutomata.layer.MainLayer;
import NeuralCellularAutomata.model.Cell;
import de.inetsoftware.jwebassembly.api.annotation.Export;
import de.inetsoftware.jwebassembly.web.dom.Document;
import de.inetsoftware.jwebassembly.web.dom.HTMLElement;
import de.inetsoftware.jwebassembly.web.dom.Text;
import de.inetsoftware.jwebassembly.web.dom.Window;

import java.awt.image.BufferedImage;

public class Main {

    public static Layer LAYER;
    @Export
    public static void main() {
        Document document = Window.document();
        HTMLElement div = document.createElement("div");
        Text text = document.createTextNode("Hello World, this text come from WebAssembly.");
        div.appendChild( text );
        document.body().appendChild( div );
    }

    @Export
    public static void initialize() {
        LAYER = new MainLayer();
    }

    @Export
    public static int[][] getFrame() {
        return LAYER.update();
    }
}
