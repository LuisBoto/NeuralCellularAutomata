package NeuralCellularAutomata.global;

public class Configuration {
    public static final int CANVAS_WIDTH = 1920;
    public static final int CANVAS_HEIGHT = 1080;
    public static final int COLUMN_NUMBER = 320;
    public static final int ROW_NUMBER = 180;

    public static Double[][] KERNEL = {
            {-0.156,    0.207,  0.476},
            {0.643,    -0.153, -0.252},
            {-0.6,      0.313, -0.982}
    };

}
